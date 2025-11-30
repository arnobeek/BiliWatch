import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
// import BiliLogo from '@/assets/icons/BiliLogo_black.png'
import { FaHome, FaInfoCircle, FaCogs, FaUsers, FaEnvelope } from 'react-icons/fa'

const menuLinks = [
  { href: '/', label: 'Home', icon: <FaHome className="text-primary" /> },
  { href: '/about', label: 'About', icon: <FaInfoCircle className="text-primary" /> },
  { href: '/product', label: 'How It Works', icon: <FaCogs className="text-secondary" /> },
  { href: '/team', label: 'Our Team', icon: <FaUsers className="text-primary" /> },
  { href: '/contact', label: 'Contact', icon: <FaEnvelope className="text-secondary" /> },
]

const MobileMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  const location = useLocation()
  const pathname = location.pathname

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
          {/* Side Panel */}
          <motion.div 
            className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-gradient-to-b from-primary to-primary-dark shadow-xl z-50 md:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            {/* Header with Logo and Close Button */}
            <div className="flex items-center justify-between p-5 border-b border-white/20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white/90">
              <Link 
                to="/" 
                className="flex items-center gap-2 text-white"
                onClick={() => setIsMenuOpen(false)}
                aria-label="BiliWatch Home"
              >
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <Image 
                    src="https://res.cloudinary.com/df3lhzzy7/image/upload/BiliLogo_black_mfodyo.png" 
                    alt="BiliWatch Logo" 
                    width={32} 
                    height={32}
                    className="object-cover"
                  />
                </div>
                <span className="font-bold text-white">BiliWatch</span>
              </Link>
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-white hover:text-secondary transition-colors rounded-full focus:outline-none"
                aria-label="Close mobile menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
            </div>
            
            {/* Navigation Links */}
            <div className="p-4 border-b border-white/20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white/90">
              <h2 className="text-secondary font-bold text-lg mb-3 px-2">Menu</h2>
              <nav aria-label="Mobile navigation">
                <ul className="flex flex-col gap-3">
                  {menuLinks.map((link) => (
                    <li key={link.href}>
                      <Link 
                        to={link.href} 
                        className={`flex items-center w-full py-4 px-4 text-lg text-white font-medium transition-all duration-200 rounded-md
                          ${pathname === link.href ? 'bg-white/20 font-semibold shadow-sm' : 'hover:bg-white/10'}`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className="w-8 h-8 flex items-center justify-center mr-3 rounded-full bg-white/10">
                          {link.icon}
                        </span>
                        <span>{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            
            {/* Call to Action */}
            <div className="p-4 border-b border-white/20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white/90">
              <h2 className="text-secondary font-bold text-lg mb-3 px-2">Get Started</h2>
              <Link 
                to="/contact" 
                className="flex items-center justify-center w-full py-4 px-4 text-white font-medium bg-secondary hover:bg-secondary-dark transition-colors rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="mr-2">Contact Us</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
            
            {/* Social Media Links */}
            <div className="p-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white/90">
              <h2 className="text-secondary font-bold text-lg mb-3 px-2">Connect</h2>
              <div className="flex gap-4 px-2">
                {[
                  { name: "Twitter", icon: "𝕏" },
                  { name: "LinkedIn", icon: "in" },
                  { name: "Instagram", icon: "📷" }
                ].map((social) => (
                  <motion.a 
                    key={social.name}
                    to="#" 
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                    aria-label={social.name}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default MobileMenu

