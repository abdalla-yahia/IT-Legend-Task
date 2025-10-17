import { Comment_Interface } from "@/Interfaces/Comment_Interface";
import { Exam_Interface } from "@/Interfaces/Exam_Interface";
import { Lesson_Interface } from "@/Interfaces/Lesson_Interface";
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    AllLessons:[] as Lesson_Interface[],
    AllQuestions:[] as Lesson_Interface[],
    Lesson:{} as Lesson_Interface,
    LessonPdf:'',
    AllComments:[] as Comment_Interface[],
    Exam:{} as Exam_Interface,
    loading:true,
    error:null
}

const Lesson_Slice = createSlice({
    name:'Lessons',
    initialState,
    reducers:{
        setAllLessons:(state,action)=>{
            state.AllLessons = action.payload
        },
        setOneLesson:(state,action)=>{
            state.Lesson = action.payload
        },
        getLessonById:(state,action)=>{
            state?.AllLessons?.filter(lesson=>lesson.id === action.payload)
        },
        setAllComments:(state,action)=>{
            state.AllComments = action.payload
        },
        setAnewComment:(state,action)=>{
            state.AllComments.push(action.payload)
        },
        setAnewQuestion:(state,action)=>{
            state.AllQuestions.push(action.payload)
        },
        setLessonPdf:(state,action)=>{
            state.LessonPdf = action.payload
        },
        setExam : (state,action)=>{
            state.Exam = action.payload
        }
    }
})

export default Lesson_Slice.reducer
export const {setAllLessons,setOneLesson,getLessonById,setAllComments,setAnewComment,setAnewQuestion,setLessonPdf,setExam} = Lesson_Slice.actions