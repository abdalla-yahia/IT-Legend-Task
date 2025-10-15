import Link from "next/link";

export default function NavLinks() {
  return (
    <nav className="w-full">
        <ul className="w-full flex justify-start items-center gap-3">
            <li className="cursor-pointer hover:text-primary px-2 py-1 rounded-full bg-accent border border-[#ddd]">
                <Link href={'#Curriculm'} className="">Curriculm</Link>
            </li>
            <li className="cursor-pointer hover:text-primary px-2 py-1 rounded-full bg-accent border border-[#ddd]">
                <Link href={'#Comments'} className="">Comments</Link>
            </li>
            <li className="cursor-pointer hover:text-primary px-2 py-1 rounded-full bg-accent border border-[#ddd]">
                <Link href={'#'} className="">Questions</Link>
            </li>
            <li className="cursor-pointer hover:text-primary px-2 py-1 rounded-full bg-accent border border-[#ddd]">
                <Link href={'#'} className="">LeadrBoard</Link>
            </li>
        </ul>

    </nav>
  )
}
