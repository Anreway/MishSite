import React, { useState } from 'react'
import MagicBento from '../MagicBento'
import StaggeredMenu from '../components/StaggeredMenu'
import LanguageSwitcher from '../components/LanguageSwitcher'
import { useTranslation } from '../contexts/LanguageContext'

function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useTranslation()

  const menuItems = [
    { label: t('nav.home'), ariaLabel: t('nav.home'), link: '/' },
    { label: t('nav.riseMilk'), ariaLabel: t('nav.riseMilk'), link: '/rise-milk' },
    { label: t('nav.riseAgro'), ariaLabel: t('nav.riseAgro'), link: '/rise-agro' },
    { label: t('nav.riseMeat'), ariaLabel: t('nav.riseMeat'), link: '/rise-meat' },
    { label: t('nav.riseGrocery'), ariaLabel: t('nav.riseGrocery'), link: '/rise-grocery' },
    { label: t('nav.about'), ariaLabel: t('nav.about'), link: '/about' },
    { label: t('nav.cooperation'), ariaLabel: t('nav.cooperation'), link: '/cooperation' }
  ]

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <LanguageSwitcher />
      <MagicBento
        textAutoHide={true}
        enableSpotlight={true}
        enableBorderGlow={true}
        enableTilt={true}
        enableMagnetism={true}
        clickEffect={true}
        spotlightRadius={300}
        particleCount={12}
        glowColor="212, 175, 55"
        onMenuToggle={handleMenuToggle}
        isMenuOpen={isMenuOpen}
      />
      
      <div className="global-menu-container">
        <StaggeredMenu
          position="right"
          items={menuItems}
          displaySocials={false}
          displayItemNumbering={true}
          logoUrl="/media/Logo.png"
          menuButtonColor="#2d2d2d"
          openMenuButtonColor="#2d2d2d"
          accentColor="#D4AF37"
          changeMenuColorOnOpen={false}
          colors={['#F4E87C', '#D4AF37']}
          isOpen={isMenuOpen}
          onToggle={handleMenuToggle}
        />
      </div>
    </>
  )
}

export default HomePage
