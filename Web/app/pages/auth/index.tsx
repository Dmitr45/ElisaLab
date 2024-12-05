'use client'
import { useState, useEffect } from 'react';
import { useAppContext } from "@/app/context/ContextProvider"
import DarckTheme from "@/app/components/Theme/DarkTheme.module.scss";
import LightTheme from "@/app/components/Theme/LightTheme.module.scss";
import ThemeChenge from '@/app/components/Theme/header';
import { NameObjType } from "@/app/context/types";
import LogingForm from "@/app/components/AuthForms/Login";
import style from './styles.module.scss';


export default function Authorization(){
let [theme, setTheme] = useState(DarckTheme);
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