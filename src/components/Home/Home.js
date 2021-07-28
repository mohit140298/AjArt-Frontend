import React from "react";
import { useState, useEffect } from "react";
import { useHistory,Link } from 'react-router-dom'
import ProductCard from '../Product/Product'
import axios from 'axios'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminCard from './AdminCard'
import AdminHome from './AdminHome'

import { FaPlus } from "react-icons/fa";


const Home = () => {
  const history = useHistory()
  const [user, setUser] = useState({});
  const [role, setRole] = useState({});
  const [products, setProducts] = useState([]);
  const [admins, setAdmins] = useState([]);


  useEffect(() => {
    fetchUser()
    
  }, []);

  useEffect(() => {
    fetchProducts()
  }, [])
  
  useEffect(() => {
    fetchAdmins()
  }, [])

  const fetchUser = async () => {
    try {
      const user = await fetch("/user")
      const userData = await user.json()
      if (userData.status === 403) {
        alert("permission denied")
        history.push('/Login')
      }
      else {
        const data = userData.data
        if(data)
          setUser(data);
        if (userData.role)
          setRole(userData.role)
        
      }

    }
     catch (err) {
    console.log(err);
    history.push('/Login')
  }

  }
  
  const fetchProducts = async () => {
    try {
      const res = await fetch("/product/list")
      const products = await res.json()
      const data = products.data
      console.log(data)
      if (data)
        setProducts(data);
    } catch (err) {
        console.log(err)
      }
      

  }
  const fetchAdmins = async () => {
    try {
      const res = await fetch("/admin/list")
      const admins = await res.json()
      const data = admins.data
      console.log(data)
      if (data)
        setAdmins(data);
    } catch (err) {
      console.log(err)
    }


  }
  
  const addToCart = async (productId) => {
    try {
      const res = await axios.post(`user/addProduct/${productId}`)
      if (res.status === 200)
      {
        
        
        toast.success('operation success', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        window.location.reload()
        }
    } catch (error) {
      console.log(error)
      toast.error('operation failed !', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
   
  }

  const addToWishlist = async (productId) => {
    try {
      const res = await axios.post(`user/addProductToWishlist/${productId}`)
      if (res.status === 200) {


        toast.success('operation success', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        window.location.reload()
      }
    } catch (error) {
      console.log(error)
      toast.error('operation failed !', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

  }


  
  let htmlContent="";
  if (role.index_id === 1)
  {
    
    htmlContent =
      <div className="m-0 p-3">
        <div className="d-flex justify-content-between align-items-center mt-5">
          <div className="ms-3">
            <h2 ></h2>
          </div>
          <div className="me-3">
            <Link className="btn btn-lg btn-primary btn-block" to="/createAdmin"><FaPlus /> Create Admin</Link>
          </div>
      </div>
      <div className="row d-flex col-12">
        {admins.map((admin) => {
          return <AdminCard admin={admin} />
        })}
      </div>
      
      </div>
  }
  else if (role.index_id === 2)
  {
    htmlContent = <div>
      <AdminHome />
    </div>
  }
  else
  {
    htmlContent = <div class="d-flex justify-content-around align-items-center mt-5 productFlex">
      {products.map(product => {
        return <div><ProductCard product={product} addToCart={addToCart} addToWishlist={addToWishlist}  /></div>
      })}

    </div>
   
  }
  
  return (
    <div>{htmlContent}</div>
  )

};

export default Home;
