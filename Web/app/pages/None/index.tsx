'use client'
import style from './styles.module.scss';
import { useAppContext } from "../../context/ContextProvider";
import { NameAppType, NameObjType, themeActiveType } from "../../context/types";
import { TimerService } from "../../components/Timer/Timer";


export function None(){
    const  {themeActive, NameApp } : {themeActive: themeActiveType, NameApp: NameAppType} =  useAppContext(); 
    const Title:NameObjType = {"name" : NameApp.name, "span" : NameApp.span, "slogan": NameApp.slogan}
return (    
<div className={style.page}>
    <div className={style.logo}>
        <div className={themeActive.logo}>{Title.name}<span>{Title.span}</span>
        </div>
        <div className={style.podLogo}><div className={themeActive.podLogo}>{Title.slogan}</div>
        </div>
    </div>
    <TimerService/>
</div>)} 