'use client'
import { useState, useCallback } from 'react';
import { NameObjType } from './types';


export const useCreateAppContext = function(props:any) {

// Входные данные: ============================================================================================================

//localStorage.clear();

const NameApp:NameObjType = {"name": "Elisa",
                            "span": "Lab",
                            "slogan" : "Assistant in laboratory diagnostics"};





// Контекст для приложения ====================================================================================================
    const [darkThemeContext, setDarkThemeContext] = useState<boolean>(props.darkThemeContext || true);
    let toggleDarkThemeContext = useCallback((bool:boolean):string  => {setDarkThemeContext(bool); return "Ok"}, []);



return { darkThemeContext, toggleDarkThemeContext, // Темная тема
        NameApp, // Название приложения
}
}