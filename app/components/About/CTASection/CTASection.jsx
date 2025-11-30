import BackgroundLayers from './BackgroundLayers'
import LeftContent from './LeftContent'
import RightDecorativeCard from './RightDecorativeCard'

export default function CTASection() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Layers */}
      <BackgroundLayers />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Left Text Content */}
          <LeftContent />
          
          {/* Right Decorative Card / Image Area */}
          <RightDecorativeCard />
        </div>
      </div>
    </section>
  )
}

