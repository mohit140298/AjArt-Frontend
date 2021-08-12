import React,{useState} from 'react'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        if (result.status !== "success" || !result.data)
        {
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
        else {
            console.log(result.data);
            toast.success('operation success', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            history.push('/login')
        }
        
    }
    return (
        <div class="text-center mt-3">
            <div class="card-body">
                <div className="text-center">
                    <h3 class="card-title">Sign up</h3>
                    <img src="/images/login.png" alt="" className="rounded-circle pt-3" width="50px"></img>
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
