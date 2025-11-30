import { motion, useTransform } from 'framer-motion'

export default function BackgroundOverlay({ scrollYProgress }) {
  // Parallax effect for the pattern overlay along the X-axis.
  const bgPatternX = useTransform(scrollYProgress, [0, 1], ['0%', '3%'])

  return (
    <>
      {/* Simple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-green-50/30 -z-20"></div>
      
      {/* Pattern overlay with parallax effect */}
      <motion.div 
        className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2760%27%20height%3D%2760%27%20viewBox%3D%270%200%2060%2060%27%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%3E%3Cg%20fill%3D%27none%27%20fill-rule%3D%27evenodd%27%3E%3Cg%20fill%3D%27%2357C797%27%20fill-opacity%3D%270.05%27%3E%3Cpath%20d%3D%27M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-center opacity-50 -z-10"
        style={{ x: bgPatternX }}
      ></motion.div>
      
      {/* Accent decorative elements */}
      <div className="absolute top-10 right-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl -z-10"></div>
      <div className="absolute bottom-10 left-1/4 w-64 h-64 rounded-full bg-secondary/10 blur-3xl -z-10"></div>
    </>
  )
}

