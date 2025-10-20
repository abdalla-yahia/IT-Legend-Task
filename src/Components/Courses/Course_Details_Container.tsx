'use client'
import { RootState, useAppDispatch, useAppSelector } from "@/Lib/Store/store";
import Sections_Details_Container from "./Details/Sections_Details_Container";
import Section_Header_Container from "./Header/Section_Header_Container";
import Video_Player_Container from "./Video_Player/Video_Player_Container";
import Curriculm_Content_Container from "./Curriculm_Content/Curriculm_Content_Container";
import { Course_Interface } from "@/Interfaces/Course_Interface";
import { useEffect } from "react";
import { setAllComments } from "@/Features/Slices/Course_Slice";

export default function Course_Details_Container({ id }: { id: string }) {
    const {courses} = useAppSelector((state:RootState)=>state.course) ;
    const {Lesson} = useAppSelector((state:RootState)=>state.lesson) ;
    const course = (courses?.filter((course:Course_Interface)=>course?.id===id)[0]);
    const dispatch = useAppDispatch();
    //Set Comments Data Of The Course
    useEffect(()=>{
      dispatch(setAllComments(course?.comments))
    },[course])
    
  return (
    <>
      {/*Section Header*/}
      <Section_Header_Container Lesson={Lesson}/>
      {/*Section Body*/}
      <section className="w-[91.41%] mt-5 min-h-screen  grid grid-cols-1  md:grid-cols-2 grid-flow-dense bg-background  pb-10 gap-10">
        {/*Video Player*/}
        <Video_Player_Container lesson_details={Lesson}/>
        {/*Curriculm Content Container*/}
        <Curriculm_Content_Container course={course}/>
        {/* Course Details Container */}
        <Sections_Details_Container course={course}/>
      </section>
    </>
  )
}
