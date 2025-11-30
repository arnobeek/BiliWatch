import React from 'react';
import { motion } from 'framer-motion';

export default function HeroBackground() {
  return (
    <>
      {/* Gradient Background */}
      <motion.div 
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage: 'linear-gradient(135deg, #f6fdf9 0%, #e0f5ff 50%, #d0ebff 100%)',
        }}
      />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-secondary opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary opacity-5 rounded-full translate-x-1/3"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary opacity-5 rounded-full -translate-x-1/4 translate-y-1/2"></div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-10 md:h-16 text-white opacity-10">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="currentColor"></path>
        </svg>
      </div>
    </>
  );
}

