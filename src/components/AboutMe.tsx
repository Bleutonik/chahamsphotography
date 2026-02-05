import aboutImage from '@/assets/about-luis.png';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutMe = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl text-center mb-12 text-foreground tracking-wide">
          {t('about.title')}
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
              {language === 'es' 
                ? 'Con más de 10 años de experiencia en la industria de la fotografía y 5 años dedicados al video profesional, he construido una trayectoria basada en la confianza, la calidad y la atención al detalle. Mi compromiso es capturar momentos auténticos con un enfoque creativo y un alto estándar visual, cuidando cada proyecto como si fuera único.'
                : 'With over 10 years of experience in the photography industry and 5 years dedicated to professional video, I have built a career based on trust, quality, and attention to detail. My commitment is to capture authentic moments with a creative approach and high visual standards, treating each project as if it were unique.'}
            </p>
            <p className="font-body text-foreground/90 leading-relaxed">
              {language === 'es'
                ? 'Ofrezco servicios que compiten con los precios del mercado sin comprometer la excelencia, el esmero y la dedicación que cada cliente merece. Trabajar conmigo significa tranquilidad, profesionalismo y la certeza de que tus recuerdos estarán en manos expertas.'
                : 'I offer services that compete with market prices without compromising the excellence, care, and dedication that each client deserves. Working with me means peace of mind, professionalism, and the certainty that your memories will be in expert hands.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
