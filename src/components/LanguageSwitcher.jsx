import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { availableLanguages } from '../translations';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = availableLanguages.find(lang => lang.code === language);

  const handleLanguageChange = (langCode) => {
    changeLanguage(langCode);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="language-switcher">
      <button 
        className="language-switcher__button"
        onClick={toggleDropdown}
        aria-label="Change language"
      >
        <span className="language-switcher__flag">{currentLanguage?.flag}</span>
        <span className="language-switcher__code">{currentLanguage?.code.toUpperCase()}</span>
        <span className={`language-switcher__arrow ${isOpen ? 'open' : ''}`}>▼</span>
      </button>
      
      {isOpen && (
        <div className="language-switcher__dropdown">
          {availableLanguages.map((lang) => (
            <button
              key={lang.code}
              className={`language-switcher__option ${language === lang.code ? 'active' : ''}`}
              onClick={() => handleLanguageChange(lang.code)}
            >
              <span className="language-switcher__option-flag">{lang.flag}</span>
              <span className="language-switcher__option-name">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
