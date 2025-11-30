import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaUsers, FaEnvelope, FaArrowRight, FaHandHoldingHeart } from 'react-icons/fa'

// Animation variants for the container and its children.
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { 
      type: "spring", 
      stiffness: 300, 
      damping: 24
    }
  }
}

const buttonVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { 
      type: "spring", 
      stiffness: 400, 
      damping: 20,
      delay: 0.4
    }
  },
  hover: {
    scale: 1.05,
    y: -5,
    transition: { 
      type: "spring", 
      stiffness: 400, 
      damping: 10 
    }
  },
  tap: { scale: 0.97 }
}

export default function AnimatedCard({ isInView }) {
  return (
    <motion.div
      className="relative overflow-hidden backdrop-blur-md border border-white/50 p-8 md:p-10 rounded-3xl shadow-lg"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {/* Animated gradient background */}
      <motion.div 
        className="absolute inset-0 -z-10"
        animate={{
          backgroundPosition: ['0% 0%', '100% 0%', '0% 0%']
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{
          backgroundImage: 'linear-gradient(to right, #f6fdf9 60%, #78d5b0)',
          backgroundSize: '200% 100%',
        }}
      />
      
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-t-3xl"></div>
      
      <div className="mx-auto relative z-10">
        {/* Small header accent */}
        <motion.div variants={itemVariants} className="mb-2 text-center">
          <motion.div 
            className="inline-block bg-secondary/10 px-4 py-1.5 rounded-full mb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="text-secondary font-medium inline-flex items-center gap-2">
              <FaHandHoldingHeart className="text-secondary" />
              Get Involved Today
            </span>
          </motion.div>
        </motion.div>
        
        {/* Main heading */}
        <motion.h2 
          variants={itemVariants} 
          className="text-2xl md:text-3xl font-bold mb-5 text-center"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Join the Fight Against
          </span>
          <br />
          <span className="text-gray-800">Neonatal Jaundice</span>
        </motion.h2>
        
        {/* Supporting paragraph */}
        <motion.p 
          variants={itemVariants} 
          className="text-base mb-8 mx-auto text-gray-700 text-center leading-relaxed"
        >
          Early detection saves lives. Whether you're a healthcare provider, investor, or technology enthusiast, there are ways to get involved with BiliWatch.
        </motion.p>
        
        {/* CTA buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* Contact Us Button */}
          <motion.div 
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-lg"></div>
            <Link 
              to="/contact" 
              className="relative flex items-center gap-2 cta-button px-6 py-3 rounded-full"
            >
              <FaEnvelope className="text-white" />
              <span className="font-medium">Contact Us</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  repeatDelay: 1,
                  ease: "easeInOut" 
                }}
              >
                <FaArrowRight className="text-white" />
              </motion.div>
            </Link>
          </motion.div>
          
          {/* Meet Our Team Button */}
          <motion.div 
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Link 
              to="/team" 
              className="flex items-center gap-2 glass-button px-6 py-3 rounded-full border border-white/50 bg-white/60 hover:bg-white/80 transition-all"
            >
              <FaUsers className="text-primary" />
              <span className="font-medium text-gray-800">Meet Our Team</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}



