import React, { useState }  from 'react'
import login from '../images/login.png'
import { useHistory } from 'react-router-dom'
import Cookie from 'js-cookie'

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
            alert("Login Failed");
        }
        else {
            alert("login success")
            console.log(result.data.token)
            Cookie.set("jwt",result.token)
            history.push('/about')
        }
    }
    return (
        <div class="card border-0">
            <div class="card-body">
                <div className="text-center">
                    <h3 class="card-title">Sign in</h3>
                    <img src={login} alt="" className="rounded-circle pt-3" width="50px"></img>
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
                        <a href="/" className="text-dark">forgot password</a>
                    </div>
                        
                </form>
            </div>
            
        </div>
        
    )
}

                export default Login