import React from "react";
import { useState, useEffect } from "react";
import { useHistory, Link } from 'react-router-dom'
import AdminCard from './AdminCard'

import { FaPlus } from "react-icons/fa";

const SuperAdminHome = () => {
    const history = useHistory()
    const [user, setUser] = useState({});
    const [role, setRole] = useState({});
    const [admins, setAdmins] = useState([]);

    useEffect(() => {
        fetchUser()

    }, []);

   

    useEffect(() => {
        fetchAdmins()
    }, [])


    const fetchAdmins = async () => {
        try {
            const res = await fetch("/admin/list")
            const admins = await res.json()
            const data = admins.data
            console.log(data)
            if (data)
                setAdmins(data);
        } catch (err) {
            console.log(err)
        }


    }

    const fetchUser = async () => {
        try {
            const user = await fetch("/user")
            const userData = await user.json()
            if (userData.status === 403) {
                alert("permission denied")
                history.push('/Login')
            }
            else {
                const data = userData.data
                if (data)
                    setUser(data);
                if (userData.role)
                    setRole(userData.role)

            }

        }
        catch (err) {
            console.log(err);
            history.push('/Login')
        }

    }

    return (
        <div>
            <div className="m-0 p-3">
                <div className="d-flex justify-content-between align-items-center mt-5">
                    <div className="ms-3">
                        <h2 ></h2>
                    </div>
                    <div className="me-3">
                        <Link className="btn btn-lg btn-primary btn-block" to="/createAdmin"><FaPlus /> Create Admin</Link>
                    </div>
                </div>
                <div className="row d-flex col-12">
                    {admins.map((admin) => {
                        return <AdminCard admin={admin} key={admin._id} />
                    })}
                </div>

            </div>
        </div>
    )
}

export default SuperAdminHome
