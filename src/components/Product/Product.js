import React from 'react'

function Product(props) {
   
    const { product, addToCart } = props
    return (
        <div>
            <div className="card productCard">
                <img src={product.image} alt="product" width="300px" height="200px" />
                <div class="card-body" style={{ width: "300px"}}>
                    <h5 class="card-title">{product.name}</h5>
                    <p class="card-text">Rs {product.price} -/</p>
                    <button onClick={() => addToCart(product._id)} class="btn btn-primary">Add to cart</button>
                   
                </div>
            </div>
        </div>
            )
}

export default Product
