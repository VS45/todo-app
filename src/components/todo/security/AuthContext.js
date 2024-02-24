import { createContext, useContext, useState } from "react";
import { executeBasicAuthentication } from "../api/HelloWorldApiService";
import { apiClient } from "../api/apiClient";

export const AuthContext=createContext()
export const useAuth=()=>useContext(AuthContext);

export default function AuthProvider({children}){
const [isAuthenticated,setAuthenticated]=useState(false)
const [username,setUsername]=useState('vs45tech')
const [token,setToken]=useState('')

async function login(username,password){
    const baToken='Basic '+ window.btoa(username+":"+password)
    try{
        const response=await    executeBasicAuthentication(baToken)
        if(response.status===200){
            setToken(baToken)
            setUsername(username)
            setAuthenticated(true)
            apiClient.interceptors.request.use(
                (config)=>{
                    config.headers.Authorization=baToken
                    return config
                }
            )
            return true
        }else{
            logOut()
            return false
        }
    }catch(err){
       logOut()
        return false
    }

}
function logOut(){
    setToken(null)
    setAuthenticated(false)
    setUsername(null)
}
return (
    <AuthContext.Provider value={{isAuthenticated,setAuthenticated,login,logOut,username,token}}>
        {children}
        </AuthContext.Provider>
)
}