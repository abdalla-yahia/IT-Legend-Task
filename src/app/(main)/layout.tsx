'use client'
import { setAllLessons, setOneLesson,setAllComments, setLessonPdf } from "@/Features/Slices/Lesson_Slice";
import { useAppDispatch } from "@/Lib/Store/store";
import { useEffect } from "react";
import {Curriculm,comments} from '@/DB/Curriculm_Content.json';
import Provider_Contextes from "@/Contexts/Provider_Contextes";
import { Week_Interface } from "@/Interfaces/Week_Interface";

export default function MainLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  const Lessons = Curriculm.map((week:Week_Interface)=>
    week?.lessons
  )
  const dispatch = useAppDispatch();
  //Set Default Data For First Time After Page Loaded
  useEffect(()=>{
    dispatch(setAllLessons([Lessons.map(lesson=>lesson)].flat(2)))
    dispatch(setOneLesson([Lessons.map(lesson=>lesson)].flat(2)[0]))
    dispatch(setAllComments(comments))
    dispatch(setLessonPdf("https://padlet-uploads.storage.googleapis.com/261624403/af3b1bf152c794129809116ebcdbfac9/Hey_Little_Ant_Graphic_Organizer_and_Anchor_Chart.pdf"))
  },[])

  return (
    <>
      <Provider_Contextes>
        {children}
      </Provider_Contextes>
    </>

  );
}
