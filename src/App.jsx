import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import TshirtPage from './pages/TshirtPage'
import ContactPage from './pages/ContactPage'
import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tshirt" element={<TshirtPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  )
}

export default App