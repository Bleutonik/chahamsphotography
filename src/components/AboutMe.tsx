import aboutImage from '@/assets/about-luis.png';

const AboutMe = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl text-center mb-12 text-foreground tracking-wide">
          SOBRE MÍ
        </h2>
        
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Photo */}
          <div className="w-full lg:w-2/5 flex justify-center">
            <div className="relative group">
              {/* Subtle gradient background glow */}
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 via-gold-light/20 to-transparent rounded-2xl blur-sm opacity-60"></div>
              
              {/* Main image container */}
              <div className="relative overflow-hidden rounded-2xl border-2 border-cream-dark/30 shadow-dramatic">
                <img 
                  src={aboutImage} 
                  alt="Luis Alvarado - Fotógrafo Profesional" 
                  className="w-72 md:w-80 h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-coffee/10 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
          
          {/* Text */}
          <div className="w-full lg:w-3/5 text-center lg:text-left">
            <h3 className="font-display text-2xl md:text-3xl text-primary mb-4">
              Luis Alvarado
            </h3>
            <p className="font-body text-foreground/90 leading-relaxed mb-4">
              Con más de 10 años de experiencia en la industria de la fotografía y 5 años dedicados al video profesional, he construido una trayectoria basada en la confianza, la calidad y la atención al detalle. Mi compromiso es capturar momentos auténticos con un enfoque creativo y un alto estándar visual, cuidando cada proyecto como si fuera único.
            </p>
            <p className="font-body text-foreground/90 leading-relaxed">
              Ofrezco servicios que compiten con los precios del mercado sin comprometer la excelencia, el esmero y la dedicación que cada cliente merece. Trabajar conmigo significa tranquilidad, profesionalismo y la certeza de que tus recuerdos estarán en manos expertas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
