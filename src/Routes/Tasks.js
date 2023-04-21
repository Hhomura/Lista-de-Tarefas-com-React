import { useEffect, useState } from "react"
import Forms from "../components/TaskComponents/Forms"
import styles from './styles/Tasks.module.css'
import Database from "../APIs/Database";
import Message from "../components/Layouts/Message";
import TasksCard from "../components/TaskComponents/TasksCard";
import { useLocation } from "react-router-dom";
export default(() =>{

    const [forms, setForms] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [type, setType] = useState('');
    const [message, setMessage] = useState('');
    const location = useLocation();

    var msg = "";
    if(location.state){
        msg = location.state.message;
    }

    function showForm(){
        setForms(!forms);
    }

    function createTask(task){
        Database.addTasks(task)
        .then((data) => {
            //console.log(data);
            setType('success');
            setMessage('Adição feita com sucesso.');

            setTimeout(() =>{
                window.location.reload()
            }, 1500);

        }).catch((error) => console.log("Erro: " + error));
    }

    function removeTask(id){
        console.log("ID: "+id)
        Database.deleteTask(id).then((data) => {
            setMessage('Task Deletada');
            setType('success');
            console.log("data")
        })
        .catch((error) => console.log(`Error: ${error}`));
    }

    //Pegando Tasks
    useEffect(() =>{
        Database.getTasks()
        .then((data) => {
            console.log("Data: "+data)
            console.log("Data: "+data[0].prioritys.name)
            setTasks(data);
        }).catch((error) => console.log("Erro: " + error));
    }, [])

    return(
        <div className={styles.container_tasks}>
            <h1>Tasks</h1>
            <div className={styles.head}>
                <button onClick={showForm}>Add new Task+</button>
            </div>
            {message && (<Message type={type} message={message}/>)}
            {msg && (<Message type="success" message={msg}/>)}
            {forms? (
                <Forms handleSubmit={createTask} taskData={tasks} hiddenForm={showForm}/>
            ):(
            <></>
            )}
            {tasks !== []? (
                tasks.map((task) =>(
                    <TasksCard task={task} id={task.id} handlerChange={removeTask}/>
                ))
            ):(<h1>Sem Tasks</h1>)}
        </div>
    )
})