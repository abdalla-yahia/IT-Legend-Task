'use client'
import { ReactNode, useContext, useState, createContext, Dispatch, SetStateAction } from "react";

type Leader_Borad_Context_Type = {
  toggleWideMode: boolean;
  setToggleWideMode: Dispatch<SetStateAction<boolean>>;
};

const WideMode = createContext<Leader_Borad_Context_Type | null>(null);

export default function Wide_Mode_Context_Provider({ children }: { children: ReactNode }) {
  const [toggleWideMode, setToggleWideMode] = useState(false);

  return (
    <WideMode.Provider value={{ toggleWideMode, setToggleWideMode }}>
      {children}
    </WideMode.Provider>
  );
}

export const UseWideModeContext = () => {
  const context = useContext(WideMode);
    if (!context) throw new Error("UseWideModeContext must be used within a Provider");
  return context;
};
