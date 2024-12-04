import styles from "./styles.module.scss";






export default function Login(){
return(
    <div className={styles.auth}>
        <input placeholder="Login"></input>
        <input  placeholder="Password"></input>
        <button>Sign in</button>
    </div>
)}