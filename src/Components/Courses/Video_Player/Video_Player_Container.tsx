import { Lesson_Interface } from "@/Interfaces/Lesson_Interface";
import VideoPlayer from "./VideoPlayer";
import { UseWideModeContext } from "@/Contexts/Wide_Mode_Context";

export default function Video_Player_Container({lesson_details}:{lesson_details:Lesson_Interface}) {
  const {toggleWideMode} = UseWideModeContext()
  return (
    <section className={`${toggleWideMode ? 'col-span-2':'col-span-1'} w-full max-w-full min-h-[350px]  flex flex-col sticky top-[0px] z-40`}>
          {/*Course Video */}
          <figure className="my-6">
            <VideoPlayer src={lesson_details?.videoUrl as string} poster={lesson_details?.posterUrl} />
            <figcaption className="hidden">{lesson_details?.title}</figcaption>
          </figure>
    </section>
  )
}
