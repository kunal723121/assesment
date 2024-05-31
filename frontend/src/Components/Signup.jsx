import  Axios  from "axios"
import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router"
import { useAuth } from "./Auth"
import { Link } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'
import {jwtDecode} from 'jwt-decode'

let Signup=()=>{
    let reference=useRef()
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
    let signuphandler=()=>{
        if (!data.email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)) {
            return alert("Please enter a valid email");
        }
        Axios.post('assesment-qtuh.vercel.app/user/register',data).then((resp)=>{
            alert(resp.data.msg)
        }).catch()
    }
    const handleGoogleSuccess = (response) => {
        const userObject = jwtDecode(response.credential)
        console.log('Google Login Success:', userObject)

        // Send the Google user details to your backend to register or login
        Axios.post('assesment-qtuh.vercel.app/user/google-login', {
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
    useEffect(()=>{
        if(data.name.length===0 || data.email.length===0 || data.password.length===0)
         {
           reference.current.disabled=true
         }
         else
         {
            reference.current.disabled=false
         }
      },[data])

    const handleGoogleFailure = (error) => {
        console.log('Google Login Failure:', error)
    }
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
                <div className="flex mb-2">
                <button onClick={signuphandler} ref={reference} className="btn btn-primary mr-2">SignUp</button>
                <h5 className="mt-2">Already have account ? <Link to="/signin">Signin</Link></h5>
                </div>
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
}
export default Signup
