
import { ReactNode } from "react"


type Props = {
   children: ReactNode
   type: "button" | "submit" | "reset",
   onClick?: () => void
   className?: string
}


export const ButtonSuccess = ({ children, type, onClick, className }: Props) => {
   return (
       <button className={`text-sm bg-green-600 text-white rounded-md py-2 px-4 hover:bg-green-700 font-bold ${className}`}
           type={type} onClick={() => { if (onClick) onClick() }}>
           {children}
       </button>
   )
}


export const ButtonWarning = ({ children, type, onClick, className }: Props) => {
   return (
       <button className={`text-sm bg-yellow-500 text-white rounded-md py-2 px-4 hover:bg-yellow-600 font-bold ${className}`}
           type={type} onClick={() => { if (onClick) onClick() }}>
           {children}
       </button>
   )
}


export const ButtonDangerOutline = ({ children, type, onClick, className }: Props) => {
   return (
       <button className={`text-sm text-red-600  rounded-md py-2 px-4 border-red-600 border-2 font-bold ${className}`}
           type={type} onClick={() => { if (onClick) onClick() }}>
           {children}
       </button>
   )
}
export const ButtonSuccessOutline = ({ children, type, onClick, className }: Props) => {
   return (
       <button className={`text-sm text-green-600  rounded-md py-2 px-4 border-green-600 border-2 font-bold ${className}`}
           type={type} onClick={() => { if (onClick) onClick() }}>
           {children}
       </button>
   )
}


export const ButtonWarningOutline = ({ children, type, onClick, className }: Props) => {
   return (
       <button className={`text-sm text-yellow-500 rounded-md py-2 px-4 border-yellow-500 border-2 font-bold ${className}`}
           type={type} onClick={() => { if (onClick) onClick() }}>
           {children}
       </button>
   )
}


export const ButtonDanger = ({ children, type, onClick, className }: Props) => {
   return (
       <button className={`text-sm bg-red-600 text-white rounded-md py-2 px-4 hover:bg-red-700 font-bold ${className}`}
           type={type} onClick={() => { if (onClick) onClick() }}>
           {children}
       </button>
   )
}

