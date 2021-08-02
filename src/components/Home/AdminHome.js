import React from "react";
import { useState, useEffect } from "react";
import { useHistory, Link } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import AdminProductCard from '../Product/AdminProductCard'
import { FaPlus } from "react-icons/fa";


const AdminHome = () => {
    const history = useHistory()
    const [user, setUser] = useState({});
    const [role, setRole] = useState({});
    const [myProducts, setmyProducts] = useState([]);

    useEffect(() => {
        fetchUser()

    }, []);

    useEffect(() => {
        fetchMyProducts()

    }, []);

    const fetchMyProducts = async () => {
        const res = await fetch('/admin/myProducts');
        if (res.status == 200) {
            const resJson = await res.json();
            if (resJson.data) {
                setmyProducts(resJson.data)
            }
        }
    }

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
                <div className="row d-flex col-12" >
                    {myProducts.map((product) => {
                        return <AdminProductCard product={product} key={product._id}/>
                    })}
                </div>
            </div>
        </div>
    )
}

export default AdminHome
