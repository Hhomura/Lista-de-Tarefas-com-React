import styles from '../styles/Forms.module.css'
import responsive from '../../Responsive/TasksComponents/InputForm.module.css'

export default (({name, placeholder, type, onEventClick, value}) =>{
    return(
        <div className={`${styles.input} ${responsive.form_responsive_input}`}>
            <label htmlFor={name}>{name}</label>
            <input name={name} placeholder={placeholder} type={type} onChange={onEventClick} value={value}/>
        </div>
    )
})