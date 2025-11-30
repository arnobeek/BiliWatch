import React from 'react';
import { motion } from 'framer-motion';
import { itemVariants } from './MotionVariants';

export default function MissionCard() {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-lg p-6 md:p-8 border-l-4 border-primary hover:shadow-xl transition-shadow"
      variants={itemVariants}
    >
      <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
      <p className="text-gray-700 mb-4 leading-relaxed">
        At BiliWatch, we're committed to reducing preventable infant mortality and morbidity from 
        neonatal jaundice through accessible technology.
      </p>
      <p className="text-gray-700 leading-relaxed">
        Our team brings together expertise in biomedical engineering, medicine, and innovative 
        technology to create a solution that works for healthcare settings with limited resources.
      </p>
    </motion.div>
  );
}

