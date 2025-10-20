'use client'
import { useAppDispatch } from "@/Lib/Store/store";
import { useEffect } from "react";
import Provider_Contextes from "@/Contexts/Provider_Contextes";
import data from '@/DB/Curriculm_Content.json';
import { Course_Interface } from "@/Interfaces/Course_Interface";
import { setCourses } from "@/Features/Slices/Course_Slice";

export default function MainLayout({children}: Readonly<{children: React.ReactNode;}>) {
  
  const dispatch = useAppDispatch();
  //Set Purchased Courses Data
  useEffect(()=>{
    const purchasedCourses = data?.filter((course:Course_Interface)=>course?.isPurchased);
    dispatch(setCourses(purchasedCourses))
  },[])

  return (
    <>
      <Provider_Contextes>
        {children}
      </Provider_Contextes>
    </>

  );
}
