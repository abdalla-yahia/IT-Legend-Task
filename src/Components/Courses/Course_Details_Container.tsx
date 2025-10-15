'use client'
import Aside_Container from "./Aside/Aside_Container";
import { RootState, useAppSelector } from "@/Lib/Store/store";

import Sections_Details_Container from "./Details/Sections_Details_Container";
import Section_Header_Container from "./Header/Section_Header_Container";

export default function Course_Details_Container({ id }: { id: string }) {
    const {Lesson} = useAppSelector((state:RootState)=>state.lesson) ;
  
  return (
    <>
      {/*Section Header*/}
      <Section_Header_Container Lesson={Lesson}/>
      {/*Section Body*/}
      <section className="w-[91.41%] mt-5 min-h-screen grid grid-cols-1 md:grid-cols-2 justify-between items-start bg-background  pb-10 gap-20">
        {/* Course Details Container */}
        <Sections_Details_Container Lesson={Lesson}/>
        {/*Aside Container*/}
        <Aside_Container />
      </section>
    </>
  )
}
