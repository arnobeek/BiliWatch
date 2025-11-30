import React from 'react';
import { Users, Award, Heart, Hospital } from 'lucide-react';
import { motion } from 'framer-motion';
import { itemVariants, containerVariants } from './motionVariants';

export default function HeroStats() {
  const stats = [
    { value: '12+', label: 'Team Members', icon: <Users className="w-5 h-5" /> },
    { value: '5+', label: 'Years Experience', icon: <Award className="w-5 h-5" /> },
    { value: '1000+', label: 'Babies Helped', icon: <Heart className="w-5 h-5" /> },
    { value: '15+', label: 'Partner Hospitals', icon: <Hospital className="w-5 h-5" /> }
  ];

  return (
    <motion.div 
      className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.4 }}
    >
      {stats.map((stat, i) => (
        <motion.div 
          key={i} 
          className="glass-card p-4 md:p-6 rounded-lg border border-gray-100 bg-white bg-opacity-80 backdrop-blur-sm hover:shadow-md transition-all duration-300"
          variants={itemVariants}
        >
          <div className="flex items-center mb-2">
            <div className="bg-primary bg-opacity-10 p-2 rounded-full text-primary mr-3">
              {stat.icon}
            </div>
            <div className="text-2xl md:text-3xl font-bold text-secondary">
              {stat.value}
            </div>
          </div>
          <div className="text-sm md:text-base text-gray-600">{stat.label}</div>
        </motion.div>
      ))}
    </motion.div>
  );
}

