import { MdClose } from "react-icons/md";
import {UseLeaderBoardContext} from '@/Contexts/Leader_Borad_Context';
import data from '@/DB/Leader_Message.json';

export default function Leader_Board() {
  const progress = parseInt(localStorage.getItem('student_progress') as string) || 0
  const {toggleLeaderBoard,setToggleLeaderBoard} = UseLeaderBoardContext();
  const message = data.reduce((a, b) =>Math.abs(parseInt(a.progress) - progress) < Math.abs(parseInt(b.progress) - progress) ? a : b);
  
  return (
    <section className={`${toggleLeaderBoard ? 'flex' :'hidden'} justify-center items-center fixed top-0 left-0 bg-black/30 w-full min-h-screen z-50`}>
          <section className={`${toggleLeaderBoard ? 'flex' :'hidden'} w-[50%] bg-[#fff] flex flex-col justify-center items-start gap-3 absolute top-[200px] p-5 left-[20%] z-50`}>
            {/*Close Button*/}
            <MdClose onClick={()=>setToggleLeaderBoard(prev=>!prev)} className="cursor-pointer text-red-600 font-extrabold text-xl absolute top-5 right-5 hover:scale-125 transition-all duration-500"/>
            {/*Leader Message*/}
            <div className="bg-[#f5f9fa] p-4 flex rounded-2xl">
              <p>{message?.message}</p>
              <span>{message?.icon}</span>
            </div>
          </section>
    </section>
  )
}
