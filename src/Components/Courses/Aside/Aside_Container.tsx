'use client'
import { Week_Interface } from "@/Interfaces/Week_Interface"
import Progress from "./Progress"
import Week_Component from "./Curriculm_Component"
import {Curriculm} from '@/DB/Curriculm_Content.json'
export default function Aside_Container() {

    const progress = 65
  return (
    <aside className="flex flex-col justify-start items-start gap-6">
     {/*Aside Title*/}
      <h2 className="w-full capitalize font-medium text-4xl h-[65px]">Topic for this course</h2>
        {/*Progress*/}
        <Progress progress={progress}/>
            {/*Weeks*/}
        <div className="w-full">
            {
                Curriculm?.map((week:Week_Interface)=>{
                    return <Week_Component key={week.id} title={week?.title} description={week?.description} lessons={week?.lessons}/>
                })
            }

        </div>
    </aside>
  )
}
