import { useEffect, useRef, useState } from "react"

export default function Progress_Hook() {
    const progress = localStorage.getItem('student_progress') || 0
    const [visible, setVisible] = useState(false);
    const ProgressRef = useRef<HTMLDivElement | null>(null)

    //Show Student Progress Bar When Window Scroll Down 
    useEffect(()=>{
        const handleScroll = ()=>{
        const target = (ProgressRef.current)?.getBoundingClientRect();
        if (!ProgressRef.current || !target) return;
        const windowHeight = window.innerHeight;

        if (target.top <= windowHeight - 100 && target.bottom >= 0) {
            setVisible(true);
        }else{
            setVisible(false);
        }
        }
        window.addEventListener('scroll',handleScroll)
        return () => window.removeEventListener("scroll", handleScroll);
    },[progress])

  return {ProgressRef,visible,progress}
}
