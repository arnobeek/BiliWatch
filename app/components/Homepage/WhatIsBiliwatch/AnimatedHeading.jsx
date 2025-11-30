// components/AnimatedHeading.jsx
import { motion } from 'framer-motion';

export default function AnimatedHeading({ isInView, titleText }) {
  const headingVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const letterVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 400, damping: 40 }
    }
  };

  return (
    <motion.h2 
      className="relative text-4xl md:text-5xl font-bold mb-6 inline-block text-gray-800"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={headingVariants}
    >
      {titleText.split('').map((char, index) => (
        <motion.span 
          key={index} 
          variants={letterVariants}
          className={char !== " " ? "inline-block" : "inline-block w-2"}
          style={
            char === "B" || char === "W"
              ? { color: "#2CADE6" } // Blue for letters B & W
              : char === "?"
              ? { color: "#57C797" } // Green for the question mark
              : {}
          }
        >
          {char}
        </motion.span>
      ))}
      <motion.div 
        className="h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-2"
        initial={{ width: 0, opacity: 0 }}
        animate={isInView ? { width: "50%", opacity: 1 } : { width: 0, opacity: 0 }}
        transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.h2>
  );
}
