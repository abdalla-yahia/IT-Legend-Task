'use client'
import { Course_Interface } from "@/Interfaces/Course_Interface";
import { RootState, useAppSelector } from "@/Lib/Store/store";
import Breadcrumb from "@/Utils/BreadCrumb_Nav";
import Link from "next/link";
import { BsUnlock,SlLock } from "@/Utils/Icons";

export default function MainPage() {
   const {AllCourses} = useAppSelector((state:RootState)=>state.course);

  return (
    <main className="w-[91.41%] min-h-screen flex flex-col justify-start items-center bg-background  pb-10 gap-10">
        {/*Bread Crumb*/}
          <Breadcrumb />
        {/*All Courses */}
        <section className="w-[91.41%] h-[42px] my-5 flex flex-col justify-start items-start gap-2">
          <h2 className="text-lg font-medium text-foreground/70 ">All Courses</h2>
           <ul className="flex flex-col gap-3">
            {AllCourses?.map((course:Course_Interface)=>
              <Link key={course?.id} href={course?.isPurchased ?`/courses/${course?.id}`:'#'} className="text-sm text-foreground/60 hover:text-foreground/80 transition-all duration-200 ">
                  <li  className="p-5 rounded-2xl bg-[#f5f9fa] cursor-pointer text-sm md:text-2xl font-semibold border border-foreground/10 flex flex-col md:flex-row justify-between items-center gap-5 w-full">
                    {course?.title}
                    {
                      course?.isPurchased ?
                      (<BsUnlock className="text-green-500"/>):
                      (<SlLock className="text-red-500 font-medium"/>)
                    }
                  </li>
              </Link>
          )}
          </ul> 
        </section>
    </main>
  )
}
