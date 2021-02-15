import e from "cors";
import React, {useState} from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";
import {useHistory as history} from "react";




const LoginForm = () =>{
const [user,setUser] = useState({
    loginState:{
        username:"",
        password:""
},
isLoading:false,

});

const handleChange = (e) => {
    setUser({
        loginState: {
        ...user.loginState,
        [e.target.name]: e.target.value,
      },
    });
  };

const handleSubmit = (e) =>{
    e.preventDefault();
    axiosWithAuth()
    .post("api/login",user.loginState)
    .then(res => {
        console.log('kh: Login.js: login:res', res)
        window.localStorage.setItem('token',res.data.payload)
        history.push('/protected')
    })
    .catch(err =>{
        console.error(err.response)
    })
}
return(
    <form onSubmit={handleSubmit}>
        <div className="login-form">
        <label>Username</label>
        <input 
        type="text"
        name="username"
        onChange={handleChange}
        placeholder="Enter Username"
        value={user.loginState.username}
        />
        <label>Password</label>
        <input 
        placeholder="Enter Password"
        type="password"
        name="password"
        onChange={handleChange}
        value={user.loginState.password}
        />
        <button>Log in</button>
        </div>
    </form>
)
}

export default LoginForm;
