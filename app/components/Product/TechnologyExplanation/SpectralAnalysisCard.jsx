import React from 'react';
import { motion } from 'framer-motion';

export default function SpectralAnalysisCard() {
  return (
    <motion.div 
      className="glass-card p-6 md:p-8 border border-white/20 rounded-2xl backdrop-blur-sm relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5, duration: 0.7 }}
      whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
    >
      {/* Decorative element */}
      <div className="absolute -left-12 -bottom-12 w-32 h-32 rounded-full bg-primary/5 z-0"></div>
      
      <div className="relative z-10">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 12h2"></path>
            <path d="M20 12h2"></path>
            <path d="M12 2v2"></path>
            <path d="M12 20v2"></path>
            <path d="m4.93 4.93 1.41 1.41"></path>
            <path d="m17.66 17.66 1.41 1.41"></path>
            <path d="m17.66 6.34-1.41 1.41"></path>
            <path d="m4.93 19.07 1.41-1.41"></path>
            <path d="M12 8v8"></path>
            <path d="m10 14 2 2 2-2"></path>
          </svg>
        </div>
        
        <h3 className="text-xl font-bold mb-3 text-primary">Spectral Analysis</h3>
        
        <p className="text-gray-700 mb-4">
          Our device analyzes the specific wavelengths of light that are most affected by bilirubin, allowing for precise measurement without invasive blood draws.
        </p>
        
        <div className="bg-white/50 p-4 rounded-lg mb-4">
          <div className="h-16 w-full bg-gradient-to-r from-blue-500 via-green-500 to-red-500 rounded relative">
            <div className="absolute h-full w-1 bg-black left-1/3 opacity-60"></div>
            {/* <div className="absolute bottom-0 left-1/3 -ml-3 text-xs">480nm</div> */}
            <div className="absolute top-0 left-1/3 transform -translate-x-1/2 px-2 py-1 bg-primary text-white text-xs rounded">
              Bilirubin peak absorption
            </div>
          </div>
        </div>
        
        <p className="text-gray-700">
          By focusing on this precise wavelength and using AI algorithms to account for skin tone variations, we can accurately measure bilirubin levels transcutaneously.
        </p>
      </div>
    </motion.div>
  );
}

