import  Axios  from "axios"
import { useState } from "react"
import { useNavigate } from "react-router"
import { useAuth } from "./Auth"
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import {jwtDecode} from "jwt-decode"

let Signup=()=>{
    let{id,updateid}=useAuth()
    let navigate=useNavigate()
    let[data,updatedata]=useState({
        name:"",
        email:"",
        password:""
    })
    let updatehandler=(event)=>{
        updatedata({...data,[event.target.name]:event.target.value})
    }
    let signinhandler=()=>{
        Axios.post('http://localhost:8080/user/login',data).then((resp)=>{
            if(resp.data.msg===1)
            {
                alert("Login success");
                updateid(true)
                localStorage.setItem("id","true")
                navigate('/signin')
            }
            else if(resp.data.msg===0)
            {
                alert("Wrong credentials")
            }
            else
            {
                alert("Email not registered")
            }
        }).catch()
    }
    let signuphandler=()=>{
        Axios.post('http://localhost:8080/user/register',data).then((resp)=>{
            alert(resp.data.msg)
        }).catch()
    }

    const handleGoogleSuccess = (response) => {
        console.log('response =>', response);
        const userObject = jwtDecode(response.credential);
        console.log('Google Login Success:', userObject);
        // Handle Google login success
      };
    
    const handleGoogleFailure = (error) => {
        console.log('Google Login Failure:', error);
    };

    return <div>
        <div className="container mt-5 ml-50">
            <div className="row">
                <div className="col-6">
                <form>
                   <div className="form-group">
                       <lebel>Name</lebel>
                       <input className="form-control" onChange={updatehandler} name="name" type="text" required placeholder="enter your name..." ></input>
                    </div>
                    <div className="form-group">
                        <lebel>Email</lebel>
                        <input className="form-control"  onChange={updatehandler} name="email" type="email" required placeholder="enter your mail..." ></input>
                    </div>
                    <div className="form-group">
                        <lebel>Password</lebel>
                         <input className="form-control"  onChange={updatehandler} name="password" required type="password" placeholder="enter your password..." ></input>
                    </div>
                </form>
                <button onClick={signuphandler} className="btn btn-primary">SignUp</button>
                <button onClick={signinhandler} className="ml-5 btn btn-success">SignIn</button>
                <div className="mt-3">
                  <GoogleOAuthProvider  clientId="Jhmxn39k8KfQr3v15qwzbnvgjcjdw83y">
                  <GoogleLogin
  onSuccess={credentialResponse => {
    console.log('credentialResponse =>',credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>
                  </GoogleOAuthProvider>
                </div>
                </div>
            </div>
        </div>
    </div>
}
export default Signup