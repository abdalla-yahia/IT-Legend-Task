'use client'
import { ReactNode, useContext, useState, createContext, Dispatch, SetStateAction } from "react";

type Question_Context_Type = {
  toggleQuestionForm: boolean;
  setToggleQuestionForm: Dispatch<SetStateAction<boolean>>;
};

const ShowQuestionForm = createContext<Question_Context_Type | null>(null);

export default function Show_Question_Form_Context_Provider({ children }: { children: ReactNode }) {
  const [toggleQuestionForm, setToggleQuestionForm] = useState(false);

  return (
    <ShowQuestionForm.Provider value={{ toggleQuestionForm, setToggleQuestionForm }}>
      {children}
    </ShowQuestionForm.Provider>
  );
}

export const UseQuestionContext = () => {
  const context = useContext(ShowQuestionForm);
  if (!context) throw new Error("UseQuestionContext must be used within a Provider");
  return context;
};
