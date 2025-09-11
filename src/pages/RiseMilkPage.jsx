import React from 'react'
import { useNavigate } from 'react-router-dom'

function RiseMilkPage() {
  const navigate = useNavigate()

  return (
    <div style={{
      minHeight: '100vh',
      background: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <h1 style={{
        fontSize: 'clamp(2rem, 5vw, 4rem)',
        fontWeight: '700',
        color: '#2d2d2d',
        marginBottom: '2rem',
        textTransform: 'uppercase'
      }}>
        RISE Молочная продукция
      </h1>
      
      <p style={{
        fontSize: '1.2rem',
        color: '#666',
        marginBottom: '3rem',
        maxWidth: '600px',
        lineHeight: '1.6'
      }}>
        Здесь будет информация о молочной продукции компании RISE.
      </p>

      <button 
        onClick={() => navigate('/')}
        style={{
          background: '#D4AF37',
          color: '#2d2d2d',
          border: 'none',
          padding: '1rem 2rem',
          fontSize: '1.1rem',
          fontWeight: '600',
          borderRadius: '12px',
          cursor: 'pointer',
          textTransform: 'uppercase',
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'translateY(-2px)'
          e.target.style.boxShadow = '0 6px 20px rgba(212, 175, 55, 0.4)'
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'translateY(0)'
          e.target.style.boxShadow = '0 4px 15px rgba(212, 175, 55, 0.3)'
        }}
      >
        ← Назад на главную
      </button>
    </div>
  )
}

export default RiseMilkPage
