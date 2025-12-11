import React from 'react';
import { Star, Briefcase, User, GraduationCap, ChevronRight, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { itemVariants } from './MotionVariants';

export default function TeamMemberCard({ member, index }) {
  // Render different icons based on the index (you can also use a lookup table)
  const renderIcon = () => {
    if (index === 0) return <Star className="w-8 h-8" />;
    if (index === 1) return <Briefcase className="w-8 h-8" />;
    if (index === 2) return <User className="w-8 h-8" />;
    if (index === 3) return <User className="w-8 h-8" />;
    if (index === 4) return <User className="w-8 h-8" />;
    if (index === 5) return <User className="w-8 h-8" />;
    if (index === 6) return <User className="w-8 h-8" />;
    return null;
  };

  return (
    <motion.div 
      variants={itemVariants} 
      className="relative group h-full"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative rounded-xl overflow-hidden h-full shadow-md group-hover:shadow-2xl transition-all duration-300 bg-white border border-gray-100">
        <div className="absolute inset-0 bg-gradient-to-br opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>
        <div className={`absolute top-0 left-0 h-2 w-full bg-gradient-to-r ${member.color}`}></div>
        
        <div className="relative p-8 h-full flex flex-col">
        <div className="mb-6 flex justify-center">
          <div className={`w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-br ${member.color} text-white`}>
            {renderIcon()}
          </div>
        </div>
        
        <h3 className="text-xl font-bold mb-1 text-secondary text-center">
          {member.name}
        </h3>
        <p className="text-primary font-medium text-center mb-4">
          {member.role}
        </p>
        <p className="text-gray-600 text-center mb-6">
          {member.description}
        </p>
        
        <div className="space-y-2">
          {member.expertise.map((skill, i) => (
            <div key={i} className="flex items-center text-gray-700 text-sm">
              <ChevronRight className="w-4 h-4 text-primary mr-2" />
              <span>{skill}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-6 pt-4 border-t border-gray-100">
          <button className="w-full flex items-center justify-center text-primary hover:text-primary-dark transition-colors gap-2 text-sm font-medium">
            View Profile
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
        </div>
      </div>
    </motion.div>
  );
}

