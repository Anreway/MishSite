import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../MagicBento.css';
import {
  DEFAULT_PARTICLE_COUNT,
  DEFAULT_SPOTLIGHT_RADIUS,
  DEFAULT_GLOW_COLOR
} from '../constants';
import { groceryPageData } from '../data/groceryPageData';
import BentoCardGrid from '../components/BentoCardGrid';
import TextCard from '../components/TextCard';
import VideoCard from '../components/VideoCard';
import ContactCard from '../components/ContactCard';
import ProductCard from '../components/ProductCard';
import GlobalSpotlight from '../components/GlobalSpotlight';
import useMobileDetection from '../hooks/useMobileDetection';

function RiseGroceryPage() {
  const navigate = useNavigate()
  const gridRef = useRef(null);
  const isMobile = useMobileDetection();
  const shouldDisableAnimations = isMobile;

  return (
    <div className="App">
      <GlobalSpotlight
        gridRef={gridRef}
        disableAnimations={shouldDisableAnimations}
        enabled={true}
        spotlightRadius={DEFAULT_SPOTLIGHT_RADIUS}
        glowColor={DEFAULT_GLOW_COLOR}
      />

      <div className="back-button-container">
        <button 
          className="back-button"
          onClick={() => navigate('/')}
          type="button"
          aria-label="Назад на главную"
        >
          ← Назад на главную
        </button>
      </div>

      <BentoCardGrid gridRef={gridRef}>
        <TextCard
          data={groceryPageData.textCard}
          textAutoHide={true}
          enableBorderGlow={true}
          shouldDisableAnimations={shouldDisableAnimations}
          particleCount={DEFAULT_PARTICLE_COUNT}
          glowColor={DEFAULT_GLOW_COLOR}
          enableTilt={true}
          clickEffect={true}
          enableMagnetism={true}
          onMenuToggle={null}
          isMenuOpen={false}
        />

        <VideoCard
          data={groceryPageData.videoCard}
          enableBorderGlow={true}
          shouldDisableAnimations={shouldDisableAnimations}
          particleCount={DEFAULT_PARTICLE_COUNT}
          glowColor={DEFAULT_GLOW_COLOR}
          enableTilt={true}
          clickEffect={true}
          enableMagnetism={true}
        />
      </BentoCardGrid>

      <div className="milk-products-section">
        <h2 className="milk-products-title">НАШ АССОРТИМЕНТ</h2>
        <div className="milk-products-grid">
          {groceryPageData.groceryCategories.map((categoryData) => (
            <ProductCard
              key={categoryData.id}
              data={categoryData}
              enableBorderGlow={true}
              shouldDisableAnimations={shouldDisableAnimations}
              particleCount={DEFAULT_PARTICLE_COUNT}
              glowColor={DEFAULT_GLOW_COLOR}
              enableTilt={true}
              clickEffect={true}
              enableMagnetism={true}
            />
          ))}
        </div>
      </div>

      <div className="contact-section">
        <ContactCard data={groceryPageData.contactCard} />
      </div>
    </div>
  )
}

export default RiseGroceryPage
