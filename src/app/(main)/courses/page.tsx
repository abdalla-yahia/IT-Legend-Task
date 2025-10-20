'use client'
import { Course_Interface } from "@/Interfaces/Course_Interface";
import { RootState, useAppSelector } from "@/Lib/Store/store";
import Link from "next/link";

export default function MainPage() {
   const {courses} = useAppSelector((state:RootState)=>state.course);

  return (
    <main className="w-[91.41%] min-h-screen flex flex-col justify-start items-center bg-background  pb-10 gap-10">
        {/*All Courses */}
        <section className="w-[91.41%] h-[42px] my-5 flex flex-col justify-start items-start gap-2">
          <h2 className="text-lg font-medium text-foreground/70 ">All Courses</h2>
           <ul className="flex flex-col gap-3">
            {courses?.map((course:Course_Interface)=>
            <li key={course?.id} className="p-5 rounded-2xl bg-[#f5f9fa] cursor-pointer text-2xl md:text-4xl font-semibold border border-foreground/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-5 w-full">
              <Link href={`/courses/${course?.id}`} className="text-sm text-foreground/60 hover:text-foreground/80 transition-all duration-200">{course?.title}</Link>
            </li>
          )}
          </ul> 
        </section>
    </main>
  )
}
