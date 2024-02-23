import { createContext, useContext, useState } from "react";
import { executeBasicAuthentication } from "../api/HelloWorldApiService";

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
        if(response.status==200){
            setToken(baToken)
            setUsername(username)
            setAuthenticated(true)
            return true
        }else{
            setUsername(username)
            setAuthenticated(false)
            return false
        }
    }catch(err){
console.log(err)
return false
    }finally{

    }

}
function logOut(){
    setToken('')
    setAuthenticated(false)
}
return (
    <AuthContext.Provider value={{isAuthenticated,setAuthenticated,login,logOut,username,token}}>
        {children}
        </AuthContext.Provider>
)
}