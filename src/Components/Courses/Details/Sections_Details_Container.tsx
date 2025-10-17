'use client'
import Add_Comment_Container from "./Add_Comment_Container";
import Comments_Container from "./Comments_Container";
import Course_Material_Container from "./Course_Material_Container";
import NavLinks from "./NavLinks";
import Ask_Question from "./Ask_Question";
import Leader_Board from "./Leader_Board";

export default function Sections_Details_Container() {
  
  return (
      <section className="flex flex-col min-h-full gap-10 relative">
          {/*Navbar*/}
          <NavLinks />
          {/*Course Material*/}
          <Course_Material_Container />
          {/*Comments*/}
          <Comments_Container />
          {/*Add Comment*/}
          <Add_Comment_Container />
          {/*Ask Question*/}
          <Ask_Question />
          {/*Leader Board*/}
          <Leader_Board />
      </section>
  )
}
