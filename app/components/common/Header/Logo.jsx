import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Logo = ({ scrolled }) => {
  return (
    <Link to="/" className="flex items-center relative z-10">
      <motion.div
        className="relative overflow-hidden rounded-full mr-3"
        animate={{ scale: scrolled ? 0.9 : 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <img 
          src="https://res.cloudinary.com/df3lhzzy7/image/upload/BiliLogo_black_mfodyo.png" 
          alt="BiliWatch Logo" 
          width={50} 
          height={50}
          className="transition-all duration-300"
        />
      </motion.div>
      <div className="overflow-hidden">
        <motion.h1
          className="text-xl md:text-2xl font-display font-bold text-primary transition-all duration-300"
          animate={{ scale: scrolled ? 0.95 : 1, y: scrolled ? -1 : 0 }}
          transition={{ duration: 0.4 }}
        >
          <span className="inline-block relative">
            <span className="relative z-10 font-sans tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-dark">
              <span className="font-light text-secondary-light">Bili</span>
              <span className="font-extrabold">Watch</span>
            </span>
            <motion.span 
              className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-secondary/50 to-transparent rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: scrolled ? "70%" : "100%" }}
              transition={{ duration: 0.5 }}
            ></motion.span>
          </span>
        </motion.h1>
      </div>
    </Link>
  )
}

export default Logo


