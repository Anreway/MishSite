import React from 'react';
import { useNavigate } from 'react-router-dom';
import ParticleCard from './ParticleCard';

const ButtonCard = ({ 
  data, 
  enableBorderGlow, 
  shouldDisableAnimations, 
  particleCount, 
  glowColor, 
  enableTilt, 
  clickEffect, 
  enableMagnetism,
  onClick 
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (data.link && data.link !== '#') {
      navigate(data.link);
    } else if (onClick) {
      onClick(data.id);
    }
  };

  return (
    <ParticleCard
      className={`button-card ${enableBorderGlow ? 'card--border-glow' : ''}`}
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
      <div className="button-card__content" onClick={handleClick}>
        <h3 className="button-card__title">{data.title}</h3>
      </div>
    </ParticleCard>
  );
};

export default ButtonCard;
