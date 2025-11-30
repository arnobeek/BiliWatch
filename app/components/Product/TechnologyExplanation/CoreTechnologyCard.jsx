import React from 'react';
import { motion } from 'framer-motion';

export default function CoreTechnologyCard() {
  return (
    <motion.div 
      className="max-w-2xl mb-16"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="glass-card p-8 md:p-10 border border-white/20 rounded-2xl bg-white/60 backdrop-blur-sm shadow-xl">
        <div className="flex items-center mb-6">
          <div className="mr-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
              <line x1="2" y1="20" x2="2" y2="20"></line>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-primary">The Technology</h3>
        </div>
        
        <p className="text-lg mb-6 text-gray-700">
          BiliWatch leverages the optical properties of bilirubin to provide accurate, non-invasive measurements. Our device is built on proven scientific principles and advanced machine learning algorithms that enable healthcare workers to quickly assess jaundice risk.
        </p>
        
        <div className="flex items-center mb-4">
          <div className="h-8 w-1 bg-primary rounded-full mr-3"></div>
          <p className="font-medium text-gray-800">How we're different from other solutions:</p>
        </div>
        
        <ul className="space-y-3 mb-6">
          <li className="flex items-start">
            <div className="mr-3 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <p className="text-gray-700">No blood draws required - completely non-invasive</p>
          </li>
          <li className="flex items-start">
            <div className="mr-3 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <p className="text-gray-700">Higher accuracy than visual assessment methods</p>
          </li>
          <li className="flex items-start">
            <div className="mr-3 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <p className="text-gray-700">Works effectively across all skin tones</p>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}

