import React, { useState, useEffect } from "react";
import Webcam from "react-webcam";
import { Camera, CameraOptions } from "@mediapipe/camera_utils";
import { drawConnectors } from "@mediapipe/drawing_utils";
import { Pose, VERSION } from "@mediapipe/pose";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

function Testcam() {
  const webcamRef = React.useRef(null);
  const canvasRef = React.useRef(null);
  let camera = null;

  useEffect(() => {
    const pose = new Pose({
      locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/pose@${VERSION}/${file}`;
      },
    });
    pose.setOptions({
      maxNumFaces: 1,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
    });
    pose.onResults(onResults);

    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null
    ) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      camera = new Camera(webcamRef.current.video, {
        onFrame: async () => {
          console.log(webcamRef.current.video);
          await pose.send({ image: webcamRef.current.video });
        },
        width: 1280,
        height: 720,
      });
      camera.start();
    }
  });

  function onResults(results) {
    console.log(results);
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
        ref={canvasRef}
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
