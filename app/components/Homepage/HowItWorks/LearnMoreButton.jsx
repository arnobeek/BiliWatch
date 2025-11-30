// components/LearnMoreButton.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

export default function LearnMoreButton() {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className="relative flex justify-center w-full"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl"></div>
      <Link 
        to="/product" 
        className="relative cta-button inline-flex items-center gap-2 px-8 py-3.5 rounded-full group"
      >
        <span className="font-medium">Learn More About the Technology</span>
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
  );
}


