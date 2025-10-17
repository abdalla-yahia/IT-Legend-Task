import { Exam_Interface } from "@/Interfaces/Exam_Interface";

interface ExamBulletsProps {
  exam: Exam_Interface;
  scrollToQuestion: (index: number) => void;
  questionIndex:number
}

export default function Exam_Bullets({ exam, scrollToQuestion, questionIndex}: ExamBulletsProps) {
  return (
    <div className=" w-full p-5 flex justify-center items-center gap-3">
        {
            exam?.questions?.map((element,index)=>
            <div onClick={() => {scrollToQuestion(index)}} key={element?.id} className={`${questionIndex === index ? 'bg-white text-blue-400':'border border-white text-white'} rounded-full  p-5 w-8 h-8 flex justify-center items-center text-2xl font-bold cursor-pointer`}>{element?.id}</div>
            )
        }
    </div>
  )
}
