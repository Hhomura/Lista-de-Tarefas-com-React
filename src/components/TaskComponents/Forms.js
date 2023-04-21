import InputForm from "./InputForm"
import styles from '../styles/Forms.module.css'
import SelectForm from "./SelectForm"
import SubmitForm from "./SubmitForm"
import { useEffect, useState } from "react"
import Database from "../../APIs/Database"

export default(({taskData, handleSubmit, hiddenForm}) =>{

    const [prioritys, setPrioritys] = useState([]);
    const [tasks, setTasks] = useState(taskData || {})

    var handleChange = ((e) =>{
        setTasks({...tasks, [e.target.name]:e.target.value})
    })

    var handleChangePriority = ((e) =>{
        setTasks({...tasks, prioritys:{
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        }})
    })

    function submit (e){
        e.preventDefault();
        handleSubmit(tasks);
        hiddenForm();
    }

    useEffect(() =>{
         Database.getPrioritys()
        .then(data => setPrioritys(data))
        .catch(error => console.log("Error: "+error));
        }, []);

    return(

        <div className={styles.container_form}>
            <h1 style={{textAlign: "center", margin: 10, color: "gray"}}>Formulário de Adição de Task</h1>
            <form onSubmit={submit}>
                <InputForm name="Name" onEventClick={handleChange} placeholder="Nome" type="text"/>
                <InputForm name="Prazo" onEventClick={handleChange} placeholder="Prazo" type="date"/>
                <InputForm name="description" onEventClick={handleChange} placeholder="Descrição" type="text"/>
                <SelectForm priority={prioritys} name="prioritys.id" onEventClick={handleChangePriority} text= "Priority" value={tasks.prioritys? tasks.prioritys.id: ''}/>
                <SubmitForm text="Adicionar Task"/>
            </form>
        </div>
    )
})