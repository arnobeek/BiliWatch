import { motion } from 'framer-motion';

export default function FeatureCard({ step, index, hoveredCard, setHoveredCard, isLast, iconVariants, cardVariants, textVariants }) {
  return (
    <motion.div 
      variants={cardVariants}
      whileHover={{ scale: 1.03 }}
      className="relative group rounded-2xl overflow-hidden"
      onHoverStart={() => setHoveredCard(index)}
      onHoverEnd={() => setHoveredCard(null)}
    >
      {/* Card background with subtle gradient */}
      <div className="absolute inset-0 p-0.5 rounded-2xl bg-gradient-to-br from-white via-white to-gray-200">
        <div className="absolute inset-0 rounded-2xl bg-white/95 backdrop-blur-sm"></div>
      </div>
      
      {/* Hover highlight effect */}
      <motion.div 
        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} opacity-0`}
        animate={{ opacity: hoveredCard === index ? 0.08 : 0 }}
        transition={{ duration: 0.4 }}
      />
      
      <div className="relative z-10 p-6">
        {/* Horizontal layout with icon on left */}
        <div className="flex flex-col md:flex-row items-start gap-5">
          {/* Left column with number and animated icon */}
          <div className="flex flex-col items-center">
            {/* Step number pill */}
            <div className={`w-12 h-8 rounded-full flex items-center justify-center mb-4 ${step.color.includes('from-primary') ? 'bg-primary/10' : 'bg-secondary/10'}`}>
              <span className={`text-sm font-bold ${step.color.includes('from-primary') ? 'text-primary' : 'text-secondary'}`}>{step.number}</span>
            </div>
            
            {/* Icon container with animated glow */}
            <motion.div 
              variants={iconVariants}
              className="relative"
            >
              <div className={`relative flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-r ${step.color} shadow-md`}>
                <motion.div
                  animate={hoveredCard === index ? {
                    scale: [1, 1.15, 1],
                    rotate: [0, 5, 0, -5, 0]
                  } : {}}
                  transition={{ duration: 0.5 }}
                  className="text-white text-2xl"
                >
                  {step.icon}
                </motion.div>
              </div>
              
              {/* Animated glow effect */}
              <motion.div 
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${step.color} blur-lg`}
                animate={{ 
                  opacity: [0.4, 0.6, 0.4],
                  scale: [0.8, 1, 0.8]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  repeatType: "mirror" 
                }}
              />
            </motion.div>
            
            {/* Process flow connector for desktop */}
            {!isLast && (
              <motion.div 
                className="hidden md:block h-16 w-px mt-4"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 0.5, height: 64 }}
                transition={{ delay: 0.3 + (index * 0.1) }}
              >
                <div className={`h-full w-full ${step.color.includes('from-primary') ? 'bg-primary/30' : 'bg-secondary/30'} rounded-full`}></div>
              </motion.div>
            )}
          </div>
          
          {/* Right column with content */}
          <motion.div variants={textVariants} className="flex-1">
            <h3 className="font-bold text-xl text-gray-800 mb-3">
              {step.title}
            </h3>
            
            {/* Progress indicator */}
            <div className={`h-1 w-full bg-gray-100 rounded-full overflow-hidden mb-4`}>
              <motion.div 
                className={`h-full bg-gradient-to-r ${step.color}`}
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 0.2 + (index * 0.1), duration: 0.8 }}
              />
            </div>
            
            <p className="text-gray-600 text-sm md:text-base">
              {step.description}
            </p>
            
            {/* Learn more button with subtle animation */}
            <motion.div 
              className="mt-5"
              initial={{ opacity: 0.7 }}
              animate={{ 
                opacity: hoveredCard === index ? 1 : 0.7,
                y: hoveredCard === index ? 0 : 3
              }}
              transition={{ duration: 0.3 }}
            >
              <div className={`inline-flex items-center gap-2 px-5 py-2 rounded-full ${step.color.includes('from-primary') ? 'bg-primary/10 hover:bg-primary/20' : 'bg-secondary/10 hover:bg-secondary/20'} text-sm font-medium cursor-pointer transition-all`}>
                <span className={step.color.includes('from-primary') ? 'text-primary' : 'text-secondary'}>Learn more</span>
                <motion.div
                  animate={hoveredCard === index ? { x: [0, 3, 0] } : {}}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.5 }}
                  className={step.color.includes('from-primary') ? 'text-primary' : 'text-secondary'}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Card outer glow effect on hover */}
        <motion.div 
          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} opacity-0 blur-md -z-10`}
          animate={{ 
            opacity: hoveredCard === index ? 0.2 : 0,
            scale: hoveredCard === index ? 1.05 : 1
          }}
          transition={{ duration: 0.4 }}
        />
      </div>
    </motion.div>
  );
}