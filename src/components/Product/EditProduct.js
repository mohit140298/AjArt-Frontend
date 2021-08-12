import React, { useState,useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const EditProduct = ( props ) => {
    const history = useHistory()
    const productId = props.id
    const [product, setProduct] = useState({
       
    })

    useEffect(() => {
        fetch(`/product/${productId}`).then((res) => {
            res.json().then((resData) => {
                console.log(resData.data)
                setProduct(resData.data)

            })
        }).catch(err => console.log(err))
        
    }, []);
    const handleInputs = (e) => {
        const { name, value } = e.target


        setProduct({ ...product, [name]: value })
    }

    const PostData = async (e) => {
        e.preventDefault();
        const { name, price } = product;

        const res = await fetch(`/product/${productId}/update`, {
            method: "PATCH",
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
            history.push('/adminHome')
        }

    }
    return (
        <div class="text-center mt-3">
            <div class="card-body">
                <div className="text-center">
                    <h3 class="card-title">Edit Product</h3>
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
                        <button type="submit" className="btn btn-lg btn-primary btn-block" onClick={PostData}>update</button>
                    </div>


                </form>

            </div>
        </div>
    )
}

export default EditProduct
