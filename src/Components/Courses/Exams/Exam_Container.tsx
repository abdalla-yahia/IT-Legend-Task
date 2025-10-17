import { UseExamContext } from "@/Contexts/Exam_Context";
import { RootState, useAppSelector } from "@/Lib/Store/store";
import { MdClose } from "react-icons/md";
import Exam_Timer from "./Exam_Timer";
import Exam_Content from "./Exam_Content";
import { useEffect, useState } from "react";
import Exam_Bullets from "./Exam_Bullets";
import { Exam_Interface, UserAnswer_Interface } from "@/Interfaces/Exam_Interface";

export default function Exam_Container() {
  const {Exam} = useAppSelector((state:RootState)=>state.lesson);
  const {toggleExam,setToggleExam} = UseExamContext();
  const [questionIndex,setQuestionIndex] = useState(0)
  const [userAnswers,setUserAnswers] = useState<UserAnswer_Interface[]>([]);
  const [examResult,setExamResult] = useState(0)
 // Scroll Window To Question
  const scrollToQuestion = (index: number) => {
    setQuestionIndex(index)
  };
  
  //Submit userAnswers
  const SubmitAnswersHandeller =()=>{
    //Set Exam Answered On localStorage To Lock It 
    if(localStorage.getItem('exams_Answerd')){
      const ArrayOfExams = JSON.parse(localStorage.getItem('exams_Answerd') as string)
      const FindExam = ArrayOfExams?.find((exam:Exam_Interface)=>exam?.id == Exam?.id)
      if(!FindExam){
        ArrayOfExams.push(Exam)
        localStorage.setItem('exams_Answerd',JSON.stringify(ArrayOfExams))

        //Review Exam Result And Set Degree Of Exam
        userAnswers?.map(answer=>{
          if(answer?.userAnswer === answer?.correctAnswer){
            setExamResult(prev=>prev + answer?.point)
          }
          })
      }
    }else{
      localStorage.setItem('exams_Answerd',JSON.stringify([Exam]))
      //Review Exam Result And Set Degree Of Exam
        userAnswers?.map(answer=>{
          if(answer?.userAnswer === answer?.correctAnswer){
            setExamResult(prev=>prev + answer?.point)
          }
          })
    }
    //Close Exam Form After Submit Answers
    setToggleExam(false)
  }
  //Increament Student Progress By Exam Result
  useEffect(()=>{
     if(localStorage.getItem('student_progress')){
      const progress = Number(localStorage.getItem('student_progress')) + examResult
      localStorage.setItem('student_progress',progress.toString())
     }else{
      localStorage.setItem('student_progress',examResult.toString())
     }
  },[examResult])
  return (
    <>
        {toggleExam &&
        <section className="fixed min-h-full top-[0px] bg-[#445bc3] p-8 left-0 w-full  z-50 overflow-x-hidden scrollbar-none">
            <MdClose onClick={()=>setToggleExam((prev)=>!prev)} className="text-red-500 absolute top-10 left-12 cursor-pointer text-2xl hover:scale-150 transition-all duration-300"/>
           <div className="w-full h-screen flex flex-col gap-10 items-center">
            {/*Exam Timer*/}
            <Exam_Timer time={Number(Exam?.time)}/>
            {/*Exam Boolets*/}
            <Exam_Bullets exam={Exam} scrollToQuestion={scrollToQuestion} questionIndex={questionIndex}/>
            {/*Submit Button*/}
            <button onClick={()=>SubmitAnswersHandeller()} className={`${userAnswers?.length === Exam?.questions?.length ? 'opacity-100':'opacity-0'} bg-amber-300  font-semibold hover:bg-amber-400 hover:text-white transition-all duration-300 ease-in-out shadow-lg shadow-white/50 rounded-sm cursor-pointer px-7 py-3`}>Submit Answers</button>
            {/*Exam Content*/}
            <section className="flex gap-5 w-full transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${questionIndex * 95}%)` }}>
              {
                Exam?.questions?.map(question=>
                  <Exam_Content key={question?.id} question={question} userAnswers={userAnswers} setUserAnswers={setUserAnswers}/>
                )
              }
            </section>
            </div> 
        </section>}
    </>
  )
}
