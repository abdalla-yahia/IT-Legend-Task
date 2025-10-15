
export default function Progress_Component({progress}:{progress:number}) {
  return (
    <section className="w-full flex flex-col justify-start items-start gap-5">
            {/*Progress Bar*/}
            <div className="h-[6px] relative w-full bg-[#ddd] rounded-full ">
                <div style={{width:`${progress}%`}} className={`rounded-full absolute h-[6px] bg-green-600 duration-300 transition-all`}>
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
