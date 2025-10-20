import Add_New_Question_Hook from "@/Hooks/Add_New_Question_Hook";
import { MdArrowRightAlt,MdClose } from "react-icons/md";
import {UseQuestionContext} from "@/Contexts/Show_Question_Form_Context";
import { useEffect } from "react";

export default function Ask_Question() {
  const {toggleQuestionForm,setToggleQuestionForm} = UseQuestionContext();
  const {actionstate,state} = Add_New_Question_Hook();

  useEffect(()=>{
    if(state?.success === true){
      setToggleQuestionForm(false)
    }
  },[state])

  return (   
    <section className={`${toggleQuestionForm ? 'flex' :'hidden'} justify-center items-center fixed top-0 left-0 bg-black/60 w-full min-h-screen z-50`}>
      <section className={`${toggleQuestionForm ? 'flex' :'hidden'} w-[80%] md:w-[50%] bg-[#fff] flex flex-col justify-center items-start gap-3 absolute top-[50%] p-8 left-[50%] -translate-1/2 z-50`}>
          {/*Close Button*/}
          <MdClose title="Close" onClick={()=>setToggleQuestionForm(prev=>!prev)} className="cursor-pointer text-red-600 font-extrabold text-xl absolute top-5 right-5 hover:scale-125 transition-all duration-500"/>
          <form action={actionstate} className="w-full flex flex-col gap-4">
            <textarea  name="Question" id="Question" placeholder="Ask Question" className="w-full p-5 border border-[#eee] outline-none resize-none  h-[150px] shadow-2xl shadow-[#ddd]"></textarea>
            <button type="submit" className="flex justify-center items-center mr-auto rounded-lg p-3 cursor-pointer bg-[#41b69d] text-accent">Send Question <MdArrowRightAlt size={25}/></button>
          </form>
      </section>
    </section>
  )
}
