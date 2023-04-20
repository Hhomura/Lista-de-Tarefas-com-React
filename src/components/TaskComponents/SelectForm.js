import styles from '../styles/Forms.module.css'

export default (({text, name, priority, onEventClick}) =>{
    return(
        <div className={styles.container_select}>
            <label htmlFor={name}> {text} </label>
            <select name={name} id={name} onChange={onEventClick}>
            <option>Selecione sua Opção</option>
                {priority.map((option) =>(
                    <option value={option.id} key={option.id}>{option.name}</option>
                ))}
            </select>
        </div>
    )
})