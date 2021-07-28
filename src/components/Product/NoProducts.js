import React from 'react'
import { FaCartPlus, FaSadTear } from 'react-icons/fa'
import {  Link } from 'react-router-dom'


const NoProducts = () => {
    return (
        <div>
            <div className="mt-5 text-center">
                <FaSadTear className="text-info font-weight-bold mt-5" style={{ fontSize: "50px" }}/>
                <h4 className="text-danger me-3 mt-5">Your Wishlist is Empty  </h4>
                <Link to="/" ><FaCartPlus className="text-danger font-weight-bold mt-5" style={{ fontSize: "50px" }} /></Link>
                    </div>
        </div>
    )
}

export default NoProducts
