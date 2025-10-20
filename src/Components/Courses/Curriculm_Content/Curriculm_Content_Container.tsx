'use client'
import { Week_Interface } from "@/Interfaces/Week_Interface"
import Progress from "../Progress/Progress"
import Week_Component from "./Curriculm_Component"
import Pdf_Container from "../modals/Pdf/Pdf_Container"
import { RootState, useAppSelector } from "@/Lib/Store/store"
import Exam_Container from "../modals/Exams/Exam_Container"
import { UseWideModeContext } from "@/Contexts/Wide_Mode_Context"
import { Course_Interface } from "@/Interfaces/Course_Interface"
export default function Curriculm_Content_Container({course}:{course:Course_Interface}) {
  const {LessonPdf} = useAppSelector((state:RootState)=>state.lesson);
  const {toggleWideMode} = UseWideModeContext();
  
  return (
    <section className={`${toggleWideMode ? 'col-span-2':'col-span-1'} order-3 md:order-2 flex flex-col justify-start items-start gap-6 row-span-2`}>
     {/*Course Title*/}
      <h2 className="w-full capitalize font-medium text-4xl h-[65px]">Topic for this course</h2>
     {/*Progress*/}
      <Progress />
     {/*Curriculm Content */}
      <div className="w-full">
          {
              course?.Curriculm?.map((week:Week_Interface)=>{
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
