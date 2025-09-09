import React from 'react';
import ParticleCard from './ParticleCard';

const VideoCard = ({ 
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
      className={`card ${enableBorderGlow ? 'card--border-glow' : ''} tilted-card-figure`}
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
      <div className="tilted-card-inner">
        <div className="video-container tilted-card-img">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="tilted-card-img"
          >
            <source src={data.videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
    </ParticleCard>
  );
};

export default VideoCard;
