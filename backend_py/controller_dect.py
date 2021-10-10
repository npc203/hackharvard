from pynput.keyboard import Key, Controller
import cv2
import mediapipe as mp
import numpy as np

mp_drawing = mp.solutions.drawing_utils
mp_drawing_styles = mp.solutions.drawing_styles
mp_pose = mp.solutions.pose

prevL = None
prevR = None
curr_pos = [0, 1, 0]
direction = None
keyboard = Controller()


def press(key):
    keyboard.press(key)
    keyboard.release(key)


draw_line = False
cap = cv2.VideoCapture(1 + cv2.CAP_DSHOW)
if cap.isOpened():
    width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
    height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
    draw_line = np.ones((height, width)) * 255

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

        # Draw the pose annotation on the image.
        image.flags.writeable = True
        image = cv2.cvtColor(image, cv2.COLOR_RGB2BGR)

        if results.pose_landmarks:
            LS = results.pose_landmarks.landmark[mp_pose.PoseLandmark.LEFT_SHOULDER].x
            RS = results.pose_landmarks.landmark[mp_pose.PoseLandmark.RIGHT_SHOULDER].x
            # print("LEFT", prevL, LS)
            # print("RIGHT", prevR, RS)
            if prevL and prevR:
                if (prevL + prevR) / 2 - (LS + RS) / 2 > 0 and direction != "A":
                    print("Moving Left")
                    direction = "A"
                    press(Key.left)
                if (prevL + prevR) / 2 - (LS + RS) / 2 < 0 and direction != "B":
                    print("Moving Right")
                    direction = "B"
                    press(Key.right)
            else:
                prevL = (LS + RS) / 2
                prevR = (LS + RS) / 2
            # print(direction, prevR, prevL)

            # center_mass = [0, 0]
            # avg_size = len(results.pose_landmarks.landmark)
            # for marker in results.pose_landmarks.landmark:
            #     center_mass[0] += marker.x or 0
            #     center_mass[1] += marker.y or 0

            # center_mass[0] = int(center_mass[0])
            # center_mass[1] = int(center_mass[1])
            # print(center_mass)
            # cv2.circle(image, center_mass, 0, (0, 0, 255), 5)

        mp_drawing.draw_landmarks(
            image,
            results.pose_landmarks,
            mp_pose.POSE_CONNECTIONS,
            landmark_drawing_spec=mp_drawing_styles.get_default_pose_landmarks_style(),
        )
        if draw_line.any():
            coord_x = width // 3
            cv2.line(image, (coord_x, 0), (coord_x, height), (0, 255, 0), thickness=1)
            cv2.line(image, (coord_x * 2, 0), (coord_x * 2, height), (0, 255, 0), thickness=1)
        cv2.imshow("Pose detection", image)
        if cv2.waitKey(5) & 0xFF == 27:
            break
cap.release()
