from pynput.keyboard import Key, Controller
import cv2
import mediapipe as mp
import numpy as np
import math

mp_drawing = mp.solutions.drawing_utils
mp_drawing_styles = mp.solutions.drawing_styles
mp_pose = mp.solutions.pose

keyboard = Controller()

prev_center_mass = None
frame_count = 0
y_line = None


def unnormalize(normalized_x: float, normalized_y: float, image_width: int, image_height: int):
    x_px = min(math.floor(normalized_x * image_width), image_width - 1)
    y_px = min(math.floor(normalized_y * image_height), image_height - 1)
    return x_px, y_px


def press(key):
    keyboard.press(key)
    keyboard.release(key)


draw_line = False
cap = cv2.VideoCapture(0)

width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
draw_line = np.ones((height, width)) * 255

with mp_pose.Pose(min_detection_confidence=0.5, min_tracking_confidence=0.5) as pose:
    while cap.isOpened():
        success, image = cap.read()
        if not success:
            print("Ignoring empty camera frame.")
            continue

        # Flip the image horizontally for a later selfie-view display, and convert
        # the BGR image to RGB.
        image = cv2.cvtColor(cv2.flip(image, 1), cv2.COLOR_BGR2RGB)
        image.flags.writeable = False
        results = pose.process(image)

        if results.pose_landmarks:
            LS = results.pose_landmarks.landmark[mp_pose.PoseLandmark.LEFT_SHOULDER]
            RS = results.pose_landmarks.landmark[mp_pose.PoseLandmark.RIGHT_SHOULDER]

            LX = unnormalize(LS.x, LS.y, width, height)
            RX = unnormalize(RS.x, RS.y, width, height)

            center_mass = [(LX[0] + RX[0]) // 2, (LX[1] + RX[1]) // 2]

            # Latency to get the relative motion
            if frame_count > 5:
                if not prev_center_mass:
                    prev_center_mass = center_mass
                else:
                    maybe_print = ""

                    # Controller.exe lol
                    diffX = center_mass[0] - prev_center_mass[0]
                    diffY = center_mass[1] - prev_center_mass[1]

                    # Vertical motion
                    if abs(diffY) > 25:
                        if diffY > 0 and y_line and center_mass[1] > y_line:
                            maybe_print += "down"
                            press(Key.down)
                        elif y_line and center_mass[1] < y_line:
                            maybe_print += "up"
                            press(Key.up)

                    # Horizontal motion
                    elif abs(diffX) > 50:
                        if diffX > 0:
                            maybe_print += "right"
                            press(Key.right)
                        else:
                            maybe_print += "left"
                            press(Key.left)

                    # Printing if movement changes
                    if maybe_print:
                        print("Moving to", maybe_print)
                    else:
                        # Additional space bar movement
                        if (
                            results.pose_landmarks.landmark[
                                mp_pose.PoseLandmark.LEFT_WRIST
                            ].visibility
                            > 0.5
                            and results.pose_landmarks.landmark[
                                mp_pose.PoseLandmark.RIGHT_WRIST
                            ].visibility
                            > 0.5
                        ):
                            press(Key.space)
                            print("Space bar pressed")
                            # Setting Y config line here
                            if draw_line.any():
                                y_line = center_mass[1]

                frame_count = 0

            if frame_count == 0:
                prev_center_mass = center_mass

            frame_count += 1
            if y_line:
                cv2.line(image, (0, y_line), (width, y_line), (0, 255, 0), thickness=2)

            cv2.circle(image, center_mass, 0, (0, 0, 255), 20)

        mp_drawing.draw_landmarks(
            image,
            results.pose_landmarks,
            mp_pose.POSE_CONNECTIONS,
            landmark_drawing_spec=mp_drawing_styles.get_default_pose_landmarks_style(),
        )

        image.flags.writeable = True
        image = cv2.cvtColor(image, cv2.COLOR_RGB2BGR)

        cv2.imshow("Pose detection", image)
        if cv2.waitKey(5) & 0xFF == 27:
            break
cap.release()
