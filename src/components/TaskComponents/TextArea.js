import styles from '../styles/Forms.module.css'

export default(({id, name, onEventChange}) =>{
    return(
        <div className={styles.textArea}>
            <label htmlFor={name}>{name}</label>
            <textarea id={id} name={name} onChange={onEventChange} rows="4" cols="50">
            </textarea>
        </div>
    )
})