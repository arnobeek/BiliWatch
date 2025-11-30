import { motion } from 'framer-motion'

const HamburgerButton = ({ isMenuOpen, toggleMenu }) => {
  return (
    <motion.button 
      className="md:hidden relative z-50 w-11 h-11 flex flex-col items-center justify-center bg-white/95 backdrop-blur-sm rounded-full shadow-md focus:outline-none border border-gray-100"
      onClick={(e) => {
        e.stopPropagation();
        toggleMenu();
      }}
      aria-label="Toggle menu"
      whileHover={{ scale: 1.05, boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }}
      whileTap={{ scale: 0.95 }}
    >
      <span className={`block h-0.5 w-5 rounded-full bg-primary transition-all duration-300 ease-out ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
      <span className={`block h-0.5 w-5 rounded-full bg-primary transition-all duration-300 ease-out ${isMenuOpen ? 'opacity-0 translate-x-3' : 'opacity-100'}`}></span>
      <span className={`block h-0.5 w-5 rounded-full bg-primary transition-all duration-300 ease-out ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
      {!isMenuOpen && (
        <motion.span 
          className="absolute inset-0 rounded-full bg-primary/5"
          animate={{ scale: [1, 1.1, 1], opacity: [0, 0.3, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
        ></motion.span>
      )}
    </motion.button>
  )
}

export default HamburgerButton

