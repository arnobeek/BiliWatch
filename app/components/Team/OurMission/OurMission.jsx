import React from 'react';
import { motion } from 'framer-motion';
import { containerVariants } from './MotionVariants';
import OurMissionHeader from './OurMissionHeader';
import MissionCard from './MissionCard';
import VisionCard from './VisionCard';
import CTASection from './CTASection';

export default function OurMission() {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-secondary-light">
      <motion.div 
        className="container mx-auto px-4 md:px-8 max-w-5xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Header with decorative elements */}
        <OurMissionHeader />
        
        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <MissionCard />
          <VisionCard />
          <CTASection />
        </div>
      </motion.div>
    </section>
  );
}

