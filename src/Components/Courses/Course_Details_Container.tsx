'use client'
import Breadcrumb from "@/Utils/BreadCrumb_Nav";
import Aside_Container from "./Aside/Aside_Container";
import Lesson_video from "./Details/Lesson_video";
import { RootState, useAppSelector } from "@/Lib/Store/store";
import NavLinks from "./Details/NavLinks";
import Course_Material_Container from "./Details/Course_Material_Container";
import Comments_Container from "./Details/Comments_Container";
import Add_Comment_Container from "./Details/Add_Comment_Container";

export default function Course_Details_Container({ id }: { id: string }) {
    const {Lesson} = useAppSelector((state:RootState)=>state.lesson) ;
  
  return (
    <>
      {/*Section Header*/}
      <header className="w-full h-[132px] flex flex-col justify-center items-center bg-accent">
        {/*Bread Crumb*/}
        <Breadcrumb />
        {/*Section Title*/}
        <section className="w-[91.41%] h-[70px]  flex justify-start items-center">
          <h1 className="text-4xl font-bold text-foreground">{Lesson?.title}</h1>
        </section>
      </header>
      {/*Section Body*/}
      <section className="w-[91.41%] mt-5 min-h-screen grid grid-cols-1 md:grid-cols-2 justify-between items-start bg-background  pb-10 gap-20">
        {/* Course Details Container */}
        <section className="flex flex-col min-h-full gap-10">
          {/*Video Player*/}
          <Lesson_video lesson_details={Lesson}/>
          {/*Navbar*/}
          <NavLinks />
          {/*Course Material*/}
          <Course_Material_Container />
          {/*Comments*/}
          <Comments_Container />
          {/*Add Comment*/}
          <Add_Comment_Container />
        </section>
        {/*Aside Container*/}
        <Aside_Container />
      </section>
    </>
  )
}
