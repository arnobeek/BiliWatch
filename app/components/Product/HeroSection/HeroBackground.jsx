// components/HeroBackground.jsx
'use client'
import { motion } from 'framer-motion';

export default function HeroBackground() {
  return (
    <>
      {/* Enhanced glassmorphism background */}
      <motion.div 
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage: 'linear-gradient(135deg, #f6fdf9 0%, #e0f5ff 50%, #d0ebff 100%)',
        }}
      />
      
      {/* Decorative background elements */}
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 -z-10 blur-xl"
        style={{ background: "radial-gradient(circle, rgba(44,173,230,0.4) 0%, rgba(44,173,230,0) 70%)" }}
        animate={{ 
          scale: [1, 1.1, 1],
          x: [0, 10, 0],
          y: [0, -15, 0],
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity,
          repeatType: "mirror" 
        }}
      />
      <motion.div 
        className="absolute -left-20 bottom-0 w-80 h-80 rounded-full opacity-10 -z-10 blur-xl"
        style={{ background: "radial-gradient(circle, rgba(54,211,153,0.4) 0%, rgba(54,211,153,0) 70%)" }}
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, -10, 0],
          y: [0, 20, 0],
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity,
          repeatType: "mirror",
          delay: 2
        }}
      />
    </>
  );
}
