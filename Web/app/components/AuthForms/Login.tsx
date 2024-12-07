import styles from "./styles.module.scss";
import { NavAuth } from "@/app/components/NavAuth";


export function LoginForm(){
return(
    <div className={styles.auth}>
        <input placeholder="Login"></input>
        <input type="password" placeholder="Password"></input>
        <NavAuth/>
        <button>Sign in</button>
    </div>
)}