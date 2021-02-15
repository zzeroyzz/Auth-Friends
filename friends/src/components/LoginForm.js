import e from "cors";
import React, {useState} from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth";
import {useHistory } from "react-router-dom";




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
  const history = useHistory();

const handleSubmit = (e) =>{
    e.preventDefault();
    axiosWithAuth()
    .post("api/login",user.loginState)
    .then((res) => {
        console.log('kh: Login.js: login:res', res)
        window.localStorage.setItem('token',res.data.payload)
        history.push('/friendslist')
    })
    .catch(err =>{
        console.error(err.response, "login error")
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
        <button type="submit">Log in</button>
        </div>
    </form>
)
}

export default LoginForm;
