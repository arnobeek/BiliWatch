import { motion } from 'framer-motion'
import ImpactCard from './ImpactCard'

export default function ImpactCardsGrid({ impactItems }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  }
  
  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {impactItems.map((item, index) => (
        <ImpactCard key={index} item={item} index={index} />
      ))}
    </motion.div>
  )
}

