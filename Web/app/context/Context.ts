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



    const [darkThemeContext, setDarkThemeContext] = useState<boolean>(props.darkThemeContext || (()=>{ if  ((localStorage.getItem("DarkTheme")  == "Active")) {return true} else {return false} }));
    let toggleDarkThemeContext = useCallback((bool:boolean):string  => {setDarkThemeContext(bool);  return "Ok"}, []);

    let [themeActive, setThemeActive] = useState(DarckTheme);

        useEffect(()=>{
        if (darkThemeContext === true) { 
            setThemeActive(DarckTheme);
            localStorage.setItem("DarkTheme", "Active");
            localStorage.removeItem("LightTheme");
            console.log("DarkTheme:  " + localStorage.getItem("DarkTheme"));
        } 
        if (darkThemeContext === false) { 
            setThemeActive(LightTheme);
            localStorage.setItem("LightTheme", "Active");
            localStorage.removeItem("DarkTheme");
            console.log("LightTheme:  " + localStorage.getItem("LightTheme"));
        }
    },[darkThemeContext]);


return { darkThemeContext, toggleDarkThemeContext, themeActive, // Темная тема
        NameApp, // Название приложения
}
}





