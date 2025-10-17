'use client'
import { Week_Interface } from "@/Interfaces/Week_Interface"
import Progress from "./Progress"
import Week_Component from "./Curriculm_Component"
import {Curriculm} from '@/DB/Curriculm_Content.json'
import Pdf_Container from "../Pdf/Pdf_Container"
import { RootState, useAppSelector } from "@/Lib/Store/store"
import Exam_Container from "../Exams/Exam_Container"
export default function Curriculm_Content_Container() {
  const {LessonPdf} = useAppSelector((state:RootState)=>state.lesson);

  return (
    <section className="order-3 md:order-2 flex flex-col justify-start items-start gap-6 row-span-2">
     {/*Course Title*/}
      <h2 className="w-full capitalize font-medium text-4xl h-[65px]">Topic for this course</h2>
     {/*Progress*/}
      <Progress/>
     {/*Weeks Content*/}
      <div className="w-full">
          {
              Curriculm?.map((week:Week_Interface)=>{
                  return <Week_Component key={week.id} title={week?.title} description={week?.description} lessons={week?.lessons}/>
              })
          }

      </div>
      {/*Pdf Container*/}
      <Pdf_Container fileUrl={LessonPdf}/>
      {/*Exam Container*/}
      <Exam_Container />
    </section>
  )
}
