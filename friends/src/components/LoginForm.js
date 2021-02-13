import e from "cors";
import React, {useState} from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const loginState = {
    username ="",
    password=""

}


const LoginForm = () =>{

const [loginState,setLoginState] =useState(loginState);

const handleChanges =(e) =>{
    setLoginState({
    ...loginState,
    [e.target.name]: e.target.value})
}

const handleSubmit = (e) =>{
    e.preventDefault();
    axiosWithAuth()
    .post("/api/login",loginState)
    .then(res => {
        console.log('kh: Login.js: login:res', res)
        localStorage.setItem('token',res.data.payload)
        history.push('/protected')
    })
    .catch(err =>{
        console.error(err.response)
    })
}
return(
    <form onSubmit={handleSubmit}>
        <div className="login-form">
        <input 
        type="text"
        name="username"
        value={loginState.username}
        onchange={handleChanges}
        />
        <input 
        type="password"
        name="password"
        value={loginState.password}
        onchange={handleChanges}
        />
        <button>Log in</button>
        </div>
    </form>
)
}

export default LoginForm;
