import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function CTAContent() {
  return (
    <div className="text-left md:w-2/3">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <span className="px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 inline-block">
          Collaboration
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
          Join Our <span className="text-secondary">Mission</span>
        </h2>
        <p className="text-lg mb-6 text-gray-700">
          We're always looking for passionate individuals and organizations to join our mission. 
          Whether you're a healthcare professional, investor, or technology enthusiast, 
          there's a place for you in our journey.
        </p>
      </motion.div>
      
      <motion.div 
        className="flex flex-wrap gap-4 items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Link 
          to="/contact" 
          className="cta-button group relative overflow-hidden inline-flex items-center justify-center"
        >
          <span className="relative z-10">Contact Us Today</span>
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </Link>
        
        <Link 
          to="/about" 
          className="text-primary hover:text-secondary transition-colors font-medium flex items-center"
        >
          Learn more 
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </motion.div>
    </div>
  );
}



