import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../views/Home/Home'

function NewRoute() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default NewRoute
