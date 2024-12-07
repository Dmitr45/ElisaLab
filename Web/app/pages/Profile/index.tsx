'use client'
import style from './styles.module.scss';
import { useAppContext } from "@/app/context/ContextProvider";
import { NameAppType, NameObjType, themeActiveType } from "@/app/context/types";


export function Profile(){
    const  {themeActive, NameApp } : {themeActive: themeActiveType, NameApp: NameAppType} =  useAppContext(); 
    const Title:NameObjType = {"name" : NameApp.name, "span" : NameApp.span, "slogan": NameApp.slogan}
return (    
<div className={style.page}>
Ваш личный кабинет
</div>)} 