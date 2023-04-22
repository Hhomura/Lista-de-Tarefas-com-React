import styles from '../styles/Forms.module.css'
import responsive from '../../Responsive/TasksComponents/Btn.module.css'

export default(({text}) =>{
    return(
        <input className={`${styles.btn} ${responsive.btn}`} type='submit' name={text} value={text}/>
    )
})