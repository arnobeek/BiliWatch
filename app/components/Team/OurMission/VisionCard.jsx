import React from 'react';
import { motion } from 'framer-motion';
import { itemVariants } from './MotionVariants';

function VisionListItem({ text }) {
  return (
    <div className="flex items-center mb-3">
      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span className="text-gray-700">{text}</span>
    </div>
  );
}

export default function VisionCard() {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg p-6 md:p-8 border-l-4 border-secondary hover:shadow-xl transition-shadow"
      variants={itemVariants}
    >
      <h3 className="text-2xl font-bold text-secondary mb-4">Our Vision</h3>
      <p className="text-gray-700 leading-relaxed">
        A world where no infant suffers from preventable jaundice complications due to lack of detection tools.
      </p>
      <div className="flex flex-col mt-6">
        <VisionListItem text="Early detection for all infants" />
        <VisionListItem text="Accessible healthcare technology" />
        <VisionListItem text="Global health equity" />
      </div>
    </motion.div>
  );
}

