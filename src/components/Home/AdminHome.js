import {React,useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import AdminProductCard from '../Product/AdminProductCard'
import { FaPlus } from "react-icons/fa";


const AdminHome = (props) => {
    const [myProducts, setmyProducts] = useState([]);
    useEffect(() => {
        fetchMyProducts();
    }, [])
    
    const fetchMyProducts = async () => {
        const res = await fetch('/admin/myProducts');
        if (res.status == 200)
        {
            const resJson = await res.json();
            if (resJson.data)
            {
                setmyProducts(resJson.data)
                }
            }
    }
    return (
        <div className="m-0 p-3">
            <div className="d-flex justify-content-between align-items-center mt-5">
                <div className="ms-3">
                    <h2 ></h2>
                </div>
                <div className="me-3">
                    <Link className="btn btn-lg btn-primary btn-block" to="/addProduct"><FaPlus /> Add Product</Link>
                </div>
            </div>
            <div className="row d-flex col-12">
                {myProducts.map((product) => {
                    return <AdminProductCard product={product} />
                })}
            </div>
            </div>
    )
}

export default AdminHome
