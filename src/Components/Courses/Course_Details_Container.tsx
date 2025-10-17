'use client'
import { RootState, useAppSelector } from "@/Lib/Store/store";
import Sections_Details_Container from "./Details/Sections_Details_Container";
import Section_Header_Container from "./Header/Section_Header_Container";
import Video_Player_Container from "./Video_Player/Video_Player_Container";
import Curriculm_Content_Container from "./Curriculm_Content/Curriculm_Content_Container";

export default function Course_Details_Container({ id }: { id: string }) {
    const {Lesson} = useAppSelector((state:RootState)=>state.lesson) ;
  
  return (
    <>
      {/*Section Header*/}
      <Section_Header_Container Lesson={Lesson}/>
      {/*Section Body*/}
      <section className="w-[91.41%] mt-5 min-h-screen  grid grid-cols-1  md:grid-cols-2 grid-flow-dense bg-background  pb-10 gap-10">
        {/*Video Player*/}
        <Video_Player_Container lesson_details={Lesson}/>
        {/*Curriculm Content Container*/}
        <Curriculm_Content_Container/>
        {/* Course Details Container */}
        <Sections_Details_Container/>
      </section>
    </>
  )
}
