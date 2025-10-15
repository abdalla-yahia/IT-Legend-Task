'use client'
import { RootState, useAppDispatch, useAppSelector } from "@/Lib/Store/store";
import { setAnewQuestion} from '@/Features/Slices/Lesson_Slice'
import { useActionState, useEffect } from "react";
import { Question_Interface } from "@/Interfaces/Question_Interface";
import { toast } from "react-toastify";
import { CreateAnewQuestionValidation } from "@/Validation/Question_Validation";

export default function Add_New_Question_Hook() {
  const {AllQuestions} = useAppSelector((state:RootState)=>state.lesson)
  const dispatch = useAppDispatch()
  const date = new Date(Date.now()).toLocaleString('en',{year:'numeric',month:'short',day:'2-digit'})
  
  // Set Anew Comment Handeller
  const SetAnewQuestionHandeler = (prevstate:Question_Interface,formdata:FormData):Question_Interface=>{
    const formState = {
      ...prevstate,
      id:AllQuestions?.length + 1,
      name:'Your Name',
      date:date,
      image:'https://randomuser.me/api/portraits/men/35.jpg',
      question:formdata.get('Question') as string
    }
    //Check Data Validation
    const validation = CreateAnewQuestionValidation.safeParse(formState)
    if(!validation?.success){
      toast.warn(validation?.error?.issues?.map(e=>e.message).join(' , '))
      return {...formState, success: false, message: "Question is required" };
    }
    dispatch(setAnewQuestion(formState))
    return { ...formState,success: true, message: "Question added successfully" }
  }
  const initialState ={
    id:0,
    name:'',
    date:'',
    image:'',
    question:'',
    success:false,
    message:''
  }
  const [state,actionstate] = useActionState(SetAnewQuestionHandeler,initialState)
  
  //Notifaction For Success Add Comment
  useEffect(()=>{
      if(state?.success === true){
        toast.success(state?.message)
      }
  },[state])

  return {actionstate,state}
}
