import { useEffect, useState } from "react"
import { useAuth } from "./security/AuthContext"
import {deleteTodoApi, retrieveAllTodosForUsernameApi } from "./api/TodoApiService"
import {useNavigate} from 'react-router-dom';
export default function ListTodoComponent(){
 const [todos,setTodos]=useState([])
 const [message,setMessage]=useState(null);
const {username,token}=useAuth();
const navigate=useNavigate();
 function refreshTodos(){
    retrieveAllTodosForUsernameApi(username,token)
    .then((response)=>successResponse(response))
    .catch((err)=>errorResponse(err))
    .finally(()=>console.log('Clean up'))
}
function successResponse(response){
    console.log('successfully called',response)
    setTodos(response.data)
}
function errorResponse(error){
    console.log('successfully called',error)
}
function deleteTodo(id){
    console.log('delete Todo',id);
    deleteTodoApi(username,id,token)
    .then(()=>{
refreshTodos();
setMessage('Successfully Deleted')
    })
    .catch((err)=>console.log(err))
    .finally(()=>console.log('clean up'))
}
function updateTodo(id){
    console.log('update Todo',id);
    navigate(`/todos/${id}`)
}
function addNewTodo(){
    navigate(`/todos/-1`)
}
useEffect(()=>
refreshTodos(),[username]);
        return(
            <div className='container'>
    <h1>Things you want to do!</h1>
    {message && <div className="alert alert-warning">{message}</div>}
    <div>
        <table className='table'>
            <thead>
                <tr>
                   <th>Description</th>
                    <th>Is Done?</th>
                    <th>Target Date</th>
                    <th>Delete</th>
                    <th>Update</th>
                </tr>
            </thead>
            <tbody>
                {
                    todos.map(todo=>(
    <tr key={todo.id}>
        <td>{todo.description}</td>
        <td>{todo.done.toString()}</td>
        <td>{todo.targetDate}</td>
        <td><button className="btn btn-warning" onClick={()=>deleteTodo(todo.id)}>Delete</button></td>
        <td><button className="btn btn-success" onClick={()=>updateTodo(todo.id)}>Update</button></td>
    </tr>
                    ))
                }
    
            </tbody>
        </table>
       
    </div>
    <div className="btn btn-success m-5" onClick={addNewTodo}>Add New Todo</div>
            </div>
        )
    }
    
    