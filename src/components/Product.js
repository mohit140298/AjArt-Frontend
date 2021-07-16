import React from 'react'

function Product(props) {
   
    const product = props.product
    return (
        <div>
            <div className="card">
                
                <div class="card-body" style={{ width: "18rem" }}>
                    <img src={product.image} alt="product" />
                    <h5 class="card-title">{product.name}</h5>
                    <p class="card-text">Rs {product.price} -/</p>
                    <a href="#" class="btn btn-primary">Add to cart</a>
                </div>
            </div>
        </div>
            )
}

export default Product
