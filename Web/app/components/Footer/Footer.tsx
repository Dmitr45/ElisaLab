'use client'
import { useAppContext } from "@/app/context/ContextProvider";
import styles from "./footer.module.scss"



export default function Header(){
const  {themeActive } =  useAppContext(); // Переключение темы



return (
//@ts-expect-error
<div className={themeActive.section}>

</div>
)}
