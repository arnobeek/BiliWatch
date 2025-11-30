// components/StepCard.jsx
import { motion } from 'framer-motion';
import { FaLongArrowAltRight } from 'react-icons/fa';

export default function StepCard({ step, index, hoveredCard, setHoveredCard, isLast, isActive }) {
  const cardVariants = {
    hidden: { 
      y: 80, 
      opacity: 0, 
      scale: 0.8,
      rotateX: -10
    },
    visible: custom => ({
      y: 0,
      opacity: 1,
      scale: 1,
      rotateX: 0,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 20,
        mass: 0.8,
        delay: custom * 0.5,
        duration: 0.7
      }
    })
  };
  
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { delay: 0.2, duration: 0.5 }
    }
  };
  
  const iconCircleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 25,
        delay: 0.1
      }
    }
  };

  return (
    <motion.div
      className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden transform-gpu h-full relative"
      variants={cardVariants}
      custom={index}
      whileHover={{ 
        y: -10,
        boxShadow: "0 25px 35px -12px rgba(0, 0, 0, 0.18)",
        scale: 1.02
      }}
    >
      {/* Glow effect on hover/active */}
      <motion.div 
        className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0`}
        animate={{ opacity: hoveredCard === index || isActive ? 0.1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Border animation */}
      <motion.div 
        className={`absolute inset-0 pointer-events-none`}
        animate={isActive ? {
          boxShadow: [
            "0 0 0 0px rgba(var(--color-primary-rgb), 0)",
            "0 0 0 2px rgba(var(--color-primary-rgb), 0.3)",
            "0 0 0 0px rgba(var(--color-primary-rgb), 0)"
          ]
        } : {}}
        transition={{ duration: 2, repeat: isActive ? Infinity : 0 }}
      />
      
      <div className="p-7 flex flex-col h-full relative">
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1">
          <motion.div 
            className={`h-full bg-gradient-to-r ${step.color} rounded-t-xl`}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
          />
        </div>
        
        {/* Icon circle */}
        <motion.div 
          className="mx-auto mb-5"
          variants={iconCircleVariants}
        >
          <div className={`relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${step.color} shadow-md`}>
            <motion.div
              animate={(hoveredCard === index || isActive) ? {
                scale: [1, 1.15, 1],
                rotate: [0, 5, 0, -5, 0]
              } : {}}
              transition={{ duration: 0.5 }}
            >
              {step.icon}
            </motion.div>
            
            <motion.div 
              className={`absolute inset-0 rounded-full bg-gradient-to-r ${step.color} opacity-30 blur-sm`}
              animate={{ 
                scale: isActive ? [1, 1.3, 1] : [1, 1.2, 1],
                opacity: isActive ? [0.3, 0.6, 0.3] : [0.3, 0.5, 0.3]
              }}
              transition={{ 
                duration: isActive ? 1.5 : 2,
                repeat: Infinity,
                repeatType: "mirror"
              }}
            />
          </div>
        </motion.div>
        
        {/* Card content */}
        <motion.div variants={textVariants} className="flex-1">
          <h3 className="font-bold text-xl text-gray-800 mb-3 text-center">
            {step.title}
          </h3>
          <p className="text-gray-600 text-center">
            {step.description}
          </p>
        </motion.div>
        
        {/* Learn more link */}
        <motion.div
          className="mt-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.5 + 0.8 }}
        >
          <a 
            to="#" 
            className={`inline-flex items-center text-sm font-medium transition-colors duration-300 ${isActive || hoveredCard === index ? 'text-primary' : 'text-gray-500'}`}
          >
            Learn more
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
        
        {/* Arrow indicator for next step (except for the last card) */}
        {!isLast && (
          <motion.div 
            className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden lg:block"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + (index * 0.2) }}
          >
            <FaLongArrowAltRight className={`text-2xl ${isActive ? 'text-primary' : 'text-primary/50'}`} />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
