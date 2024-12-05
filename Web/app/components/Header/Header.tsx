'use client'
import { useAppContext } from "@/app/context/ContextProvider";
import { useState, useEffect } from "react";
import styles from "./header.module.scss"



export default function Header(){
const  {toggleDarkThemeContext, darkThemeContext, themeActive } =  useAppContext(); // Переключение темы



let [onchegeTheme, setOncchengeTheme] = useState(true);

useEffect(()=>{
//@ts-expect-error
toggleDarkThemeContext(onchegeTheme);
localStorage.setItem("Dark_mode", onchegeTheme.toString())
},[ onchegeTheme ]);


return (
    //@ts-expect-error
<div className={themeActive.section}>
    <div className={styles. header}  onClick={()=> {setOncchengeTheme(!onchegeTheme);}}>
    <p>{onchegeTheme? " Light mode " :  " Darck mode "}</p>
    </div>
</div>
)}
