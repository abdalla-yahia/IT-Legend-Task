'use client'
import { RootState, useAppDispatch, useAppSelector } from "@/Lib/Store/store";
import {setAnewComment} from '@/Features/Slices/Lesson_Slice'
import { useActionState, useEffect } from "react";
import { Comment_Interface } from "@/Interfaces/Comment_Interface";
import { CreateAnewCommentValidation } from "@/Validation/Comment_Validation";
import { toast } from "react-toastify";

export default function Add_New_Comment_Hook() {
  const {AllComments} = useAppSelector((state:RootState)=>state.lesson)
  const dispatch = useAppDispatch()
  const date = new Date(Date.now()).toLocaleString('en',{year:'numeric',month:'short',day:'2-digit'})
  const loggeduser = {
    name:'Abdalla Yahia',
    image:'/Images/15.jpg'
  }
  // Set Anew Comment Handeller
  const SetAnewCommentHandeler = (prevstate:Comment_Interface,formdata:FormData):Comment_Interface=>{
    const formState = {
      ...prevstate,
      id:AllComments?.length + 1,
      name:loggeduser?.name,
      date:date,
      image:loggeduser?.image,
      body:formdata.get('Comment') as string
    }
    //Check Data Validation
    const validation = CreateAnewCommentValidation.safeParse(formState)
    if(!validation?.success){
      toast.warn(validation?.error?.issues?.map(e=>e.message).join(' , '))
      return {...formState, success: false, message: "Comment is required" };
    }
    dispatch(setAnewComment(formState))
    return { ...formState,success: true, message: "Comment added successfully" }
  }
  const initialState ={
    id:0,
    name:'',
    date:'',
    image:'',
    body:'',
    success:false,
    message:''
  }
  const [state,actionstate] = useActionState(SetAnewCommentHandeler,initialState)
  
  //Notifaction For Success Add Comment
  useEffect(()=>{
      if(state?.success === true){
        toast.success(state?.message)
      }
  },[state])

  return [actionstate]
}
