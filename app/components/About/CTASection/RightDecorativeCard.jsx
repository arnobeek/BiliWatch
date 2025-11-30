import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function RightDecorativeCard() {
  return (
    <motion.div 
      className="md:w-2/5"
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <div className="relative">
        {/* Background shape */}
        <motion.div 
          className="absolute -z-10 inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 blur-lg"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
        />
        
        {/* Card content */}
        <motion.div 
          className="glass-card p-8 rounded-2xl border border-white/30 backdrop-blur-sm relative overflow-hidden"
          whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
          transition={{ duration: 0.3 }}
        >
          {/* Decorative circle */}
          <motion.div 
            className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/10"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 10, 0],
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          
          <div className="text-center mb-6">
            <motion.div 
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 8H8a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
                <path d="M12 6v12"></path>
              </svg>
            </motion.div>
            <h3 className="text-xl font-bold text-gray-800">Every Donation Matters</h3>
          </div>
          
          <div className="space-y-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22v-20"></path>
                  <path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>
                </svg>
              </div>
              <div className="text-sm text-gray-700">Provides 5 jaundice screenings</div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <div className="text-sm text-gray-700">Trains 2 healthcare workers</div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="text-sm text-gray-700">Saves 1 infant life</div>
            </div>
          </div>
          
          <motion.div 
            whileHover={{ scale: 1.03 }} 
            whileTap={{ scale: 0.98 }}
            className="w-full"
          >
            <Link to="/donate" className="block text-center w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-medium shadow-lg transition-all">
              Donate Now
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}



