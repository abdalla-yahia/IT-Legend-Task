export interface Exam_Interface {
    id:number
    time:number,
    questions:Question_Interface[]
}
export interface Question_Interface {
    id:number
    question: string;
    options: string[];
    correctAnswer: string;
    point:number
}

export interface UserAnswer_Interface {
    id:number,
    question:string,
    userAnswer:string,
    correctAnswer: string;
    point:number
}