import React from 'react';
import { motion } from 'framer-motion';

export default function MachineLearningCard() {
  return (
    <motion.div 
      className="glass-card p-6 md:p-8 border border-white/20 rounded-2xl backdrop-blur-sm md:col-span-2 relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.7, duration: 0.7 }}
      whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
    >
      <div className="flex flex-col md:flex-row gap-6 items-center">
        <div className="md:w-1/3">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-violet-100 text-primary mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
              <path d="m14.5 9-5 5"></path>
              <path d="m9.5 9 5 5"></path>
            </svg>
          </div>
          
          <h3 className="text-xl font-bold mb-3 text-primary">Machine Learning</h3>
          
          <p className="text-gray-700">
            Our proprietary algorithms are trained on thousands of samples across diverse demographics, ensuring accuracy for all infants regardless of skin pigmentation.
          </p>
        </div>
        
        <div className="md:w-2/3 bg-white/50 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Data processing pipeline</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-100">
            <div className="bg-primary h-1.5 rounded-full" style={{ width: '100%' }}></div>
          </div>
          
          <div className="mt-6 grid grid-cols-4 gap-2 text-xs text-center">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-1">1</div>
              <span className="text-gray-400 font-normal">Image<br/>Capture</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-1">2</div>
              <span className="text-gray-400 font-normal">Spectral<br/>Analysis</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mb-1">3</div>
              <span className="text-gray-400 font-normal">ML<br/>Processing</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 mb-1">4</div>
              <span className="text-gray-400 font-normal">Clinical<br/>Result</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

