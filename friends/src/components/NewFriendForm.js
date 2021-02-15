import React,{useState} from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth"


const LoginForm = () =>{

const [signup, setSignUp] = useState({
    signupState:{
    id: 1,
    name: 'Joe',
    age: 24,
    email: 'joe@lambdaschool.com',
    }
});

const handleChanges =(e) =>{
    setSignUp({
        signupState:{
        ...signup.setSignUp,
        [e.target.name] :e.target.value,
        },
    })
}

const handleSubmit = (e) =>{
    e.preventDefault();
    axiosWithAuth()
    .post("/api/friends",signup.signupState)
    .then(res => {
        console.log('kh: signupform.js: signupform:res', res)
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
        name="name"
        value={signup.signupState.name}
        onchange={handleChanges}
        />
       <input 
        type="text"
        name="age"
        value={signup.signupState.age}
        onchange={handleChanges}
        />
        <input 
        type="text"
        name="email"
        value={signup.signupState.email}
        onchange={handleChanges}
        />
        
        <button>Log in</button>
        </div>
    </form>
)
}

export default LoginForm;
