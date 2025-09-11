import React, { useState } from 'react'
import MagicBento from '../MagicBento'
import StaggeredMenu from '../components/StaggeredMenu'

function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { label: 'Главная', ariaLabel: 'Перейти на главную страницу', link: '/' },
    { label: 'RISE Milk', ariaLabel: 'Молочная продукция RISE', link: '/rise-milk' },
    { label: 'RISE Agro', ariaLabel: 'Агро продукция RISE', link: '/rise-agro' },
    { label: 'RISE Meat', ariaLabel: 'Мясная продукция RISE', link: '/rise-meat' },
    { label: 'RISE Bakery', ariaLabel: 'Бакалейные товары RISE', link: '/rise-bakery' },
    { label: 'О компании', ariaLabel: 'Информация о компании', link: '/about' },
    { label: 'Сотрудничество', ariaLabel: 'Возможности сотрудничества', link: '/cooperation' }
  ]

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
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
