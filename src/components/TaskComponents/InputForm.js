import styles from '../styles/Forms.module.css'

export default (({name, placeholder, type, onEventClick, value}) =>{
    return(
        <div className={styles.input}>
            <label htmlFor={name}>{name}</label>
            <input name={name} placeholder={placeholder} type={type} onChange={onEventClick} value={value}/>
        </div>
    )
})