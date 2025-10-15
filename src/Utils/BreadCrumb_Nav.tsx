'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { FaAngleRight } from "react-icons/fa6";

export default function Breadcrumb() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);
  return (
    <nav  className="w-[91.41%] h-[63px] text-shadow-amber-500 text-gray-600 my-2 ">
      <ul className={`font-normal flex flex-wrap items-center gap-x-2 rtl:space-x-reverse ml-0 mr-auto`}>
        <li>
          <Link href="/" className="text-button-color-light hover:text-amber-500">Home</Link>
        </li>

        {segments.map((seg, index) => {
          const href = '/' + segments.slice(0, index + 1).join('/');
          const name = decodeURIComponent(seg);
          console.log(href)
          return (
            <li key={href} className="flex items-center gap-x-2">
              <FaAngleRight size={13}/>
              <Link href={href} className={` text-button-color-light hover:text-amber-500 capitalize`}>{name.split('-').join(' ')}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
