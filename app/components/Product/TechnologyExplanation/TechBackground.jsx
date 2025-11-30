import React from 'react';
import { motion } from 'framer-motion';

export default function TechBackground() {
  return (
    <>
      {/* Base gradient background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-white to-blue-50/30" />

      {/* Enhanced Background gradient */}
      <motion.div 
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage: 'linear-gradient(to right, #f6fdf9 40%, #78d5b0)'
        }}
      />

      {/* Animated radial gradient circle top left */}
      <motion.div 
        className="absolute top-40 left-10 w-64 h-64 rounded-full opacity-10 -z-10 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(54,211,153,0.4) 0%, rgba(54,211,153,0) 70%)" }}
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 20, 0],
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity,
          repeatType: "mirror" 
        }}
      />

      {/* Animated radial gradient circle bottom right */}
      <motion.div 
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-10 -z-10 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(44,173,230,0.4) 0%, rgba(44,173,230,0) 70%)" }}
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
        }}
        transition={{ 
          duration: 18, 
          repeat: Infinity,
          repeatType: "mirror",
          delay: 2
        }}
      />
    </>
  );
}

