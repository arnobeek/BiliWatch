import React from 'react';
import BackgroundElements from './BackgroundElements';
import AdvantagesHeader from './AdvantagesHeader';
import MobileComparison from './MobileComparison';
import DesktopComparison from './DesktopComparison';
import CTAButton from './CTAButton';

export default function Advantages() {
  const comparisonData = [
    {
      label: "Procedure Type",
      traditional: "Invasive procedure requiring blood draw",
      biliwatch: "Completely non-invasive, no skin puncture"
    },
    {
      label: "Results Time",
      traditional: "Results typically take 1-3 hours",
      biliwatch: "Results in under 5 minutes"
    },
    {
      label: "Operation",
      traditional: "Requires laboratory equipment and trained technicians",
      biliwatch: "Simple operation requiring minimal training"
    },
    {
      label: "Cost",
      traditional: "Costly procedure (typically $50-150 USD)",
      biliwatch: "Low-cost alternative (target price under $30 USD)"
    },
    {
      label: "Patient Experience",
      traditional: "Pain and discomfort for the newborn",
      biliwatch: "Painless procedure for the newborn"
    },
    {
      label: "Safety",
      traditional: "Risk of infection at puncture site",
      biliwatch: "No risk of infection or complications"
    }
  ];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <BackgroundElements />

      <div className="container mx-auto px-4 relative z-10">
        <AdvantagesHeader />

        {/* Mobile View */}
        <MobileComparison comparisonData={comparisonData} />

        {/* Desktop View */}
        <DesktopComparison comparisonData={comparisonData} />

        <CTAButton />
      </div>
    </section>
  );
}

