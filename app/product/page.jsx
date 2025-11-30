import HeroSection from '../components/Product/HeroSection/HeroSection'
import TechnologyExplanation from '../components/Product/TechnologyExplanation/TechnologyExplanation'
import HowItWorks from '../components/Product/HowItWorks/HowItWorks'
import Advantages from '../components/Product/Advantages/Advantages'
import CTA from '../components/Product/CTA/CTA'

export default function Product() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Technology Explanation */}
      <TechnologyExplanation/>

      {/* How It Works Steps */}
      <HowItWorks />

      {/* Advantages Section */}
      <Advantages />

      {/* CTA Section */}
      <CTA />
    </>
  )
} 