import { useState, useEffect } from 'react'
import axios from "axios";
import { Navigate, useParams } from 'react-router-dom';
 
const EditUser = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const { id } = useParams();
 
    const updateUser = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:5000/users/${id}`,{
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
            <form onSubmit={ updateUser }>
                <div className="field">
                    <label className="label">Name</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Name"
                        value={ name }
                        onChange={ (e) => setName(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <label className="label">Password</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Password"
                        value={ password }
                        onChange={ (e) => setPassword(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <button className="button is-primary">Update</button>
                </div>
            </form>
        </div>
    )
}
 
export default EditUser