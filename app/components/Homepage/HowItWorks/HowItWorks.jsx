import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import DynamicBackground from './DynamicBackground';
import HowItWorksContent from './HowItWorksContent';
import HowItWorksCards from './HowItWorksCards';
import LearnMoreButton from './LearnMoreButton';
import { FaRegLightbulb, FaChartLine, FaRegClock } from 'react-icons/fa';

export default function HowItWorks() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10% 0px" });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Parallax transform for content and background
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-5%']);
  const bgPositionX = useTransform(scrollYProgress, [0, 1], ['0%', '5%']);
  
  // Step data for cards
  const stepsData = [
    {
      number: 1,
      title: "Place the device on the baby's skin",
      description: "The sensor gently makes contact with the baby's forehead or sternum for maximum accuracy and comfort",
      icon: <FaRegLightbulb className="text-white text-lg" />,
      color: "from-secondary to-primary"
    },
    {
      number: 2,
      title: "Light measurement",
      description: "The LED emits a precise wavelength and the photodiode measures bilirubin absorption through the skin",
      icon: <FaChartLine className="text-white text-lg" />,
      color: "from-primary to-blue-400"
    },
    {
      number: 3,
      title: "Results in minutes",
      description: "Advanced algorithms calculate bilirubin levels with clinical accuracy, displaying actionable results in under 5 minutes",
      icon: <FaRegClock className="text-white text-lg" />,
      color: "from-blue-400 to-secondary"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 md:py-24 relative overflow-hidden perspective-[1000px]"
    >
      <DynamicBackground bgPositionX={bgPositionX} />
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-12 lg:gap-20">
          <motion.div style={{ y: contentY }}>
            <HowItWorksContent isInView={isInView} />
            <HowItWorksCards stepsData={stepsData} />
          </motion.div>
          <LearnMoreButton />
        </div>
      </div>
    </section>
  );
}

