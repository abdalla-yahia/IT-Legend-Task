'use client'
import { ReactNode, useContext, useState, createContext, Dispatch, SetStateAction } from "react";

type Leader_Borad_Context_Type = {
  togglePdf: boolean;
  setTogglePdf: Dispatch<SetStateAction<boolean>>;
};

const ShowPdf = createContext<Leader_Borad_Context_Type | null>(null);

export default function Pdf_Context_Provider({ children }: { children: ReactNode }) {
  const [togglePdf, setTogglePdf] = useState(false);

  return (
    <ShowPdf.Provider value={{ togglePdf, setTogglePdf }}>
      {children}
    </ShowPdf.Provider>
  );
}

export const UsePdfContext = () => {
  const context = useContext(ShowPdf);
    if (!context) throw new Error("UsePdfContext must be used within a Provider");
  return context;
};
