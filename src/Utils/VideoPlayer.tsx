'use client'

import { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
type VideoJsPlayer = ReturnType<typeof videojs>;

export default function VideoPlayer({
  src,
  poster,
}: {
  src: string;
  poster?: string;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const playerRef = useRef<VideoJsPlayer | null>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    if (!playerRef.current) {
      playerRef.current = videojs(videoRef.current, {
        controls: true,
        autoplay: false,
        preload: "auto",
        poster,
        fluid: true,
        responsive:true
      });
    } else {
      playerRef.current.src({ src, type: "video/mp4" });
      playerRef.current.poster(poster || "");
    }

  }, [src, poster]);

  useEffect(() => {
    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, []);

  return (
    <div data-vjs-player>
      <video
        ref={videoRef}
        className="video-js vjs-big-play-centered w-full rounded-lg overflow-hidden"
      />
    </div>
  );
}
