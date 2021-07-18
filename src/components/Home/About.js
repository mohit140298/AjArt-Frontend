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
        <div className="text-center mt-3 me-5 ms-5">
            <h1>About Me</h1>
            <div class="d-flex justify-content-center align-items-center mt-5">
                <div class='card aboutCard'>
                    <div class="row col-12">
                        <div class="col-3">
                            <img src="images/default.jpg" alt="user-image" width="200px" height="150px" />
                        </div>
                        <div class="col-8 infoDiv">
                            <div class="row dataRow">
                                <div class="col-6">
                                    Name :
                                </div>
                                <div class="col-6">
                                    {user.name}
                                </div>
                            </div>

                            <div class="row dataRow">
                                <div class="col-6">
                                    Email :
                                </div>
                                <div class="col-6">
                                    {user.email}
                                </div>
                            </div>
                            <div class="row dataRow">
                                <div class="col-6">
                                    Mobile :
                                </div>
                                <div class="col-6">
                                    {user.mobile}
                                </div>
                            </div>
                            <div class="row dataRow">
                                <div class="col-6">
                                    Role :
                                </div>
                                <div class="col-6">
                                    {role}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
           
        </div>
    )
}

export default About
