import { useState, useEffect } from 'react'
import axios from "axios";
import { Navigate, useParams } from 'react-router-dom';

const EditUser = () => {
  
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const { id } = useParams();
  
  
  const deleteUser = async (e) => {
    e.preventDefault();
    let userId = sessionStorage.getItem('userId');
    await axios.delete(`http://localhost:5000/users/${userId}`)
    .then((res) => {
      if (res.data.errors) {
        console.log(res.data.message);
      }
      else {
        sessionStorage.removeItem('userId');
        sessionStorage.removeItem('token');
        window.location.href = "/Register";
      }
    })
  }
  
  const updateUser = async (e) => {
    e.preventDefault();
    let userId = sessionStorage.getItem('userId');

    await axios.patch(`http://localhost:5000/users/${userId}`,{
    name: name,
    password: password
  }).then((res) => {
    if (res.data.errors) {
      console.log(res.data.message);
    }
    else {
      Navigate("/Profile")
    }
  });
}
/* eslint-disable react-hooks/exhaustive-deps */

useEffect(() => {
  getUserById();
}, []);

const getUserById = async () => {
  const response = await axios.get(`http://localhost:5000/users/${id}`);
  setName(response.data.name);
  setPassword(response.data.password);
}

return (
  <div>
  <form onSubmit={ updateUser } className="profile-page">
  <div className="field">
  <label className="label">Name</label>
  <input 
  type="text"
  placeholder="Name"
  value={ name }
  onChange={ (e) => setName(e.target.value) }
  />
  </div>
  
  <div className="field">
  <label className="label">Password</label>
  <input 
  type="password"
  placeholder="Password"
  value={ password }
  onChange={ (e) => setPassword(e.target.value) }
  />
  </div>
  
  <div className="field">
  <button className="register-btn" type='submit'>Update</button>
  <button 
  className="delete-btn"
  onClick={deleteUser}
  >DELETE ACCOUNT</button>
  </div>
  </form>
  </div>
  )
}

export default EditUser