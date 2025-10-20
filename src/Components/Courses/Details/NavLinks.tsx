import { UseLeaderBoardContext } from "@/Contexts/Leader_Borad_Context";
import { UseQuestionContext } from "@/Contexts/Show_Question_Form_Context";
import Link from "next/link";
import * as icon from '@/Utils/Icons';
export default function NavLinks() {
    const {setToggleQuestionForm} = UseQuestionContext();
    const {setToggleLeaderBoard} = UseLeaderBoardContext()
  return (
    <nav className="w-full">
        <ul className="w-full flex justify-start items-center gap-3">
                <Link href={'#Curriculm'} >
                    <li className="cursor-pointer hover:text-primary text-lg px-2 py-1 rounded-full bg-accent border border-[#ddd] shadow">
                            <icon.MdOutlinePlayLesson title="Curriculm" className="inline-block mr-1 mb-0.5 text-lg md:text-xl"/>
                    </li>
                </Link>
                <Link href={'#Comments'} >
                    <li className="cursor-pointer hover:text-primary text-lg px-2 py-1 rounded-full bg-accent border border-[#ddd] shadow">
                        <icon.LiaCommentsSolid title="Comments" className="inline-block mr-1 mb-0.5 text-lg md:text-xl"/>
                    </li>
                </Link>
                <Link onClick={()=>setToggleQuestionForm((prev)=>!prev)} href={''} >
                    <li className="cursor-pointer hover:text-primary text-lg px-2 py-1 rounded-full bg-accent border border-[#ddd] shadow">
                        <icon.LiaQuestionSolid title="Questions" className="inline-block mr-1 mb-0.5 text-lg md:text-xl"/>
                    </li>
                </Link>
                <Link onClick={()=>setToggleLeaderBoard((prev)=>!prev)} href={''} >
                    <li className="cursor-pointer hover:text-primary text-lg px-2 py-1 rounded-full bg-accent border border-[#ddd] shadow">
                            <icon.GrAchievement title="LeadrBoard" className="inline-block mr-1 mb-0.5 text-lg md:text-xl"/>
                    </li>
                </Link>
        </ul>

    </nav>
  )
}
