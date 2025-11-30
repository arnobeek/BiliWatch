// components/HeroContent.jsx
'use client'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function HeroContent() {
  return (
    <div className="container relative z-10 mx-auto px-4 text-center text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span>Saving</span> Newborns Through Early  
          <span className="text-secondary"> Jaundice Detection</span>
        </h1>
        <p className="text-xl md:text-2xl mb-10 font-medium">
          <motion.span 
            className="text-gray-100"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          >
            Fast, affordable, non-invasive jaundice detection for Ugandan infants
          </motion.span>
        </p>
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/product" className="cta-button inline-block text-xl px-10 py-4">
            Discover BiliWatch
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}


