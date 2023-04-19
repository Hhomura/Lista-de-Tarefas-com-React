import styles from '../styles/Forms.module.css'

export default (({text, value, name, priority, id, onEventClick}) =>{
    return(
        <div className={styles.container_select}>
            <label htmlFor={name}> {text} </label>
            <select name={name} id={id} onChange={onEventClick}>
                {priority.map((priority) =>(
                    <option value={priority.id} id={priority.id}>{priority.name}</option>
                ))}
            </select>
        </div>
    )
})