import React from 'react';
import DecorativeBackground from './DecorativeBackground';
import SectionHeader from './SectionHeader';
import StepsGrid from './StepsGrid';

const steps = [
  {
    number: 1,
    title: "Light Emission",
    description: "A blue LED light is directed at the baby's skin, typically on the forehead or sternum where the skin is thin.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="M4.93 4.93l1.41 1.41" />
        <path d="M17.66 17.66l1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="M6.34 17.66l-1.41 1.41" />
        <path d="M19.07 4.93l-1.41 1.41" />
      </svg>
    )
  },
  {
    number: 2,
    title: "Absorption Measurement",
    description: "A photodiode sensor measures how much light is absorbed by the bilirubin in the skin versus how much is reflected back.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <rect x="6" y="6" width="12" height="12" rx="2" />
      </svg>
    )
  },
  {
    number: 3,
    title: "Analysis & Results",
    description: "Our proprietary algorithm converts the absorption data into a clinically relevant bilirubin measurement in under 5 minutes.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M20 11a8 8 0 0 0-16 0" />
        <path d="M4 11v4a8 8 0 0 0 16 0v-4" />
        <line x1="12" y1="11" x2="12" y2="17" />
        <line x1="8" y1="15" x2="16" y2="15" />
      </svg>
    )
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-32 bg-background-alt relative overflow-hidden">
      <DecorativeBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader />
        <StepsGrid steps={steps} />

        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors duration-300 shadow-md">
            Learn More About Our Technology
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

