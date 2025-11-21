
"use client"


import { ButtonSuccess, ButtonWarning, ButtonDanger,
    ButtonSuccessOutline, ButtonWarningOutline, ButtonDangerOutline
 } from "../../components/button";


const TestButton = () => {
   return(
       <div className="m-10">
           <ButtonSuccess type="button" onClick={() => alert("Success button clicked!")}>
               Success Button
           </ButtonSuccess>
           <ButtonWarning type="button" className="ml-2" onClick={() => alert("Warning button clicked!")}>
               Warning Button
           </ButtonWarning>
           <ButtonDanger type="button" className="ml-2" onClick={() => alert("Danger button clicked!")}>
               Danger Button
           </ButtonDanger>
           
           <ButtonSuccessOutline type="button" onClick={() => alert("Success button Outline clicked!")}>
               Success Button
           </ButtonSuccessOutline>
           <ButtonWarningOutline type="button" className="ml-2" onClick={() => alert("Warning button Outline clicked!")}>
               Warning Button
           </ButtonWarningOutline>
           <ButtonDangerOutline type="button" className="ml-2" onClick={() => alert("Danger button Outline clicked!")}>
               Danger Button
           </ButtonDangerOutline>
       </div>
   )
}


export default TestButton;

