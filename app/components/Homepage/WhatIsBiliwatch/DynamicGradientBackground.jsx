// components/DynamicGradientBackground.jsx
import { motion } from 'framer-motion';

export default function DynamicGradientBackground() {
  return (
    <motion.div 
      className="absolute inset-0 -z-20"
      style={{
        backgroundImage: 'linear-gradient(to right, #f6fdf9 60%, #78d5b0)',
        backgroundSize: '200% 100%',
      }}
      animate={{ backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'] }}
      transition={{ 
        duration: 20, 
        ease: "linear", 
        repeat: Infinity, 
        repeatType: "reverse" 
      }}
    />
  );
}
