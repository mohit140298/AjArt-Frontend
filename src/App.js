import { Container } from '@material-ui/core';
import React from 'react'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar';

import { Route, Switch } from "react-router-dom";
import Error from './components/Error'


const App = () => {
    return (
        <Container>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route  path="/about">
                    <About />
                </Route>
                <Route path="/Login">
                    <Login />
                </Route>
                <Route path="/Register">
                    <Register />
                </Route>
                <Route>
                    <Error />
                </Route>
            </Switch>
        </Container>
    )
}

export default App;