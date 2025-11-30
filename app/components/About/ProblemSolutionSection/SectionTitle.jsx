import { motion } from 'framer-motion'

export default function SectionTitle() {
  return (
    <motion.div 
      className="text-center mb-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2 
        className="text-4xl md:text-5xl font-bold mb-6 inline-block relative"
        animate={{ color: ['#2CADE6', '#57C797', '#2CADE6'] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        Problem &amp; Solution
        <motion.span 
          className="absolute -bottom-3 left-1/2 h-1 bg-gradient-to-r from-primary/80 to-secondary/80 rounded-full backdrop-blur-sm"
          initial={{ width: "0%", left: "50%" }}
          whileInView={{ width: "40%", left: "30%" }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        />
      </motion.h2>
      
      <motion.p 
        className="max-w-3xl mx-auto text-lg md:text-xl text-gray-700"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Understanding the challenge and how BiliWatch addresses it through innovation and appropriate technology
      </motion.p>
    </motion.div>
  )
}
