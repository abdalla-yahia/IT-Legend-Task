import { UsePdfContext } from "@/Contexts/Pdf_Context"
import { MdClose } from "react-icons/md"

export default function Pdf_Container({fileUrl}:{fileUrl:string|undefined}) {
    const {togglePdf,setTogglePdf} = UsePdfContext()
  return (
    <>
        {togglePdf &&<section className="fixed top-[0px] p-8 left-0 w-full h-screen bg-accent z-50 overflow-y-scroll scrollbar-none">
            <MdClose onClick={()=>setTogglePdf((prev)=>!prev)} className="text-red-500 absolute top-10 left-12 cursor-pointer text-2xl hover:scale-150 transition-all duration-300"/>
            <iframe src={`https://docs.google.com/gview?url=${fileUrl}&embedded=true`}
                className="w-full h-[90vh] border-0 rounded-2xl shadow-lg"
                />
        </section>}
    </>
  )
}
