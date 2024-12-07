'use client'
import { useAppContext } from "@/app/context/ContextProvider"
import { pagesType } from '@/app/context/types'
import { Authorization } from "../Auth";
import { Registration } from "../Registration";
import { None } from "../None/index";
import { Navigation } from "../Navigation";
import { Profile } from "../Profile";





export function Routing(){
const  {themeActive, pageActive }:{themeActive:any, pageActive:number} =  useAppContext(); 
const pagesArr:pagesType= [None,Authorization,Registration,Navigation,Profile];

return (
<div className={themeActive.section}>
            {pagesArr[pageActive]()}
</div>
)} 