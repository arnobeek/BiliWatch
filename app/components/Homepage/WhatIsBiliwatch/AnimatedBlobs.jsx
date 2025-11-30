import { motion } from 'framer-motion';

export default function AnimatedBlobs({ rightBlobY, leftBlobY }) {
  return (
    <>
      <motion.div 
        className="absolute -top-40 -right-40 w-[30rem] h-[30rem] rounded-full opacity-30 -z-10"
        style={{ 
          background: "radial-gradient(circle, rgba(44,173,230,0.08) 0%, rgba(44,173,230,0.03) 50%, rgba(44,173,230,0) 70%)",
          y: rightBlobY
        }}
      />
      <motion.div 
        className="absolute -bottom-60 -left-40 w-[35rem] h-[35rem] rounded-full opacity-30 -z-10"
        style={{ 
          background: "radial-gradient(circle, rgba(87,199,151,0.08) 0%, rgba(87,199,151,0.03) 50%, rgba(87,199,151,0) 70%)",
          y: leftBlobY
        }}
      />
    </>
  );
}
