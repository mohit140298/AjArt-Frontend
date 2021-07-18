import { Container } from '@material-ui/core';
import React from 'react'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Home from './components/Home/Home'
import About from './components/Home/About'
import Navbar from './components/Nav/Navbar';
import UserNavBar from './components/Nav/UserNavBar';
import HomeCarousal from './components/Product/Carousal';
import Footer from './components/Home/footer';
import Logout from './components/Auth/Logout';

import { Route, Switch } from "react-router-dom";
import Error from './components/Error'
import Forgot from './components/Auth/Forgot';


const App = () => {
    return (
        <div className="container-fluid">
           
            <Switch>

                <Route exact path="/">
                    <UserNavBar />
                    {/* <HomeCarousal /> */}
                    <Home />
                    
                </Route>
                <Route path="/about">
                    <UserNavBar />
                    <About />
                </Route>
                <Route path="/Login">
                    <Navbar />
                    <Login />
                </Route>
                <Route path="/Register">
                    <Navbar />
                    <Register />
                </Route>
                <Route path="/Logout">
                    <Navbar />
                    <Logout />
                </Route>
                <Route path="/Forgot">
                    <Navbar />
                    <Forgot />
                </Route>
                <Route>
                    <Error />
                </Route>
            </Switch>
            <Footer />
        </div>
    )
}

export default App;