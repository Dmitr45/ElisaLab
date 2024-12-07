'use client'
import { useAppContext } from "@/app/context/ContextProvider"
import { NameAppType, NameObjType, themeActiveType } from "@/app/context/types";
import { LoginForm } from "@/app/components/AuthForms/Login";
import style from './styles.module.scss';


export function Authorization(){
const  {themeActive, NameApp } : {themeActive: themeActiveType, NameApp: NameAppType} =  useAppContext(); 

const Title:NameObjType = {  "name" : NameApp.name, "span" : NameApp.span, "slogan": NameApp.slogan}

return (
<div className={themeActive.section}>
    <div className={style.page}>
        <div className={style.logo}>
            <div className={themeActive.logo}>{Title.name}<span>{Title.span}</span></div>
            {/* <div className={style.podLogo}><div className={themeActive.podLogo}>{Title.slogan}</div></div> */}
            <LoginForm/> 
        </div>
    </div>
</div>
)
} 