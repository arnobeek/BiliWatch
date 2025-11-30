// components/HeroLeftContent.jsx
'use client'
import { motion } from 'framer-motion';

export default function HeroLeftContent() {
  return (
    <motion.div 
      className="md:w-1/2 text-left"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
    >
      {/* Introductory label */}
      <motion.div 
        className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary mb-6 font-medium"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Innovative Technology
      </motion.div>
      
      {/* Headline */}
      <motion.h1 
        className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        style={{ backgroundSize: '200% auto' }}
      >
        How BiliWatch Works
      </motion.h1>
      
      {/* Description */}
      <motion.p 
        className="text-lg mb-8 text-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Understanding the science and technology behind our innovative approach to neonatal jaundice detection
      </motion.p>
      
      {/* Feature icons row */}
      <motion.div 
        className="flex items-center gap-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <div className="flex items-center">
          <div className="mr-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            {/* Replace the inline SVG below with your desired icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" 
              strokeLinecap="round" strokeLinejoin="round" className="text-primary">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
          </div>
          <div>
            <h3 className="font-medium text-gray-400">Research-backed</h3>
            <p className="text-sm text-gray-600">Clinical validation</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="mr-3 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
            {/* Replace the inline SVG below with your desired icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" 
              strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div>
            <h3 className="font-medium text-gray-400">User-friendly</h3>
            <p className="text-sm text-gray-600">Simple operation</p>
          </div>
        </div>
      </motion.div>
      
      {/* Call-to-Action Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <motion.button 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-medium shadow-lg transition-all"
        >
          Learn More
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
