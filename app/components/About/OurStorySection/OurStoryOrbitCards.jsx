import { motion } from 'framer-motion'

export default function OurStoryOrbitCards() {
  return (
    <div className="md:min-h-[550px] relative mb-16">
      {/* Center Decorative Element */}
      <motion.div
        className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full bg-gradient-to-br from-white/30 to-white/5 border border-white/20 backdrop-blur-xl z-10 shadow-[0_0_30px_rgba(255,255,255,0.3)] items-center justify-center"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.div 
          className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border border-white/40 flex items-center justify-center"
          animate={{ 
            boxShadow: ['0 0 20px rgba(44,173,230,0.2)', '0 0 30px rgba(87,199,151,0.3)', '0 0 20px rgba(44,173,230,0.2)']
          }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <div className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            BiliWatch
          </div>
        </motion.div>
      </motion.div>
      
      {/* Journey Card */}
      <motion.div 
        className="glass-card p-8 rounded-xl border border-white/40 backdrop-blur-xl bg-gradient-to-br from-white/30 to-white/10 shadow-[0_8px_32px_rgba(31,38,135,0.1)]
          md:absolute md:top-0 md:left-1/2 md:-translate-x-1/2 md:w-[380px] md:z-30 mb-8 md:mb-0"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        whileHover={{ 
          y: -10, 
          scale: 1.03,
          boxShadow: "0 25px 35px -5px rgba(0,0,0,0.1), 0 0 20px rgba(44,173,230,0.2)",
          background: "linear-gradient(135deg, rgba(255,255,255,0.5), rgba(255,255,255,0.15))"
        }}
      >
        <div className="relative overflow-hidden">
          {/* Glassmorphism inner highlight */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/20 rounded-full blur-md"></div>
          
          <h3 className="text-2xl font-bold mb-4 text-secondary relative z-10">Our Journey</h3>
          <p className="text-gray-700 leading-relaxed relative z-10">
            Our journey began at Mbarara University of Science and Technology, where a team of medical and engineering professionals collaborated to create an affordable solution that could work in even the most resource-limited settings.
          </p>
        </div>
      </motion.div>
      
      {/* Vision Card - Left Positioned */}
      <motion.div 
        className="glass-card p-8 rounded-xl border border-white/40 backdrop-blur-xl bg-gradient-to-br from-white/30 to-white/10 shadow-[0_8px_32px_rgba(31,38,135,0.1)]
          md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 md:w-[360px] md:z-20 mb-8 md:mb-0"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
        whileHover={{ 
          x: -10, 
          scale: 1.03,
          boxShadow: "0 25px 35px -5px rgba(0,0,0,0.1), 0 0 20px rgba(255,184,0,0.2)",
          background: "linear-gradient(135deg, rgba(255,255,255,0.5), rgba(255,255,255,0.15))"
        }}
      >
        <div className="relative overflow-hidden">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/20 rounded-full blur-md"></div>
          
          <h3 className="text-2xl font-bold mb-4 text-amber-500 relative z-10">Our Vision</h3>
          <p className="text-gray-700 leading-relaxed relative z-10">
            We envision a future where no child suffers from preventable jaundice complications. Our goal is to make BiliWatch technology accessible to every healthcare facility in Uganda and expand to other countries facing similar challenges.
          </p>
        </div>
      </motion.div>
      
      {/* Mission Card - Right Positioned */}
      <motion.div 
        className="glass-card p-8 rounded-xl border border-white/40 backdrop-blur-xl bg-gradient-to-br from-white/30 to-white/10 shadow-[0_8px_32px_rgba(31,38,135,0.1)]
          md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 md:w-[360px] md:z-20 mb-8 md:mb-0"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
        whileHover={{ 
          x: 10, 
          scale: 1.03,
          boxShadow: "0 25px 35px -5px rgba(0,0,0,0.1), 0 0 20px rgba(87,199,151,0.2)",
          background: "linear-gradient(135deg, rgba(255,255,255,0.5), rgba(255,255,255,0.15))"
        }}
      >
        <div className="relative overflow-hidden">
          {/* Glassmorphism inner highlight */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-md"></div>
          
          <h3 className="text-2xl font-bold mb-4 text-primary relative z-10">Our Mission</h3>
          <p className="text-gray-700 leading-relaxed relative z-10">
            To reduce infant mortality and morbidity from neonatal jaundice by ensuring that every newborn, regardless of where they are born, has access to timely and accurate jaundice screening.
          </p>
        </div>
      </motion.div>
      
      {/* Decorative connecting curved paths (visible on md+) */}
      <svg className="hidden md:block absolute inset-0 w-full h-full -z-10" viewBox="0 0 100 100" preserveAspectRatio="none">
        <motion.path 
          d="M 50,10 Q 10,50 50,50" 
          fill="none" 
          stroke="url(#lineGradient1)" 
          strokeWidth="0.3" 
          strokeDasharray="1,1"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.6 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 1.2 }}
        />
        <motion.path 
          d="M 50,10 Q 90,50 50,50" 
          fill="none" 
          stroke="url(#lineGradient2)" 
          strokeWidth="0.3" 
          strokeDasharray="1,1"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.6 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 1.2 }}
        />
        <defs>
          <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2CADE6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FFB800" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFB800" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#57C797" stopOpacity="0.8" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Floating decorative elements */}
      <motion.div
        className="hidden md:block absolute left-[30%] top-[20%] w-8 h-8 rounded-full bg-gradient-to-r from-primary/30 to-primary/5 border border-white/20"
        animate={{ 
          y: [0, -15, 0],
          opacity: [0.7, 0.9, 0.7],
        }}
        transition={{
          duration: 8, 
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div
        className="hidden md:block absolute right-[25%] bottom-[20%] w-10 h-10 rounded-full bg-gradient-to-r from-secondary/30 to-secondary/5 border border-white/20"
        animate={{ 
          y: [0, 20, 0],
          opacity: [0.6, 0.8, 0.6],
        }}
        transition={{
          duration: 10, 
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="hidden md:block absolute left-[15%] bottom-[30%] w-6 h-6 rounded-full bg-gradient-to-r from-amber-400/30 to-amber-400/5 border border-white/20"
        animate={{ 
          y: [0, 12, 0],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 7, 
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
    </div>
  )
}

