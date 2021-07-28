import React from 'react'

const MyCartProduct = (props) => {


    const product = props.product
    const removeProductFromCart = props.removeProductFromCart

    
    return (
        <div class='card cartProductCard mt-5 mb-5 '>
            <div class="row col-12">
                <div class="col-3 container-image">
                    <img src={product.image ? product.image : "images/default.jpg"} alt="product-image" width="200px" height="150px" />

                </div>
                <div class="col-8 infoDiv">
                    <div class="row dataRow">
                        <div class="col-6">
                            Name :
                        </div>
                        <div class="col-6">
                            {product.name}
                        </div>
                    </div>

                    <div class="row dataRow">
                        <div class="col-6">
                            price:
                        </div>
                        <div class="col-6">
                            {product.price}
                        </div>
                    </div>
                    <div class="row dataRow">
                        <div class="col-6">
                            
                        </div>
                        <div class="col-6">
                            <button type="button" className="btn btn-sm btn-primary btn-block" onClick={() => removeProductFromCart(product._id)}>Remove</button>

                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default MyCartProduct
