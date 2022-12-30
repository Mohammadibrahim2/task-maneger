import { children, createContext, useState } from "react";

export const LightDark=createContext()

const DarkMood=({children})=>{

    const[dark,setDark]=useState(false)
    const darkinfo={dark,setDark}
    return(

        <div>
 <LightDark.Provider value={darkinfo}>
  {children}
</LightDark.Provider>

        </div>
    )
}
export default DarkMood