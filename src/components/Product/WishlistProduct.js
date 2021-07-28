import React from 'react'
import { FaTrash} from 'react-icons/fa'

const WishlistProduct = (props) => {
    const { product, addToCart, removeProductFromWishlist } = props
    
    return (
        <div>
            <div className="card productCard">
                <img src={product.image} alt="product" width="300px" height="200px" />
                <div class="card-body" style={{ width: "300px" }}>
                    <h5 class="card-title">{product.name}</h5>
                    <p class="card-text">Rs {product.price} -/</p>
                    <div class="row d-flex justify-content-between align-items-center mt-3">
                        <div className="col-6">
                            <button onClick={() => addToCart(product._id)} class="btn btn-sm btn-primary">Add to cart</button>
                        </div>
                        
                            <div className="col-4 ml-3">
                                <button onClick={() => removeProductFromWishlist(product._id)} class="btn btn-sm btn-danger"><FaTrash /></button>
                            </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default WishlistProduct
