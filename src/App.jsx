import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from "react-router-dom"
import Purple from './components/Purple'
import Orange from './components/Orange'
import Home from './components/Home'

function App() {

  return (
    <>
         <div id="container">
      <div id="navbar">
        <Link to='/'>Home</Link>
        <Link to='/purple'>Purple</Link>
        <Link to='/orange'>Orange</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/purple' element={<Purple />} />
          <Route path='/orange' element={<Orange />} />
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App
