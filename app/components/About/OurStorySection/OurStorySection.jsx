import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import OurStoryBackground from './OurStoryBackground'
import OurStoryHeader from './OurStoryHeader'
import OurStoryOrbitCards from './OurStoryOrbitCards'

export default function OurStorySection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-10% 0px" })
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  // Apply a parallax effect on the container content
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-5%'])
  
  return (
    <section 
      id="our-story"
      ref={sectionRef} 
      className="py-28 md:py-40 md:pb-10 pb-6 relative overflow-hidden"
    >
      <OurStoryBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-5xl mx-auto"
          style={{ y: contentY }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <OurStoryHeader />
          <OurStoryOrbitCards />
        </motion.div>
      </div>
    </section>
  )
}

