import { createSlice } from "@reduxjs/toolkit";
import {Course_Interface} from '@/Interfaces/Course_Interface'
import { Comment_Interface } from "@/Interfaces/Comment_Interface";

const initialState = {
    AllCourses:[] as Course_Interface[],
    courses: [] as Course_Interface[],
    selectedCourse: null as Course_Interface | null,
    AllComments:[] as Comment_Interface[],
    
}
export const Course_Slice = createSlice({
    name: 'Course_Slice',
    initialState,
    reducers: {
        setAllCourses: (state, action) => {
            state.AllCourses = action.payload;
        },
        setCourses: (state, action) => {
            state.courses = action.payload;
        },
         setAllComments:(state,action)=>{
            state.AllComments = action.payload
        },
        setAnewComment:(state,action)=>{
            state.AllComments.push(action.payload)
        },
    },
});
export const { setAllCourses,setCourses,setAllComments,setAnewComment } = Course_Slice.actions;
export default Course_Slice.reducer;