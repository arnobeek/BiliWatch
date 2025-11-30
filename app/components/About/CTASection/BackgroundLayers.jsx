import { motion } from 'framer-motion'

export default function BackgroundLayers() {
  return (
    <>
      {/* Enhanced layered background with multiple gradients */}
      <motion.div 
        className="absolute inset-0 -z-30"
        style={{
          backgroundImage: 'linear-gradient(135deg, #f6fdf9 0%, #e0f5ff 100%)',
        }}
      />
      
      <motion.div 
        className="absolute inset-0 -z-20"
        style={{
          background: 'radial-gradient(circle at 70% 50%, rgba(88, 189, 235, 0.15) 0%, rgba(88, 189, 235, 0) 70%)',
        }}
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
      
      {/* Floating abstract shapes */}
      <motion.div 
        className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-10 -z-10 blur-xl"
        style={{ background: "linear-gradient(45deg, #2CADE6, #36D399)" }}
        animate={{ 
          y: [0, -20, 0],
          x: [0, 10, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity,
          repeatType: "mirror" 
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full opacity-10 -z-10 blur-xl"
        style={{ background: "linear-gradient(225deg, #2CADE6, #85DCFF)" }}
        animate={{ 
          y: [0, 20, 0],
          x: [0, -10, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          repeatType: "mirror",
          delay: 2
        }}
      />
    </>
  )
}

