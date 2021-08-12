import React from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom'
import ConfirmModal from '../Modals/ConfirmModal'




const AdminCard = (props) => {
    const history = useHistory()

    const admin = props.admin
    const [modalIsOpen, setModalIsOpen] = React.useState(false);

    function openModal() {
        setModalIsOpen(true);
    }

    function closeModal() {
        setModalIsOpen(false);
    }


    const removeAdmin = async () => {
        try {
            const res = await axios.delete(`user/${admin._id}/delete`)
            if (res.status === 200) {
                toast.success('operation success', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                window.location.reload()
            }
            
        } catch (error) {
            console.log(error)
            toast.error('operation failed !', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
       
    }

    const editAdmin = async () => {
        history.push(`/editAdmin/${admin._id}`)

    }
    
    return (
        <div>
            <div className="card text-center p-3 productCard border-0" style={{ width: "18rem" }}>
                <img className="rounded-circle adminImg" src={admin.profileImage ? admin.profileImage:"images/default.jpg"} alt="user" width="100px" height="100px"/>
                <div className="card-body">
                    <h5 className="card-title">{admin.name}</h5>
                    <p className="card-text">{admin.email}</p>
                    <p className="card-text">{admin.mobile}</p>
                    <div className="col-12">
                       
                        <button type="button" className="btn btn-sm btn-primary btn-block" onClick={openModal} >Remove</button>
                        <button type="button" className="btn btn-sm btn-primary btn-block ms-3" onClick={editAdmin}>edit</button>

                    </div>
                   

                    <ConfirmModal closeModal={closeModal} confirmAction={removeAdmin} modalIsOpen={modalIsOpen}/>

                    
                </div>
            </div>
        </div>
    )
}

export default AdminCard
