import React from 'react';
import { motion } from 'framer-motion';
import { itemVariants } from './MotionVariants';

export default function CTASection() {
  return (
    <motion.div 
      className="md:col-span-2 mt-6 p-6 bg-blue-50 rounded-lg border border-blue-100 text-center"
      variants={itemVariants}
    >
      <p className="text-gray-600 font-medium mb-4">
        Join us in our mission to make jaundice detection technology available to all healthcare providers.
      </p>
      <button className="px-6 py-2 bg-primary text-white font-medium rounded-md hover:bg-primary transition-colors">
        Learn More About Our Work
      </button>
    </motion.div>
  );
}

