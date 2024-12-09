import styles from "./styles.module.scss";
import { NavAuth } from "../../components/NavAuth";



export function LoginForm(){

function handAction(){
    console.log("form клик");
};



return(
<form  action={handAction}>    
    <div className={styles.auth}>
        <input type="text" name="login" pattern="[a-zA-Z0-9]{3,10}"  placeholder="Login" required></input>
        <input type="password" name="password" placeholder="Password" required ></input>
        <NavAuth/>
        <button type="submit">Sign in</button>
    </div> 
</form>
)}