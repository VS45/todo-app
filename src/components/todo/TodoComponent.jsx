import { useParams,useNavigate } from "react-router-dom"
import { addTodoApi, retrieveTodoApi, updateTodoApi } from "./api/TodoApiService";
import { useAuth } from "./security/AuthContext";
import { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import moment from "moment";

export default function TodoComponent(){
    const {id}=useParams();
   const {username,token}= useAuth()
   const [description,setDescription]=useState('');
   const [targetDate,setTargetDate]=useState('');
   const navigate=useNavigate()
    function retrieveTodoDetails(){
        retrieveTodoApi(username,id,token)
        .then(({data})=>{
            setDescription(data.description)
            setTargetDate(data.targetDate)
        })
        .catch((err)=>console.log(err))
        .finally(()=>console.log('clean up'))
    }
    function onSubmit(values){
console.log(values)
if(id!=-1){
    updateTodoApi(username,id,values,token)
    .then(({data})=>navigate('/todos'))
    .catch((error)=>console.log(error))
    .finally(()=>console.log('Finally'))
}else{
    addTodoApi(username,values,token) 
    .then(({data})=>navigate('/todos'))
    .catch((error)=>console.log(error))
    .finally(()=>console.log('Finally')) 
}


    }
    function validate(values){
        const desc=values.description
        let  errors={ }
        if(desc.length<5){
        errors.description='Enter atleast 5 characters'
    }
        if(values.targetDate === null|| values.targetDate===""|| moment(values.targetDate).isValid()){
        errors.targetDate='Enter a target date'
    }
console.log("validation: ",values)
return errors
    }
    useEffect(()=>{
        if(id!=-1){
            retrieveTodoDetails()
        }
    },[id])
return (
    <div className="container">
        <h1>Enter Todo Details</h1>
        <div>
          <Formik initialValues={{description,targetDate}}
enableReinitialize={true}
onSubmit={onSubmit}
validate={validate}
validateOnBlur={false}
validateOnChange={false}
>
           { (props)=>(
<Form>
    <ErrorMessage
    name="description"
    component="div"
    className="alert alert-warning"
    />
    <ErrorMessage
    name="targetDate"
    component="div"
    className="alert alert-warning"
    />
    <fieldset className="form-group">
        <label htmlFor="desc">Description</label>
        <Field type="text" className="form-control" name="description"/>
    </fieldset>
    <fieldset className="form-group">
        <label htmlFor="desc">Description</label>
        <Field type="date" className="form-control" name="targetDate"/>
    </fieldset>
    <div>
        <button className="btn btn-success m-5" type="submit">Save</button>
    </div>
</Form>
            )
            }
            </Formik> 
        
        </div>
    </div>
)
}