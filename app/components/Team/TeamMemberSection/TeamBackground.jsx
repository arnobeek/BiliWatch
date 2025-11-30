import React from 'react';

export default function TeamBackground() {
  return (
    <>
      {/* Background with gradient and grid pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50 opacity-70"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-10 h-full w-full">
            {Array(100).fill().map((_, i) => (
              <div key={i} className="border-r border-t border-gray-500/10"></div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary opacity-5 rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary opacity-5 rounded-full"></div>
    </>
  );
}

