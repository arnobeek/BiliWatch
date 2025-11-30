import HeroSection from '../components/Team/HeroSection/HeroSection'
import TeamMembersSection from '../components/Team/TeamMemberSection/TeamMembersSection'
import OurMission from '../components/Team/OurMission/OurMission'
import CTA from '../components/Team/CTA/CTA'

export default function Team() {
  
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Team Members Section */}
      <TeamMembersSection />

      {/* Our Mission Section */}
      <OurMission />

      {/* Join Us CTA */}
      <CTA />
    </>
  )
} 