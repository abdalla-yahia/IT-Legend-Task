import { UseExamContext } from "@/Contexts/Exam_Context";
import { RootState, useAppSelector } from "@/Lib/Store/store";
import { useEffect, useState } from "react";
import { Exam_Interface, UserAnswer_Interface } from "@/Interfaces/Exam_Interface";
import swal from 'sweetalert';

export default function Exam_Container_Hook() {
      const {Exam} = useAppSelector((state:RootState)=>state.lesson);
      const {toggleExam,setToggleExam} = UseExamContext();
      const [questionIndex,setQuestionIndex] = useState(0)
      const [userAnswers,setUserAnswers] = useState<UserAnswer_Interface[]>([]);
      const [examResult,setExamResult] = useState(0)
    
     // Scroll Window To Question
      const scrollToQuestion = (index: number) => {
        setQuestionIndex(index)
      };
      //Submit userAnswers
      const SubmitAnswersHandeller =()=>{
           const totalScore = userAnswers?.reduce((total, answer) => total + (answer.userAnswer === answer.correctAnswer ? answer.point : 0), 0);
          const ExamTotalScore = Exam?.questions?.reduce((total, question) => total + question.point, 0);
          const data = {id:Exam?.id,question:Exam?.questions,totalScore,ExamTotalScore}
        //Set Exam Answered On localStorage To Lock It 
        if(localStorage.getItem('exams_Answerd')){
          const ArrayOfExams = JSON.parse(localStorage.getItem('exams_Answerd') as string)
          const FindExam = ArrayOfExams?.find((exam:Exam_Interface)=>exam?.id == Exam?.id)

          if(!FindExam){
            ArrayOfExams.push(data)
            localStorage.setItem('exams_Answerd',JSON.stringify(ArrayOfExams))
            //Review Exam Result And Set Degree Of Exam
            userAnswers?.map(answer=>{
              if(answer?.userAnswer === answer?.correctAnswer){
                setExamResult(prev=>prev + answer?.point)
              }
              })
          }
        }else{
          localStorage.setItem('exams_Answerd',JSON.stringify([data]))
          //Review Exam Result And Set Degree Of Exam
            userAnswers?.map(answer=>{
              if(answer?.userAnswer === answer?.correctAnswer){
                setExamResult(prev=>prev + answer?.point)
              }
              })
        }
        //Close Exam Form After Submit Answers
        setToggleExam(false)
      }
      //Increament Student Progress By Exam Result
      useEffect(()=>{
         if(localStorage.getItem('student_progress')){
          const progress = Number(localStorage.getItem('student_progress')) + examResult
          localStorage.setItem('student_progress',progress.toString())
         }else{
          localStorage.setItem('student_progress',examResult.toString())
         }
      },[examResult])
    
      //Close Exam Handeller
      const ForceCloseExam = ()=>{
            swal({
                    title: "Are You Sure You Want To Close This Exam",
                    text: "Once You Close It, You Will Faild To Open It Again And You Will Lose Points Of Exam",
                    icon: "warning",
                    dangerMode: true,
                    buttons: ["Cancel", "Delete"]
                })
                .then((willClosed) => {
                  if (willClosed) {
                    const ExamTotalScore = Exam?.questions?.reduce((total, question) => total + question.point, 0);
                    const data = {id:Exam?.id,question:Exam?.questions,totalScore:0,ExamTotalScore}
                 //Set Data Of Exam On localStorage To Lock It 
                  if(localStorage.getItem('exams_Answerd')){
                    const ArrayOfExams = JSON.parse(localStorage.getItem('exams_Answerd') as string)
                    const FindExam = ArrayOfExams?.find((exam:Exam_Interface)=>exam?.id == Exam?.id)

                    if(!FindExam){
                      ArrayOfExams.push(data)
                      localStorage.setItem('exams_Answerd',JSON.stringify(ArrayOfExams))
                    }
                  }else{
                    localStorage.setItem('exams_Answerd',JSON.stringify([data]))
                  }
                    swal("Exam Closed successfully!", {
                      icon: "success",
                    });
                    //Close Exam Page
                    setToggleExam((prev)=>!prev)
                    window.location.reload();
                  } else {
                    swal("The Exam Is Safe and Was Not Closed, Continues Your Exam وبلاش إستعباط");
                  }
                });
       
      }
    
  return {toggleExam,ForceCloseExam,Exam,scrollToQuestion,questionIndex,SubmitAnswersHandeller,userAnswers,setUserAnswers}
}
