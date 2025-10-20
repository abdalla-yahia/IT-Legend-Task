import {UseLeaderBoardContext} from '@/Contexts/Leader_Borad_Context';
import data from '@/DB/Leader_Message.json';

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
  
      return {toggleLeaderBoard,setToggleLeaderBoard,message,VideosWatched,PdfWatched,TotalStudentScore,TotalExamsScore,QuizzesScorePercent};
}
