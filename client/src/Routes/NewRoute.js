import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../views/Home/Home'
import Coursespage from '../views/Coursespage/Coursespage'
import Overview from '../views/Overview/Overview'
import Signup from '../Signup/Signup'
import Login from '../Login/Login'

function NewRoute() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/Courses" element={<Coursespage/>}/>
        <Route path="/overview" element={<Overview/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>

      </Routes>
    </div>
  )
}

export default NewRoute
