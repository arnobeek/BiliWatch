import React from 'react';

export default function CTABackground() {
  return (
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-primary transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-secondary transform translate-x-1/3 translate-y-1/3"></div>
    </div>
  );
}

