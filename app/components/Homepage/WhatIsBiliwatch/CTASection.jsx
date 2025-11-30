// components/CTASection.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function CTASection({ isInView }) {
  return (
    <motion.div 
      className="mt-20 text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ delay: 1.2, duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
    >
      <div className="relative inline-block">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl"
          animate={{ scale: [1, 1.05, 1], opacity: [0.7, 0.9, 0.7] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <Link 
          to="/product" 
          className="relative glass-button inline-flex items-center gap-2 px-8 py-3.5 rounded-full group"
        >
          <span className="font-medium">Learn More About BiliWatch</span>
          <motion.svg 
            className="w-5 h-5 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1, ease: "easeInOut" }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </motion.svg>
          <motion.span 
            className="absolute inset-0 rounded-full opacity-0 bg-white/20 group-hover:opacity-100 transition-opacity duration-300"
            whileHover={{ scale: 1.03 }}
          />
        </Link>
      </div>
    </motion.div>
  );
}


