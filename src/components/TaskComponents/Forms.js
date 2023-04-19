import InputForm from "./InputForm"
import styles from '../styles/Forms.module.css'
import SelectForm from "./SelectForm"
import SubmitForm from "./SubmitForm"
import { useState } from "react"
import TextArea from "./TextArea"

export default(() =>{

    const [prioritys, setPrioritys] = useState([{id: 1, name:"ASAAAAA"}]);

    var onEventClick = ((e) =>{

    })
    return(

        <div className={styles.container_form}>
            <h1 style={{textAlign: "center", margin: 10, color: "gray"}}>Formulário de Adição de Task</h1>
            <form>
                <InputForm name="Name" onEventClick={onEventClick} placeholder="Nome" type="text"/>
                <InputForm name="Prazo" onEventClick={onEventClick} placeholder="Prazo" type="date"/>
                <TextArea name="Description" id="" onEventClick={onEventClick}/>
                <SelectForm priority={prioritys} name={prioritys.name} id={prioritys.id} onEventClick={onEventClick} text= "Priority" value={prioritys.name}/>
                <SubmitForm text="Adicionar Task"/>
            </form>
        </div>
    )
})