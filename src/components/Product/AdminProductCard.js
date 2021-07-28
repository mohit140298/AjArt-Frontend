import React from 'react'

const AdminProductCard = (props) => {
    const {product} = props
    return (
        <div>
            {product.name}
        </div>
    )
}

export default AdminProductCard
