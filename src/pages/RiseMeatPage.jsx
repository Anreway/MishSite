import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../MagicBento.css';
import {
  DEFAULT_PARTICLE_COUNT,
  DEFAULT_SPOTLIGHT_RADIUS,
  DEFAULT_GLOW_COLOR
} from '../constants';
import { meatPageData } from '../data/meatPageData';
import { useTranslation } from '../contexts/LanguageContext';
import { useTranslatedPageData } from '../hooks/useTranslatedPageData';
import BentoCardGrid from '../components/BentoCardGrid';
import TextCard from '../components/TextCard';
import VideoCard from '../components/VideoCard';
import ContactCard from '../components/ContactCard';
import ProductCard from '../components/ProductCard';
import GlobalSpotlight from '../components/GlobalSpotlight';
import LanguageSwitcher from '../components/LanguageSwitcher';
import useMobileDetection from '../hooks/useMobileDetection';

function RiseMeatPage() {
  const navigate = useNavigate()
  const { t } = useTranslation();
  const translatedData = useTranslatedPageData('meat', meatPageData);
  const gridRef = useRef(null);
  const isMobile = useMobileDetection();
  const shouldDisableAnimations = isMobile;

  return (
    <div className="App">
      <LanguageSwitcher />
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
          aria-label={t('common.backToHome')}
        >
          ← {t('common.backToHome')}
        </button>
      </div>

      <BentoCardGrid gridRef={gridRef}>
        <TextCard
          data={translatedData.textCard}
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
          data={translatedData.videoCard}
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
        <h2 className="milk-products-title">{t('meat.assortmentTitle')}</h2>
        <div className="milk-products-grid">
          {translatedData.meatCategories.map((categoryData) => (
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
        <ContactCard data={translatedData.contactCard} />
      </div>
    </div>
  )
}

export default RiseMeatPage
