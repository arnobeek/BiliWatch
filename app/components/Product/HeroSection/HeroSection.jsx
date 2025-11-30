import HeroBackground from './HeroBackground';
import HeroLeftContent from './HeroLeftContent';
import HeroRightContent from './HeroRightContent';

export default function HeroSection() {
  return (
    <section className="relative pt-36 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      <HeroBackground />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <HeroLeftContent />
          <HeroRightContent />
        </div>
      </div>
    </section>
  );
}

