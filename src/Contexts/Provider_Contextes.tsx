import { ReactNode } from "react";
import Show_Question_Form_Context_Provider from "./Show_Question_Form_Context";
import Leader_Board_Context_Provider from "./Leader_Borad_Context";
import Wide_Mode_Context_Provider from "./Wide_Mode_Context";
import Pdf_Context_Provider from "./Pdf_Context";
import Exam_Context_Provider from "./Exam_Context";

export default function Provider_Contextes({children}:{children:ReactNode}) {
  return (
    <Show_Question_Form_Context_Provider>
        <Leader_Board_Context_Provider>
          <Wide_Mode_Context_Provider>
            <Pdf_Context_Provider>
              <Exam_Context_Provider>
                {children}
              </Exam_Context_Provider>
            </Pdf_Context_Provider>
          </Wide_Mode_Context_Provider>
        </Leader_Board_Context_Provider>
    </Show_Question_Form_Context_Provider>
  )
}
