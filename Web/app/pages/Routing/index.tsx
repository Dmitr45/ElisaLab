'use client'
import { useAppContext } from "../../context/ContextProvider"
import { pagesType } from '../../context/types'
import { Authorization } from "../Auth/index";
import { Registration } from "../Registration/index";
import { None } from "../None/index";
import { Navigation } from "../Navigation/index";
import { Profile } from "../Profile/index";





export function Routing(){
const  {themeActive, pageActive }:{themeActive:any, pageActive:number} =  useAppContext(); 
const pagesArr:pagesType= [None,Authorization,Registration,Navigation,Profile];

return (
<div className={themeActive.section}>
            {pagesArr[pageActive]()}
</div>
)} 