import { Link } from "react-router-dom"
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import styles from '../styles/footer.module.css'

export default(() =>{
    return(
        <footer className={styles.footer}>
            <div>
                <ul>
                    <li><Link to="https://www.facebook.com/profile.php?id=100008516886501" target="_blank"><BsFacebook/></Link></li>
                    <li><Link to="https://github.com/Hhomura" target="_blank"><BsGithub/></Link></li>
                    <li><Link to="https://www.linkedin.com/in/felipe-santos-ramos-305813200/" target="_blank"><BsLinkedin/></Link></li>
                </ul>
            </div>
            <p><span>Akemis Company&copy; by: </span>Felipe Santos Ramos</p>
        </footer>
    )
})