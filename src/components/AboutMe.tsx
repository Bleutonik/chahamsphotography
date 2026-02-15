import aboutImage from '@/assets/about-luis.png';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Award, Clock, Camera, Heart } from 'lucide-react';

const AboutMe = () => {
  const { language } = useLanguage();

  const stats = [
    { icon: Clock, value: '10+', label: language === 'es' ? 'Años Experiencia' : 'Years Experience' },
    { icon: Camera, value: '500+', label: language === 'es' ? 'Sesiones' : 'Sessions' },
    { icon: Heart, value: '200+', label: language === 'es' ? 'Bodas' : 'Weddings' },
    { icon: Award, value: '5+', label: language === 'es' ? 'Años en Video' : 'Years in Video' },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h1 className="font-display text-3xl md:text-4xl text-center mb-12 text-foreground tracking-wide">
          {language === 'es' ? 'Sobre Luis Alvarado — Fotógrafo de Bodas en Puerto Rico' : 'About Luis Alvarado — Wedding Photographer in Puerto Rico'}
        </h1>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 max-w-5xl mx-auto mb-12">
          {/* Photo */}
          <div className="w-full lg:w-2/5 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 via-gold-light/20 to-transparent rounded-2xl blur-sm opacity-60"></div>
              <div className="relative overflow-hidden rounded-2xl border-2 border-cream-dark/30 shadow-dramatic">
                <img
                  src={aboutImage}
                  alt="Luis Alvarado — Professional Wedding Photographer in Puerto Rico with over 10 years of experience"
                  loading="lazy"
                  className="w-72 md:w-80 h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee/10 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="w-full lg:w-3/5 text-center lg:text-left">
            <h2 className="font-display text-2xl md:text-3xl text-primary mb-4">
              Luis Alvarado
            </h2>
            <p className="font-body text-foreground/90 leading-relaxed mb-4">
              {language === 'es'
                ? 'Con más de 10 años de experiencia en la industria de la fotografía y 5 años dedicados al video profesional, he construido una trayectoria basada en la confianza, la calidad y la atención al detalle. Mi compromiso es capturar momentos auténticos con un enfoque creativo y un alto estándar visual, cuidando cada proyecto como si fuera único.'
                : 'With over 10 years of experience in the photography industry and 5 years dedicated to professional video, I have built a career based on trust, quality, and attention to detail. My commitment is to capture authentic moments with a creative approach and high visual standards, treating each project as if it were unique.'}
            </p>
            <p className="font-body text-foreground/90 leading-relaxed mb-4">
              {language === 'es'
                ? 'Ofrezco servicios que compiten con los precios del mercado sin comprometer la excelencia, el esmero y la dedicación que cada cliente merece. Trabajar conmigo significa tranquilidad, profesionalismo y la certeza de que tus recuerdos estarán en manos expertas.'
                : 'I offer services that compete with market prices without compromising the excellence, care, and dedication that each client deserves. Working with me means peace of mind, professionalism, and the certainty that your memories will be in expert hands.'}
            </p>
            <p className="font-body text-foreground/90 leading-relaxed">
              {language === 'es'
                ? 'Basado en Puerto Rico, sirvo toda la isla y también viajo a Estados Unidos para bodas destino. Mi estilo combina fotografía documental con un toque artístico, asegurando que cada imagen cuente una historia genuina.'
                : 'Based in Puerto Rico, I serve the entire island and also travel to the United States for destination weddings. My style combines documentary photography with an artistic touch, ensuring each image tells a genuine story.'}
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center p-4 rounded-lg bg-card shadow-soft">
              <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="font-display text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="font-body text-muted-foreground text-xs">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Internal Links */}
        <div className="text-center space-y-4">
          <h2 className="font-display text-xl font-semibold text-foreground">
            {language === 'es' ? '¿Listo para trabajar juntos?' : 'Ready to work together?'}
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Button variant="gold" size="sm" asChild>
              <a href="https://wa.me/17873630620" target="_blank" rel="noopener noreferrer">
                {language === 'es' ? 'Contáctame' : 'Contact Me'}
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link to="/servicios">
                {language === 'es' ? 'Ver Servicios' : 'View Services'}
              </Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link to="/portafolio">
                {language === 'es' ? 'Ver Portafolio' : 'View Portfolio'}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
