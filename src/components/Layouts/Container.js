import styles from './Container.module.css'
export default ((props) =>{
    //Abriga os itens dentro
    return(
        <div className={`${styles.container} ${styles[props.customClass]}`}>
            {props.children}
        </div>
    )
})