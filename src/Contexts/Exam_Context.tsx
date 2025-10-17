'use client'
import { ReactNode, useContext, useState, createContext, Dispatch, SetStateAction } from "react";

type Leader_Borad_Context_Type = {
  toggleExam: boolean;
  setToggleExam: Dispatch<SetStateAction<boolean>>;
};

const ShowExam = createContext<Leader_Borad_Context_Type | null>(null);

export default function Exam_Context_Provider({ children }: { children: ReactNode }) {
  const [toggleExam, setToggleExam] = useState(false);

  return (
    <ShowExam.Provider value={{ toggleExam, setToggleExam }}>
      {children}
    </ShowExam.Provider>
  );
}

export const UseExamContext = () => {
  const context = useContext(ShowExam);
    if (!context) throw new Error("UseExamContext must be used within a Provider");
  return context;
};
