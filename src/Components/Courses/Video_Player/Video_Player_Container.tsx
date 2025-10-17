import { Lesson_Interface } from "@/Interfaces/Lesson_Interface";
import VideoPlayer from "./VideoPlayer";
import { UseWideModeContext } from "@/Contexts/Wide_Mode_Context";

export default function Video_Player_Container({lesson_details}:{lesson_details:Lesson_Interface}) {
  const {toggleWideMode} = UseWideModeContext()
  return (
    <section className={`${toggleWideMode ? 'col-span-2':'col-span-1'} w-full h-[300px]  flex flex-col sticky top-[80px]  z-50`}>
          {/*Course Video */}
          <figure className="my-6">
            <VideoPlayer src={lesson_details?.videoUrl} poster={lesson_details?.posterUrl} />
            <figcaption className="hidden">{lesson_details?.title}</figcaption>
          </figure>
    </section>
  )
}
