import { Lesson_Interface } from "@/Interfaces/Lesson_Interface";
import Breadcrumb from "@/Utils/BreadCrumb_Nav";

export default function Section_Header_Container({Lesson}:{Lesson:Lesson_Interface}) {
  return (
    <header className="w-full h-[132px] flex flex-col justify-center items-center bg-accent">
        {/*Bread Crumb*/}
        <Breadcrumb />
        {/*Section Title*/}
        <section className="w-[91.41%] h-[70px]  flex justify-start items-center">
            <h1 className="text-4xl font-bold text-foreground">{Lesson?.title}</h1>
        </section>
    </header>
  )
}
