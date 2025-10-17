import { Lesson_Interface } from "@/Interfaces/Lesson_Interface";
import { PiFileTextLight } from "react-icons/pi";
import { SlLock } from "react-icons/sl";
import {setExam, setLessonPdf, setOneLesson} from '@/Features/Slices/Lesson_Slice';
import { useAppDispatch } from "@/Lib/Store/store";
import { UsePdfContext } from "@/Contexts/Pdf_Context";
import { UseExamContext } from "@/Contexts/Exam_Context";
import { useEffect, useState } from "react";
import { BsUnlock } from "react-icons/bs";
import { Exam_Interface } from "@/Interfaces/Exam_Interface";
import { MdCheck } from "react-icons/md";
export default function Lesson_Component({lesson}:{lesson:Lesson_Interface}) {
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

  return (
    <li  className="flex w-full justify-between items-center border-b border-b-[#ddd] pb-3">
        <div className="flex w-[50%] justify-start items-center gap-2">
            <PiFileTextLight onClick={()=>ClickPdfIconHandller()} className={`${lesson?.isexame ? "hover:text-blue-600 hover:scale-125 transition-all duration-300":"hover:text-red-600"} ${!ToggleShowIcon && 'hidden'} cursor-pointer`}/>
            <span onClick={()=>ClickLessonVideoHandller()} className={`${(lesson?.isexame && !ToggleShowIcon) ? 'cursor-not-allowed':'cursor-pointer'} capitalize  hover:text-primary`} >{lesson?.title}</span>
        </div>
        {/*Show Lock || UnLock Or Exam Info*/}
            <div className="w-[50%] flex justify-end">
                {
                    lesson?.isexame ? 
                    (
                        /*Show Box Inform User That Exam Is Answerd */
                        (ToggleShowIcon == false) ?
                        <div className="flex justify-center items-center gap-2">
                            <MdCheck className="text-green-500 text-2xl font-bold"/>
                            <span className="bg-amber-100 text-amber-600 px-5 py-2">Exam Answerd Before</span>
                        </div> :
                        /*Show Box contain Info Of Exam Is Not Answerd */
                        <div className="flex gap-2 w-full justify-end">
                            <span className="flex flex-nowrap p-1 bg-green-100 text-green-500">{lesson?.questions?.questions?.length } Questions</span>
                            <span className="flex flex-nowrap p-1 bg-red-100 text-red-500">{lesson?.time } Minutes</span>
                        </div> 
                        
                    ):
                    (
                            LessonShown ? (
                                <BsUnlock />
                            ):(
                                <SlLock />
                            ) 
                )
                }
            </div>
    </li>
  )
}
