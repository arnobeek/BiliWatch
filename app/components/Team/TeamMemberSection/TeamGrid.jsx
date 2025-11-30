import React from 'react';
import { motion } from 'framer-motion';
import { containerVariants } from './MotionVariants';
import TeamMemberCard from './TeamMemberCard';

export default function TeamGrid({ teamMembers }) {
  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {teamMembers.map((member, index) => (
        <TeamMemberCard key={index} member={member} index={index} />
      ))}
    </motion.div>
  );
}

