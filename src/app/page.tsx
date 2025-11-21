
import { AlertInfo, AlertDanger, AlertWarning, AlertSuccess } from "@/components/alert";


const TestAlert = () => {
   return(
       <div className="m-10">
           <AlertInfo title="Alert Info">
               This is a alert info
           </AlertInfo>
           <AlertDanger title="Alert Warning">This is a alert Warning</AlertDanger>
           <AlertWarning title="Alert Danger">This is a alert Danger</AlertWarning>
           <AlertSuccess title="Alert Success">This is a alert Succes</AlertSuccess>
       </div>
   )
}


export default TestAlert;

