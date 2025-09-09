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
            preload="metadata"
            autoPlay
            loop
            muted
            playsInline
            className="tilted-card-img"
            onLoadedData={(e) => {
              e.target.play().catch(err => console.log('Video autoplay failed:', err));
            }}
            onError={(e) => console.log('Video load error:', e)}
          >
            <source src={data.videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </ParticleCard>
  );
};

export default VideoCard;
