'use client'
import { useEffect, useRef, useState } from "react";
import plyr from "plyr";
import "plyr/dist/plyr.css";
import { FaPlay } from "react-icons/fa";

export default function VideoPlayer({
  src,
  poster,
}: {
  src: string;
  poster?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!videoRef.current) return;

    const player = new plyr(videoRef.current, {
      controls: ["play", "progress", "current-time", "mute", "volume", "settings", "fullscreen"],
    });

    // 🔹 متابعة حالة التشغيل والإيقاف
    player.on("play", () => setIsPlaying(true));
    player.on("pause", () => setIsPlaying(false));

    // 🔹 إنشاء زر مخصص (Wide Mode)
    const button = document.createElement("button");
    button.innerHTML = "🖥️"; // أيقونة WIDE
    button.className = "plyr__controls__item plyr__custom-wide-btn";
    button.title = "Wide Mode";

    button.addEventListener("click", () => {
      const wrapper = videoRef.current?.closest(".video-wrapper");
      wrapper?.classList.toggle("wide-mode");
    });

    const controls = document.querySelector(".plyr__controls");
    controls?.appendChild(button);

    return () => {
      player.destroy();
    };
  }, []);

  return (
    <div className="video-wrapper relative transition-all duration-500 z-50">
      {/* الفيديو */}
      <video
        ref={videoRef}
        src={src}
        className="w-full h-[250px] rounded-xl overflow-hidden"
        playsInline
        controls
        poster={poster}
      />

      {/* زر التشغيل والإيقاف في المنتصف */}
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
