import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { itemVariants } from './motionVariants';

export default function HeroLeftContent() {
  return (
    <motion.div className="w-full md:w-1/2 text-left" variants={itemVariants}>
      <div className="mb-6 inline-block">
        <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold tracking-wide">
          BILIWATCH TEAM
        </span>
      </div>
      
      <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-secondary">
        Our <span className="text-primary">Team</span>
      </h1>
      
      <div className="w-24 h-1 bg-secondary mb-6 opacity-30"></div>
      
      <p className="text-lg md:text-xl max-w-2xl text-gray-700 mb-8">
        Meet the passionate innovators behind BiliWatch - a dedicated team working to improve neonatal healthcare in Uganda and beyond.
      </p>
    </motion.div>
  );
}

