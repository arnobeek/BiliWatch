import React from 'react';
import TechBackground from './TechBackground';
import HeaderSection from './HeaderSection';
import CoreTechnologyCard from './CoreTechnologyCard';
import TechnologyGrid from './TechnologyGrid';

export default function TechnologyExplanation() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <TechBackground />
      
      <div className="container mx-auto px-4">
        <HeaderSection />

        {/* Main content area */}
        <div className="flex flex-col items-center">
          <CoreTechnologyCard />
          <TechnologyGrid />
        </div>
      </div>
    </section>
  );
}

