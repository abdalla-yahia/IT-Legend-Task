import { MdClose } from "react-icons/md";
import Exam_Timer from "./Exam_Timer";
import Exam_Content from "./Exam_Content";
import Exam_Bullets from "./Exam_Bullets";
import Exam_Container_Hook from "@/Hooks/Exams/Exam_Container_Hook";
import style from './style.module.css';
export default function Exam_Container() {
  const {toggleExam,ForceCloseExam,Exam,scrollToQuestion,questionIndex,SubmitAnswersHandeller,userAnswers,setUserAnswers} = Exam_Container_Hook()
  return (
    <>
        {toggleExam &&
            <section className={`${toggleExam ? 'flex' : 'hidden'} justify-center items-center fixed top-0 left-0 bg-white w-full min-h-screen  z-50`}>
            <section className="fixed  w-[90%] md:w-[50%] top-[50%] left-[50%] -translate-1/2 bg-[#445bc3] p-2 md:p-8 rounded-2xl  z-50 overflow-x-hidden scrollbar-none">
              {/*Close Button*/}
              <MdClose onClick={()=>ForceCloseExam()} className="text-red-500 absolute border border-[#ddd] rounded top-5  md:top-10 left-5 md:left-12 cursor-pointer text-2xl hover:scale-150 transition-all duration-300"/>
              <div className="w-full flex flex-col gap-1 items-center">
                {/*Exam Timer*/}
                <Exam_Timer time={Number(Exam?.time)} Exam={Exam}/>
                {/*Exam Boolets*/}
                <Exam_Bullets exam={Exam} scrollToQuestion={scrollToQuestion} questionIndex={questionIndex}/>
                {/*Submit Button*/}
                <button onClick={()=>SubmitAnswersHandeller()} className={`${userAnswers?.length === Exam?.questions?.length ? 'opacity-100':'opacity-0'} bg-green-400  font-semibold hover:bg-green-500 hover:text-white transition-all duration-300 ease-in-out shadow-lg shadow-white/50 rounded-sm cursor-pointer px-7 py-3`}>Submit Answers</button>
                {/*Exam Content*/}
                <section className={`${style.question_form} flex gap-4 md:gap-6 lg:gap-6 w-full transition-transform duration-700 ease-in-out `} style={{ "--index": questionIndex } as React.CSSProperties}>
                  {
                    Exam?.questions?.map(question=>
                      <Exam_Content key={question?.id} question={question} userAnswers={userAnswers} setUserAnswers={setUserAnswers}/>
                    )
                  }
                </section>
                </div> 
            </section>
        </section>
        }

    </>
  )
}
