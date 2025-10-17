'use client'
import { useEffect, useRef, useState } from "react";
import plyr from "plyr";
import "plyr/dist/plyr.css";
import { FaPlay } from "react-icons/fa";
import {UseWideModeContext} from '@/Contexts/Wide_Mode_Context';
export default function VideoPlayer({src,poster,}: {src: string;poster?: string;}) {
  const {setToggleWideMode} = UseWideModeContext()
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!videoRef.current) return;

    const player = new plyr(videoRef.current, {
      controls: ["play", "progress", "current-time", "mute", "volume", "settings", "fullscreen"],
    });

    
    player.on("play", () => setIsPlaying(true));
    player.on("pause", () => setIsPlaying(false));

    
    const button = document.createElement("button");
    button.innerHTML = "🖥️"; 
    button.className = "plyr__controls__item plyr__custom-wide-btn ";
    button.title = "Wide Mode";

    button.addEventListener("click", () => {
      const wrapper = videoRef.current?.closest(".video-wrapper");
      wrapper?.classList.toggle("wide-mode");
      setToggleWideMode(prev=>!prev)
    });

    const controls = document.querySelector(".plyr__controls");
    controls?.appendChild(button);

    return () => {
      player.destroy();
    };
  }, []);

  return (
    <div className="video-wrapper relative transition-all duration-500 z-50">
      
      <video
        ref={videoRef}
        src={src}
        className="w-full max-w-full object-cover min-h-[350px] rounded-xl overflow-hidden"
        playsInline
        controls
        poster={poster}
      />

      {/*Play And Pause Button*/}
      {!isPlaying && (
        <button
          onClick={() => videoRef.current?.play()}
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110">
            <FaPlay size={15} className="text-red-400 ml-1" />
          </span>
        </button>
      )}

    </div>
  );
}
