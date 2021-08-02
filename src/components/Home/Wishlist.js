import React from 'react'
import {useState,useEffect} from 'react'
import ProductCard from '../Product/WishlistProduct'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import NoProducts from '../Product/NoProducts'

const Wishlist = () => {
    const [wishList, setWishList] = useState([])

    useEffect(() => {
        fetchWishList()
       
    }, []);
    const fetchWishList = async () => {
        try {
            const res = await fetch('/user/wishlist');
            if (res.status === 200) {
                const resData = await res.json()
                if (resData.data) {
                    setWishList(resData.data);
                }
            }
           
        } catch (error) {
            console.log(error)
        }
        
        
    }
    const addToCart = async (productId) => {
        try {
            const res = await axios.post(`user/addProductToCart/${productId}`)
            if (res.status === 200) {

                removeProductFromWishlist(productId);
                toast.success('operation success', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                // window.location.reload()
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
    const removeProductFromWishlist = async (productId) => {
        try {
            const res = await axios.delete(`user/removeProductFromWishlist/${productId}`)
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
    if (wishList.length)
    {
        return (
            <div className="d-flex justify-content-around align-items-center mt-5 productFlex">
                {wishList.map((product) => {
                    return <ProductCard product={product} addToCart={addToCart} removeProductFromWishlist={removeProductFromWishlist} />
                })
                }
            </div>
        )
    }
    else
    {
        return <NoProducts />
        }
    
}

export default Wishlist
