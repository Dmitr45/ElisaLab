'use client'
import { useAppContext } from "../../context/ContextProvider"
import style from './styles.module.scss';
import { themeActiveType, togglePageActiveType } from "../../context/types";


export function NavAuth(){
const  {themeActive, togglePageActive }: {themeActive:themeActiveType, togglePageActive: togglePageActiveType} =  useAppContext(); 

return (
    
<div className={themeActive.section}>
    <div className={themeActive.navAuth}>
        <div className={style.navFlex}>
            <div className={style.login } onClick={()=>{togglePageActive(1)}}></div>
            <div className={style.reg} onClick={()=>{togglePageActive(2)}}></div>
        </div>
    </div>
</div>
)
} 