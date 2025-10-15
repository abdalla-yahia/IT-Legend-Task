import { UseLeaderBoardContext } from "@/Contexts/Leader_Borad_Context";
import { UseQuestionContext } from "@/Contexts/Show_Question_Form_Context";
import Link from "next/link";

export default function NavLinks() {
    const {setToggleQuestionForm} = UseQuestionContext();
    const {setToggleLeaderBoard} = UseLeaderBoardContext()
  return (
    <nav className="w-full">
        <ul className="w-full flex justify-start items-center gap-1 md:gap-3">
            <li className="cursor-pointer hover:text-primary text-sm md:text-lg px-1.5 md:px-2 py-1 rounded-full bg-accent border border-[#ddd]">
                <Link href={'#Curriculm'} className="">Curriculm</Link>
            </li>
            <li className="cursor-pointer hover:text-primary text-sm md:text-lg px-1.5 md:px-2 py-1 rounded-full bg-accent border border-[#ddd]">
                <Link href={'#Comments'} className="">Comments</Link>
            </li>
            <li className="cursor-pointer hover:text-primary text-sm md:text-lg px-1.5 md:px-2 py-1 rounded-full bg-accent border border-[#ddd]">
                <Link onClick={()=>setToggleQuestionForm((prev)=>!prev)} href={''} className="">Questions</Link>
            </li>
            <li className="cursor-pointer hover:text-primary text-sm md:text-lg px-1.5 md:px-2 py-1 rounded-full bg-accent border border-[#ddd]">
                <Link onClick={()=>setToggleLeaderBoard((prev)=>!prev)} href={''} className="">LeadrBoard</Link>
            </li>
        </ul>

    </nav>
  )
}
