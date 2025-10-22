'use client'
import { Lesson_Interface } from "@/Interfaces/Lesson_Interface";
import Lesson_Component from "./Lesson_Component";
import { FaPlus,FaMinus } from "react-icons/fa6";
import { useState } from "react";
export default function Curriculm_Component({title,description,lessons}:{title:string,description:string,lessons:Lesson_Interface[]}) {
    const [toggleLessons,setToggleLessons] =useState(false)
    return (
    <article id="Curriculm" className="w-full px-6 py-5 border-2 my-2 md:my-5 border-[#eee] flex flex-col gap-4">
        {/*Curriculm Title*/}
        <div onClick={()=>setToggleLessons(prev=>!prev)} className="w-full cursor-pointer flex justify-between items-center">
            <h3 className="font-medium text-xl md:text-2xl">{title}</h3>
            {
               toggleLessons ?
            <FaMinus className="cursor-pointer text-muted"/>
              :
            <FaPlus className="cursor-pointer text-primary"/>
            }
        </div>
        <div className={`${toggleLessons ? 'h-fit':'h-0'} transition-all overflow-hidden duration-700 ease-in-out`}>
            {/*Curriculm Description*/}
            <p className="font-light mb-5 pb-3 text-sm text-muted">{description}</p>
            {/*Curriculm Content*/}
            <ul className="w-full flex flex-col justify-start items-center gap-4">
                {/*Lessons Of Week*/}
                {
                    lessons?.map((lesson:Lesson_Interface)=>
                        <Lesson_Component key={lesson?.id} lesson={lesson}/>
                    )
                }
            </ul>
        </div>
    </article>
  )
}
