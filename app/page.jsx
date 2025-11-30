import HeroSection from './components/Homepage/HeroSection/HeroSection'
import WhatIsBiliwatch from './components/Homepage/WhatIsBiliwatch/WhatIsBiliwatch'
import HowItWorks from './components/Homepage/HowItWorks/HowItWorks'
import CTA from './components/common/CTA/CTA'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
        <HeroSection />

      {/* What is BiliWatch Section */}
        <WhatIsBiliwatch/>

      {/* How It Works Section */}
        <HowItWorks/>

      {/* CTA Section */}
        <CTA />
    </>
  )
} 