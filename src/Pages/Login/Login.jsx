import React, { useState } from "react";
import './Login.css'
import logo from '../../assets/Images/logo.png'
import { login,signup } from "../../firebase";
import spinner from '../../assets/Images/netflix_spinner.gif'
const Login =()=>{    
    const [LogIn,setLogIn]= useState("Log In");
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [pass,setPass]=useState("");
    const [Loading,setLoading]=useState(false);

    const user_auth=async (e)=>{
        e.preventDefault();
        setLoading(true);
        if(LogIn==="Log In"){
await login(email,pass);
        }else{
await signup(name,email,pass)
        }
        setLoading(false);
    }
    return(
        Loading?<div className="spinner"><img src={spinner} alt="" /></div>:
        <div className="Login">
             <img src={logo} className="logo" alt="" />
            <div className="login-form">
               <h1> {LogIn}</h1>
               <form>
                {LogIn==="Sign Up" ? <input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder="Enter Your Name" /> :<></> }
                <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="Email" />
                <input value={pass} onChange={(e)=>{setPass(e.target.value)}} type="password" placeholder="Password" />
                <button onClick={user_auth} type="submit">{LogIn}</button>
               <div className="help">
                 <div className="remember">
                    <input type="checkbox"  />
                    <label htmlFor="">Remember Me</label>
                </div>
                <p>Need Help?</p>
               </div>
               </form>
               <div className="form-switch">
                {LogIn==="Log In" ? <p>New to Notflix? <span onClick={()=>
                    {setLogIn("Sign Up")}
                }>Sign Up Now</span></p> : <p>Already have account? <span onClick={()=>{setLogIn("Log In")}}>Click here to Login</span></p>}
               </div>
            </div>

        </div>
    )
}
export default Login