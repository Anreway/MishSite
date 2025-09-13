import React from 'react';
import ParticleCard from './ParticleCard';

const ProductCard = ({ 
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
      className={`product-card ${enableBorderGlow ? 'card--border-glow' : ''}`}
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
      <div className="product-card__image-background">
        <img
          src={data.imageSrc}
          alt={data.title}
          className="product-card__image"
          onError={(e) => console.log('Product image error:', e)}
        />
        <div className="product-card__overlay"></div>
      </div>
      
      <div className="product-card__content">
        <div className="product-card__header">
          <h3 className="product-card__title">{data.title}</h3>
        </div>
        
        <div className="product-card__tags">
          {data.tags && data.tags.map((tag, index) => (
            <span key={index} className="product-card__tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </ParticleCard>
  );
};

export default ProductCard;
