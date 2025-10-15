'use client'
import { ReactNode, useContext, useState, createContext, Dispatch, SetStateAction } from "react";

type Leader_Borad_Context_Type = {
  toggleLeaderBoard: boolean;
  setToggleLeaderBoard: Dispatch<SetStateAction<boolean>>;
};

const ShowLeaderBoard = createContext<Leader_Borad_Context_Type | null>(null);

export default function Leader_Board_Context_Provider({ children }: { children: ReactNode }) {
  const [toggleLeaderBoard, setToggleLeaderBoard] = useState(false);

  return (
    <ShowLeaderBoard.Provider value={{ toggleLeaderBoard, setToggleLeaderBoard }}>
      {children}
    </ShowLeaderBoard.Provider>
  );
}

export const UseLeaderBoardContext = () => {
  const context = useContext(ShowLeaderBoard);
    if (!context) throw new Error("UseLeaderBoardContext must be used within a Provider");
  return context;
};
