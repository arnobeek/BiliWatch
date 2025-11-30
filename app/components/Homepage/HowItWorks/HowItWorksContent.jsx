// components/HowItWorksContent.jsx
import { motion } from 'framer-motion';

export default function HowItWorksContent({ isInView }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 24,
        mass: 0.8
      }
    }
  };

  return (
    <motion.div 
      className="w-full max-w-4xl mx-auto"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.div variants={itemVariants} className="text-center mb-16">
        <motion.div 
          className="inline-block bg-secondary/10 px-4 py-1.5 rounded-full mb-4 overflow-hidden"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <motion.span 
            className="text-secondary font-medium inline-block"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          >
            Innovative Technology
          </motion.span>
        </motion.div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
          <span className="text-primary bg-clip-text bg-gradient-to-r from-primary to-secondary text-transparent">
            How BiliWatch
          </span> Works
        </h2>
        <p className="text-lg mb-8 text-gray-700 leading-relaxed max-w-3xl mx-auto">
          BiliWatch uses a precisely calibrated LED and sensitive photo diode to measure light absorption through neonatal skin, applying the Beer-Lambert law to determine bilirubin levels with clinical accuracy.
        </p>
      </motion.div>
    </motion.div>
  );
}
