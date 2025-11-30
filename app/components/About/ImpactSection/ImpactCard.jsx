import { motion } from 'framer-motion'

const pulseVariants = {
  pulse: {
    scale: [1, 1.05, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
}

export default function ImpactCard({ item, index }) {
  return (
    <motion.div 
      className={`glass-card p-6 border border-${item.color}/20 backdrop-filter backdrop-blur-sm rounded-xl overflow-hidden relative`}
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      variants={{
        visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 24 } },
        hidden: { y: 20, opacity: 0 }
      }}
      whileHover={{ 
        y: -8, 
        boxShadow: item.color === "primary" 
          ? "0 20px 25px -5px rgba(44, 173, 230, 0.1), 0 10px 10px -5px rgba(44, 173, 230, 0.04)"
          : "0 20px 25px -5px rgba(87, 199, 151, 0.1), 0 10px 10px -5px rgba(87, 199, 151, 0.04)"
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Decorative background shape */}
      <motion.div 
        className={`absolute -top-10 -right-10 w-40 h-40 rounded-full bg-${item.color}/5`}
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5] 
        }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", delay: index * 2 }}
      />
      
      <div className="flex flex-col md:flex-row gap-6 items-start relative">
        <div className={`flex-shrink-0 rounded-full bg-${item.color}/10 p-4 flex items-center justify-center`}>
          <div className={`text-${item.color}`}>
            {item.icon}
          </div>
        </div>
        
        <div className="flex-grow">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-3">
            <h3 className={`font-bold text-${item.color} text-xl`}>{item.title}</h3>
            <motion.div 
              className={`inline-flex items-center justify-center px-4 py-2 rounded-full bg-${item.color}/10 text-${item.color} font-bold`}
              variants={pulseVariants}
              animate="pulse"
            >
              {item.stat}
            </motion.div>
          </div>
          <p className="text-gray-700">{item.description}</p>
          <div className="mt-3 text-sm text-gray-500 font-medium">{item.statLabel}</div>
        </div>
      </div>
      
      {/* Bottom decorative line */}
      <motion.div 
        className={`absolute bottom-0 left-0 h-1 bg-${item.color}/50 rounded-r-full`}
        initial={{ width: 0 }}
        whileInView={{ width: "40%" }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 + index * 0.2, duration: 0.8 }}
      />
    </motion.div>
  )
}

