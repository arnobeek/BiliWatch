import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function FooterQuickLinks() {
  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/product', label: 'How It Works' },
    { href: '/team', label: 'Our Team' },
    { href: '/contact', label: 'Contact' },
  ]
  
  return (
    <div>
      <h3 className="text-lg font-semibold mb-5 text-white">Quick Links</h3>
      <ul className="space-y-3">
        {links.map((link, idx) => (
          <motion.li 
            key={link.href}
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link to={link.href} className="text-gray-300 hover:text-secondary transition-all duration-300 text-sm flex items-center">
              <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2 opacity-70"></span>
              {link.label}
            </Link>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}



