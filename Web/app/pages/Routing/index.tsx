'use client'
import { useAppContext } from "@/app/context/ContextProvider"
import { pagesType } from '@/app/context/types'
import { Authorization } from "@/app/pages/Auth";
import { Registration } from "@/app/pages/Registration";
import { None } from "../None/index";
import { Navigation } from "@/app/pages/Navigation";
import { Profile } from "@/app/pages/Profile";





export function Routing(){
const  {themeActive, pageActive }:{themeActive:any, pageActive:number} =  useAppContext(); 
const pagesArr:pagesType= [None,Authorization,Registration,Navigation,Profile];

return (
<div className={themeActive.section}>
            {pagesArr[pageActive]()}
</div>
)} 