import { Lesson_Interface } from "./Lesson_Interface";

export interface Week_Interface {
    id: number,
    title: string,
    description: string,
    lessons: Lesson_Interface[]
}