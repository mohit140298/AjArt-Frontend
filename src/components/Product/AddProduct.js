import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {
    const history = useHistory()
    const [product, setProduct] = useState({
        name: "",
        price: ""
    })
    const handleInputs = (e) => {
        const { name, value } = e.target


        setProduct({ ...product, [name]: value })
    }

    const PostData = async (e) => {
        e.preventDefault();
        const { name,price} = product;

        const res = await fetch("/admin/addMyProduct", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                name, price
            })
        })

        const result = await res.json();
        if (result.status !== "success" || !result.data) {
            toast.error('Operation Failed !', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        else {
            console.log(result.data);
            toast.success('operation success', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            history.push('/')
        }

    }
    return (
        <div class="text-center mt-3">
            <div class="card-body">
                <div className="text-center">
                    <h3 class="card-title">Add Product</h3>
                    <img src="images/signup.png" alt="" className="rounded-circle pt-3" width="50px"></img>
                </div>

                <form id="addProductForm" method="POST">
                    <div className="mb-3 pt-3">
                        <input type="text" className="" id="name" placeholder="name" name="name" autoComplete="off"
                            value={product.name}
                            onChange={handleInputs}
                        />
                    </div>
                    <div className="mb-3 pt-3">
                        <input type="number" className="" id="price" placeholder="price" name="price" autoComplete="off"
                            value={product.price}
                            onChange={handleInputs} />
                    </div>

                   
                   


                    <div className="mt-3 pt-3">
                        <button type="submit" className="btn btn-lg btn-primary btn-block" onClick={PostData}>submit</button>
                    </div>


                </form>

            </div>
        </div>
    )
}

export default AddProduct
