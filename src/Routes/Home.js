import {BsFillJournalBookmarkFill} from 'react-icons/bs'
import styles from './styles/Home.module.css'
import responsive from '../Responsive/Home.module.css'
import { Link } from 'react-router-dom'
import Database from '../APIs/Database'

export default (() =>{

    console.log(Database.getTasks());
    
    return(
        <div className={`${styles.container_home} ${responsive.home_response}`}>
            <h1>Task List</h1>
            <div>
            <BsFillJournalBookmarkFill/>
            </div>
            <p>Adicione, crie e gerencie suas tarefas com esse site. Se organize mais e priorize o mais importante</p>
            <Link to='/Tasks' className={styles.btn}>Add New Task</Link>
        </div>
    )
})