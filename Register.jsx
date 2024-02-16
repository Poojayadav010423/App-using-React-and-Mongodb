import React, { useState } from "react";
import axios from 'axios';
//const axios = require('axios');

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (c) => {
        c.preventDefault();
        console.log(email);
    }
    function handlesubmit(){
        const userData={
            name:name, 
            email, 
            pass,
        }
        axios.post("http://localhost:5001/register",userData)
        .then((res)=>console.log(res.data))
        .catch(e => console.log(e));
    }

    return(
        <div className="auth-form-container">
                <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Full Name</label>
                <input value={name} onChange={(c) => setName(c.target.value)} name="name" id="name" placeholder="full name" />
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(c) => setEmail(c.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(c) => setPass(c.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit" onClick={()=>handlesubmit()}>Register</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </div>
    )
} 