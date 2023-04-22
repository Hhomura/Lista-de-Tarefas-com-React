import styles from './Cards.module.css'
import responsive from '../../Responsive/AboutMeComponents/Card.module.css'

export default(({tecnologys}) =>{
    return(
        <div className={`${styles.card_container} ${responsive.responsive_card_container}`}>
            {tecnologys.map((tecs) =>(
            <div className={`${styles.cards} ${responsive.responsive_cards}`}>
                <img src={tecs.url_logo}/>
                <h2>{tecs.name}</h2>
            </div>
            ))}
        </div>
    )
})