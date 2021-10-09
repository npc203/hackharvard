from pynput.keyboard import Key, Controller
import cv2
import mediapipe as mp

mp_drawing = mp.solutions.drawing_utils
mp_drawing_styles = mp.solutions.drawing_styles
mp_pose = mp.solutions.pose

prevX = None
prevY = None

direction = None
keyboard = Controller()


def press(key):
    keyboard.press(key)
    keyboard.release(key)


# For webcam input:
cap = cv2.VideoCapture(1 + cv2.CAP_DSHOW)
with mp_pose.Pose(min_detection_confidence=0.5, min_tracking_confidence=0.5) as pose:
    while cap.isOpened():
        success, image = cap.read()
        if not success:
            print("Ignoring empty camera frame.")
            # If loading a video, use 'break' instead of 'continue'.
            continue

        # Flip the image horizontally for a later selfie-view display, and convert
        # the BGR image to RGB.
        image = cv2.cvtColor(cv2.flip(image, 1), cv2.COLOR_BGR2RGB)
        image.flags.writeable = False
        results = pose.process(image)
        if results.pose_landmarks:
            LS = results.pose_landmarks.landmark[mp_pose.PoseLandmark.LEFT_SHOULDER].x
            RS = results.pose_landmarks.landmark[mp_pose.PoseLandmark.RIGHT_SHOULDER].x
            if prevX and prevY:
                # print("LEFT",prevX - LS)
                # print("RIGHT",prevY - RS)
                if prevX - LS > 0 and direction != "A":
                    direction = "A"
                    press(Key.left)
                if prevX - LS < 0 and direction != "B":
                    direction = "B"
                    press(Key.right)
                print(direction)
            else:
                prevX = LS
                prevY = RS
        # Draw the pose annotation on the image.
        image.flags.writeable = True
        image = cv2.cvtColor(image, cv2.COLOR_RGB2BGR)
        mp_drawing.draw_landmarks(
            image,
            results.pose_landmarks,
            mp_pose.POSE_CONNECTIONS,
            landmark_drawing_spec=mp_drawing_styles.get_default_pose_landmarks_style(),
        )
        cv2.imshow("Pose detection", image)
        if cv2.waitKey(5) & 0xFF == 27:
            break
cap.release()
