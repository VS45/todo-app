import { useNavigate } from 'react-router-dom'
import React, {  useState } from 'react'
import {  useAuth } from './security/AuthContext';
export default function LoginComponent(){
    const [username,setUsername]=useState('in28minutes')
    const [password,setPassword]=useState('')
const [isSuccess,setIsSucces]=useState(false);
const [isError,setIsError]=useState(false)
const {setAuthenticated}=useAuth();

const navigate=useNavigate();

    function handleUsernameChange(e){
        setUsername(e.target.value);
    }
    function handlePasswordChange(e){
setPassword(e.target.value)
    }
    function handleSubmit(){
        if(username==="in28minutes"&& password==="dummy"){
            setAuthenticated(true)
            setIsSucces(true)
            setIsError(false)
            navigate(`/welcome/${username}`)
        }else{
            setIsError(true)
            setIsSucces(false)
        }
       
    }
    
    return (
        <div className='Login'>
            <h1>Time to Login</h1>
            {isSuccess && <div className="successMessage">Authenticated Successfully</div>}
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
