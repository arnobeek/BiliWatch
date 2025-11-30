import React from 'react';
import { motion } from 'framer-motion';

const DecorativeBackground = () => {
  return (
    <>
      <motion.div 
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage: 'linear-gradient(135deg, #f6fdf9 0%, #e0f5ff 50%, #d0ebff 100%)',
        }}
      />
      <div className="absolute top-0 left-0 w-64 h-64 bg-secondary opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary opacity-5 rounded-full translate-x-1/3 translate-y-1/3"></div>
    </>
  );
};

export default DecorativeBackground;

