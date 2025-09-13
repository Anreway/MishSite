import React from 'react';
import ParticleCard from './ParticleCard';

const AdvantageCard = ({ 
  data, 
  enableBorderGlow, 
  shouldDisableAnimations, 
  particleCount, 
  glowColor, 
  enableTilt, 
  clickEffect, 
  enableMagnetism,
  useImage = false
}) => {
  return (
    <ParticleCard
      className={`advantage-card ${enableBorderGlow ? 'card--border-glow' : ''}`}
      style={{
        '--glow-color': '212, 175, 55'
      }}
      disableAnimations={shouldDisableAnimations}
      particleCount={particleCount}
      glowColor={glowColor}
      enableTilt={enableTilt}
      clickEffect={clickEffect}
      enableMagnetism={enableMagnetism}
    >
      <div className="advantage-card__media-background">
        {useImage ? (
          <img
            src={data.imageSrc}
            alt={data.title}
            className="advantage-card__image"
            onError={(e) => console.log('Advantage image error:', e)}
          />
        ) : (
          <video
            preload="metadata"
            autoPlay
            loop
            muted
            playsInline
            className="advantage-card__video"
            onLoadedData={(e) => {
              e.target.play().catch(err => console.log('Video autoplay failed:', err));
            }}
            onError={(e) => console.log('Advantage video error:', e)}
          >
            <source src={data.videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        <div className="advantage-card__overlay"></div>
      </div>
      
      <div className="advantage-card__content">
        <h3 className="advantage-card__title">{data.title}</h3>
        <p className="advantage-card__description">{data.description}</p>
      </div>
    </ParticleCard>
  );
};

export default AdvantageCard;
