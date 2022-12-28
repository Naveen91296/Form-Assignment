import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../miniComponents/Button'
import Input from '../miniComponents/Input'
import { validation } from './validation'


const initialValues = {
  mobileNumber:"",
  accept:false
  }

const Form3 = () => {

  const [data,setData] = useState(initialValues)
  const [isSubmit,setIsSubmit] = useState(false)
  const [error,setError] = useState({})
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
        navigate('/form3')
      }
 },[error])

 
  return (
    <div className='container'>
    <div className='card'>
        <div>
         <h2>Form3</h2>
        </div>
      <div>
      <form onSubmit={handleSubmit} className="card-form">
      
       <Input type = {"text"} placeholder = {"Enter your Mobile Number"} name = {"mobileNumber"} 
        value = {data.mobileNumber} onChange = {handleData}/>
         <h6>{error.mobileNumber}</h6>
  
       <input type="checkbox" id="accept" onChange={() => setData({...data,accept:!data.accept})}/>
       <label for="accept">Accept terms and condiitons</label>
       <h6>{error.accept}</h6>


         <div className='btns'>
            <Button name = {"Back"} color={true} onClick={() => navigate('/form2')}/>
            <Button name={"Save"} color={true} type={"submit"} />
            <Button name = {"Save&Next"} type={"submit"} color={false} disabled={true}/>
         </div>

      </form>
      </div>
        </div>
        </div>
  )
}

export default Form3