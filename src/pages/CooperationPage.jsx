import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import TextCard from '../components/TextCard';
import VideoCard from '../components/VideoCard';
import ContactCard from '../components/ContactCard';
import TextSection from '../components/TextSection';
import { cooperationPageData } from '../data/cooperationPageData';

const CooperationPage = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(containerRef.current.children, 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" }
      );
    }
  }, []);

  const handleContactScroll = () => {
    const contactSection = document.querySelector('.contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="page-container" ref={containerRef}>
      {/* Кнопка назад */}
      <button 
        onClick={() => navigate('/')} 
        className="back-button"
        style={{
          position: 'fixed',
          top: '2rem',
          left: '2rem',
          zIndex: 1000,
          padding: '0.8rem 1.5rem',
          backgroundColor: '#F4E87C',
          border: 'none',
          borderRadius: '25px',
          fontWeight: '600',
          fontSize: '0.9rem',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 15px rgba(244, 232, 124, 0.3)'
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = '#F0E060';
          e.target.style.transform = 'translateY(-2px)';
          e.target.style.boxShadow = '0 6px 20px rgba(244, 232, 124, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = '#F4E87C';
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = '0 4px 15px rgba(244, 232, 124, 0.3)';
        }}
      >
        ← Назад на главную
      </button>

      {/* Основные карточки */}
      <section className="bento-section">
        <div className="card-grid">
          <TextCard 
            data={cooperationPageData.textCard}
            enableBorderGlow={true}
            shouldDisableAnimations={false}
            particleCount={30}
            glowColor="244, 232, 124"
            enableTilt={true}
            clickEffect={true}
            enableMagnetism={true}
            onClick={handleContactScroll}
          />
          <VideoCard 
            data={cooperationPageData.videoCard}
            enableBorderGlow={false}
            shouldDisableAnimations={false}
            particleCount={20}
            glowColor="26, 26, 26"
            enableTilt={true}
            clickEffect={true}
            enableMagnetism={true}
          />
        </div>
      </section>

      {/* Текстовая секция сотрудничества */}
      <TextSection data={cooperationPageData.cooperationContent} />

      {/* Контактная форма */}
      <section className="contact-section">
        <ContactCard data={cooperationPageData.contactCard} />
      </section>
    </div>
  );
};

export default CooperationPage;