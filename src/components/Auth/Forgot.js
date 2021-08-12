import React,{useState} from 'react'

const Forgot = () => {
    const [email, setEmail] = useState("");
    return (
       
        <div class="text-center mt-3">
            <div class="card-body">
                <div className="text-center">
                    <h3 class="card-title">Forgot Password</h3>
                    <img src="/images/login.png" alt="" className="rounded-circle pt-3" width="50px"></img>
                </div>

                <form method="POST" id="loginForm">
                    <div className="mb-3 pt-3">
                        <input type="text" className="" id="email" name="email" placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    

                    <div className="mt-3 pt-3">
                        <button type="submit" className="btn btn-lg btn-primary btn-block" onClick="">submit</button>
                    </div>
                   

                </form>
            </div>

        </div>
    )
}

export default Forgot
