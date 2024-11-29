import style from './styles.module.css';
import Timer from '../Timer/Timer';



export default function PausePage(){

return (
<div className={style.page}>
    <div className={style.logo}>
        Elisa<span>Lab</span>
    <div className={style.podLogo}>Assistant in laboratory diagnostics</div>  
    <Timer/> 
    </div>
    
</div>
)
} 