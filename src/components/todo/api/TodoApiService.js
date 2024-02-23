import axios from "axios"

const apiClient=axios.create({
    baseURL:'http://localhost:8080'
})
export const retrieveAllTodosForUsernameApi=(username,token)=>apiClient.get(`/users/${username}/todos`,{
    headers:{
        Authorization:token
    }
});
export const deleteTodoApi=(username,id,token)=>apiClient.delete(`/users/${username}/todos/${id}`,{
    headers:{
        Authorization:token
    }
});
export const retrieveTodoApi
=(username,id,token)=>apiClient.get(`/users/${username}/todos/${id}`,{
    headers:{
        Authorization:token
    }
});
export const updateTodoApi
=(username,id,todo,token)=>apiClient.put(`/users/${username}/todos/${id}`,todo,{
    headers:{
        Authorization:token
    }
});
export const addTodoApi
=(username,todo,token)=>apiClient.post(`/users/${username}/todos`,todo,{
    headers:{
        Authorization:token
    }
});
///users/{username}/todos/{id}