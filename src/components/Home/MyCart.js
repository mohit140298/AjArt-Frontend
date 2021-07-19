import React, { useState ,useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import MyCartProduct from './MyCartProduct'

const MyCart = () => {
    const history = useHistory();
    const [user, setUser] = useState({})
    const [myProducts, setMyProducts] = useState([]);
    const [total, setTotal] = useState(0)

    const fetchMyCartProducts = async () => {
        try {
            const res = await fetch(`/user/${user._id}/cartProducts`);
            const productsData = await res.json();
            if (productsData)
            {
                if (productsData.data)
                {
                    setMyProducts(productsData.data);

                    let totalPrice = 0;
                    productsData.data.map((product) => {
                        totalPrice = totalPrice + product.price
                    })
                    setTotal(totalPrice)
                }
                    
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchMyCartProducts()
    },[])

    useEffect(() => {
        fetchUser()
    }, [])

    const fetchUser = async () => {
        try {
            const user = await fetch(`/user`);
            const userData = await user.json();

            if (userData.status === 403) {
                alert("permission denied")
                history.push('/Login')
            }
            else {
                const data = userData.data
                
                setUser(data);
            }

        } catch (err) {
            console.log(err);
            history.push('/Login')
        }

    }
    return (
        <div class="text-center mt-3">
            <div class="card-body">
                <div className="text-center">
                    <h3 class="card-title">My Cart</h3>
                    <img src={user.profileImage} alt="" className=" pt-3" width="200px" height="100px" style={{borderRadius:"60%"}}></img>
                   
                </div>

                
               

                <form method="POST" id="cartForm">
                    <div className="mb-3 pt-3">
                       
                            {myProducts.map((product) => {
                                return <MyCartProduct product={product} />
                            })}
                        
                    </div>

                    <div class='card aboutCard mt-5 mb-5' style={{left:"20%"}}>
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
                                       Total:
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
