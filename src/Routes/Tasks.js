import { useState } from "react"
import Forms from "../components/TaskComponents/Forms"
import styles from './styles/Tasks.module.css'
import Database from "../Database";
import Message from "../components/Layouts/Message";
export default(() =>{

    const [forms, setForms] = useState(false);
    const [tasks, setTasks] = ([]);
    const [type, setType] = useState('');
    const [message, setMessage] = useState('');

    function showForm(){
        setForms(!forms);
    }

    function createTask(task){
        Database.addTasks(task)
        .then((data) => {
            console.log(data);
            setType('success');
            setMessage('Adição feita com sucesso.');
        }).catch((error) => console.log("Erro: " + error));
    }

    return(
        <div className={styles.container_tasks}>
            <h1>Tasks</h1>
            <div className={styles.head}>
                <button onClick={showForm}>Add new Task+</button>
            </div>
            {message && (<Message type={type} message={message}/>)}
            {forms? (
                <Forms handleSubmit={createTask} taskData={tasks} hiddenForm={showForm}/>
            ):(
            <></>
            )}
        </div>
    )
})