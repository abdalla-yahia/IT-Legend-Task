'use client'
import { RootState, useAppDispatch, useAppSelector } from "@/Lib/Store/store";
import Section_Header_Container from "./Header/Section_Header_Container";
import { Course_Interface } from "@/Interfaces/Course_Interface";
import { useEffect } from "react";
import { setAllComments } from "@/Features/Slices/Course_Slice";
import dynamic from "next/dynamic";
import Spinner from "@/Utils/Spinner";
const Video_Player_Container = dynamic(()=>import("./Video_Player/Video_Player_Container"),{ssr:true,loading:()=><Spinner text="Loading"/>});
const Sections_Details_Container = dynamic(()=>import("./Details/Sections_Details_Container"),{ssr:false,loading:()=><Spinner text="Loading"/>});
const Curriculm_Content_Container = dynamic(()=>import("./Curriculm_Content/Curriculm_Content_Container"),{ssr:false,loading:()=><Spinner text="Loading"/>});

export default function Course_Details_Container({ id }: { id: string }) {
    const {courses} = useAppSelector((state:RootState)=>state.course) ;
    const {Lesson} = useAppSelector((state:RootState)=>state.lesson) ;
    const course = (courses?.filter((course:Course_Interface)=>course?.id === id)[0]);
    const dispatch = useAppDispatch();
    //Set Comments Data Of The Course
    useEffect(()=>{
      dispatch(setAllComments(course?.comments))
    },[course,dispatch])
    
  return (
    <>
      {/*Section Header*/}
      <Section_Header_Container course={course} Lesson={Lesson}/>
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
