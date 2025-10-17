import { UseExamContext } from "@/Contexts/Exam_Context";
import { useEffect, useState } from "react";
import { IoAlarmOutline } from "react-icons/io5";

export default function Exam_Timer({ time }: { time: number }) {
  const { setToggleExam } = UseExamContext();
  const [totalSeconds, setTotalSeconds] = useState(time * 60);

  useEffect(() => {
    if (!time || time <= 0) return;
    const timer = setInterval(() => {
      setTotalSeconds((prev) => {
        if (prev > 0) {
          return prev - 1;
        } else {
          setToggleExam(false);
          clearInterval(timer);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [time, setToggleExam]);

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return (
    <div className="bg-amber-400 shadow-lg shadow-amber-300 rounded-2xl text-2xl p-3 px-7 text-white flex justify-center items-center gap-2">
      <IoAlarmOutline />
      <span>{minutes < 10 ? `0${minutes}` : minutes}</span>
      <span className="animate-pulse">:</span>
      <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
    </div>
  );
}
