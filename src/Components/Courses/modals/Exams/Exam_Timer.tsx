import Exam_Timer_Hook from "@/Hooks/Exams/Exam_Timer_Hook";
import { Exam_Interface } from "@/Interfaces/Exam_Interface";
import { IoAlarmOutline } from "react-icons/io5";

export default function Exam_Timer({ time,Exam }: { time: number,Exam:Exam_Interface }) {
  const {minutes,seconds} = Exam_Timer_Hook({time,Exam} as { time: number,Exam:Exam_Interface } )
  return (
    <div className="bg-amber-400 shadow-lg shadow-amber-300 rounded-2xl text-2xl p-3 px-7 text-white flex justify-center items-center gap-2">
      <IoAlarmOutline />
      <span>{minutes < 10 ? `0${minutes}` : minutes}</span>
      <span className="animate-pulse">:</span>
      <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
    </div>
  );
}
