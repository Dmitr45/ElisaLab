'use client';
import stiles from "./styles.module.scss";
import { useEffect } from "react";



export default function Timer(){

useEffect(()=>{
    //CountBox();
},[]);


return (
    <>
        <div className={stiles.countbox}></div>
        <div className={stiles.countbox}></div>
        <div className={stiles.countbox}></div>
    </>
)}