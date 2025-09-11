import React, { useRef } from 'react';
import './MagicBento.css';
import {
  DEFAULT_PARTICLE_COUNT,
  DEFAULT_SPOTLIGHT_RADIUS,
  DEFAULT_GLOW_COLOR
} from './constants';
import { cardData } from './data/cardData';
import BentoCardGrid from './components/BentoCardGrid';
import TextCard from './components/TextCard';
import VideoCard from './components/VideoCard';
import ButtonCard from './components/ButtonCard';
import AdvantageCard from './components/AdvantageCard';
import ContactCard from './components/ContactCard';
import FlowingMenu from './components/FlowingMenu';
import GlobalSpotlight from './components/GlobalSpotlight';
import useMobileDetection from './hooks/useMobileDetection';

const MagicBento = ({
  textAutoHide = true,
  enableSpotlight = true,
  enableBorderGlow = true,
  disableAnimations = false,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  particleCount = DEFAULT_PARTICLE_COUNT,
  enableTilt = false,
  glowColor = DEFAULT_GLOW_COLOR,
  clickEffect = true,
  enableMagnetism = true,
  onMenuToggle,
  isMenuOpen = false
}) => {
  const gridRef = useRef(null);
  const isMobile = useMobileDetection();
  const shouldDisableAnimations = disableAnimations || isMobile;

  const handleButtonCardClick = (cardId) => {
    console.log(`Button card clicked: ${cardId}`);
  };

  return (
    <>
      {enableSpotlight && (
        <GlobalSpotlight
          gridRef={gridRef}
          disableAnimations={shouldDisableAnimations}
          enabled={enableSpotlight}
          spotlightRadius={spotlightRadius}
          glowColor={glowColor}
        />
      )}

      <BentoCardGrid gridRef={gridRef}>
        <TextCard
          data={cardData.textCard}
          textAutoHide={textAutoHide}
          enableBorderGlow={enableBorderGlow}
          shouldDisableAnimations={shouldDisableAnimations}
          particleCount={particleCount}
          glowColor={glowColor}
          enableTilt={enableTilt}
          clickEffect={clickEffect}
          enableMagnetism={enableMagnetism}
          onMenuToggle={onMenuToggle}
          isMenuOpen={isMenuOpen}
        />

        <VideoCard
          data={cardData.videoCard}
          enableBorderGlow={enableBorderGlow}
          shouldDisableAnimations={shouldDisableAnimations}
          particleCount={particleCount}
          glowColor={glowColor}
          enableTilt={enableTilt}
          clickEffect={clickEffect}
          enableMagnetism={enableMagnetism}
        />
      </BentoCardGrid>

      <div className="button-cards-section">
        <div className="button-cards-grid">
          {cardData.buttonCards.map((buttonCardData) => (
            <ButtonCard
              key={buttonCardData.id}
              data={buttonCardData}
              enableBorderGlow={enableBorderGlow}
              shouldDisableAnimations={shouldDisableAnimations}
              particleCount={particleCount}
              glowColor={glowColor}
              enableTilt={enableTilt}
              clickEffect={clickEffect}
              enableMagnetism={enableMagnetism}
              onClick={handleButtonCardClick}
            />
          ))}
        </div>
      </div>

      <div className="products-section">
        <div className="products-menu-container">
          <FlowingMenu items={cardData.flowingMenuItems} />
        </div>
      </div>

      <div className="advantages-section">
        <h2 className="advantages-title">Преимущества работы с нами</h2>
        <div className="advantages-grid">
          {cardData.advantageCards.map((advantageCardData) => (
            <AdvantageCard
              key={advantageCardData.id}
              data={advantageCardData}
              enableBorderGlow={enableBorderGlow}
              shouldDisableAnimations={shouldDisableAnimations}
              particleCount={particleCount}
              glowColor={glowColor}
              enableTilt={enableTilt}
              clickEffect={clickEffect}
              enableMagnetism={enableMagnetism}
            />
          ))}
        </div>
      </div>

      <div className="contact-section">
        <ContactCard data={cardData.contactCard} />
      </div>
    </>
  );
};

export default MagicBento;
