import VideoBackground from './VideoBackground';
import HeroContent from './HeroContent';

export default function HeroSection() {
  return (
    <section className="relative h-[600px] md:h-screen flex items-center justify-center overflow-hidden">
      <VideoBackground />
      <HeroContent />
    </section>
  );
}

