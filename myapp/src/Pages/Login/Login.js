import React, { useState } from "react";
import "./Login.css"
import {Link, useNavigate} from 'react-router-dom';
import axios from "axios";

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState(false);

    const navigate = useNavigate();

    const login = async ()=> {

      if(username === "" || password === "")
      {
        alert('Insert credentials');
      }
      else
      {

        await axios.post('http://localhost:5000/users/login',{
          username,
          password
        }).then((res) => {
          if (res.data.errors)
          {
              console.log(res.data.message);
          }
          else
          {
              navigate("/Dashboard")
          } 
       });

      }
    }
    return (
        <div className="cover"> <h1>LOGIN</h1>
            <form onSubmit={ login }>
      <label>
        <p>Username</p>
        <input 
        type="text"
        placeholder="Username..."
        onChange={(e) => {
          setUsername(e.target.value)
        }}
        />
      </label>
      <label>
        <p>Password</p>
        <input 
        type="password"
        placeholder="Password..."
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        />
      </label>
      <div>
        <button type="button" className="redirect_button" onClick={()=>{login()}}>Submit</button>
      </div>
      <Link to='/register' className="redirect_button">Register</Link>
    </form>
        </div>
    )
};

export default Login;