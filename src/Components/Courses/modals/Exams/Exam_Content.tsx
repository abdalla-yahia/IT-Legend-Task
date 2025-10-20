'use client'
import { Question_Interface, UserAnswer_Interface } from "@/Interfaces/Exam_Interface";
import { Dispatch, SetStateAction } from "react";

export default function Exam_Content({question,userAnswers,setUserAnswers}:{question:Question_Interface,userAnswers:UserAnswer_Interface[],setUserAnswers:Dispatch<SetStateAction<UserAnswer_Interface[]>>}) {
    //Set Student Answer
    const StudentAnswerHandeller = (chose:string) =>{
        const findeAnswerQuestion = userAnswers?.find(answer=>answer?.id === question?.id )
        if(findeAnswerQuestion){
            setUserAnswers(userAnswers?.filter(ele=>ele.id !== question?.id))
            setUserAnswers(prev=> [...prev,{id:question?.id,question:question?.question,userAnswer:chose,correctAnswer:question?.correctAnswer,point:question?.point}])
        }else{
            setUserAnswers(prev=> [...prev,{id:question?.id,question:question?.question,userAnswer:chose,correctAnswer:question?.correctAnswer,point:question?.point}])
        }
    }

    return (
    <article className="bg-white flex-chrink-0 min-w-[95%] min-h-screen p-1 md:p-5 rounded-2xl ">
        <div className=" p-3 md:p-5 rounded-2xl h-screen">
            {/*Question Number*/}
            <span className="text-3xl font-medium ">{question?.id}.</span>
            {/*Question*/}
            <p className="text-xl md:text-3xl font-medium my-2">{question?.question}</p>
            {/*List Of Choes*/}
            <ul className="flex flex-col justify-start items-start gap-3 my-5">
                {
                    question?.options?.map(chose=>
                        <li key={chose} className="text-xl font-medium flex w-full bg-white shadow-lg rounded-lg   has-[input:checked]:bg-[#5d7aff] has-[input:checked]:text-white justify-start items-center gap-5">
                            <div className="relative w-[25%] md:w-[10%] border-r-2 border-gray-200 py-5 h-full flex justify-center items-center">
                                <div className="relative w-fit h-fit">
                                    <input onClick={()=>StudentAnswerHandeller(chose)} className="appearance-none  peer w-5 h-5 border-2 border-blue-300 rounded-xs checked:border-blue-200 checked:bg-blue-600" type="radio" id={`${chose}-${question?.id}-${question?.question}`} name={question?.question} />
                                    <span className="w-2 h-2 border-1 -translate-[50%] left-[50%] top-[35%]  absolute border-gray-100 opacity-0 peer-checked:opacity-100 rounded-full flex items-center justify-center bg-white">
                                    </span>
                                </div>
                            </div>
                            <label className="cursor-pointer p-3 relative flex justify-start items-center gap-8 w-full h-full" htmlFor={`${chose}-${question?.id}-${question?.question}`}>
                                {chose}
                            </label>
                        </li>
                    )
                }
            </ul>
        </div>
    </article>
  )
}
