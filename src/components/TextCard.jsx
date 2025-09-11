import React, { useRef, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
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
  enableMagnetism,
  onMenuToggle,
  isMenuOpen = false
}) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  const textInnerRef = useRef(null);
  const iconRef = useRef(null);
  const [textLines, setTextLines] = useState(['Меню', 'Закрыть']);
  
  useEffect(() => {
    if (textInnerRef.current && iconRef.current) {
      const inner = textInnerRef.current;
      const icon = iconRef.current;
      
      // Initial setup
      gsap.set(inner, { yPercent: 0 });
      gsap.set(icon, { rotate: 0, transformOrigin: '50% 50%' });
    }
  }, []);

  useEffect(() => {
    if (!textInnerRef.current || !iconRef.current) return;
    
    const inner = textInnerRef.current;
    const icon = iconRef.current;
    
    // Animate text cycling
    const currentLabel = isMenuOpen ? 'Меню' : 'Закрыть';
    const targetLabel = isMenuOpen ? 'Закрыть' : 'Меню';
    const cycles = 2;
    const seq = [currentLabel];
    let last = currentLabel;
    for (let i = 0; i < cycles; i++) {
      last = last === 'Меню' ? 'Закрыть' : 'Меню';
      seq.push(last);
    }
    if (last !== targetLabel) seq.push(targetLabel);
    seq.push(targetLabel);
    setTextLines(seq);

    gsap.set(inner, { yPercent: 0 });
    const lineCount = seq.length;
    const finalShift = ((lineCount - 1) / lineCount) * 100;
    gsap.to(inner, {
      yPercent: -finalShift,
      duration: 0.4 + lineCount * 0.05,
      ease: 'power3.out'
    });

    // Animate icon rotation
    if (isMenuOpen) {
      gsap.to(icon, { rotate: 225, duration: 0.6, ease: 'power3.out' });
    } else {
      gsap.to(icon, { rotate: 0, duration: 0.4, ease: 'power3.inOut' });
    }
  }, [isMenuOpen]);
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

      {isHomePage && onMenuToggle && (
        <div className="menu-button-container">
          <button 
            className="menu-toggle-button"
            onClick={onMenuToggle}
            type="button"
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          >
            <span className="menu-toggle-textWrap">
              <span ref={textInnerRef} className="menu-toggle-textInner">
                {textLines.map((line, i) => (
                  <span className="menu-toggle-line-text" key={i}>
                    {line}
                  </span>
                ))}
              </span>
            </span>
            <span ref={iconRef} className="menu-toggle-icon">
              <span className="menu-toggle-line"></span>
              <span className="menu-toggle-line menu-toggle-line-v"></span>
            </span>
          </button>
        </div>
      )}
    </ParticleCard>
  );
};

export default TextCard;
