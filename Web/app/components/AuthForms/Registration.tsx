import styles from "./styles.module.scss";


export function RegistrationForm(){
return(
    <div className={styles.auth}>
        <input placeholder="Login"></input>
        <input placeholder="Email"></input>
        <input  placeholder="Password"></input>
        <input  placeholder="Repeat password"></input>
        <button>Sign up</button>
    </div>
)}