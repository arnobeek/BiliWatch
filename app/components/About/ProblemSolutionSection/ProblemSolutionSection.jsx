import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import AnimatedBackground from './AnimatedBackground'
import SectionTitle from './SectionTitle'
import ProblemList from './ProblemList'
import SolutionList from './SolutionList'

export default function ProblemSolutionSection() {
  const sectionRef = useRef(null)
  useInView(sectionRef, { once: true, margin: "-10% 0px" })

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  }

  return (
    <section ref={sectionRef} className="py-20 md:py-24 relative overflow-hidden">
      {/* Background Components */}
      <AnimatedBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <SectionTitle />
        
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative pb-20"
        >
          {/* Center connection line (visible on desktop) */}
          <motion.div 
            className="hidden md:block absolute left-1/2 top-16 bottom-16 w-1 bg-gradient-to-b from-primary to-secondary"
            initial={{ height: 0 }}
            whileInView={{ height: "auto" }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, duration: 1 }}
          />
          
          {/* Center arrow */}
          <motion.div
            className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-white rounded-full w-12 h-12 items-center justify-center shadow-lg border-2 border-secondary"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.8, duration: 0.5, type: "spring" }}
          >
            {/* If desired, you can insert an arrow icon here */}
          </motion.div>

          {/* Layout for Problem &amp; Solution Panels */}
          <div className="flex flex-col md:flex-row justify-between">
            <div className="md:w-5/12 md:pr-12 mb-16 md:mb-0">
              <ProblemList />
            </div>
            <div className="md:w-5/12 md:pl-12">
              <SolutionList />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

