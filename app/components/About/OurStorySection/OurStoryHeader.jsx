import { motion } from 'framer-motion'

export default function OurStoryHeader() {
  return (
    <motion.div 
      className="mb-20 text-center p-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2 
        className="text-4xl md:text-5xl font-bold mb-6 inline-block relative"
        animate={{ color: ['#2CADE6', '#57C797', '#2CADE6'] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        Background
        <motion.span 
          className="absolute -bottom-3 left-1/2 h-1 bg-gradient-to-r from-primary/80 to-secondary/80 rounded-full backdrop-blur-sm"
          initial={{ width: "0%", left: "50%" }}
          whileInView={{ width: "40%", left: "30%" }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        />
      </motion.h2>
      
      <motion.p 
        className="text-xl md:text-2xl text-gray-500 mt-8 leading-relaxed font-medium"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        BiliWatch was born from a pressing need observed in Ugandan healthcare facilities where neonatal jaundice often goes undetected due to limited access to diagnostic equipment. Recognizing the urgent necessity for a reliable solution, our team of healthcare professionals and innovators developed BiliWatch as a user-friendly, state-of-the-art diagnostic tool.
      </motion.p>
    </motion.div>
  )
}

