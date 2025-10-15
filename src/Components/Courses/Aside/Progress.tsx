'use client'
import { useEffect, useRef, useState } from "react"

export default function Progress_Component({progress}:{progress:number}) {
    const [visible, setVisible] = useState(false);
    const ProgressRef = useRef<HTMLDivElement | null>(null)
    
    useEffect(()=>{
        const handleScroll = ()=>{
        const target = (ProgressRef.current)?.getBoundingClientRect();
        if (!ProgressRef.current || !target) return;
        const windowHeight = window.innerHeight;

        if (target.top <= windowHeight - 100 && target.bottom >= 0) {
            setVisible(true);
        }else{
            setVisible(false);
        }
        }
        window.addEventListener('scroll',handleScroll)
        return () => window.removeEventListener("scroll", handleScroll);
    },[])

  return (
    <section ref={ProgressRef} className="w-full flex flex-col justify-start items-start gap-5 z-10">
            {/*Progress Bar*/}
            <div className="h-[6px] relative w-full bg-[#ddd] rounded-full ">
                <div style={{width:`${visible ? progress : 0}%`}} className={`rounded-full absolute h-[6px] bg-green-600 duration-800 ease-in-out transition-all`}>
                    {/*Arrow Icon */}
                    <div className="absolute -top-[650%] text-[10px] -right-2 border-2 border-[#eee] rounded-full p-1 after:content after:w-0 after:h-0 after:absolute after:top-[120%] after:left-[50%] after:-translate-x-[50%] after:border-6 after:border-transparent after:border-t-[#ddd]">
                        You
                    </div>
                    {/*Progress Persentage*/}
                    <span className="absolute text-sm top-[200%] -right-2">
                        {progress + '%'}
                    </span>
                </div>
            </div>
        </section>
  )
}
