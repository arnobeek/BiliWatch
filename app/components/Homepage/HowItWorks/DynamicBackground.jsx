// components/DynamicBackground.jsx
import { motion } from 'framer-motion';

export default function DynamicBackground({ bgPositionX }) {
  return (
    <>
      {/* Dynamic gradient background with parallax effect */}
      <motion.div 
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage: 'linear-gradient(to right, #f6fdf9 20%, rgb(119, 198, 232))',
          x: bgPositionX
        }}
      />
      {/* Pattern overlay with subtle animation */}
      <motion.div 
        className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%2357C797\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-center opacity-20 -z-10"
        animate={{ backgroundPositionX: ["0%", "2%", "0%"] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
    </>
  );
}
