'use client'
import { useState, useCallback, useEffect } from 'react';
import { NameObjType } from './types';
import DarckTheme from "@/app/components/Theme/DarkTheme.module.scss";
import LightTheme from "@/app/components/Theme/LightTheme.module.scss";


export const useCreateAppContext = function(props:any) {

// Входные данные: ============================================================================================================

//localStorage.clear();

const NameApp:NameObjType = {   "name": "Elisa",
                                "span": "Lab",
                                "slogan" : "Assistant in laboratory diagnostics"};





// Контекст для приложения ====================================================================================================
    const [darkThemeContext, setDarkThemeContext] = useState<boolean>(props.darkThemeContext || Boolean(localStorage.getItem("Dark_mode")) || true);
    let toggleDarkThemeContext = useCallback((bool:boolean):string  => {setDarkThemeContext(bool); return "Ok"}, []);

    let [themeActive, setThemeActive] = useState(props.themeActive || DarckTheme);
    
    useEffect(()=>{
        darkThemeContext? setThemeActive(DarckTheme) : setThemeActive(LightTheme);
    },[darkThemeContext]);



return { darkThemeContext, toggleDarkThemeContext, themeActive, // Темная тема
        NameApp, // Название приложения
}
}