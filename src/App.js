import React from 'react'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Home from './components/Home/Home'
import AdminHome from './components/Home/AdminHome'
import SuperAdminHome from './components/Home/SuperAdminHome'
import CreateAdmin from './components/Auth/CreateAdmin'
import About from './components/Home/About'
import Navbar from './components/Nav/Navbar';
import UserNavBar from './components/Nav/UserNavBar';
import AdminNavBar from './components/Nav/AdminNavBar';
import SuperAdminNavBar from './components/Nav/superAdminNavBar';
import Footer from './components/Home/footer';
import Wishlist from './components/Home/Wishlist'
import Logout from './components/Auth/Logout';
import CustomerHome from './components/Home/CustomerHome'

import { Route, Switch } from "react-router-dom";
import Error from './components/Error'
import Forgot from './components/Auth/Forgot';
import MyCart from './components/Home/MyCart';
import AddProduct from './components/Product/AddProduct';
import EditProduct from './components/Product/EditProduct';
import EditAdmin from './components/Auth/EditAdmin'


const App = () => {
    return (
        <div className="container-fluid">
           
            <Switch>

                <Route exact path="/">
                    <UserNavBar />
                    {/* <HomeCarousal /> */}
                    <Home />
                    
                </Route>
                <Route path="/customerHome">
                    <UserNavBar />
                    <CustomerHome />
                </Route>
                <Route path="/adminHome">
                    <AdminNavBar />
                    <AdminHome />
                </Route>
                <Route path="/superAdminHome">
                    <SuperAdminNavBar />
                    <SuperAdminHome />
                </Route>
                <Route path="/about">
                    <UserNavBar />
                    <About />
                </Route>
                <Route path="/about">
                    <UserNavBar />
                    <About />
                </Route>
                <Route path="/mycart">
                    <UserNavBar />
                    <MyCart />
                </Route>
                <Route path="/Login">
                    <Navbar />
                    <Login />
                </Route>
                <Route path="/Register">
                    <Navbar />
                    <Register />
                </Route>
                <Route path="/createAdmin">
                    <UserNavBar />
                    <CreateAdmin />
                </Route>
                <Route path="/addProduct">
                    <AdminNavBar />
                    <AddProduct />
                </Route>
                <Route exact path="/editProduct/:id" render={(props) => (
                    <React.Fragment >
                        <AdminNavBar />
                        <EditProduct id={props.match.params.id} />
                    </React.Fragment>
                     
                    )} 
                >
                  
                </Route>
                <Route exact path="/editAdmin/:id" render={(props) => (
                    <React.Fragment >
                        <SuperAdminNavBar />
                        <EditAdmin id={props.match.params.id} />
                    </React.Fragment>

                )}
                >

                </Route>
                <Route path="/wishlist">
                    <UserNavBar />
                    <Wishlist />
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