import React from 'react';
import { motion } from 'framer-motion';
import CTABackground from './CTABackground';
import CTAContent from './CTAContent';
import CTAImage from './CTAImage';
import CTAIcons from './CTAIcons';

export default function CTA() {
  return (
    <section className="py-16 md:py-24 bg-background-alt relative overflow-hidden">
      <CTABackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="glass-card p-8 md:p-12 rounded-2xl shadow-xl backdrop-blur-sm border border-white/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <CTAContent />
            <CTAImage />
          </div>
          
          <CTAIcons />
        </motion.div>
      </div>
      
      {/* Inline style for slow spin animation */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
}

