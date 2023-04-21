import { useEffect, useState } from "react"
import Github from "../APIs/Github"

export default(() =>{

    const [user, setUser] = useState([]);

     async function showUser(user){
        try{
            const user_f = await Github.getDataUser(user);

            console.log("FFFFFFF: " + user_f);

        }catch(error){
            console.log("Error: "+error)
        }
     }

     showUser('Hhomura');

    return(
    <div>
        <h1>About Me</h1>
    </div>)
})