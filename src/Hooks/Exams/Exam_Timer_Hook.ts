import { UseExamContext } from "@/Contexts/Exam_Context";
import { Exam_Interface } from "@/Interfaces/Exam_Interface";
import { useEffect, useState } from "react";
export default function Exam_Timer_Hook({ time,Exam }: { time: number,Exam:Exam_Interface }) {
    const { setToggleExam } = UseExamContext();
    const [totalSeconds, setTotalSeconds] = useState(time * 60);
    /**
     *  Start timer when the student opens the exam page,
     *  automatically close the exam when time is finished,
     *  and store exam data in localStorage.
     * */ 
           
    useEffect(() => {
      if (!time || time <= 0) return;
      const timer = setInterval(() => {
        setTotalSeconds((prev) => {
          if (prev > 0) {
            return prev - 1;
          } else {
            //Set Data Of Exam On localStorage To Lock It After Time Finshed 
            if(localStorage.getItem('exams_Answerd')){
              const ArrayOfExams = JSON.parse(localStorage.getItem('exams_Answerd') as string)
              const FindExam = ArrayOfExams?.find((exam:Exam_Interface)=>exam?.id == Exam?.id)
              if(!FindExam){
                ArrayOfExams.push(Exam)
                localStorage.setItem('exams_Answerd',JSON.stringify(ArrayOfExams))
              }
            }else{
              localStorage.setItem('exams_Answerd',JSON.stringify([Exam]))
            }
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
    
  return {minutes,seconds}
}
