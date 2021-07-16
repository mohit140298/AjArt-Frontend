import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'


function About() {
    const history = useHistory();
    const [user, setUser] = useState({})
    const [role,setRole] = useState('')
    
    useEffect(() => {
        fetchUser()
    }, [])
    
    const fetchUser = async () => {
        try {
            const user = await fetch(`/user`);
            const userData = await user.json();

            if (userData.status === 403) {
                alert("permission denied")
                history.push('/Login')
            }
            else {
                const data = userData.data
                const role = userData.role.name
                setUser(data);
                setRole(role)
            }

        } catch (err)
        {
            console.log(err);
            history.push('/Login')
        }
        
    }

    return (
        <div className="card border-0">
            <h1>About</h1>
            <table class="table table-bordered mt-5">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Mobile</th>
                        <th scope="col">Role</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">{user.name}</th>
                        <td>{user.email}</td>
                        <td>{user.mobile}</td>
                        <td>{role}</td>
                    </tr>
                   
                </tbody>
            </table>
        </div>
    )
}

export default About
