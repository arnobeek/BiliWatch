import React from 'react';
import { motion } from 'framer-motion';
import HeroBackground from './HeroBackground';
import HeroLeftContent from './HeroLeftContent';
import HeroRightContent from './HeroRightContent';
import HeroStats from './HeroStats';
import { containerVariants } from './motionVariants';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-32 md:py-34">
      <HeroBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="flex flex-col md:flex-row items-center md:items-start"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <HeroLeftContent />
          <HeroRightContent />
        </motion.div>
        
        <HeroStats />
      </div>
    </section>
  );
}

