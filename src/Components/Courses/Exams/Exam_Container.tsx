import { MdClose } from "react-icons/md";
import Exam_Timer from "./Exam_Timer";
import Exam_Content from "./Exam_Content";
import Exam_Bullets from "./Exam_Bullets";
import Exam_Container_Hook from "@/Hooks/Exams/Exam_Container_Hook";

export default function Exam_Container() {
  const {toggleExam,ForceCloseExam,Exam,scrollToQuestion,questionIndex,SubmitAnswersHandeller,userAnswers,setUserAnswers} = Exam_Container_Hook()
  return (
    <>
        {toggleExam &&
        <section className="fixed min-h-full top-[0px] bg-[#445bc3] p-8 left-0 w-full  z-50 overflow-x-hidden scrollbar-none">
            <MdClose onClick={()=>ForceCloseExam()} className="text-red-500 absolute top-10 left-12 cursor-pointer text-2xl hover:scale-150 transition-all duration-300"/>
           <div className="w-full h-screen flex flex-col gap-10 items-center">
            {/*Exam Timer*/}
            <Exam_Timer time={Number(Exam?.time)} Exam={Exam}/>
            {/*Exam Boolets*/}
            <Exam_Bullets exam={Exam} scrollToQuestion={scrollToQuestion} questionIndex={questionIndex}/>
            {/*Submit Button*/}
            <button onClick={()=>SubmitAnswersHandeller()} className={`${userAnswers?.length === Exam?.questions?.length ? 'opacity-100':'opacity-0'} bg-amber-300  font-semibold hover:bg-amber-400 hover:text-white transition-all duration-300 ease-in-out shadow-lg shadow-white/50 rounded-sm cursor-pointer px-7 py-3`}>Submit Answers</button>
            {/*Exam Content*/}
            <section className="flex gap-5 w-full transition-transform duration-700 ease-in-out " style={{ transform: `translateX(-${questionIndex * 95}%)` }}>
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
