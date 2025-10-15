import { ReactNode } from "react";
import Show_Question_Form_Context_Provider from "./Show_Question_Form_Context";
import Leader_Board_Context_Provider from "./Leader_Borad_Context";

export default function Provider_Contextes({children}:{children:ReactNode}) {
  return (
    <Show_Question_Form_Context_Provider>
        <Leader_Board_Context_Provider>
            {children}
        </Leader_Board_Context_Provider>
    </Show_Question_Form_Context_Provider>
  )
}
