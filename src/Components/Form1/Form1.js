import React, { useEffect, useState } from 'react'
import Input from '../miniComponents/Input'
import { validation } from './validation'
import './Form1.css'
import Button from '../miniComponents/Button'
import { useNavigate } from 'react-router-dom'

const initialValues = {
  email:"",
  password:""
  }

const Form1 = () => {

  const [data,setData] = useState(initialValues)
  const [isSubmit,setIsSubmit] = useState(false)
  const [error,setError] = useState({})
  const [next,setNext] = useState(false)
  const navigate = useNavigate()

 const handleData = (event) => {
     let {name,value} = event.target
     setData({...data,
                    [name] : value})
 }

 const handleSubmit = (event) => {
    event.preventDefault();
    const err = validation(data)
    setError(preError => err)
    setIsSubmit(true)
 }

 useEffect( () => {
      if(Object.keys(error).length === 0 && isSubmit)
      {
        setData(initialValues)
         if(next)  navigate('/form2') 
      }
 },[error])

 

  return (
    <div className='container'>
    <div className='card'>
        <div>
         <h2>Form1</h2>
        </div>
      <div>
      <form onSubmit={handleSubmit} className="card-form">
         <Input type = {"text"} placeholder = {"Enter your Email"} name = {"email"} value = {data.email}
         onChange = {handleData}/>
         <h6>{error.email}</h6>

         <Input type = {"password"} placeholder = {"Enter password"} name = {"password"} value = {data.password} onChange = {handleData}/>
         <h6>{error.password}</h6>   
             
         <div className='btns'>
            <Button name = {"Back"} color={false} disabled={true}/>
            <Button name={"Save"} color={true} type={"submit"} />
            <Button name = {"Save&Next"} type={"submit"} color={true} onClick={() => setNext(true)}/>
         </div>

      </form>
      </div>
        </div>
        </div>
  )
}

export default Form1