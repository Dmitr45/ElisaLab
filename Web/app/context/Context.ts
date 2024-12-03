'use client'
import { useState, useCallback } from 'react';


export const useCreateAppContext = function(props:any) {

// Входные данные: ============================================================================================================

//localStorage.clear();

const menuArr = [
    {id: 0, name: "Главная", link: "/"},    
    {id: 1, name: "Проекты", link: "/prijects"},
    {id: 2, name: "Блог", link: "https://vc.ru/u/3674302"},
    {id: 3, name: "Реквизиты", link: "/requisites"}

];



// Контекст для приложения ====================================================================================================
    const [darkThemeContext, setDarkThemeContext] = useState<boolean>(props.darkThemeContext || true);
    let toggleDarkThemeContext = useCallback((bool:boolean)  => {setDarkThemeContext(bool)}, []);



let ContextObj = { darkThemeContext, toggleDarkThemeContext }
return ContextObj
}