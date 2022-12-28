import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../miniComponents/Button'
import Input from '../miniComponents/Input'
import { validation } from './validation'


const initialValues = {
      firstName:"",
      lastName:"",
      address:""
  }

const Form2 = () => {

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
       if(next) navigate('/form3')
      }
 },[error])

 

  return (
    <div className='container'>
    <div className='card'>
        <div>
         <h2>Form2</h2>
        </div>
      <div>
      <form onSubmit={handleSubmit} className="card-form">
         <Input type = {"text"} placeholder = {"Enter your FirstName"} name = {"firstName"} value = {data.firstName} onChange = {handleData}/>
         <h6>{error.firstName}</h6>

         <Input type = {"text"} placeholder = {"Enter your LastName(optional)"} name = {"lastName"} value = {data.lastName} onChange = {handleData} />
         <h6>{error.lastName}</h6>

         <textarea maxlength="10" minLength="5" name="address" value={data.address} onChange={handleData} placeholder="Enter your address"></textarea>
         <h6>{error.address}</h6>
             
         <div className='btns'>
            <Button name = {"Back"} color={true} onClick={() => navigate('/')}/>
            <Button name={"Save"} color={true} type={"submit"}/>
            <Button name = {"Save&Next"} type={"submit"} color={true} onClick={() => setNext(true)}/>
         </div>

      </form>
      </div>
        </div>
        </div>
  )
}

export default Form2