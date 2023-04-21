import { Link } from 'react-router-dom';
import styles from '../styles/taskCard.module.css'
import {BsFillTrashFill, BsFillPencilFill} from 'react-icons/bs'

export default(({task, id, handlerChange}) =>{
    
    const linkUpdate = `/Tasks/${id}`

    function remove (e) {
        e.preventDefault();
        handlerChange(id);

        setTimeout(() =>{
            window.location.reload()
        }, 1500);
    }

    return(    
        <div>
                <div className={styles.card_container}>
                    <div>
                        <h2>Nome da Tarefa: {task.Name}</h2>
                        <p>Prazo da Tarefa: {task.Prazo}</p>
                        <p>Descrição: {task.description}</p>
                        <p>Nivel de Prioridade: {task.prioritys && task.prioritys.name}</p>
                    </div>
                    
                    <div className={styles.buttons}>
                        <button id={styles.delete} onClick={remove}>
                            <BsFillTrashFill/>
                        </button>
                        <Link to ={linkUpdate}>
                            <button id={styles.update}>
                                <BsFillPencilFill/>
                            </button>
                        </Link>
                    </div>
                </div>
        </div>
    )
})