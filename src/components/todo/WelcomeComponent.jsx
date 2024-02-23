import {useParams,Link } from 'react-router-dom'
import { useState } from 'react';
import {  retrieveHelloWorldPathVariable } from './api/HelloWorldApiService';
export default function WelcomeComponent(){
    const {username}=useParams();
    const [message,setMessage]=useState(null)

function callHelloWorldPathVariableRestApi(){
    retrieveHelloWorldPathVariable(username)
  .then((response)=>successResponse(response))
  .catch((err)=>errorResponse(err))
  .finally(()=>console.log('Clean up'))
  
    }
   
   
    function successResponse(response){
        console.log('successfully called',response)
       setMessage(response.data.message)
    }
    function errorResponse(error){
        console.log('successfully called',error)
    }
    return (
        <div className='Welcome'>
            <h1>Welcome {username}</h1>
            <div>
Manage Your Todos - <Link to="/todos">go here</Link>
            </div>
           <div>
            <button className="btn btn-success" onClick={callHelloWorldPathVariableRestApi}>Call Hello World Rest API</button>
           </div>
       <div className="text-info">{message}</div>
            </div>
    )
}


