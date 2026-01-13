import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import heroImage from '@/assets/hero-wedding.jpg';
import cameraLogo from '@/assets/camera-logo.png';

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
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
            className="w-32 md:w-44 lg:w-52 h-auto mx-auto mb-6"
          />
          <p className="font-body text-gold-light text-lg md:text-xl mb-4 tracking-widest uppercase">
            Fotografía & Video Profesional
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-cream mb-6 leading-tight">
            Chaham's
            <span className="block text-3xl md:text-4xl lg:text-5xl font-normal mt-2 text-gold-light">
              Photography & Video
            </span>
          </h1>
          <p className="font-body text-cream/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Capturando momentos únicos e irrepetibles en Puerto Rico y Estados Unidos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="gold" size="xl" asChild>
              <a href="#portafolio">Ver Portafolio</a>
            </Button>
            <Button variant="elegant" size="xl" className="border-cream text-cream hover:bg-cream hover:text-coffee" asChild>
              <a href="#contacto">Contactar</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#portafolio"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/80 hover:text-cream transition-colors duration-300 animate-bounce"
        aria-label="Scroll to portfolio"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
