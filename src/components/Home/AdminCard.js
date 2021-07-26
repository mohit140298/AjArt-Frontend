import React from 'react'

const AdminCard = (props) => {
    const admin = props.admin
    // const removeAdmin= props.removeAdmins
    return (
        <div className="col-3">
            <div class="card text-center p-3 productCard border-0" style={{ width: "18rem" }}>
                <img class="rounded-circle adminImg" src={admin.profileImage ? admin.profileImage:"images/default.jpg"} alt="user image" width="100px" height="100px"/>
                <div class="card-body">
                    <h5 class="card-title">{admin.name}</h5>
                    <p class="card-text">{admin.email}</p>
                    <p class="card-text">{admin.mobile}</p>
                    <div class="col-12">
                        {/* onClick={() => removeAdmin(admin._id)} */}
                        <button type="button" className="btn btn-sm btn-primary btn-block" >Remove</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminCard
