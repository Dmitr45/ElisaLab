'use client'
import { useAppContext } from "@/app/context/ContextProvider";
import { useState, useEffect } from "react";
import styles from "./ThemeChenge.module.scss"



export default function ThemeChenge(){
const  {toggleDarkThemeContext, darkThemeContext } =  useAppContext(); // Переключение темы
let [onchegeTheme, setOncchengeTheme] = useState(true);

useEffect(()=>{
//@ts-expect-error
toggleDarkThemeContext(onchegeTheme);
},[ onchegeTheme ]);


return (
<div>
    <div className={styles. header}  onClick={()=> {setOncchengeTheme(!onchegeTheme); console.log("onchegeTheme: " + !onchegeTheme + "  darkThemeContext:  " + darkThemeContext) }}>
    <p>{onchegeTheme? " Light mode " :  " Darck mode "}</p>
    </div>
</div>
)}
