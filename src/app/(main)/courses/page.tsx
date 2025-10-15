import Link from "next/link";

export default function MainPage() {
  const id = 'course-details-2'
  return (
    <main className="w-[91.41%] min-h-screen flex flex-col justify-start items-center bg-background  pb-10 gap-10">
        {/*All Courses */}
        <section className="w-[91.41%] h-[42px] flex flex-col justify-start items-start gap-2">
          <h2 className="text-lg font-medium text-foreground/70">All Courses</h2>
          <ul>
            <li>
              <Link href={`/courses/${id}`} className="text-sm text-foreground/60 hover:text-foreground/80 transition-all duration-200">Course 2</Link>
            </li>
          </ul>
        </section>
    </main>
  )
}
