'use client'
import Add_Comment_Container from "./Add_Comment_Container";
import Comments_Container from "./Comments_Container";
import Course_Material_Container from "./Course_Material_Container";
import NavLinks from "./NavLinks";
import Ask_Question from "./Ask_Question";
import Leader_Board from "./Leader_Board";
import { UseWideModeContext } from "@/Contexts/Wide_Mode_Context";

export default function Sections_Details_Container() {
  const {toggleWideMode} = UseWideModeContext();
  return (
      <section className={`${toggleWideMode ? 'col-span-2':'col-span-1'} order-2 md:order-3 flex flex-col min-h-full gap-10 relative`}>
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
