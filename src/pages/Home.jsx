import HeroSection from '../../app/components/Homepage/HeroSection/HeroSection'
import WhatIsBiliwatch from '../../app/components/Homepage/WhatIsBiliwatch/WhatIsBiliwatch'
import HowItWorks from '../../app/components/Homepage/HowItWorks/HowItWorks'
import CTA from '../../app/components/common/CTA/CTA'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* What is BiliWatch Section */}
      <WhatIsBiliwatch />

      {/* How It Works Section */}
      <HowItWorks />

      {/* CTA Section */}
      <CTA />
    </>
  )
}
