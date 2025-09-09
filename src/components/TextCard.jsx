import React from 'react';
import ParticleCard from './ParticleCard';

const TextCard = ({ 
  data, 
  textAutoHide, 
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
      className={`card ${textAutoHide ? 'card--text-autohide' : ''} ${enableBorderGlow ? 'card--border-glow' : ''}`}
      style={{
        backgroundColor: data.backgroundColor,
        '--glow-color': data.glowColor
      }}
      disableAnimations={shouldDisableAnimations}
      particleCount={particleCount}
      glowColor={glowColor}
      enableTilt={enableTilt}
      clickEffect={clickEffect}
      enableMagnetism={enableMagnetism}
    >
      <div className="card__header">
        <div className="card__logo-container">
          <img 
            src={data.logo} 
            alt={data.companyName} 
            className="card__logo"
          />
          <span className="card__company-name">{data.companyName}</span>
        </div>
      </div>
      <div className="card__content">
        <div className="card__content-top">
          <h2 className="card__title">{data.title}</h2>
        </div>
        <div className="card__content-bottom">
          <p className="card__description">
            {data.description}
          </p>
          <button className="card__button">{data.buttonText}</button>
        </div>
      </div>
    </ParticleCard>
  );
};

export default TextCard;
