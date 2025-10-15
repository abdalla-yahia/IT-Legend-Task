import Course_Details_Container from "@/Components/Courses/Course_Details_Container";

export default async function Course_Details_Page({ params }: { params: Promise<{ id: string }> }): Promise<React.ReactNode> {
  const { id } = await params;
  return (
    <main className="w-full flex flex-col justify-center items-center">
      <Course_Details_Container id={id} />
    </main>
  )
}
