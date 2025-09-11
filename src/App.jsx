import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import RiseMilkPage from './pages/RiseMilkPage'
import RiseAgroPage from './pages/RiseAgroPage'
import RiseMeatPage from './pages/RiseMeatPage'
import RiseBakeryPage from './pages/RiseBakeryPage'
import AboutPage from './pages/AboutPage'
import CooperationPage from './pages/CooperationPage'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rise-milk" element={<RiseMilkPage />} />
        <Route path="/rise-agro" element={<RiseAgroPage />} />
        <Route path="/rise-meat" element={<RiseMeatPage />} />
        <Route path="/rise-bakery" element={<RiseBakeryPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cooperation" element={<CooperationPage />} />
      </Routes>
    </div>
  )
}

export default App
