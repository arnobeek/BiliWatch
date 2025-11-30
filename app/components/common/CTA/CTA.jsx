import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import BackgroundOverlay from './BackgroundOverlay'
import AnimatedCard from './AnimatedCard'

export default function CTA() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-10% 0px" })
  
  // Attach scrollYProgress to this section for parallax effects.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  // Apply a subtle parallax effect on the card content.
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-5%'])

  return (
    <section 
      ref={sectionRef} 
      className="py-20 md:py-24 relative overflow-hidden"
    >
      {/* Background layers */}
      <BackgroundOverlay scrollYProgress={scrollYProgress} />
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="relative max-w-3xl mx-auto"
          style={{ y: contentY }}
        >
          <AnimatedCard isInView={isInView} />
        </motion.div>
      </div>
    </section>
  )
}

