import { Comment_Interface } from "./Comment_Interface";
import { Week_Interface } from "./Week_Interface";

export interface Course_Interface {
    id: string,
    title:string,
    duration: string,
    Lessons: number,
    isPurchased: boolean,
    enrolled: string,
    Language: string,
    instractor: string,
    level: string,
    category: string,
    rating: string,
    Curriculm: Week_Interface[],
    comments:Comment_Interface[]
}