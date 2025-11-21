import { ReactNode } from "react"

type Prop = {
   children: ReactNode
   warna: String
   ukuran: number
}

export const Judul = ({ children, warna, ukuran }: Prop) => {
   return (
       <div>
            <h1 className={`text-${ukuran}xl
            font-bold text-${warna}-800`}>{children}</h1>
       </div>
   )
}