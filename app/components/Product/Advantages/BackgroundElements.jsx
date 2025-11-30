// components/BackgroundElements.jsx
import { motion } from 'framer-motion';

export default function BackgroundElements() {
  return (
    <>
      {/* Glassmorphism gradient background */}
      <motion.div 
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage: 'linear-gradient(135deg, #f6fdf9 0%, #e0f5ff 50%, #d0ebff 100%)',
        }}
      />

      {/* Decorative background elements */}
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-primary opacity-5"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-secondary opacity-5"></div>
    </>
  );
}
