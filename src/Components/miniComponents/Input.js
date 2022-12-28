import React from 'react'

const Input = ({type,placeholder,name,value,onChange,className,...rest}) => {
  return (
    <div>
       <input type={type} placeholder={placeholder} name={name} value={value} onChange={onChange} className={className}/>
    </div>
  )
  }
  export default Input