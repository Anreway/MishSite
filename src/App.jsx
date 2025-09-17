import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { LanguageProvider, useLanguage } from './contexts/LanguageContext'
import './App.css'
import HomePage from './pages/HomePage'
import RiseMilkPage from './pages/RiseMilkPage'
import RiseAgroPage from './pages/RiseAgroPage'
import RiseMeatPage from './pages/RiseMeatPage'
import RiseGroceryPage from './pages/RiseGroceryPage'
import AboutPage from './pages/AboutPage'
import CooperationPage from './pages/CooperationPage'

function AppRoutes() {
  const { language } = useLanguage();
  const location = useLocation();
  
  console.log('Current route:', location.pathname);
  console.log('Current language:', language);
  
  return (
    <div className="App">
      <Routes key={language}>
        <Route path="/" element={<HomePage />} />
        <Route path="/rise-milk" element={<RiseMilkPage />} />
        <Route path="/rise-agro" element={<RiseAgroPage />} />
        <Route path="/rise-meat" element={<RiseMeatPage />} />
        <Route path="/rise-grocery" element={<RiseGroceryPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cooperation" element={<CooperationPage />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppRoutes />
    </LanguageProvider>
  )
}

export default App
