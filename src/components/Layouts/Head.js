import styles from '../styles/Head.module.css'
import responsive from '../../Responsive/Head.module.css'

export default(() =>{
    return(
        <header className={`${styles.header} ${responsive.header_responsive}`}>
            <div>
                <h2>Lista de Tarefas</h2>
            </div>
        </header>
    )
})