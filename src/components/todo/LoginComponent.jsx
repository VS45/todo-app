import { useNavigate } from 'react-router-dom'
import React, {  useState } from 'react'
import {  useAuth } from './security/AuthContext';
export default function LoginComponent(){
    const [username,setUsername]=useState('vs45tech')
    const [password,setPassword]=useState('')
const [isError,setIsError]=useState(false)
const {login}=useAuth();

const navigate=useNavigate();

    function handleUsernameChange(e){
        setUsername(e.target.value);
    }
    function handlePasswordChange(e){
setPassword(e.target.value)
    }
    
    function handleSubmit(){
        const isLoggedIn=login(username,password);
        if(isLoggedIn){
            navigate(`/welcome/${username}`)
        }else{
            setIsError(true)
        }
       
    }
    
    return (
        <div className='Login'>
            <h1>Time to Login</h1>
       {isError && <div className="errorMessage">Authentication failed! please check your credentials</div>}
       
            <div className="LoginForm">
                <div>
                    <label htmlFor="">User Name</label>
                    <input 
                    type="text" 
                    name="username" 
                    value={username} 
                    onChange={handleUsernameChange} />
                </div>
                <div>
                    <label htmlFor="">Password:</label>
                    <input 
                    type="password" 
                    name="password"
                    value={password}
                    onChange={handlePasswordChange}
                    />
                </div>
                <div>
                    <button type="button" onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    )
}
