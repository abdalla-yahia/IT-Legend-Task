import { Lesson_Interface } from "@/Interfaces/Lesson_Interface";
import VideoPlayer from "@/Utils/VideoPlayer";

export default function Lesson_video({lesson_details}:{lesson_details:Lesson_Interface}) {
  
  return (
    <section className="w-full flex flex-col sticky top-[100px] left-[80px]">
          {/*Course Video */}
          <figure className="my-6">
            <VideoPlayer src={lesson_details?.videoUrl} poster={lesson_details?.posterUrl} />
            <figcaption className="hidden">{lesson_details?.title}</figcaption>
          </figure>
    </section>
  )
}
