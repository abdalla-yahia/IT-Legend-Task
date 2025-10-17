import { Exam_Interface } from "./Exam_Interface"

export interface Lesson_Interface {
    id: number,
    title: string,
    duration: string,
    completed: boolean,
    isexame:boolean,
    questions?:Exam_Interface
    time?:number,
    videoUrl:string
    posterUrl?:string
    pdf?:string
}