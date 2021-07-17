import React from 'react'
import { Link } from 'react-router-dom'



function Navbar() {
    return (
        
        <>
            <nav className=" m-0 p-3" >
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <Link className="navbar-brand" to="/">
                            <img src="images/logo.jpg" alt="logo" width="60px"></img>
                        </Link>
                    </div>
                    <div className="navUl">
                        <ul>
                            <li className="me-3">
                                <Link className="link" to="/Login" >Login</Link>
                            </li>
                            <li className="me-3">
                                <Link className="link" to="/Register" >Register</Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
