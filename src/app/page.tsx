'use client'
import Image from "next/image";
import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

export default function Home() {
  // const route = useRouter()
  // useEffect(()=>{
  //   route.push('/courses/')
  // },[])
  return (
      <main className="w-full h-screen  flex gap-[32px] justify-center items-center">
        <Image          
          className="dark:invert"
          src="/favicon/android-chrome-512x512.png"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-3xl cursor-pointer ">
          <Link href={'/courses'}>
          It Legend Task
          </Link>
          </h1>
    </main>
  );
}
