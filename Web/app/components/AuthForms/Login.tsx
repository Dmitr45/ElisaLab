import styles from "./styles.module.scss";


export function LoginForm(){
return(
    <div className={styles.auth}>
        <input placeholder="Login"></input>
        <input type="password" placeholder="Password"></input>
        <button>Sign in</button>
    </div>
)}