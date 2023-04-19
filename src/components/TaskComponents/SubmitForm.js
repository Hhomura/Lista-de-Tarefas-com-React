import styles from '../styles/Forms.module.css'

export default(({text}) =>{
    return(
        <input className={styles.btn} type='submit' name={text} value={text}/>
    )
})