import { Lesson_Interface } from "@/Interfaces/Lesson_Interface";
import Breadcrumb from "@/Utils/BreadCrumb_Nav";

export default function Section_Header_Container({Lesson}:{Lesson:Lesson_Interface}) {
  const Course={
    title :'Starting SEO As Your Home'
  }
  return (
    <header className="w-full pb-2 h-[132px] flex flex-col justify-center items-center bg-accent">
        {/*Bread Crumb*/}
        <Breadcrumb />
        {/*Section Title*/}
        <section className="w-[91.41%] h-[70px]  flex flex-col justify-start items-start ">
            {/*Course Title*/}
            <h1 className="text-2xl md:text-4xl font-bold text-foreground">{Course?.title}</h1>
            {/*Lesson Title */}
            <h2 className="text-2xl md:text-4xl font-bold text-foreground line-clamp-1">{Lesson?.title}</h2>
        </section>
    </header>
  )
}
