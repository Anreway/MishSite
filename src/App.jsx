import React from 'react'
import MagicBento from './MagicBento'
import './App.css'

function App() {
  return (
    <div className="App">
      <MagicBento
        textAutoHide={true}
        enableSpotlight={true}
        enableBorderGlow={true}
        enableTilt={true}
        enableMagnetism={true}
        clickEffect={true}
        spotlightRadius={300}
        particleCount={12}
        glowColor="212, 175, 55"
      />
    </div>
  )
}

export default App
