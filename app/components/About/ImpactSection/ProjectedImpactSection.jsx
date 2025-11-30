import { motion } from 'framer-motion'

export default function ProjectedImpactSection() {
  return (
    <motion.div
      className="mt-16 glass-card p-8 border border-white/30 backdrop-filter backdrop-blur-sm rounded-xl text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.8, duration: 0.6 }}
    >
      <h3 className="text-2xl font-bold text-gray-500 mb-4">Projected Impact by 2030</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div className="p-5 rounded-lg bg-primary/5 border border-primary/20" whileHover={{ y: -5 }}>
          <div className="text-primary text-4xl font-bold mb-2">250+</div>
          <div className="text-gray-700">Facilities Equipped</div>
        </motion.div>
        <motion.div className="p-5 rounded-lg bg-secondary/5 border border-secondary/20" whileHover={{ y: -5 }}>
          <div className="text-secondary text-4xl font-bold mb-2">50,000+</div>
          <div className="text-gray-700">Newborns Screened</div>
        </motion.div>
        <motion.div className="p-5 rounded-lg bg-primary/5 border border-primary/20" whileHover={{ y: -5 }}>
          <div className="text-primary text-4xl font-bold mb-2">5,000+</div>
          <div className="text-gray-700">Cases Prevented Annually</div>
        </motion.div>
      </div>
    </motion.div>
  )
}

