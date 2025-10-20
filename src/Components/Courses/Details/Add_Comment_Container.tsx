'use client'
import Add_New_Comment_Hook from "@/Hooks/Add_New_Comment_Hook";
import { MdArrowRightAlt } from "react-icons/md";

export default function Add_Comment_Container() {
  const [actionstate] = Add_New_Comment_Hook()

  return (
    <section className="w-full flex flex-col  justify-center items-start gap-5">
        <form action={actionstate} className="w-full flex flex-col gap-4">
          <textarea  name="Comment" id="Comment" placeholder="Write a comment" className="w-full p-5 border border-[#eee] outline-none resize-none h-[150px] shadow-2xl shadow-[#ddd]"></textarea>
          <button type="submit" className="flex justify-center items-center mr-auto rounded p-3 cursor-pointer bg-[#41b69d] text-accent">Submit Reviewr <MdArrowRightAlt size={25}/></button>
        </form>
    </section>
  )
}
