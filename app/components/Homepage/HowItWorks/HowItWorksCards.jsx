// components/HowItWorksCards.jsx
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import StepCard from './StepCard';

export default function HowItWorksCards({ stepsData }) {
  const cardsRef = useRef(null);
  const cardsInView = useInView(cardsRef, { once: true, margin: "-15% 0px" });
  const [hoveredCard, setHoveredCard] = useState(null);
  
  // Enhanced container animation variants
  const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.4, 
        delayChildren: 0.3,
        ease: "easeOut" 
      }
    }
  };
  
  // Timeline connector component
  const TimelineConnector = ({ isLast }) => (
    <div className={`hidden md:block absolute h-1 bg-gradient-to-r from-primary/80 to-primary w-full top-12 -z-10 transition-opacity duration-300 ${hoveredCard !== null ? 'opacity-70' : 'opacity-30'}`}>
      {!isLast && (
        <div className="absolute right-0 w-4 h-4 rounded-full bg-primary transform translate-x-1/2 -translate-y-1.5" />
      )}
    </div>
  );

  return (
    <div className="py-8 relative">
      {/* Progress path for desktop - appears behind cards */}
      <div className="hidden md:block absolute left-0 right-0 top-1/2 h-1 bg-gray-200 -translate-y-1/2 rounded-full" />
      
      <motion.div 
        ref={cardsRef}
        className="flex flex-col md:flex-row gap-12 md:gap-6 lg:gap-12 mb-16 relative z-10"
        variants={cardContainerVariants}
        initial="hidden"
        animate={cardsInView ? "visible" : "hidden"}
      >
        {stepsData.map((step, index) => (
          <div key={step.number} className="flex-1 relative">
            <StepCard 
              step={step} 
              index={index} 
              hoveredCard={hoveredCard}
              setHoveredCard={setHoveredCard}
              isLast={index === stepsData.length - 1}
            />
            
            {/* Only show connectors between cards (not after the last card) */}
            {index < stepsData.length - 1 && (
              <TimelineConnector isLast={index === stepsData.length - 1} />
            )}
            
            {/* Step number bubble */}
            <motion.div 
              className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-lg z-20"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={cardsInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
              transition={{ delay: 0.2 + (index * 0.2), duration: 0.5 }}
            >
              {step.number}
            </motion.div>
          </div>
        ))}
      </motion.div>
      
      {/* Mobile view vertical connector */}
      <div className="md:hidden absolute left-5 top-16 bottom-16 w-1 bg-gray-200 rounded-full">
        {stepsData.map((_, index) => (
          <motion.div 
            key={index}
            className={`absolute w-3 h-3 rounded-full bg-primary -left-1 transition-all duration-300`}
            style={{ top: `${(index / (stepsData.length - 1)) * 100}%` }}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={cardsInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
            transition={{ delay: 0.4 + (index * 0.2) }}
          />
        ))}
      </div>
    </div>
  );
}