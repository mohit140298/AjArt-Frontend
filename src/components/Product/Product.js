import { React } from 'react'
import { FaHeart, FaCheck } from "react-icons/fa";

function Product(props) {
   
    const { product, addToCart, addToWishlist, wishListedProducts } = props

    
    return (
        <div>
            <div className="card productCard">
                <img src={product.image} alt="product" width="100%" height="200px" />
                <div class="card-body" style={{ width: "300px"}}>
                    <h5 class="card-title">{product.name}</h5>
                    <p class="card-text">Rs {product.price} -/</p>
                    <div className="row col-12">
                        <div className="col-6">
                            <button onClick={() => addToCart(product._id)} class="btn btn-sm btn-primary">Add to cart</button>
                        </div>
                        {wishListedProducts.indexOf(product._id) >= 0 ? <div className="col-4 ml-3 ">
                            <button class="btn btn-sm btn-danger disabled"><FaCheck /></button>
                        </div> :
                            <div className="col-4 ml-3">
                                <button onClick={() => addToWishlist(product._id)} class="btn btn-sm btn-danger"><FaHeart /></button>
                            </div>}
                    </div>

                </div>
            </div>
        </div>
            )
}

export default Product
