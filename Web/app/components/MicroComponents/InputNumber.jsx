import styles from "./input.module.scss";


export default function INPUT(props){
    let state = props.state;
    let setState = props.setState;
    let lable = props.lable || "";
    let span = props.span || "";
    return (
        <div>
            <div className={styles.title}>{lable}</div>
            <div className={styles.inputDiv}> 
                <input type="number" pattern="[0-9]{1-7}" value={state} onChange={(event) =>{ setState(event.target.value)}}  />
                <span>{span}</span>
            </div>
        </div>
    )}