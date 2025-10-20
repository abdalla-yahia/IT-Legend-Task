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
            <li className="cursor-pointer hover:text-primary text-lg px-2 py-1 rounded-full bg-accent border border-[#ddd] shadow">
                <Link href={'#Curriculm'} >
                            <icon.MdOutlinePlayLesson title="Curriculm" className="inline-block mr-1 mb-0.5 text-lg md:text-xl"/>
                </Link>
            </li>
            <li className="cursor-pointer hover:text-primary text-lg px-2 py-1 rounded-full bg-accent border border-[#ddd] shadow">
                <Link href={'#Comments'} >
                        <icon.LiaCommentsSolid title="Comments" className="inline-block mr-1 mb-0.5 text-lg md:text-xl"/>
                </Link>
            </li>
            <li className="cursor-pointer hover:text-primary text-lg px-2 py-1 rounded-full bg-accent border border-[#ddd] shadow">
                <Link onClick={()=>setToggleQuestionForm((prev)=>!prev)} href={''} >
                        <icon.LiaQuestionSolid title="Questions" className="inline-block mr-1 mb-0.5 text-lg md:text-xl"/>
                </Link>
            </li>
            <li className="cursor-pointer hover:text-primary text-lg px-2 py-1 rounded-full bg-accent border border-[#ddd] shadow">
                <Link onClick={()=>setToggleLeaderBoard((prev)=>!prev)} href={''} >
                            <icon.GrAchievement title="LeadrBoard" className="inline-block mr-1 mb-0.5 text-lg md:text-xl"/>
                </Link>
            </li>
        </ul>

    </nav>
  )
}
