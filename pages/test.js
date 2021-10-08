import React, { useState, useEffect } from "react";
import Webcam from "react-webcam";
import { Camera, CameraOptions } from "@mediapipe/camera_utils";
import { POSE_LANDMARKS, Pose, VERSION } from "@mediapipe/pose";
import { drawConnectors } from "@mediapipe/drawing_utils";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

function Testcam() {
  const webcamRef = React.useRef(null);
  const canvasReference = React.useRef(null);
  const [cameraReady, setCameraReady] = useState(false);
  let canvasCtx;
  let camera;

  useEffect(() => {
    const options = {
      locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/pose@${VERSION}/${file}`;
      },
    };
    const pose = new Pose(options);

    pose.setOptions({
      maxNumFaces: 1,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });
    pose.onResults(onResults);

    console.log("canvasReference", canvasReference);
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null
    ) {
      camera = new Camera(webcamRef.current.video, {
        onFrame: async () => {
          await pose.send({ image: webcamRef.current.video });
        },
        width: 1280,
        height: 720,
      });
      camera.start();
    }
  }, [cameraReady]);

  function onResults(results) {
    console.log("results");
    canvasCtx.save();
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    canvasCtx.drawImage(
      results.image,
      0,
      0,
      canvasElement.width,
      canvasElement.height
    );
    if (results.multiFaceLandmarks) {
      for (const landmarks of results.multiFaceLandmarks) {
        drawConnectors(canvasCtx, landmarks, POSE_LANDMARKS, {
          color: "#C0C0C070",
          lineWidth: 1,
        });
      }
    }
    canvasCtx.restore();
  }

  return (
    <div className="camdect">
      <Webcam
        audio={false}
        height={720}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}
        onUserMedia={() => {
          console.log("webcamRef.current", webcamRef.current);
          setCameraReady(true);
        }}
      />
      <canvas
        ref={canvasReference}
        style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
          zindex: 9,
          width: 1280,
          height: 720,
        }}
      />
    </div>
  );
}

export default Testcam;
