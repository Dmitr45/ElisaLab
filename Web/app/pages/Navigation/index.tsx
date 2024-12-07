'use client'
import style from './styles.module.scss';
import { useAppContext } from "../../context/ContextProvider";
import { NameObjType, togglePageActiveType, NameAppType, themeActiveType } from "../../context/types";


export function Navigation(){
    const  {themeActive, NameApp, togglePageActive }:{togglePageActive:togglePageActiveType; NameApp:NameAppType, themeActive:themeActiveType } =  useAppContext(); 
    const Title:NameObjType = { "name" : NameApp.name, "span" : NameApp.span, "slogan": NameApp.slogan}
return (    
<div className={style.page}>
    <div className={style.logo}>
        <div onClick={()=>{togglePageActive(0)}} className={themeActive.logo}>{Title.name}<span>{Title.span}</span></div>
        <div onClick={()=>{togglePageActive(1)}}  className={themeActive.podLogo}>Авторизация</div>
        <div onClick={()=>{togglePageActive(2)}} className={themeActive.podLogo}>Регистрация</div>
        <div onClick={()=>{togglePageActive(4)}} className={themeActive.podLogo}>Профайл</div>
        <div onClick={()=>{togglePageActive(0)}} className={themeActive.podLogo}>О приложении</div>
    </div>
</div>)} 