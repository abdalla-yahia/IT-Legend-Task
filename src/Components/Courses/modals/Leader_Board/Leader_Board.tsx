'use client'
import { MdClose } from "react-icons/md";

import Progress_Component from "../../Progress/Progress";
import Leader_Board_Hook from "@/Hooks/Details/Leader_Board_Hook";
import Image from "next/image";

export default function Leader_Board() {
  const {Course,toggleLeaderBoard,setToggleLeaderBoard,setAchievements,Achievements,Rankings,loggedStudent,message,VideosWatched,PdfWatched,TotalStudentScore,TotalExamsScore,QuizzesScorePercent} = Leader_Board_Hook();
  //Draw Medal For Top 3 Students
      const StudentRankMedal = (index:number)=>{
        switch(index){
                case 0 : return <span>🥇</span>;
                case 1 : return <span>🥈</span>;
                case 2 : return <span>🥉</span>;
                default : return <span></span>;
              }
      }
  return (
    <section className={`${toggleLeaderBoard ? 'flex' : 'hidden'} justify-center items-center fixed top-0 left-0 bg-black/60 w-full min-h-screen  z-50`}>
      <section className={`${toggleLeaderBoard ? 'flex' : 'hidden'} w-[80%] md:w-[50%] bg-[#fff] flex flex-col justify-center items-start gap-5 scrollbar-none h-screen overflow-y-scroll absolute top-[50%] px-8 py-5 left-[50%] -translate-1/2 z-50`}>
        {/*Close Button*/}
        <MdClose title="Close" onClick={() => setToggleLeaderBoard(prev => !prev)} className="cursor-pointer text-red-600 font-extrabold text-xl absolute top-5 right-5 hover:scale-125 transition-all duration-500" />
        {/*Top Title*/}
        <div className="w-full flex flex-col justify-center items-center">
          {/*Course Title*/}
          <h2 className="text-lg md:text-2xl font-bold w-full text-center">{Course?.title}</h2>
          {/*Leader Board*/}
          <h3 className="text-xl font-bold w-full text-center">Leader Borad</h3>
        </div>
        {/*Leader Message*/}
        <div className="bg-[#f5f9fa]  p-4 flex rounded-2xl w-full justify-between items-center gap-3">
          <p>{message?.message}</p>
          <span className="text-2xl md:text-4xl">{message?.icon}</span>
        </div>
        {/*Progress Component*/}
        <div className="w-full flex justify-center items-center my-8">
         <Progress_Component />
        </div>
        {/*Achievements & Leadrboard*/}
        <section className="w-full flex flex-col overflow-y-scroll scrollbar-none justify-start items-start gap-3">
          <div className="w-full flex justify-start items-center gap-3">
            <h3 onClick={()=>setAchievements(prev=>!prev)} className={`font-bold cursor-pointer text-sm md:text-lg p-2 rounded-2xl ${Achievements ? 'bg-[#d6eff5]':'bg-[#f5f9fa]/50'}`}>Achievements</h3>
            <h3 onClick={()=>setAchievements(prev=>!prev)} className={`font-bold cursor-pointer text-sm md:text-lg p-2 rounded-2xl ${!Achievements ? 'bg-[#d6eff5]':'bg-[#f5f9fa]/50'}`}>Leader Board</h3>
          </div>
          {/*Achievements*/}
          {Achievements && <ul className={`bg-[#f5f9fa] flex flex-col justify-start items-center p-1 md:p-4 rounded-lg w-full gap-1 md:gap-4`}>
            <li className="p-3 bg-white rounded-2xl w-full">Completed Watched <span className="text-lg font-bold text-gray-600">{VideosWatched}</span> Videos</li>
            <li className="p-3 bg-white rounded-2xl w-full">Completed Reading <span className="text-lg font-bold text-gray-600">{PdfWatched}</span> Files</li>
            <li className="p-3 bg-white rounded-2xl w-full">Scored <span className="text-lg font-bold text-gray-600">{QuizzesScorePercent || 0}%</span> ({TotalStudentScore} points out of {TotalExamsScore}) in Quizzes</li>
          </ul>}
          {/*Leader Board*/}
            {!Achievements && <ul className={`bg-[#f5f9fa] flex flex-col justify-start items-center p-1 md:p-4 rounded-lg w-full gap-1 md:gap-4`}>
              {
                Rankings?.sort((a,b)=>b.score - a.score).slice(0,5).map((student,index)=>(
                  <li key={student?.id} className={`${student?.name === loggedStudent?.name ? 'bg-[#d6eff5] text-amber-600':'bg-white'} p-3  rounded-2xl w-full flex justify-between items-center gap-3`}>
                    <div className="flex justify-start items-center gap-3">
                      <Image loading="lazy" src={student?.image} alt={student?.name} className="w-10 h-10 rounded-full object-cover" width={50} height={50}/>
                      <div className="flex flex-col justify-start items-start">
                        <span title={student?.name} className="text-sm md:text-lg font-bold line-clamp-1 text-gray-600">{student?.name}</span>
                        <span title={student?.score.toString()} className="text-sm text-gray-500">Score: {student?.score}</span>
                      </div>
                    </div>
                    <span className="font-bold text-lg">
                      {
                      student?.score === 100 ? '🏆' :
                      StudentRankMedal(index)
                      }
                      #{index+1}
                      </span>
                  </li>
                ))
              }
            </ul>}
        </section>
      </section>
    </section>
  )
}
