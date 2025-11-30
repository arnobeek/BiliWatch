import { motion } from 'framer-motion'

export default function ImpactBackground() {
  return (
    <>
      {/* Enhanced Background Gradient */}
      <motion.div 
        className="absolute inset-0 -z-20"
        style={{
          background: "radial-gradient(circle, rgba(87,199,151,0.4) 0%, rgba(87,199,151,0.1) 60%, rgba(87,199,151,0) 80%)"
        }}
      />
      
      {/* Animated background element at top-right */}
      <motion.div 
        className="absolute top-20 right-20 w-96 h-96 rounded-full opacity-20 -z-10"
        style={{
          background: "radial-gradient(circle, rgba(87,199,151,0.3) 0%, rgba(87,199,151,0.05) 60%, rgba(87,199,151,0) 80%)"
        }}
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 20, 0]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      
      {/* Animated background element at bottom-left */}
      <motion.div 
        className="absolute bottom-20 left-10 w-80 h-80 rounded-full opacity-20 -z-10"
        style={{
          background: "radial-gradient(circle, rgba(44,173,230,0.2) 0%, rgba(44,173,230,0.05) 60%, rgba(44,173,230,0) 80%)"
        }}
        animate={{ 
          scale: [1, 1.3, 1],
          y: [0, -30, 0]
        }}
        transition={{ 
          duration: 18, 
          delay: 2,
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
    </>
  )
}

