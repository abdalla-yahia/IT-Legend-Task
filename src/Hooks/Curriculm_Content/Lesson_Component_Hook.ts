import {setExam, setLessonPdf, setOneLesson} from '@/Features/Slices/Lesson_Slice';
import { useAppDispatch } from "@/Lib/Store/store";
import { UsePdfContext } from "@/Contexts/Pdf_Context";
import { UseExamContext } from "@/Contexts/Exam_Context";
import { useEffect, useState } from "react";
import { Exam_Interface } from "@/Interfaces/Exam_Interface";
import { Lesson_Interface } from '@/Interfaces/Lesson_Interface';

export default function Lesson_Component_Hook({lesson}:{lesson:Lesson_Interface}) {
    const [ToggleShowIcon,setToggleShowIcon] = useState(true)
    const [LessonShown,setLessonShown] = useState(false)

    const dispatch = useAppDispatch()
    const {setTogglePdf} = UsePdfContext()
    const {setToggleExam} = UseExamContext()

    //Locked Exam If It Answer Before
    useEffect(()=>{
    if(localStorage.getItem('exams_Answerd')){
            const ArrayOfExams = JSON.parse(localStorage.getItem('exams_Answerd') as string)
            const FindExam = ArrayOfExams?.find((exam:Exam_Interface)=>exam?.id == lesson?.questions?.id)
            if(FindExam){
                setToggleShowIcon(false)
            }
        }
    },[])
    // Change Lesson Locked Icon If User Clicked On It Before
    useEffect(()=>{
        if(localStorage.getItem('file_clicked')){
            const arrayOfCleckedFile = JSON.parse(localStorage.getItem('file_clicked') as string)
            const findElement = arrayOfCleckedFile?.find((element:{id:number,video:boolean})=>Number(element?.id) === lesson?.id)
            if(findElement){
                setLessonShown(true)
            }
        }
    },[setTogglePdf,setToggleExam])
    //Click On Pdf Icon Handeler
    const ClickPdfIconHandller =()=>{
        const file_clicked = {
            id:lesson?.id,
            pdf:true,
        }
        if(!lesson?.isexame){
            setTogglePdf(prev=>!prev)
            dispatch(setLessonPdf(lesson?.pdf))

            // Set Data Of File On localStorage Thats Clicked By Student
        if(localStorage.getItem('file_clicked')){
            const arrayOfCleckedFile = JSON.parse(localStorage.getItem('file_clicked') as string)
            const findElement = arrayOfCleckedFile?.find((element:{id:number,pdf:boolean})=>Number(element?.id) === file_clicked?.id && element?.pdf === true)
            if(!findElement){
                arrayOfCleckedFile.push(file_clicked)
                //Increment Progress Of Student On localStorage
                const increamentProgress = localStorage.getItem('student_progress') ? parseInt(localStorage.getItem('student_progress') as string ) + 2 : 2
                localStorage.setItem('student_progress', increamentProgress.toString())
        
            }
            localStorage.setItem('file_clicked', JSON.stringify(arrayOfCleckedFile))
        }else {
            localStorage.setItem('file_clicked', JSON.stringify([file_clicked])) 
            //Increment Progress Of Student On localStorage
            const increamentProgress = localStorage.getItem('student_progress') ? parseInt(localStorage.getItem('student_progress') as string ) + 2 : 2
            localStorage.setItem('student_progress', increamentProgress.toString())
        
        }
        }else {
            setToggleExam(prev=>!prev)
            setToggleShowIcon(false)
            dispatch(setExam(lesson?.questions))
        }
    }
    //Clicked Lesson Video Handeller
    const ClickLessonVideoHandller = () =>{
        const file_clicked = {
            id:lesson?.id,
            video:true,
        }
        if(!lesson?.isexame){
            dispatch(setOneLesson(lesson))
            // Set Data Of File On localStorage Thats Clicked By Student
            if(localStorage.getItem('file_clicked')){
                const arrayOfCleckedFile = JSON.parse(localStorage.getItem('file_clicked') as string)
                const findElement = arrayOfCleckedFile?.find((element:{id:number,video:boolean})=>Number(element?.id) === file_clicked?.id && element?.video === true)
                if(!findElement){
                    arrayOfCleckedFile.push(file_clicked)
                    //Increment Progress Of Student On localStorage
                    const increamentProgress = localStorage.getItem('student_progress') ? parseInt(localStorage.getItem('student_progress') as string ) + 2 : 2
                    localStorage.setItem('student_progress', increamentProgress.toString())
                }
                localStorage.setItem('file_clicked', JSON.stringify(arrayOfCleckedFile))
            }else {
                localStorage.setItem('file_clicked', JSON.stringify([file_clicked])) 
                //Increment Progress Of Student On localStorage
                const increamentProgress = localStorage.getItem('student_progress') ? parseInt(localStorage.getItem('student_progress') as string ) + 2 : 2
                localStorage.setItem('student_progress', increamentProgress.toString())
            
            }
        }else {
            setToggleExam(prev=>!prev)
            setToggleShowIcon(false)
            dispatch(setExam(lesson?.questions))
        }
    } 

  return {ClickPdfIconHandller,ClickLessonVideoHandller,ToggleShowIcon,LessonShown}
}
