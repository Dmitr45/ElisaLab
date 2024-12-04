'use client'
import { useState, useEffect } from 'react';
import style from './styles.module.scss';
import { useAppContext } from "../../context/ContextProvider"
import DarckTheme from "../Theme/DarkTheme.module.scss";
import LightTheme from "../Theme/LightTheme.module.scss";
import ThemeChenge from '../Theme/TemeChenge';
import { NameObjType } from "../../context/types";
import LogingForm from "../AuthForms/Login";


export default function PausePage(){
let [theme, setTheme] = useState(LightTheme);
const  {toggleDarkThemeContext, darkThemeContext, 
        NameApp,        
} =  useAppContext(); // Переключение темы


const Title:NameObjType = { 
//@ts-expect-error    
    "name" : NameApp.name, "span" : NameApp.span, "slogan": NameApp.slogan}

useEffect(()=>{
    darkThemeContext? setTheme(DarckTheme) : setTheme(LightTheme);
},[darkThemeContext]);



return (
<div className={theme.section}>
    <ThemeChenge/>
    <div className={style.page}>
        <div className={style.logo}>
            <div className={theme.logo}>{Title.name}<span>{Title.span}</span></div>
            <div className={style.podLogo}><div className={theme.podLogo}>{Title.slogan}</div></div>
            <LogingForm/> 
        </div>
    </div>
</div>
)
} 