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
    <div className="fixed opacity-100 -z-50 top-0 left-0 w-screen h-screen object-cover">
      <div className="absolute top-0 left-0 w-full h-full bg-primary opacity-0"></div>
      <video
        ref={videoRef}
        className="w-full h-full object-fill"
        autoPlay
        loop
        muted
      >
        <source src="/videos/bg.mp4" type="video/mp4"></source>
      </video>
    </div>
  );
}
