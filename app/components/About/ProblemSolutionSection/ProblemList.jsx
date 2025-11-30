import { motion } from 'framer-motion'
import { FiAlertCircle } from 'react-icons/fi'

const problems = [
  {
    icon: "⚠",
    text: "Neonatal jaundice affects up to 60% of newborns and can lead to brain damage or death if untreated."
  },
  {
    icon: "⚠",
    text: "Many healthcare facilities in Uganda lack the equipment needed for jaundice detection."
  },
  {
    icon: "⚠",
    text: "Traditional bilirubinometers cost over $5,000, making them unaffordable for most clinics."
  },
  {
    icon: "⚠",
    text: "Blood tests are invasive, painful, and require laboratory facilities not available in rural areas."
  }
]

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: i => ({
    y: 0,
    opacity: 1,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.17, 0.67, 0.83, 0.67] }
  })
}

export default function ProblemList() {
  return (
    <motion.div 
      className="glass-card p-8 md:p-10 border border-primary/20 backdrop-filter backdrop-blur-sm rounded-2xl overflow-hidden relative shadow-xl"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.6 }}
      whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(44, 173, 230, 0.25)" }}
    >
      <motion.div 
        className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-primary/10 blur-xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
      />
      
      <motion.div 
        className="relative mb-8 flex items-center"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <div className="bg-primary/10 p-3 rounded-full mr-4">
          <FiAlertCircle className="text-primary text-3xl" />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-primary">The Problem</h3>
      </motion.div>
      
      <ul className="space-y-5">
        {problems.map((problem, index) => (
          <motion.li 
            key={index}
            className="flex items-start glass-card p-5 rounded-xl bg-white/60 hover:bg-white/80 transition-all duration-300 backdrop-blur-sm border border-primary/20 shadow-sm"
            custom={index}
            variants={itemVariants}
            whileHover={{ 
              x: 5, 
              boxShadow: "0 10px 15px -3px rgba(44, 173, 230, 0.1), 0 4px 6px -2px rgba(44, 173, 230, 0.05)" 
            }}
          >
            <span className="flex-shrink-0 bg-red-100 text-red-500 rounded-full h-6 w-6 flex items-center justify-center mr-4">
              {problem.icon}
            </span>
            <p className="text-gray-700">{problem.text}</p>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}
