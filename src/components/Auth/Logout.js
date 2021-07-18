import React from 'react'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Logout = () => {
    const history = useHistory()
    useEffect(() => {
        fetchLogout();
    }, [])
    
    const fetchLogout = async () => {
        try {
            const res = await fetch('/auth/logout')
            if (res.status === 200)
            {
                toast.success('operation success', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                history.push('/Login', { replace: true })
            }
            else
            {
                toast.error('Operation Failed !', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                history.goBack()
                }
            
        }
        catch (err) {
            toast.error('Operation Failed !', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            history.goBack()
       
        }
        
    }
    return (
        <div>
            Logged Out
        </div>
    )
}

export default Logout
