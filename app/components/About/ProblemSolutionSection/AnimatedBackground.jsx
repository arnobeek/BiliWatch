// components/AnimatedBackground.jsx
import { motion } from 'framer-motion'

export default function AnimatedBackground() {
  return (
    <>
      {/* Gradient Background */}
      <motion.div 
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage: 'linear-gradient(to right, #f6fdf9 60%, #78d5b0)'
        }}
      />
      
      {/* Top Right Animated Circle */}
      <motion.div 
        className="absolute top-1/4 right-0 w-96 h-96 rounded-full opacity-20 -z-10"
        style={{ background: "radial-gradient(circle, rgba(87,199,151,0.3) 0%, rgba(87,199,151,0.05) 60%, rgba(87,199,151,0) 80%)" }}
        animate={{ scale: [1, 1.1, 1], x: [0, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
      />
      
      {/* Bottom Left Animated Circle */}
      <motion.div 
        className="absolute bottom-1/4 left-10 w-80 h-80 rounded-full opacity-20 -z-10"
        style={{ background: "radial-gradient(circle, rgba(44,173,230,0.2) 0%, rgba(44,173,230,0.05) 60%, rgba(44,173,230,0) 80%)" }}
        animate={{ scale: [1, 1.15, 1], y: [0, -20, 0] }}
        transition={{ duration: 12, delay: 2, repeat: Infinity, repeatType: "reverse" }}
      />
    </>
  )
}
