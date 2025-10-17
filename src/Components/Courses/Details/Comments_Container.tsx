'use client'
import { Comment_Interface } from '@/Interfaces/Comment_Interface';
import { RootState, useAppSelector } from '@/Lib/Store/store';
import Section_Title from '@/Utils/Section_Title';
import Image from 'next/image';

export default function Comments_Container() {
    const {AllComments:comments} = useAppSelector((state:RootState)=>state.lesson)
  return (
    <section id='Comments'>
        {/*Section Title*/}
        <Section_Title title='Comments' />
        {/*Comments*/}
        <ul className='flex flex-col justify-start items-start gap-5'>
            {
                comments?.slice(0,8).map((comment:Comment_Interface)=>
                    <li key={comment?.id} className='flex justify-start items-start gap-4 pb-3 border-b border-b-[#eee]'>
                        <Image  priority src={comment?.image} alt={comment?.name + "comment"} width={40} height={40} className='rounded-full'/>
                        <div className='flex flex-col justify-start items-start gap-0'>
                            <span className='text-black'>Name:{comment?.name}</span>
                            <span className='text-muted text-sm mb-5'>{comment?.date}</span>
                            <p className='text-black'>{comment?.comment}</p>
                        </div>
                    </li>
                )
            }
        </ul>
    </section>
  )
}
