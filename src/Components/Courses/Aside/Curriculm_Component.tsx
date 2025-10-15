'use client'
import { Lesson_Interface } from "@/Interfaces/Lesson_Interface";
import { PiFileTextLight } from "react-icons/pi";
import { SlLock } from "react-icons/sl";
import {setOneLesson} from '@/Features/Slices/Lesson_Slice';
import { useAppDispatch } from "@/Lib/Store/store";

export default function Curriculm_Component({title,description,lessons}:{title:string,description:string,lessons:Lesson_Interface[]}) {
    const dispatch = useAppDispatch()
    return (
    <article id="Curriculm" className="w-full px-6 py-8 border my-8 border-[#eee] flex flex-col gap-4">
        {/*Article Title*/}
        <h3 className="font-medium text-3xl">{title}</h3>
        {/*Curriculm Description*/}
        <p className="font-light border-b border-b-[#ddd] pb-3 text-sm text-muted">{description}</p>
        {/*Curriculm Content*/}
        <ul className="w-full flex flex-col justify-start items-center gap-4">
            {/*Lessons Of Week*/}
            {
                lessons?.map((lesson:Lesson_Interface)=>
                    <li key={lesson?.id} onClick={()=>dispatch(setOneLesson(lesson))} className="flex w-full justify-between items-center border-b border-b-[#ddd] pb-3">
                        <div className="flex w-[50%] justify-start items-center gap-2">
                            <PiFileTextLight />
                            <span className="capitalize cursor-pointer hover:text-primary" >{lesson?.title}</span>
                        </div>
                            <div className="w-[50%] flex justify-end">
                                {
                                    lesson?.isexame ? 
                                    (
                                        <div className="flex gap-2 w-full justify-end">
                                            <span className="flex flex-nowrap p-1 bg-green-100 text-green-500">{lesson?.questions } Questions</span>
                                            <span className="flex flex-nowrap p-1 bg-red-100 text-red-500">{lesson?.time } Minutes</span>
                                        </div>
                                    ):
                                    (<SlLock />)
                                }
                            </div>
                    </li>
                )
            }
        </ul>
    </article>
  )
}
