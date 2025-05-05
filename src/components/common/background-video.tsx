"use client";

import { useEffect, useRef } from "react";

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
      return () => {
        if (videoRef.current) videoRef.current.playbackRate = 1;
      };
    }
  }, []);

  return (
    <video
      ref={videoRef}
      className="absolute top-0 left-0 -z-[100] w-screen h-screen object-fill"
      autoPlay
      loop
      muted
    >
      <source src="/videos/bg.mp4" type="video/mp4"></source>
    </video>
  );
}
