import { useEffect, useState } from 'react';
import styles from '../styles/Forms.module.css'
import InputForm from './InputForm';
import SelectForm from './SelectForm';
import SubmitForm from './SubmitForm';
import Database from '../../APIs/Database';
import responsive from '../../Responsive/TasksComponents/Form.module.css'
import { useLocation, useNavigate, useParams } from 'react-router-dom';

export default(() =>{

    const history = useNavigate();

    const {id} = useParams();
    const [prioritys, setPrioritys] = useState([]);
    const [tasks, setTasks] = useState([]);

    useEffect(() =>{
        Database.getOneTask(id).then((data)=>{
            console.log("Nome: " + data.Name)
            setTasks(data);
        }).catch((err) => console.log("Error: "+err));
    }, [])

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
        Database.updateTasks(id,tasks)
        .then((data) => {
            history('/Tasks', {state:{message: "Projeto Atualizado com Sucesso"}});
        }).catch((error) => console.log("Erro: " + error));

    }

    useEffect(() =>{
         Database.getPrioritys()
        .then(data => setPrioritys(data))
        .catch(error => console.log("Error: "+error));
        }, []);

    return(

        <div className={styles.container_form}>
            <h1 id={responsive.form_responsive_h1} style={{textAlign: "center", margin: 10, color: "gray"}}>Formulário de Atualização</h1>
            <form onSubmit={submit}>
                <InputForm name="Name" onEventClick={handleChange} placeholder="Nome" type="text" value = {tasks.Name}/>
                <InputForm name="Prazo" onEventClick={handleChange} placeholder="Prazo" type="date" value = {tasks.Prazo}/>
                <InputForm name="description" onEventClick={handleChange} placeholder="Descrição" type="text" value={tasks.description}/>
                <SelectForm priority={prioritys} name="prioritys.id" onEventClick={handleChangePriority} text= "Priority" value={tasks.prioritys? tasks.prioritys.id: ''}/>
                <SubmitForm text="Adicionar Task"/>
            </form>
        </div>
    )
})