'use client'
import { useAppContext } from "@/app/context/ContextProvider";
import styles from "./footer.module.scss"



export default function Header(){
const  { themeActive } =  useAppContext(); // Переключение темы



return (
//@ts-expect-error
<div className={themeActive.section}>
{/* @ts-expect-error */}
    <div className={themeActive.footerSect}>
    <div className={styles.footer}>
    <div className={styles.addMetod}> </div>
    <div className={styles.editMetod}> </div>
    <div className={styles.startMetod}> </div>
    <div className={styles.nextStepMetod}> </div>
    <div className={styles.user}> </div>
    </div>
    </div>
</div>
)}
