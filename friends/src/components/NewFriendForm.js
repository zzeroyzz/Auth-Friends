import React,{useState} from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth"


const LoginForm = () =>{

const [signup, setSignUp] = useState({
    
    name: '',
    age: "",
    email: '',
    
});

const handleChanges =(e) =>{
    setSignUp({
        
        ...signup,
        [e.target.name] :e.target.value,
        
    })
}

const handleSubmit = (e) =>{
    e.preventDefault();
    axiosWithAuth()
    .post("/api/friends",signup)
    .then(res => {
        console.log('kh: signupform.js: signupform:res', res)
    })
    .catch(err =>{
        console.error(err.response)
    })
}
return(
    <form onSubmit={handleSubmit}>
        <div className="friend-form">
        <input 
        type="text"
        name="name"
        value={signup.name}
        onChange={handleChanges}
        placeholder="Pancake"
        />
       <input 
        type="text"
        name="age"
        placeholder="24"

        value={signup.age}
        onChange={handleChanges}
        />
        <input 
        type="text"
        name="email"
        placeholder="grumpy_pancake@lambdaschool.com"

        value={signup.email}
        onChange={handleChanges}
        />
        
        <button>Add Friend</button>
        </div>
    </form>
)
}

export default LoginForm;
