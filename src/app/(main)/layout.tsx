'use client'
import { setAllLessons, setOneLesson,setAllComments } from "@/Features/Slices/Lesson_Slice";
import { useAppDispatch } from "@/Lib/Store/store";
import { useEffect } from "react";
import {Curriculm,comments} from '@/DB/Curriculm_Content.json';
import Provider_Contextes from "@/Contexts/Provider_Contextes";

export default function MainLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  const Lessons = Curriculm.map(week=>
    week?.lessons
  )
  const dispatch = useAppDispatch();
  useEffect(()=>{
    dispatch(setAllLessons([Lessons.map(lesson=>lesson)].flat(2)))
    dispatch(setOneLesson([Lessons.map(lesson=>lesson)].flat(2)[0]))
    dispatch(setAllComments(comments))
  },[])

  return (
    <>
      <Provider_Contextes>
        {children}
      </Provider_Contextes>
    </>

  );
}
