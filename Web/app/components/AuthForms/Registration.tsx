import styles from "./styles.module.scss";
import { NavAuth } from "@/app/components/NavAuth";


export function RegistrationForm(){
return(
    <div className={styles.auth}>
        <input placeholder="Login"></input>
        <input placeholder="Email"></input>
        <input type="password" placeholder="Password"></input>
        <input type="password" placeholder="Repeat password"></input>
        <NavAuth/>
        <button>Sign up</button>
    </div>
)}