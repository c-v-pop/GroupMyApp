import {React, useState} from "react";
import "./Register.css";
import {Link, useNavigate } from 'react-router-dom';
import axios from "axios";

const RegisterForm = () => {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const saveUser = async (e) => {
        e.preventDefault();
        if(name === "" || password === "")
        {
          alert('Insert credentials');
        }
        else
        {
        await axios.post('http://localhost:5000/users',{
            name: name,
            password: password
        }).then((res) => {
            if (res.data.errors)
            {
                console.log(res.data.message);
            }
            else
            {
                navigate("/Login")
            }
        });
    }}

    return (
        <form onSubmit={ saveUser }>
        <div className="cover">
            <h1>REGISTER</h1>
            <input onChange={ (e) => setName(e.target.value) } type="text" placeholder="username" required></input>
            <input onChange={ (e) => setPassword(e.target.value) } type="password" placeholder="password" required></input>
            <button className="register-btn">Register</button>
            
            <Link to='/login' className="register-btn">Login</Link>
        </div>
        </form>
    )
}

export default RegisterForm;