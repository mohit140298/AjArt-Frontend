import {React} from 'react'
import { FaEdit } from 'react-icons/fa'
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AdminProductCard = (props) => {
    const product  = props.product
    const image="images/default_product.png"


    const handleImage = async (e) => {
        //   e.preventDefault()
        const formData = new FormData();
        formData.append('file', e.target.files[0])
        try {
            const res = await axios.post(`/admin/${product._id}/upload`, formData, {
                header: {
                    'Content-Type': "multipart/form-data"
                }
            });
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
            }
            else {
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

        <div className="col-2">
            <div className="card productCard">
                <div className="container-image">
                     <img src={product.image ? product.image : image} alt="product" width="100%" height="200px" />
                     <div className="overlay">
                        <input type="file" className="icon d-none" id={`product-image-${product._id}`} onChange={handleImage} />
                        <label htmlFor={`product-image-${product._id}`}><FaEdit className="fa-user" /></label>
                    </div>
                </div>
               
                <div className="card-body" style={{ width: "300px"}}>
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">Rs {product.price} -/</p>
                    <div className="row col-12">
                       
                        
                    </div>

                </div>
            </div>
        </div>
        
    )
}

export default AdminProductCard
