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
  enableMagnetism 
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
      <div className="advantage-card__video-background">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="advantage-card__video"
        >
          <source src={data.videoSrc} type="video/mp4" />
        </video>
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
