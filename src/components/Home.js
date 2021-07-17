import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom'
import  ProductCard from './Product'

const Home = () => {
  const history = useHistory()
  const [user, setUser] = useState({});
  const [products,setProducts] = useState([])

  useEffect(() => {
    fetchUser()
    
  }, []);

  useEffect(() => {
    fetchProducts()
  },[])

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
        setUser(data);
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

return (
  <div >
    <div class="d-flex justify-content-around align-items-center mt-5 productFlex">
      {products.map(product => {
        return <div><ProductCard product={product} /></div>
      })}
    </div>
    
  </div>

);
};

export default Home;
