'use client'
import { useAppContext } from "../../context/ContextProvider";
import styles from "./footer.module.scss"
import { themeActiveType, togglePageActiveType } from "../../context/types";




export default function Header(){
const  { themeActive,  togglePageActive}: {themeActive: themeActiveType, togglePageActive: togglePageActiveType } =  useAppContext(); // Переключение темы





return (
<div className={themeActive.section}>
    <div className={themeActive.footerSect}>
    <div className={styles.footer}>
    <div className={styles.addMetod}> </div>
    <div className={styles.editMetod}> </div>
    <div className={styles.startMetod}> </div>
    <div className={styles.nextStepMetod}> </div>
    <div className={styles.user} onClick={()=>{togglePageActive(1)}}> </div>
    </div>
    </div>
</div>
)}
