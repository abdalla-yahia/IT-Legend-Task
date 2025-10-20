'use client'
import { Comment_Interface } from '@/Interfaces/Comment_Interface';
import { RootState, useAppSelector } from '@/Lib/Store/store';
import Section_Title from '@/Utils/Section_Title';
import Image from 'next/image';

export default function Comments_Container() {
    const {AllComments:comments} = useAppSelector((state:RootState)=>state.course)
  return (
    <section id='Comments'>
        {/*Section Title*/}
        <Section_Title title='Comments' />
        {/*Comments*/}
        <ul className='flex flex-col justify-start items-start gap-5'>
            {
                comments?.slice(0,8).map((comment:Comment_Interface)=>
                    <li key={comment?.id} className='flex justify-start items-start gap-4 pb-3 border-b border-b-[#eee]'>
                        <div className="w-10 h-10 relative">
                          <Image loading='lazy' src={comment?.image} alt={comment?.name + "comment"} width={40} height={40} className='object-cover rounded-full'/>
                        </div>
                        <div className='flex flex-col justify-start items-start gap-0'>
                            <span className='text-black'>{comment?.name}</span>
                            <span className='text-[#5e6978] text-sm mb-5'>{comment?.date}</span>
                            <p className='text-black'>{comment?.body}</p>
                        </div>
                    </li>
                )
            }
        </ul>
    </section>
  )
}
