import React from 'react'
import { Link } from 'react-router-dom'

function UserNavBar() {
    return (
        <div className="userNav">
            <nav className=" m-0 p-3" >
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <Link className="navbar-brand" to="/">
                            <img src="/images/logo.jpg" alt="logo" width="60px"></img>
                        </Link>
                    </div>
                    <div className="navUl">
                        <ul>
                            <li className="me-3">
                                <Link className="link" to="/" >Home</Link>
                            </li>
                            <li className="me-3">
                                <Link className="link" to="/about" >About</Link>
                            </li>
                            <li className="me-3">
                                <Link className="link" to="/mycart" >MyCart</Link>
                            </li>
                            <li className="me-3">
                                <Link className="link" to="/wishlist" >Wishlist</Link>
                            </li>
                            <li className="">
                                <Link className="link" to="/Logout" >Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        </div>
    )
}

export default UserNavBar
