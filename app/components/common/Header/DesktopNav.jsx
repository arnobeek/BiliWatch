import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const DesktopNav = ({ scrolled }) => {
  const location = useLocation()
  const pathname = location.pathname
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/product', label: 'How It Works' },
    { href: '/team', label: 'Our Team' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="hidden md:block">
      <motion.div 
        className="flex items-center"
        animate={{ y: scrolled ? -2 : 0, scale: scrolled ? 0.98 : 1 }}
        transition={{ duration: 0.4 }}
      >
        <ul className="flex space-x-1 lg:space-x-3">
          {navLinks.map(link => (
            <li key={link.href}>
              <Link 
                to={link.href} 
                className={`relative group flex items-center font-medium px-3 lg:px-4 py-2.5 rounded-lg transition-all duration-300
                  ${pathname === link.href ? 'text-primary font-semibold' : 'text-gray-700 hover:text-primary'}`}
                aria-current={pathname === link.href ? 'page' : undefined}
              >
                <span className="relative z-10">{link.label}</span>
                {pathname === link.href && (
                  <motion.span 
                    className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-1 bg-gradient-to-r from-secondary/80 to-primary/80 rounded-full ${scrolled ? 'w-4' : 'w-6'}`}
                    layoutId="navIndicator"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  ></motion.span>
                )}
                <motion.span 
                  className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ opacity: 1 }}
                ></motion.span>
                <motion.span 
                  className="absolute bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 bg-secondary-light/70 rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: "70%" }}
                  transition={{ duration: 0.3 }}
                ></motion.span>
              </Link>
            </li>
          ))}
        </ul>
        <motion.div
          className="ml-6 relative group"
          animate={{ scale: scrolled ? 0.95 : 1 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <span className={`absolute inset-0 rounded-full bg-gradient-to-br from-secondary to-primary blur-sm opacity-70 group-hover:opacity-90 transition-all duration-300 transform group-hover:scale-105 ${scrolled ? 'blur-[3px]' : 'blur-sm'}`}></span>
          <Link 
            to="/contact" 
            className="relative block bg-gradient-to-r from-secondary to-primary hover:from-secondary-dark hover:to-primary-dark text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg border border-white/10"
          >
            <span className="flex items-center">
              <span>Login</span>
              <motion.svg 
                className="w-4 h-4 ml-2" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                initial={{ x: 0 }}
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
              >
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </motion.svg>
            </span>
            <span className="absolute inset-0 rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Link>
        </motion.div>
      </motion.div>
    </nav>
  )
}

export default DesktopNav

