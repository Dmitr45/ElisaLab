'use client'
import { useAppContext } from "@/app/context/ContextProvider"
import { NameObjType } from "@/app/context/types";
import LogingForm from "@/app/components/AuthForms/Login";
import style from './styles.module.scss';


export default function Authorization(){
const  {themeActive, 
        NameApp    
} =  useAppContext(); // Переключение темы


const Title:NameObjType = { 
//@ts-expect-error    
    "name" : NameApp.name, "span" : NameApp.span, "slogan": NameApp.slogan}

return (
    // @ts-expect-error
<div className={themeActive.section}>
    <div className={style.page}>
        <div className={style.logo}>
        {/* @ts-expect-error */}
            <div className={themeActive.logo}>{Title.name}<span>{Title.span}</span></div>
                    {/* @ts-expect-error */}
            <div className={style.podLogo}><div className={themeActive.podLogo}>{Title.slogan}</div></div>
            <LogingForm/> 
        </div>
    </div>
</div>
)
} 