'use client'
import { useAppContext } from "../../context/ContextProvider"
import { pagesType } from '../../context/types'
import { Authorization } from "../../pages/Auth";
import { Registration } from "../../pages/Registration";
import { None } from "../None/index";
import { Navigation } from "../../pages/Navigation";
import { Profile } from "../../pages/Profile";





export function Routing(){
const  {themeActive, pageActive }:{themeActive:any, pageActive:number} =  useAppContext(); 
const pagesArr:pagesType= [None,Authorization,Registration,Navigation,Profile];

return (
<div className={themeActive.section}>
            {pagesArr[pageActive]()}
</div>
)} 