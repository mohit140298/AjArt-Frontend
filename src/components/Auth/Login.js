import React, { useState }  from 'react'
import { useHistory } from 'react-router-dom'
import Cookie from 'js-cookie'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link} from 'react-router-dom'

const Login = () => {
    const history = useHistory()
    const [user, setUser] = useState({
        email: "",
        password:"",
    })

    const handleInputs = e => {
        e.preventDefault();

        const { name, value } = e.target
        
        setUser({ ...user, [name]: value })
    }

    const Login = async (e) => {
        e.preventDefault();
        const { email, password } = user
        
        const res = await fetch('/auth/login', {
            method: "POST",
            headers: {
                "content-type" :"application/json"
            },
            body: JSON.stringify({
                email,password
            })
        })

        const result = await res.json();

        if (result.status != "success" || !result.data)
        {
            toast.error('invalid credentials !', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
           
       
        }
        else {
            toast.success('operation success', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            console.log(result.data.token)
            Cookie.set("jwt",result.token)
            history.push('/')
        }
    }
    return (
        <div class="text-center mt-3">
            <div class="card-body">
                <div className="text-center">
                    <h3 class="card-title">Sign in</h3>
                    <img src="images/login.png" alt="" className="rounded-circle pt-3" width="50px"></img>
                </div>
                
                <form method="POST" id="loginForm">
                    <div className="mb-3 pt-3">
                        <input type="text" className="" id="email" name="email" placeholder="Email"
                            value={user.email}
                            onChange={handleInputs}/>
                    </div>
                    <div className="mb-3 pt-3">
                        <input type="password" className="" id="password" name="password" placeholder="password"
                            value={user.password}
                            onChange={handleInputs}/>
                    </div>
                    
                    <div className="mt-3 pt-3">
                        <button type="submit" className="btn btn-lg btn-primary btn-block" onClick={Login}>signin</button>
                    </div>
                    <div className="pt-3">
                        <Link to="/Forgot" className="text-dark">forgot password</Link>
                    </div>
                        
                </form>
            </div>
            
        </div>
        
    )
}

                export default Login