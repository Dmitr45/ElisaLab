'use client'
import { useState, useEffect } from 'react';
import style from './styles.module.scss';
import { useAppContext } from "../../context/ContextProvider"
import Timer from '../Timer/Timer';
import DarckTheme from "../Theme/DarkTheme.module.scss";
import LightTheme from "../Theme/LightTheme.module.scss";
import picTheme from "/images/theme-light-dark.png";


export default function PausePage(){
let [theme, setTheme] = useState(LightTheme);
const  {toggleDarkThemeContext, darkThemeContext } =  useAppContext(); // Массив элементов меню



useEffect(()=>{
    //@ts-expect-error
    toggleDarkThemeContext(false);
    darkThemeContext? setTheme(DarckTheme) : setTheme(LightTheme);
},[darkThemeContext]);



return (
<div className={theme.section}>
    <div className={style.page}>
        <div className={style.logo}><div className={theme.logo}>
            Elisa<span>Lab</span>
        <div className={style.podLogo}> <div className={theme.podLogo}>Assistant in laboratory diagnostics</div></div>
            <Timer/> 
        </div></div>
    </div>
</div>
)
} 