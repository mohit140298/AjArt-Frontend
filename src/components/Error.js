import React from 'react'
import {Link} from 'react-router-dom'

function Error() {
    return (
        <div className="">
            <div className="mt-5 text-center">
                <img src="images/404.jpg" alt="error" width="400px" height="200px" ></img><br/>
                <Link to="/" className="btn btn-primary btn-lg mt-5">Back to Home</Link>
            </div>
            
        </div>
    )
}

export default Error
