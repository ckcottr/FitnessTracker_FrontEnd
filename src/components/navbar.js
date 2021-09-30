import React from "react"
import {Link} from "react-router-dom"
import './style/style.css'






const Navbar = () => {
    return (
        <div>
            <Link id="Navbar" to="/">Home</Link>
            <Link id="Navbar" to="/profile">Profile</Link>
            <Link id="Navbar" to="/posts">Posts</Link>
            <Link id="Navbar2"to= "/login">Login</Link>
            <Link id="Navbar2"to= "/register">Register</Link>
        </div>
       

    )
}

export default Navbar