import React from 'react';
import BeerLambertCard from './BeerLambertCard';
import SpectralAnalysisCard from './SpectralAnalysisCard';
import MachineLearningCard from './MachineLearningCard';

export default function TechnologyGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
      <BeerLambertCard />
      <SpectralAnalysisCard />
      <MachineLearningCard />
    </div>
  );
}

