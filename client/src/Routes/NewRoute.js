import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../views/Home/Home'
import Coursespage from '../views/Coursespage/Coursespage'

function NewRoute() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/Courses" element={<Coursespage/>}/>
      </Routes>
    </div>
  )
}

export default NewRoute
