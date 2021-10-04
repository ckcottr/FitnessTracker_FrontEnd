import React from "react"
import {Link} from "react-router-dom"
import './style/home.css'






const Navbar = () => {
    return (
        <div>
            <Link id="Navbar" to="/">Home</Link>
            <Link id="Navbar" to="/activities">Activities</Link>
            <Link id="Navbar2"to= "/routines">Routines</Link>
            <Link id="Navbar2"to= "/login">Login</Link>
            <Link id="Navbar2"to= "/register">Register</Link>
            <Link id="Navbar" to="/profile">Profile</Link>
        </div>
       

    )
}

export default Navbar