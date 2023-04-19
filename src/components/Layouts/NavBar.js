import { Link } from 'react-router-dom'
import styles from '../styles/NavBar.module.css'
export default(() =>{
    return(
        <nav className={styles.navBar}>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/Tasks'>Tasks</Link>
                </li>
                <li>
                    <Link to='/AboutMe'>About Me</Link>
                </li>
            </ul>
        </nav>
    )
})