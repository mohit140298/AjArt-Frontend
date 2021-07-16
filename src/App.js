import { Container } from '@material-ui/core';
import React from 'react'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar';
import UserNavBar from './components/UserNavBar';

import { Route, Switch } from "react-router-dom";
import Error from './components/Error'


const App = () => {
    return (
        <div className="container">
           
            <Switch>

                <Route exact path="/">
                    <UserNavBar />
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
                <Route>
                    <Error />
                </Route>
            </Switch>
        </div>
    )
}

export default App;