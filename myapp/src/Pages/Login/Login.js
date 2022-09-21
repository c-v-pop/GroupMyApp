import React, { useState } from "react";
import "./Login.css"
import {Link} from 'react-router-dom';

const Login = () => {

    const [username, setUsername] = useState("");
    const [showProfile, setShowProfile] = useState(false);

    return (
        <div className="cover"> <h1>LOGIN</h1>
            <form>
      <label>
        <p>Username</p>
        <input type="text"/>
      </label>
      <label>
        <p>Password</p>
        <input type="password" />
      </label>
      <div>
        <button type="submit" className="redirect_button">Submit</button>
      </div>
      <Link to='/register' className="redirect_button">Register</Link>
    </form>
        </div>
    )
};

export default Login;