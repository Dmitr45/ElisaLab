'use client'
import { useAppContext } from "../../context/ContextProvider"
import { pagesType } from '../../context/types'
import { Authorization } from "../Auth";
import { Registration } from "../Registration";
import { None } from "../None";
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