import styles from './Cards.module.css'

export default(({tecnologys}) =>{
    return(
        <div className={styles.card_container}>
            {tecnologys.map((tecs) =>(
            <div className={styles.cards}>
                <img src={tecs.url_logo}/>
                <h2>{tecs.name}</h2>
            </div>
            ))}
        </div>
    )
})