import { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import Logo from './Logo'
import DesktopNav from './DesktopNav'
import MobileMenu from './MobileMenu'
import HamburgerButton from './HamburgerButton'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [scrollDirection, setScrollDirection] = useState('none')
  const [lastScrollY, setLastScrollY] = useState(0)
  const headerRef = useRef(null)
  const location = useLocation()
  const pathname = location.pathname

  // Enhanced scroll effect for smoother animations and threshold detection
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY + 5) {
        setScrollDirection('down')
      } else if (currentScrollY < lastScrollY - 5) {
        setScrollDirection('up')
      }

      if (currentScrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
        setScrollDirection('none')
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  // Handle clicks outside the header to close the mobile menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target) && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMenuOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const toggleMenu = () => setIsMenuOpen(prev => !prev)

  return (
    <header
      ref={headerRef}
      className={`fixed mx-auto left-0 right-0 max-w-[1100px] top-4 z-50 transition-all duration-300 ease-in-out backdrop-blur-md rounded-3xl ${scrolled ? 'py-2 bg-white/95 shadow-lg' : 'py-4 bg-white/95'}`}
      style={{
        transitionProperty: 'all',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        transitionDuration: '400ms',
      }}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Logo scrolled={scrolled} />
        <HamburgerButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <DesktopNav scrolled={scrolled} />
      </div>
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </header>
  )
}


