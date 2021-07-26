import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { FaEdit } from 'react-icons/fa'
import axios from 'axios'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function About() {
    const history = useHistory();
    const [user, setUser] = useState({})
    const [role, setRole] = useState('')
    const [image, setImage] = useState("images/default.jpg")
    
    

    const handleImage = async (e) => {
    //   e.preventDefault()
        const formData = new FormData();
        formData.append('file', e.target.files[0])
        try {
            const res = await axios.post(`/user/${user._id}/upload`, formData, {
                header: {
                    'Content-Type': "multipart/form-data"
                }
            });
            if (res.status === 200)
            {
                toast.success('operation success', {
                    position: "top-right",
                    autoClose: 10000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
            else
            {
                toast.error('operation failed !', {
                    position: "top-right",
                    autoClose: 10000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
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

        } catch (err) {
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
                        <div class="col-3 container-image">
                            <img src={user.profileImage?user.profileImage : image} class="image" alt="user-image" width="200px" height="150px" />
                            <div class="overlay">
                                <input type="file" class="icon d-none" id="user-image" onChange={handleImage}/>
                                <label for="user-image"><FaEdit class="fa-user" /></label>
                            </div>
                            
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
