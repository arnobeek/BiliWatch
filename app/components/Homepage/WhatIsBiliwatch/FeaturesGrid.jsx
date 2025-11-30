import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import FeatureCard from './FeatureCard';

export default function FeaturesGrid({ stepsData, iconVariants, cardVariants, textVariants }) {
  const cardsRef = useRef(null);
  const cardsInView = useInView(cardsRef, { once: true, margin: "-15% 0px" });
  const [hoveredCard, setHoveredCard] = useState(null);

  const featureVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.3 }
    }
  };

  return (
    <motion.div 
      ref={cardsRef}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-16 relative z-10"
      variants={featureVariants}
      initial="hidden"
      animate={cardsInView ? "visible" : "hidden"}
    >
      {stepsData.map((step, index) => (
        <FeatureCard 
          key={step.number} 
          step={step} 
          index={index} 
          hoveredCard={hoveredCard}
          setHoveredCard={setHoveredCard}
          isLast={index === stepsData.length - 1}
          iconVariants={iconVariants}
          cardVariants={cardVariants}
          textVariants={textVariants}
        />
      ))}
    </motion.div>
  );
}
