import { motion } from 'framer-motion'

export default function OurStoryBackground() {
  return (
    <>
      {/* Enhanced glassmorphism background */}
      <motion.div 
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage: 'linear-gradient(135deg, #f6fdf9 0%, #e0f5ff 50%, #d0ebff 100%)',
        }}
      />
      
      {/* Animated glass orb – Top Left */}
      <motion.div 
        className="absolute -top-40 -left-20 w-[40rem] h-[40rem] rounded-full opacity-20 -z-10 backdrop-blur-[80px]"
        style={{
          background: "radial-gradient(circle, rgba(44,173,230,0.35) 0%, rgba(44,173,230,0.1) 50%, rgba(44,173,230,0) 70%)"
        }}
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{
          duration: 10, 
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      {/* Animated glass orb – Bottom Right */}
      <motion.div 
        className="absolute bottom-20 right-10 w-[30rem] h-[30rem] rounded-full opacity-15 -z-10 backdrop-blur-[100px]"
        style={{
          background: "radial-gradient(circle, rgba(87,199,151,0.4) 0%, rgba(87,199,151,0.1) 60%, rgba(87,199,151,0) 80%)"
        }}
        animate={{ 
          y: [0, -20, 0],
          scale: [1, 1.08, 1]
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      
      {/* Glass shimmer layer */}
      <motion.div 
        className="absolute inset-0 -z-15 opacity-20"
        style={{ 
          background: "linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)",
          backgroundSize: "200% 200%"
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
        }}
        transition={{
          duration: 15,
          ease: "easeInOut",
          repeat: Infinity
        }}
      />
    </>
  )
}

