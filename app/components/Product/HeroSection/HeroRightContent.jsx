// components/HeroRightContent.jsx
'use client'
import { motion } from 'framer-motion';

export default function HeroRightContent() {
  return (
    <motion.div 
      className="md:w-1/2"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
    >
      <div className="relative">
        {/* Card background effect */}
        <motion.div 
          className="absolute -z-10 inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 blur-md"
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
        />
        
        {/* Main process diagram card */}
        <motion.div 
          className="glass-card p-8 rounded-2xl border border-white/20 backdrop-blur-sm relative overflow-hidden"
          whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-center">
            <div className="mb-6 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <path d="M9 15v-6"></path>
                  <path d="M6 12h6"></path>
                  <path d="M11 18h6"></path>
                  <path d="M14 15h3"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800">BiliWatch Process</h3>
            </div>
            
            {/* Process steps timeline */}
            <div className="w-full max-w-md">
              <ol className="relative border-l border-gray-300">
                <li className="mb-8 ml-6">
                  <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 bg-primary text-white">
                    1
                  </span>
                  <h3 className="font-semibold text-gray-900">Place the device on the baby's skin</h3>
                  <p className="text-sm text-gray-600">The sensor gently makes contact with the baby's forehead or sternum for maximum accuracy and comfort</p>
                </li>
                <li className="mb-8 ml-6">
                  <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 bg-primary text-white">
                    2
                  </span>
                  <h3 className="font-semibold text-gray-900">Light measurement</h3>
                  <p className="text-sm text-gray-600">The LED emits a precise wavelength and the photodiode measures bilirubin absorption through the skin</p>
                </li>
                <li className="mb-8 ml-6">
                  <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 bg-primary text-white">
                    3
                  </span>
                  <h3 className="font-semibold text-gray-900">Results in minutes</h3>
                  <p className="text-sm text-gray-600">Advanced algorithms calculate bilirubin levels with clinical accuracy, displaying actionable results in under 5 minutes</p>
                </li>
              </ol>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
