import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function LeftContent() {
  return (
    <motion.div 
      className="md:w-3/5"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary mb-6 font-medium"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Make A Difference Today
      </motion.div>
      
      <motion.h2 
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        animate={{ 
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] 
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        style={{ backgroundSize: '200% auto' }}
      >
        Support Our Mission
      </motion.h2>
      
      <motion.p 
        className="text-lg mb-10 text-gray-700"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Join us in our journey to make jaundice detection accessible to every newborn in Uganda and beyond. Together, we can save thousands of infant lives through early detection and timely treatment.
      </motion.p>
      
      <motion.div 
        className="flex flex-wrap gap-5"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
          <Link to="/contact" className="cta-button inline-flex items-center px-8 py-3 text-lg gap-2 relative overflow-hidden group">
            <span className="relative z-10">Get In Touch</span>
            <motion.span 
              className="inline-block relative z-10"
              animate={{ x: [0, 5, 0] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </motion.span>
            <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Link>
        </motion.div>
        
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
          <Link to="/team" className="glass-button inline-flex items-center px-8 py-3 text-lg gap-2 border border-white/30 bg-white/50 hover:bg-white/70 text-gray-800 rounded-full shadow-lg transition-all">
            <span>Meet Our Team</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}



