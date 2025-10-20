import * as icon from '@/Utils/Icons'
import Section_Title from '@/Utils/Section_Title';
import { Course_Interface } from '@/Interfaces/Course_Interface';

export default function Course_Material_Container({course}: {course:Course_Interface}) {
  return (
    <>
    {/*Section Title*/}
    <Section_Title title='Course Materials' />
    {/*Section Content */}
    <article id='cours' className="grid grid-cols-1 md:grid-cols-2 w-full justify-between gap-8 shadow-2xl shadow-[#ddd] p-4">
       {/*Left List*/}
        <ul className="flex flex-col justify-start items-start gap-4">
            <li className="w-full border-b border-b-[#ddd] pb-3 flex justify-between items-center">
                <div className="flex w-[50%] justify-start items-center gap-2">
                    <icon.CiClock2 className='text-muted' />
                    <span>Duration:</span>
                </div>
                <span>{course?.duration}</span>
            </li>
            <li className="w-full border-b border-b-[#ddd] pb-3 flex justify-between items-center">
                <div className="flex w-[50%] justify-start items-center gap-2">
                    <icon.IoLibraryOutline className='text-muted' />
                    <span>Lessons:</span>
                </div>
                <span>{course?.Lessons}</span>
            </li>
            <li className="w-full border-b border-b-[#ddd] pb-3 flex justify-between items-center">
                <div className="flex w-[50%] justify-start items-center gap-2">
                    <icon.LiaBookReaderSolid className='text-muted' />
                    <span>Enrolled:</span>
                </div>
                <span>{course?.enrolled}</span>
            </li>
            <li className="w-full  pb-3 flex justify-between items-center">
                <div className="flex w-[50%] justify-start items-center gap-2">
                    <icon.GrLanguage className='text-muted' />
                    <span>Languages:</span>
                </div>
                <span>{course?.Language}</span>
            </li>
        </ul>
        {/*Right List*/}
        <ul className="flex flex-col justify-start items-start gap-4">
            <li className="w-full border-b border-b-[#ddd] pb-3 flex justify-between items-center">
                <div className="flex w-[50%] justify-start items-center gap-2">
                    <icon.LiaChalkboardTeacherSolid className='text-muted' />
                    <span>Instructor:</span>
                </div>
                <span>{course?.instractor}</span>
            </li>
            <li className="w-full border-b border-b-[#ddd] pb-3 flex justify-between items-center">
                <div className="flex w-[50%] justify-start items-center gap-2">
                    <icon.GiLevelEndFlag className='text-muted' />
                    <span>Level:</span>
                </div>
                <span>{course?.level}</span>
            </li>
            <li className="w-full border-b border-b-[#ddd] pb-3 flex justify-between items-center">
                <div className="flex w-[50%] justify-start items-center gap-2">
                    <icon.BiCategory className='text-muted' />
                    <span>Category:</span>
                </div>
                <span>{course?.category}</span>
            </li>
            <li className="w-full  pb-3 flex justify-between items-center">
                <div className="flex w-[50%] justify-start items-center gap-2">
                    <icon.IoMdStarHalf className='text-muted' />
                    <span>rating:</span>
                </div>
                <span>{course?.rating}</span>
            </li>
        </ul>
    </article>
    </>
  )
}
