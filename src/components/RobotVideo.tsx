"use client";

import { useEffect, useRef } from "react";

type RobotVideoProps = {
  src: string;
  speed?: number;
};

export function RobotVideo({ src, speed = 2 }: RobotVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = speed;
    }
  }, [speed]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "2rem 0",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "360px",
          aspectRatio: "9 / 16",
          borderRadius: "16px",
          overflow: "hidden",
          border: "1px solid var(--neutral-alpha-medium)",
          background: "#000",
          boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
        }}
      >
        <video
          ref={videoRef}
          src={src}
          autoPlay
          loop
          playsInline
          controls
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
}
