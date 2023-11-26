import React from 'react'
import { Routes, Route  } from 'react-router-dom'
import Home from '../pages/Home'
import Cart from '../components/Cart'

function AppRouters() {
  return (
    <>
        <Routes>
            <Route index path='/' element={<Home/>} />
            <Route path='/cart' element={<Cart />} />
        </Routes>
    </>
  )
}

export default AppRouters