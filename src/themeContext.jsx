import { createContext, useState } from "react";

const themeContext=createContext();

const Theme=({children})=>{
    const [color,setColor]=useState("red");
    return(
        <themeContext.Provider value={{color,setColor}}>
            {children}
        </themeContext.Provider>

    )
}
export default Theme
export {themeContext}

