import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import './style.css'

import App from './App'

toast.configure();

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
   
    , document.getElementById('root'));