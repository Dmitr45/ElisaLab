'use client'
import { useAppContext } from "@/app/context/ContextProvider";
import { useState, useEffect } from "react";
import styles from "./header.module.scss"



export default function Header(){
const  {toggleDarkThemeContext, darkThemeContext, themeActive } =  useAppContext(); // Переключение темы



let [onchegeTheme, setOncchengeTheme] = useState<boolean>(darkThemeContext);

useEffect(()=>{
//@ts-expect-error
toggleDarkThemeContext(onchegeTheme);
},[ onchegeTheme, darkThemeContext]);


return (
    //@ts-expect-error
<div className={themeActive.section}>
        <div className={styles.header}>
            <div className={styles.theme}  onClick={()=> {setOncchengeTheme(!onchegeTheme);}}>
                <p>{onchegeTheme? " Light mode " :  " Darck mode "}</p>
            </div>
            <div className={themeActive.burger}>
                <div className={styles.burg}>
                </div>
            </div>
        </div>
</div>
)}
