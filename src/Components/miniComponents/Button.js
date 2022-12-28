import React from 'react'

const Button = ({name,type,color,onClick,disabled,...rest}) => {

  const active = {
     color:color ? "black" : "grey",
     backgroundColor: color ? "white" : "white",
     borderColor:color ? "black" : "white"
  }

  return (
    <div>
       <button  style={active} onClick={onClick} disabled={disabled}>{name}</button>
    </div>
  )
}

export default Button