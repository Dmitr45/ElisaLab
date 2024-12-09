'use client'
import { useState, useCallback, useEffect } from 'react';
import { NameObjType } from './types';
import DarckTheme from "../components/Theme/DarkTheme.module.scss";
import LightTheme from "../components/Theme/LightTheme.module.scss";


export const useCreateAppContext = function(props:any) {

// Входные данные: ============================================================================================================

//localStorage.clear();

const NameApp:NameObjType = {   "name": "Elisa",
                                "span": "Lab",
                                "slogan" : "Assistant in laboratory diagnostics"};

// Контекст для приложения ====================================================================================================
    const [darkThemeContext, setDarkThemeContext] = useState<boolean>(props.darkThemeContext || (()=>{ if  ((localStorage.getItem("DarkTheme")  == "Active")) {return true} else {return false} }));
    const toggleDarkThemeContext = useCallback((bool:boolean):string  => {setDarkThemeContext(bool);  return "Ok"}, []);

    const [themeActive, setThemeActive] = useState(DarckTheme);

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


    const [pageActive, setPageActive] = useState<number>(props.pageActive || 0);
    const togglePageActive = useCallback((page:number)  => {setPageActive(page);  return "Ok"}, []);

//Контекст для авторизации =============================================================================
        const [tokenAuth, setTokenAuth] = useState<string>("");
        const [controllerTokenAuth, setControllerTokenAuth] = useState<string>("");
        const toggleControllerTokenAuth = useCallback((token:string)  => {setControllerTokenAuth(token);  return "Ok"}, []);

        useEffect(()=>{
        switch (controllerTokenAuth) {
            case "exit" :
                {
                    localStorage.removeItem("TokenAuth");
                    setTokenAuth("");
                    console.log("Выход из аккаунта!");
                } break
            case "" :
                {
                    if (localStorage.getItem("TokenAuth")) {
                        //@ts-expect-error
                        setAddTokenAuth(localStorage.getItem("TokenAuth"));
                        console.log("Вы авторизованы!");
                    } else {
                        console.log("Вы не авторизованы!");
                    }
                } break
            default:  {
                localStorage.setItem("TokenAuth", controllerTokenAuth);
                setTokenAuth(controllerTokenAuth);
                console.log("Вы авторизованы!");
            }
        }}, [controllerTokenAuth]);

//======================================================================================================
return { darkThemeContext, 
        toggleDarkThemeContext, 
        themeActive, 
        NameApp, 
        pageActive,
        togglePageActive, 
        //====авторизация====
        tokenAuth,
        toggleControllerTokenAuth
        
        }
}





