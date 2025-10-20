'use client'
import {UseLeaderBoardContext} from '@/Contexts/Leader_Borad_Context';
import data from '@/DB/Leader_Message.json';
import { useEffect, useState } from "react";

export default function Leader_Board_Hook() {
      const progress = parseInt(localStorage.getItem('student_progress') as string) || 0
      const {toggleLeaderBoard,setToggleLeaderBoard} = UseLeaderBoardContext();
      const message = data.reduce((a, b) =>Math.abs(parseInt(a.progress) - progress) < Math.abs(parseInt(b.progress) - progress) ? a : b);
      // Get Watched Videos And Pdfs From LocalStorage
      const filesClicked = localStorage.getItem('file_clicked') ? JSON.parse(localStorage.getItem('file_clicked') as string) : [];
      const VideosWatched= filesClicked.filter((item:{id:number,video:boolean})=>item?.video)?.length
      const PdfWatched= filesClicked.filter((item:{id:number,pdf:boolean})=>item?.pdf)?.length
      //Get Total Quizzes Score From LocalStorage
      const Exams_Answerd = localStorage.getItem('exams_Answerd') ? JSON.parse(localStorage.getItem('exams_Answerd') as string) : [];
      const TotalStudentScore = Exams_Answerd?.reduce((total: number, exam: { totalScore: number }) => total + exam.totalScore, 0);
      const TotalExamsScore = Exams_Answerd?.reduce((total: number, exam: { ExamTotalScore: number }) => total + exam.ExamTotalScore, 0);
      const QuizzesScorePercent = TotalExamsScore > 0 ? Math.round((TotalStudentScore / TotalExamsScore) * 100) : 0;
        const [Rankings, setRankings] = useState<Array<{id:number,name:string,score:number,image:string}>>([]);
        const [Achievements, setAchievements] = useState<boolean>(true);
        const Course={
          title :'Starting SEO As Your Home'
        }
        //Set Initial Rankings
        useEffect(()=>{
        //Students Rank  & Achievements Modal
        const RankOfStudents = [
        { id: 1, name: 'Mohamed Ali', score: 100, image: '/Images/36.jpg' },
        { id: 2, name: 'Sara Ahmed', score: 92, image: '/Images/37.jpg' },
        { id: 3, name: 'Omar Khaled', score: 90, image: '/Images/38.jpg' },
        { id: 4, name: 'Laila Hassan', score: 88, image: '/Images/39.jpg' },
        { id: 5, name: 'Alia Sayed', score: 28, image: '/Images/40.jpg' },
        ];
      setRankings(RankOfStudents.sort((a,b)=>b.score - a.score));
      },[])
      
      //Data Of Logged Student
      const loggedStudent = {
        id: 0,
        name: 'Abdalla Yahia',
        score: progress,
        image: '/Images/15.jpg'
      };
      // Add Logged Student To The Rank If Not Exists
      useEffect(() => {
      // Check if the rank of logged student is greater than last started student in the list
      const lastStudentInRank = Rankings[Rankings.length - 1];
      
      if (loggedStudent?.score > lastStudentInRank?.score) {
      // Check if student already exists in the rank
        const studentExists = Rankings.some(student => student.name === loggedStudent.name);
        if (!studentExists) {
          setRankings(prev=>[...prev,loggedStudent]);
        }
      }
      }, [Rankings, progress]);
      
    
return {Course,toggleLeaderBoard,setToggleLeaderBoard,setAchievements,Achievements,Rankings,loggedStudent,message,VideosWatched,PdfWatched,TotalStudentScore,TotalExamsScore,QuizzesScorePercent};
}
