import { Lesson_Interface } from "@/Interfaces/Lesson_Interface";
import { PiFileTextLight } from "react-icons/pi";
import { SlLock } from "react-icons/sl";
import { BsUnlock } from "react-icons/bs";
import { MdCheck } from "react-icons/md";
import Lesson_Component_Hook from "@/Hooks/Curriculm_Content/Lesson_Component_Hook";

export default function Lesson_Component({lesson}:{lesson:Lesson_Interface}) {
  const {ClickPdfIconHandller,ClickLessonVideoHandller,ToggleShowIcon,LessonShown} = Lesson_Component_Hook({lesson} as {lesson:Lesson_Interface})
  
  return (
    <li  className="flex w-full justify-between items-center border-b border-b-[#ddd] pb-3">
        <div className="flex w-[50%] justify-start items-center gap-2">
            <PiFileTextLight onClick={()=>ClickPdfIconHandller()} className={`${lesson?.isexame ? "hover:text-blue-600 hover:scale-125 transition-all duration-300":"hover:text-red-600"} ${!ToggleShowIcon && 'hidden'} cursor-pointer`}/>
            <span onClick={()=>ClickLessonVideoHandller()} className={`${(lesson?.isexame && !ToggleShowIcon) ? 'cursor-not-allowed':'cursor-pointer'} capitalize  hover:text-primary`} >{lesson?.title}</span>
        </div>
        {/*Show Lock || UnLock Or Exam Info*/}
            <div className="w-[50%] flex justify-end">
                {
                    lesson?.isexame ? 
                    (
                        /*Show Box Inform User That Exam Is Answerd */
                        (ToggleShowIcon == false) ?
                        <div className="flex justify-center items-center gap-2">
                            <MdCheck className="text-green-500 text-2xl font-bold"/>
                            <span className="bg-amber-100 text-amber-500 px-5 py-2">Exam Opened Before</span>
                        </div> :
                        /*Show Box contain Info Of Exam Is Not Answerd */
                        <div className="flex gap-2 w-full justify-end">
                            <span className="flex flex-nowrap p-1 bg-green-100 text-green-500">{lesson?.questions?.questions?.length } Questions</span>
                            <span className="flex flex-nowrap p-1 bg-red-100 text-red-500">{lesson?.time } Minutes</span>
                        </div> 
                        
                    ):
                    (
                            LessonShown ? (
                                <BsUnlock />
                            ):(
                                <SlLock />
                            ) 
                )
                }
            </div>
    </li>
  )
}
