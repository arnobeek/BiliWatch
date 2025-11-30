import React from 'react';
import { motion } from 'framer-motion';

export default function BeerLambertCard() {
  return (
    <motion.div 
      className="glass-card p-6 md:p-8 border border-white/20 rounded-2xl backdrop-blur-sm relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.7 }}
      whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
    >
      {/* Decorative element */}
      <div className="absolute -right-12 -top-12 w-32 h-32 rounded-full bg-secondary/5 z-0"></div>
      
      <div className="relative z-10">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-secondary/10 text-secondary mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.2 6.5a6.5 6.5 0 0 0-9.6-1.2L5 11l1.7 1.7"></path>
            <path d="M5 15.8v-4.7l4.7-4.7"></path>
            <path d="M15.6 9.1a2.5 2.5 0 1 1 1.9 3.5"></path>
            <path d="m7.5 12.2 4.7 4.7a6.5 6.5 0 0 0 9.6-1.2"></path>
            <path d="M21.5 13.4v4.7l-4.7 4.7"></path>
            <path d="M12.2 16.4a2.5 2.5 0 1 1-1.9-3.5"></path>
          </svg>
        </div>
        
        <h3 className="text-xl font-bold mb-3 text-secondary">Beer-Lambert Law</h3>
        
        <p className="text-gray-700 mb-4">
          We utilize the Beer-Lambert Law, which relates the absorption of light to the properties of the material through which the light is traveling.
        </p>
        
        <div className="bg-white/50 p-4 rounded-lg text-sm text-gray-700 mb-4">
          <code className="font-mono">A = ε × c × L</code>
          <p className="mt-2">Where A is absorbance, ε is molar absorptivity, c is concentration, and L is path length.</p>
        </div>
        
        <p className="text-gray-700">
          In practical terms, we measure how much light is absorbed by bilirubin in the baby's skin to determine bilirubin concentration.
        </p>
      </div>
    </motion.div>
  );
}

