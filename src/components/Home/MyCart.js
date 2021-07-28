import React, { useState ,useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import MyCartProduct from './MyCartProduct'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

const MyCart = () => {
    const history = useHistory();
    const [user, setUser] = useState({})
    const [myProducts, setMyProducts] = useState([]);
    const [total, setTotal] = useState(0)

    const fetchMyCartProducts = async () => {
        try {
            const res = await fetch(`/user/cartProducts`);
            const productsData = await res.json();
            if (productsData)
            {
                if (productsData.data) {
                    
                    setMyProducts(productsData.data);

                    let totalPrice = productsData.data.reduce(function (tot, arr) {
                        // return the sum with previous value
                        return tot + arr.price;

                        // set initial value as 0
                    }, 0);
                    if(totalPrice)
                    setTotal(totalPrice)
                }
                    
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

    useEffect(() => {
        fetchUser()
    }, [])
   

    const fetchUser = async () => {
        try {
            const user = await fetch(`/user`);
            const userData = await user.json();

            if (userData.status === 403) {
                toast.error('operation failed !', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                history.push('/Login')
            }
            else {
                const data = userData.data
                
                setUser(data);
                fetchMyCartProducts()
                
            }

        } catch (err) {
            console.log(err);
            toast.error('operation failed !', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            history.push('/Login')
        }

    }

    const removeProductFromCart = async (productId) => {
        try {
            const res = await axios.delete(`user/removeProduct/${productId}`)
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
        <div class="text-center mt-3">
            <div class="card-body">
                <div className="text-center">
                    <h3 class="card-title">My Cart</h3>
                    <img src="images/cart.jpg" alt="" className=" pt-3" width="100px" height="100px" style={{borderRadius:"60%"}}></img>
                   
                </div>

                
               

                <form method="POST" id="cartForm">
                    <div className="mb-3 pt-3 text-center">
                       
                            {myProducts.map((product) => {
                                return <MyCartProduct key={product._id} product={product} removeProductFromCart={removeProductFromCart} />
                            })}
                        
                    </div>

                    <div class='card cartProductCard mt-5 mb-5' style={{left:"20%"}}>
                        <div class="row col-12">
                            <div class="col-3 container-image">
                           

                            </div>
                            <div class="col-8 infoDiv">
                                {myProducts.map((product) => {
                                    return <div class="row dataRow">
                                        <div class="col-6">
                                            {product.name}
                                        </div>
                                        <div class="col-6">
                                            {product.price}
                                        </div>
                                    </div>
                                })}

                                <div class="row dataRow">
                                    <div class="col-6">
                                       Total :
                                    </div>
                                    <div class="col-6">
                                        {total}
                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>


                    <div className="mt-3 pt-3">
                        <button type="submit" className="btn btn-lg btn-primary btn-block" onClick="">Proceed</button>
                    </div>


                </form>
            </div>

        </div>
    )
}

export default MyCart
