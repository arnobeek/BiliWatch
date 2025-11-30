import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import ImpactBackground from './ImpactBackground'
import ImpactHeader from './ImpactHeader'
import ImpactCardsGrid from './ImpactCardsGrid'
import ProjectedImpactSection from './ProjectedImpactSection'
import { FaChartLine, FaHospital, FaUserMd, FaBaby } from 'react-icons/fa';

export default function ImpactSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-10% 0px" })
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  // Parallax effect on the grid container
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-5%'])
  
  const impactItems = [
    {
      icon: <span><FaChartLine className="text-2xl" /></span>,
      title: "Increasing Early Detection",
      description: "Enabling more facilities to screen newborns for jaundice, increasing detection rates by over 60%.",
      color: "primary",
      stat: "60%",
      statLabel: "Increase in Detection"
    },
    {
      icon: <span><FaHospital className="text-2xl" /></span>,
      title: "Expanding Rural Access",
      description: "Bringing jaundice screening to over 200 rural health centers that previously lacked resources.",
      color: "secondary",
      stat: "200+",
      statLabel: "Rural Centers"
    },
    {
      icon: <span><FaUserMd className="text-2xl" /></span>,
      title: "Training Healthcare Workers",
      description: "Equipping healthcare providers with skills to identify and manage jaundice effectively.",
      color: "primary",
      stat: "500+",
      statLabel: "Workers Trained"
    },
    {
      icon: <span><FaBaby className="text-2xl" /></span>,
      title: "Saving Lives",
      description: "Potential to prevent over 1,000 deaths and 5,000 cases of disability annually.",
      color: "secondary",
      stat: "6,000+",
      statLabel: "Lives Improved Annually"
    }
  ]
  
  return (
    <section 
      id="impact"
      ref={sectionRef} 
      className="py-20 md:py-32 relative overflow-hidden"
    >
      <ImpactBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <ImpactHeader />
        <motion.div style={{ y: contentY }}>
          <ImpactCardsGrid impactItems={impactItems} />
        </motion.div>
        <ProjectedImpactSection />
      </div>
    </section>
  )
}

