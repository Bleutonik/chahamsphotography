import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-wedding.jpg';
import cameraLogo from '@/assets/camera-logo.png';
import { SectionType } from '@/pages/Index';

interface HeroProps {
  onNavigate: (section: SectionType) => void;
}

const Hero = ({ onNavigate }: HeroProps) => {
  return (
    <section className="relative min-h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Fotografía de boda en Puerto Rico"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-coffee/60 via-coffee/40 to-coffee/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <img 
            src={cameraLogo} 
            alt="Chaham's Photography Logo" 
            className="w-40 md:w-56 lg:w-64 h-auto mx-auto mb-0"
          />
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-cream mb-6 leading-tight -mt-6">
            Chaham's
            <span className="block text-3xl md:text-4xl lg:text-5xl font-normal mt-2 text-gold-light">
              Photography & Video
            </span>
          </h1>
          <p className="font-body text-cream/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Capturando momentos únicos e irrepetibles en Puerto Rico y Estados Unidos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="gold" 
              size="xl" 
              onClick={() => onNavigate('portafolio')}
            >
              Ver Portafolio
            </Button>
            <Button 
              variant="elegant" 
              size="xl" 
              className="border-cream text-cream hover:bg-cream hover:text-coffee" 
              asChild
            >
              <a href="https://wa.me/17873630620" target="_blank" rel="noopener noreferrer">
                Contactar
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
