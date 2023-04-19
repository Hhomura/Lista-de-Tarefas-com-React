import { Outlet } from "react-router-dom"
import Footer from "./components/Layouts/Footer"
import NavBar from "./components/Layouts/NavBar"
import Container from "./components/Layouts/Container"

export default (() =>{
    return(
        <div>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    )
})