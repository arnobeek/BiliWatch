import HeroSection from '../../app/components/Product/HeroSection/HeroSection'
import TechnologyExplanation from '../../app/components/Product/TechnologyExplanation/TechnologyExplanation'
import HowItWorks from '../../app/components/Product/HowItWorks/HowItWorks'
import Advantages from '../../app/components/Product/Advantages/Advantages'
import CTA from '../../app/components/Product/CTA/CTA'

export default function Product() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Technology Explanation */}
      <TechnologyExplanation />

      {/* How It Works Steps */}
      <HowItWorks />

      {/* Advantages Section */}
      <Advantages />

      {/* CTA Section */}
      <CTA />
    </>
  )
}
