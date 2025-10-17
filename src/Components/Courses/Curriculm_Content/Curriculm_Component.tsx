'use client'
import { Lesson_Interface } from "@/Interfaces/Lesson_Interface";
import Lesson_Component from "./Lesson_Component";

export default function Curriculm_Component({title,description,lessons}:{title:string,description:string,lessons:Lesson_Interface[]}) {
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
                    <Lesson_Component key={lesson?.id} lesson={lesson}/>
                )
            }
        </ul>
    </article>
  )
}
