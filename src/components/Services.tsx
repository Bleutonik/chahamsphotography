import { Camera, Video, Heart, Users, Sparkles, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Services = () => {
  const { t, language } = useLanguage();

  const services = [{
    icon: Heart,
    titleKey: 'services.weddings',
    descriptionKey: 'services.weddingsDesc'
  }, {
    icon: Camera,
    titleKey: 'services.portraits',
    descriptionKey: 'services.portraitsDesc',
    categoryKeys: ['services.models', 'services.maternity', 'services.professionalPortrait', 'services.andMore']
  }, {
    icon: Video,
    titleKey: 'services.videography',
    descriptionKey: 'services.videographyDesc'
  }, {
    icon: Sparkles,
    titleKey: 'services.quinceaneras',
    descriptionKey: 'services.quinceanerasDesc'
  }, {
    icon: Users,
    titleKey: 'services.families',
    descriptionKey: 'services.familiesDesc'
  }, {
    icon: Clock,
    titleKey: 'services.events',
    descriptionKey: 'services.eventsDesc'
  }];

  return (
    <section className="min-h-[calc(100vh-64px)] py-12 md:py-16 bg-card flex flex-col justify-center">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-body text-primary text-sm tracking-widest uppercase mb-3">
            {t('services.subtitle')}
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            {language === 'es' ? 'Servicios de Fotografía y Video en Puerto Rico y USA' : 'Photography & Video Services in Puerto Rico & USA'}
          </h1>
          <div className="section-divider" />
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-lg">
            {language === 'es'
              ? 'Ofrecemos servicios profesionales de fotografía y videografía para bodas, quinceañeras, retratos, eventos corporativos y familias en Puerto Rico y Estados Unidos.'
              : 'We offer professional photography and videography services for weddings, quinceañeras, portraits, corporate events, and families in Puerto Rico and the United States.'}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.titleKey}
              className="group p-8 rounded-lg bg-background hover:bg-muted/50 border border-transparent hover:border-primary/20 shadow-soft hover:shadow-elegant transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-3">
                {t(service.titleKey)}
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed text-sm">
                {t(service.descriptionKey)}
              </p>
              {service.categoryKeys && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {service.categoryKeys.map((categoryKey) => (
                    <Badge
                      key={categoryKey}
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20 border-none font-medium text-xs px-3 py-1"
                    >
                      {t(categoryKey)}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* SEO Content + Internal Links */}
        <div className="max-w-3xl mx-auto mt-16 space-y-6 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            {language === 'es' ? '¿Por Qué Elegir Chaham Photography?' : 'Why Choose Chaham Photography?'}
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed">
            {language === 'es'
              ? 'Con más de 10 años de experiencia en fotografía profesional y 5 años en videografía cinematográfica, nuestro equipo ha documentado cientos de bodas, quinceañeras y eventos en Puerto Rico. Nos distinguimos por nuestra atención al detalle, nuestro enfoque artístico y nuestra dedicación a cada cliente. Servimos toda la isla — desde San Juan hasta Ponce, Mayagüez, Fajardo y cada rincón especial de Puerto Rico.'
              : 'With over 10 years of experience in professional photography and 5 years in cinematic videography, our team has documented hundreds of weddings, quinceañeras, and events in Puerto Rico. We stand out for our attention to detail, artistic approach, and dedication to each client. We serve the entire island — from San Juan to Ponce, Mayagüez, Fajardo, and every special corner of Puerto Rico.'}
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <Button variant="gold" size="sm" asChild>
              <Link to="/promociones">
                {language === 'es' ? 'Ver Paquetes y Precios' : 'View Packages & Pricing'}
              </Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link to="/portafolio">
                {language === 'es' ? 'Ver Portafolio' : 'View Portfolio'}
              </Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link to="/sobre-mi">
                {language === 'es' ? 'Conoce al Fotógrafo' : 'Meet the Photographer'}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
