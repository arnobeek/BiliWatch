// components/SolutionList.jsx
import { motion } from 'framer-motion'
import { FiCheckCircle } from 'react-icons/fi'

const solutions = [
  {
    icon: "✓",
    text: "BiliWatch: A low-cost transcutaneous bilirubinometer specifically designed for low-resource settings."
  },
  {
    icon: "✓",
    text: "Non-invasive technology that measures jaundice through the skin with no blood draw needed."
  },
  {
    icon: "✓",
    text: "Costs less than $500, making it 10x more affordable than traditional devices."
  },
  {
    icon: "✓",
    text: "Battery-powered and portable, perfect for rural clinics with unreliable electricity."
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

export default function SolutionList() {
  return (
    <motion.div 
      className="glass-card p-8 md:p-10 border border-secondary/20 backdrop-filter backdrop-blur-sm rounded-2xl overflow-hidden relative shadow-xl"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.6, duration: 0.6 }}
      whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(87, 199, 151, 0.25)" }}
    >
      <motion.div 
        className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-secondary/10 blur-xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", delay: 2 }}
      />
      
      <motion.div 
        className="relative mb-8 flex items-center"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div className="bg-secondary/10 p-3 rounded-full mr-4">
          <FiCheckCircle className="text-secondary text-3xl" />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-secondary">Our Solution</h3>
      </motion.div>
      
      <ul className="space-y-5">
        {solutions.map((solution, index) => (
          <motion.li 
            key={index}
            className="flex items-start glass-card p-5 rounded-xl bg-white/60 hover:bg-white/80 transition-all duration-300 backdrop-blur-sm border border-secondary/20 shadow-sm"
            custom={index}
            variants={itemVariants}
            whileHover={{ 
              x: 5, 
              boxShadow: "0 10px 15px -3px rgba(87, 199, 151, 0.1), 0 4px 6px -2px rgba(87, 199, 151, 0.05)" 
            }}
          >
            <span className="flex-shrink-0 bg-green-100 text-green-500 rounded-full h-6 w-6 flex items-center justify-center mr-4">
              {solution.icon}
            </span>
            <p className="text-gray-700">{solution.text}</p>
          </motion.li>
        ))}
      </ul>
      
      {/* Enhanced Pulse Animation */}
      <motion.div
        className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-secondary/10"
        animate={{ scale: [1, 1.8, 1], opacity: [0.4, 0, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  )
}
