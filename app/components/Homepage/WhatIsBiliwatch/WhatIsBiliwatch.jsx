import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import DynamicGradientBackground from './DynamicGradientBackground';
import AnimatedBlobs from './AnimatedBlobs';
import AnimatedHeading from './AnimatedHeading';
import FeaturesGrid from './FeaturesGrid';
import CTASection from './CTASection';
import { FaHeartbeat, FaBolt, FaMoneyBillWave, FaMobileAlt } from 'react-icons/fa';

export default function WhatIsBiliwatch() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10% 0px" });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Parallax effects for background blobs
  const rightBlobY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);
  const leftBlobY = useTransform(scrollYProgress, [0, 1], ['5%', '-5%']);

  // Animation variants for the feature cards and icons
  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24, mass: 0.8 }
    }
  };
  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0, rotate: -10 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      rotate: 0,
      transition: { type: "spring", stiffness: 400, damping: 15, delay: 0.2 }
    }
  };
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6 } }
  };

  // Feature (step) data
  const stepsData = [
    {
      number: 1,
      title: "Non-Invasive",
      description: "No needles, no stress—just a gentle scan for quick results. Safe for even the most delicate newborns.",
      icon: <FaHeartbeat className="mx-auto text-[70px] drop-shadow-lg" />,
      color: "from-primary to-primary/70"
    },
    {
      number: 2,
      title: "Fast & Accurate",
      description: "Detect jaundice early and take action immediately. Results in under 5 minutes with clinical-grade accuracy.",
      icon: <FaBolt className="mx-auto text-[70px] drop-shadow-lg" />,
      color: "from-secondary to-secondary/70"
    },
    {
      number: 3,
      title: "Affordable & Accessible",
      description: "Designed for hospitals and rural clinics at a fraction of the cost of traditional measurement devices.",
      icon: <FaMoneyBillWave className="mx-auto text-[70px] drop-shadow-lg" />,
      color: "from-primary to-primary/70"
    },
    {
      number: 4,
      title: "Portable & Easy to Use",
      description: "Lightweight and battery-powered for on-the-go healthcare. Intuitive design requires minimal training.",
      icon: <FaMobileAlt className="mx-auto text-[70px] drop-shadow-lg" />,
      color: "from-secondary to-secondary/70"
    }
  ];

  const titleText = "What is BiliWatch?";

  return (
    <section ref={sectionRef} className="py-16 md:py-24 relative overflow-hidden">
      <DynamicGradientBackground />
      <AnimatedBlobs rightBlobY={rightBlobY} leftBlobY={leftBlobY} />
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-24">
          <AnimatedHeading isInView={isInView} titleText={titleText} />
          <motion.p 
            className="max-w-3xl mx-auto text-xl text-gray-700 leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          >
            BiliWatch is an innovative medical device that detects neonatal jaundice through 
            <span className="text-primary font-medium"> non-invasive light measurement</span>. 
            Created for healthcare providers in low-resource settings, it offers an affordable alternative 
            to expensive bilirubinometers.
          </motion.p>
        </div>
        <FeaturesGrid 
          stepsData={stepsData} 
          iconVariants={iconVariants} 
          cardVariants={cardVariants} 
          textVariants={textVariants} 
        />
        <CTASection isInView={isInView} />
      </div>
    </section>
  );
}

