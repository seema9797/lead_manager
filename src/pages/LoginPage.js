import React,{useState} from 'react';
import { Link } from 'react-router-dom'
import Logo from '../assets/images/yog.jpeg'

const Loginpage = () => {
    const [email,setEmail] =useState('')
    const [password,setPassword] = useState('')

    const handleSubmit=()=>{
        
    }

    return (
        <>
            <div className="container d-flex flex-column align-items-center p-5 mt-5 shadow">
                <div className="card w-45 border rounded">
                    <div style={{ backgroundColor: '#626ed4', color: 'white' }} className="border d-flex flex-column align-items-center p-4">
                        <h3>Welcome Back!</h3>
                        <p>Sign in to continue to Site</p>
                    </div>
                    <div style={{ placeSelf: 'center' }}>
                        <img alt="error" style={{ height: '60px', width: '60px', position: 'absolute', top: '90px', left: '100px', borderRadius: '35px' }} src={Logo}  />
                    </div>
                    <div className="d-flex flex-column align-items-center p-5">
                        <input type="email" className="form-control mt-3 mb-3" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/>
                        <input type="password" className="form-control mb-3" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)} />
                        <div class="d-grid">
                        <Link to="/dashboard"><button class="btn btn-primary me-md-2 mb-3" type="button" onClick={()=>handleSubmit()}>Login</button>
                       </Link> 
                             </div>
                        <Link to="/forgotPassword">
                        Forgot your password?
                        </Link>
                        <div className="d-flex flex-column align-items-center">
                <p>Don't have an account ?
                    <Link to="/register">Register</Link> </p>
               
            </div>
                    </div>
                </div>
            </div>
         
        </>
    );
}

export default Loginpage;
