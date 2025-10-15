export interface Lesson_Interface {
    id: number,
    title: string,
    duration: string,
    completed: boolean,
    isexame:boolean,
    questions?:number,
    time?:number,
    videoUrl:string
    posterUrl?:string
}