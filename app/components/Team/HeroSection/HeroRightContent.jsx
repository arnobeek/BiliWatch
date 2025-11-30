import React from 'react';
import { motion } from 'framer-motion';
import { itemVariants } from './motionVariants';

export default function HeroRightContent() {
  return (
    <motion.div 
      className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center md:justify-end"
      variants={itemVariants}
    >
      <div className="relative">
        <div className="absolute w-64 h-64 rounded-full bg-primary opacity-10 blur-xl"></div>
        <div className="glass-card relative rounded-lg border border-gray-100 bg-white bg-opacity-80 backdrop-blur-sm p-6 shadow-xl">
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square bg-primary bg-opacity-10 rounded-lg flex items-center justify-center p-4">
                <div className="w-12 h-12 rounded-full bg-primary bg-opacity-20 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-primary animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 flex items-center">
            <div className="h-1 flex-grow bg-gradient-to-r from-secondary to-primary rounded-full"></div>
            <div className="mx-2 h-4 w-4 bg-primary rounded-full animate-pulse"></div>
            <div className="h-1 flex-grow bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

