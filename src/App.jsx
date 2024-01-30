import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddUsers from './pages/Addusers'
import Dashboard from './pages/Dashboard'
import LoginAdmin from './pages/LoginAdmin'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginAdmin/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/addusers' element={<AddUsers/>}/>
      </Routes>
        </BrowserRouter>
      
    </div>
  )
}

export default App