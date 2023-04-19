import { Outlet } from "react-router-dom"
import Footer from "./components/Layouts/Footer"
import NavBar from "./components/Layouts/NavBar"
import Head from "./components/Layouts/Head"

export default (() =>{
    
    return(
        <div>
            <Head/>
            <NavBar/>
            <div style={{minHeight: 750, justifyContent: "center", alignItems: 'center', display: "flex"}}>
            <Outlet/>
            </div>
            <Footer/>
        </div>
    )
})
