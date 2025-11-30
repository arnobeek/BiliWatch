import React from 'react';
import { motion } from 'framer-motion';

export default function CTAImage() {
  return (
    <motion.div 
      className="hidden md:block md:w-1/3"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="aspect-square rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center p-8">
        <div className="w-full h-full rounded-full border-4 border-dashed border-primary/30 flex items-center justify-center animate-spin-slow">
          <div className="bg-white rounded-full p-6 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

