import {React, useState} from "react";
import "./Register.css";
import {Link, useNavigate } from 'react-router-dom';
import axios from "axios";

const RegisterForm = () => {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const saveUser = async (e) => {
        console.log('User created')
        e.preventDefault();
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
    }

    return (
        <form onSubmit={ saveUser }>
        <div className="cover">
            <label>Register</label>
            <input onChange={ (e) => setName(e.target.value) } type="text" placeholder="username"></input>
            <input onChange={ (e) => setPassword(e.target.value) } type="password" placeholder="password"></input>
            <button className="register-btn">Register</button>
            
            <Link to='/login' className="redirect_button">Login</Link>
        </div>
        </form>
    )
}

export default RegisterForm;