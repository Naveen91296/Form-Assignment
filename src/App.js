import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Form1 from './Components/Form1/Form1'
import Form2 from './Components/Form2/Form2'
import Form3 from './Components/Form3/Form3'
import Header from './Components/Header/Header'
import './App.css'

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
         <Route path="/" element={<Form1/>}  />
         <Route path='/form2' element={<Form2/>} />
         <Route path='/form3' element={<Form3/>}/>
      </Routes>
    </div>
  )
}

export default App