import React from 'react'
import {Link} from 'react-router-dom'

function Error() {
    return (
        <div className="card border-0">
            <img src="images/404.jpg" alt="error" width="400px" height="200px"></img>
            <Link to="/" className="btn btn-primary btn-lg mt-5">Back to Home</Link>
        </div>
    )
}

export default Error
