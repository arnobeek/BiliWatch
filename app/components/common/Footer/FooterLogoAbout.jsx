import { motion } from 'framer-motion'
import { FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

export default function FooterLogoAbout() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-6"
    >
      <h2 className="text-2xl font-bold mb-3 flex items-center">
        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          BiliWatch
        </span>
      </h2>
      <p className="text-sm text-gray-300 mb-5 max-w-xs">
        A low-cost method for detecting neonatal jaundice in Uganda, improving healthcare accessibility where it's needed most.
      </p>
      
      {/* Social Icons */}
      <div className="flex space-x-4">
        {[
          { href: '#', icon: <FaTwitter /> },
          { href: '#', icon: <FaLinkedinIn /> },
          { href: '#', icon: <FaInstagram /> },
        ].map(({ href, icon }, index) => (
          <motion.a 
            key={index}
            to={href} 
            className="w-9 h-9 rounded-full bg-gray-700/50 flex items-center justify-center text-white hover:bg-primary transition-all duration-300"
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.97 }}
          >
            {icon}
          </motion.a>
        ))}
      </div>
    </motion.div>
  )
}


