import React from "react";
import { useState, useEffect } from "react";
import { useHistory, Link } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import AdminProductCard from '../Product/AdminProductCard'
import { FaPlus } from "react-icons/fa";



const AdminHome = () => {
    const history = useHistory()
    const [myProducts, setmyProducts] = useState([]);

    useEffect(() => {

        fetchUser()

    }, []);

    

    const fetchUser = async () => {
        try {
            const user = await fetch("/user")
            const userData = await user.json()
            if (userData.status === 403) {
                alert("permission denied")
                history.push('/Login')
            }
            else {
                if (userData)
                {
                    if (userData.myProducts)
                        setmyProducts(userData.myProducts)
                }
                

            }

        }
        catch (err) {
            console.log(err);
            history.push('/Login')
        }

    }

    
    return (
        <div>
            <div className="m-0 p-3">
                <div className="d-flex justify-content-between align-items-center mt-5">
                    <div className="ms-3">
                        <h2 ></h2>
                    </div>
                    <div className="me-3">
                        <Link className="btn btn-lg btn-primary btn-block" to="/addProduct"><FaPlus /> Add Product</Link>
                    </div>
                </div>
                <div className="row col-12" >
                    {myProducts.map((product) => {
                        return <div key={product._id} className="col-2 ms-5"> <AdminProductCard product={product}  /> </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default AdminHome
