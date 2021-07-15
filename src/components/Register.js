import React,{useState} from 'react'
import signup from '../images/signup.png'
import {useHistory} from 'react-router-dom'

function Register() {
    const history = useHistory()
    const [user, setUser] = useState({
        name: "",
        email: "",
        mobile: "",
        password: "",
        cpassword: ""
    })
    const handleInputs = (e) => {
       const { name, value }  = e.target
       
        
        setUser({...user,[name]:value})
    }

    const PostData = async (e) => {
        e.preventDefault();
        const { name, email, mobile, password, cpassword } = user;

        const res = await fetch("/auth/register", {
            method: "POST",
            headers: {
                "content-type" :"application/json"
            },
            body: JSON.stringify({
                name, email, mobile, password, cpassword
            })
        })

        const result = await res.json();
        if (result.status != "success" || !result.data)
        {
            window.alert("registration failed")
        }
        else {
            console.log(result.data);
            window.alert('registration success')
            history.push('/login')
        }
        
    }
    return (
        <div class="card border-0">
            <div class="card-body">
                <div className="text-center">
                    <h3 class="card-title">Sign up</h3>
                    <img src={signup} alt="" className="rounded-circle pt-3" width="50px"></img>
                </div>

                <form id="registerForm" method="POST">
                    <div className="mb-3 pt-3">
                        <input type="text" className="" id="name" placeholder="name" name="name" autoComplete="off"
                        value={user.name}
                        onChange={handleInputs}
                        />
                    </div>
                    <div className="mb-3 pt-3">
                        <input type="number" className="" id="mobile" placeholder="mobile" name="mobile"  autoComplete="off"
                        value={user.mobile}
                        onChange={handleInputs}/>
                    </div>
                   
                    <div className="mb-3 pt-3">
                        <input type="text" className="" id="email" placeholder="Email" name="email" autoComplete="off"
                        value={user.email}
                        onChange={handleInputs}/>
                    </div>
                    <div className="mb-3 pt-3">
                        <input type="password" className="" id="password" placeholder="password" name="password" autoComplete="off"
                        value={user.password}
                        onChange={handleInputs}/>
                    </div>
                    <div className="mb-3 pt-3">
                        <input type="password" className="" id="cpassword" placeholder="confirm password" name="cpassword" autoComplete="off"
                        value={user.cpassword}
                        onChange={handleInputs}/>
                    </div>
                    

                    <div className="mt-3 pt-3">
                        <button type="submit" className="btn btn-lg btn-primary btn-block" onClick={PostData}>submit</button>
                    </div>
                   
                        
                </form>

            </div>
        </div>
    )
}

export default Register
