import { useEffect, useState } from "react"
import Github from "../APIs/Github"
import styles from './styles/AboutMe.module.css'
import Cards from "../components/AboutMeComponents/Cards";

export default(() =>{

    const [user, setUser] = useState(null);
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [userName, setUserName] = useState('Hhomura');
    const [descrition, setDescrition] = useState('');
    const [tecnologys, setTecnologys] = useState([{
        name: "Javascript",
        url_logo: "https://www.britefish.net/wp-content/uploads/2019/06/logo-javascript-2.png"
    },
    {
        name: "HTML5",
        url_logo: "https://logos-download.com/wp-content/uploads/2017/07/HTML5_logo-700x700.png"
    },
    {
        name: "CSS",
        url_logo: "https://imgs.search.brave.com/1EE7pXnbuG1xe5QcMb4l71hVa1iqfeB-EoivJ7ucgdA/rs:fit:512:512:1/g:ce/aHR0cHM6Ly9jZG4u/aWNvbi1pY29ucy5j/b20vaWNvbnMyLzg0/NC9QTkcvNTEyL0NT/UzNfaWNvbi1pY29u/cy5jb21fNjcwNjku/cG5n"
    },{
        name: "Node",
        url_logo: "https://imgs.search.brave.com/2FegqNGOdwDJof_KFKrRw3MLcOsYfG6-wD2puYL-OlA/rs:fit:1000:1000:1/g:ce/aHR0cHM6Ly9rZWVz/dGFsa3N0ZWNoLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/OS8wOS9ub2RlanMt/aWNvbi5wbmc"
    },{
        name: "Typescript",
        url_logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/768px-Typescript_logo_2020.svg.png?20221110153201"
    },{
        name: "Java",
        url_logo: "https://www.pinclipart.com/picdir/middle/539-5397283_protractor-clipart.png"
    },{
        name: "C#",
        url_logo: "https://imgs.search.brave.com/ToCc0ZrSAlOSc6FGHDiCPoEIOrU3GCgfU3-LaPt5hMU/rs:fit:860:1005:1/g:ce/aHR0cHM6Ly93d3cu/a2luZHBuZy5jb20v/cGljYy9tLzY1Ny02/NTc0MjgwX2MtYy1z/aGFycC1sb2dvLXBu/Zy10cmFuc3BhcmVu/dC1wbmcucG5n"
    }]);

     async function showUser(userName){

            const user_f = await Github.getDataUser(userName);
            setUser(user_f);
            setName(user_f.name);
            setAvatar(user_f.avatar_url);
            setDescrition(user_f.bio);
            
     }

     useEffect(() =>{
        showUser(userName);
     }, [userName])

     console.log(name);

     

    return(
    <div className={styles.about_container}>
        <h1>About Me</h1>
        <div className={styles.about_container_sub}>
            <img src={avatar}/>
            <div className={styles.about_texts}>
                <h2>{name}</h2>
                <p>{descrition}</p>
            </div>
        </div>
        <h1>Tecnologias</h1>
        <Cards tecnologys={tecnologys}/>
    </div>)
})