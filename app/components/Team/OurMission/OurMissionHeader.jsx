import React from 'react';
import { motion } from 'framer-motion';
import { itemVariants } from './MotionVariants';

export default function OurMissionHeader() {
  return (
    <div className="flex items-center mb-12">
      <div className="h-1 flex-1 bg-blue-200 rounded"></div>
      <motion.h2 
        className="text-3xl md:text-4xl font-bold text-primary px-6 text-center"
        variants={itemVariants}
      >
        Our Purpose
      </motion.h2>
      <div className="h-1 flex-1 bg-blue-200 rounded"></div>
    </div>
  );
}

