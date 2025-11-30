import React from 'react';
import { motion } from 'framer-motion';

export default function TeamHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="text-center mb-16 max-w-3xl mx-auto"
    >
      <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-semibold tracking-wide inline-block mb-4">
        OUR EXPERTS
      </span>
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary">
        The BiliWatch Team
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
      <p className="text-lg text-gray-700">
        Our team consists of passionate professionals dedicated to delivering a life-saving, cost-effective solution for neonatal jaundice detection.
      </p>
    </motion.div>
  );
}

