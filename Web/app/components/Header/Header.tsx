'use client'
import { useAppContext } from "@/app/context/ContextProvider";
import { useState, useEffect } from "react";
import styles from "./header.module.scss"



export default function Header(){
const  {toggleDarkThemeContext, darkThemeContext, themeActive, togglePageActive }:{
    themeActive:{readonly [key: string]: string},
    toggleDarkThemeContext: {(bool: boolean): string}, 
    darkThemeContext: boolean,
    togglePageActive:{(page: number):string}
    }   =  useAppContext(); // Переключение темы



const [onchegeTheme, setOncchengeTheme] = useState<boolean>(darkThemeContext);

useEffect(()=>{
toggleDarkThemeContext(onchegeTheme);
},[ onchegeTheme, darkThemeContext]);


return (
<div className={themeActive.section}>
        <div className={styles.header}>
            <div className={styles.theme}  onClick={()=> {setOncchengeTheme(!onchegeTheme);}}>
                <p>{onchegeTheme? " Light mode " :  " Darck mode "}</p>
            </div>
            <div className={themeActive.burger}>
                <div className={styles.burg}  onClick={()=>{togglePageActive(3)}}>
                </div>
            </div>
        </div>
</div>
)}
