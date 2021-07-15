import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.jpg'


function Navbar() {
    return (
        
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="logo" width="60px"></img>
                </Link>
                

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/" >Home</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/about" >About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Register">Register</Link>
                        </li>
                    </ul>  
                </div>
            </nav>
        </>
    )
}

export default Navbar
