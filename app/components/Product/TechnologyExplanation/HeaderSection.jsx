import React from 'react';
import { motion } from 'framer-motion';

export default function HeaderSection() {
  return (
    <motion.div 
      className="text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <motion.div 
        className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary mb-4 font-medium"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Innovation
      </motion.div>
      <h2 className="text-3xl md:text-4xl font-bold text-primary">The Science Behind BiliWatch</h2>
    </motion.div>
  );
}

