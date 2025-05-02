"use client";

import { useEffect, useRef } from "react";

export default function BackgroundVideo() {

    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(()=>{
        if(videoRef.current){
            videoRef.current.playbackRate = 0.5;
            return () => {
                if(videoRef.current)
                    videoRef.current.playbackRate = 1;
            }
        }
    },[])

    return <video ref={videoRef} className="absolute opacity-100 -z-50 top-0 left-0 w-screen h-full object-cover" autoPlay loop muted>
      <source src="/videos/bg.mp4" type="video/mp4"></source>
     </video>;
}