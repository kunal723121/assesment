import  Axios  from "axios"
import { useState } from "react"
import { useNavigate } from "react-router"
import { useAuth } from "./Auth"
import { Link } from "react-router-dom"
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'
import {jwtDecode} from 'jwt-decode'

let Signin=()=>{
    let{id,updateid}=useAuth()
    let navigate=useNavigate()
    let[data,updatedata]=useState({
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
                navigate('/home')
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
    const handleGoogleSuccess = (response) => {
        const userObject = jwtDecode(response.credential)
        console.log('Google Login Success:', userObject)

        // Send the Google user details to your backend to register or login
        Axios.post('http://localhost:8080/user/google-login', {
            email: userObject.email,
            name: userObject.name,
            googleid: userObject.sub
        }).then((resp) => {
            alert('Login Success')
            updateid(true)
            localStorage.setItem("id", "true")
            navigate('/home')
        }).catch((error) => {
            console.log('Google login error', error)
            alert('Google login failed')
        })
    }
    const handleGoogleFailure = (error) => {
        console.log('Google Login Failure:', error)
    }
    
    return <div>
        <div className="container mt-5 ml-50">
            <div className="row">
                <div className="col-6">
                <form>
                    <div className="form-group">
                        <lebel>Email</lebel>
                        <input className="form-control"  onChange={updatehandler} name="email" type="email" required placeholder="enter your mail..." ></input>
                    </div>
                    <div className="form-group">
                        <lebel>Password</lebel>
                         <input className="form-control"  onChange={updatehandler} name="password" required type="password" placeholder="enter your password..." ></input>
                    </div>
                </form>
                <button onClick={signinhandler} className="btn btn-success">SignIn</button>
                <h3>New user?<Link to="/signup">Signup</Link></h3>
                <div className="mt-3">
                            <GoogleOAuthProvider clientId="422396320187-q9uf07o3o89bgqmj8mm3i35a8tlc9t8l.apps.googleusercontent.com">
                                <GoogleLogin
                                    onSuccess={handleGoogleSuccess}
                                    onFailure={handleGoogleFailure}
                                    buttonText="Sign up with Google"
                                />
                            </GoogleOAuthProvider>
                </div>
                </div>
            </div>
        </div>
    </div>
}
export default Signin