import { MdClose } from "react-icons/md";

import Progress_Component from "../../Progress/Progress";
import Leader_Board_Hook from "@/Hooks/Details/Leader_Board_Hook";

export default function Leader_Board() {
  const { toggleLeaderBoard, setToggleLeaderBoard, message, VideosWatched, PdfWatched, TotalStudentScore, TotalExamsScore, QuizzesScorePercent } = Leader_Board_Hook();
  const Course={
    title :'Starting SEO As Your Home'
  }
  return (
    <section className={`${toggleLeaderBoard ? 'flex' : 'hidden'} justify-center items-center fixed top-0 left-0 bg-black/60 w-full min-h-screen z-50`}>
      <section className={`${toggleLeaderBoard ? 'flex' : 'hidden'} w-[80%] md:w-[50%] bg-[#fff] flex flex-col justify-center items-start gap-5 absolute top-[50%] p-8 left-[50%] -translate-1/2 z-50`}>
        {/*Course Title*/}
        <h2 className="text-lg md:text-2xl font-bold w-full text-center">{Course?.title}</h2>
        {/*Leader Board*/}
        <h3 className="text-xl font-bold w-full text-center">Leader Borad</h3>
        {/*Close Button*/}
        <MdClose title="Close" onClick={() => setToggleLeaderBoard(prev => !prev)} className="cursor-pointer text-red-600 font-extrabold text-xl absolute top-5 right-5 hover:scale-125 transition-all duration-500" />
        {/*Leader Message*/}
        <div className="bg-[#f5f9fa]  p-4 flex rounded-2xl">
          <p>{message?.message}</p>
          <span>{message?.icon}</span>
        </div>
        {/*Progress Component*/}
        <Progress_Component />
        {/*Achievements*/}
        <section className="w-full flex flex-col justify-start items-start gap-3">
          <h3 className="font-bold text-lg">Achievements</h3>
          <ul className=" bg-[#f5f9fa] flex flex-col justify-start items-center p-4 rounded-lg w-full gap-4">
            <li className="p-3 bg-white rounded-2xl w-full">Completed Watched <span className="text-lg font-bold text-gray-600">{VideosWatched}</span> Videos</li>
            <li className="p-3 bg-white rounded-2xl w-full">Completed Reading <span className="text-lg font-bold text-gray-600">{PdfWatched}</span> Files</li>
            <li className="p-3 bg-white rounded-2xl w-full">Scored <span className="text-lg font-bold text-gray-600">{QuizzesScorePercent || 0}%</span> ({TotalStudentScore} points out of {TotalExamsScore}) in Quizzes</li>
          </ul>
        </section>

      </section>
    </section>
  )
}
