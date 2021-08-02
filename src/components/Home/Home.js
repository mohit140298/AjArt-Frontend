import React from "react";
import { useState, useEffect } from "react";
import { useHistory} from 'react-router-dom'
import ProductCard from '../Product/Product'
import axios from 'axios'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Home = () => {
  const history = useHistory()
  const [user, setUser] = useState({});
  const [role, setRole] = useState({});
  const [products, setProducts] = useState([]);



  useEffect(() => {
    fetchUser()
    
  }, []);

  useEffect(() => {
    fetchProducts()
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
        if (data)
        {
          setUser(data);
          const role = userData.role
          if (role.index_id === 1)
            history.push('/superAdminHome')
          else if (role.index_id === 2) {
            history.push('/adminHome')

          }
          
          }
          
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

  
  const addToCart = async (productId) => {
    try {
      const res = await axios.post(`user/addProductToCart/${productId}`)
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

  return (
    <div>
      <div class="d-flex justify-content-around align-items-center mt-5 productFlex">
        {products.map(product => {
          return <div key={product._id}><ProductCard product={product} addToCart={addToCart} addToWishlist={addToWishlist} /></div>
        })}

      </div>

    </div>
  )

};

export default Home;
