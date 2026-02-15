import { Button } from '@/components/ui/button';
import { MapPin, Camera, Heart, Star, Plane } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-wedding.jpg';

const DestinationWeddings = () => {
  const { t, language } = useLanguage();

  const features = [
    { icon: Plane, titleKey: 'dw.feature1Title', descKey: 'dw.feature1Desc' },
    { icon: Camera, titleKey: 'dw.feature2Title', descKey: 'dw.feature2Desc' },
    { icon: MapPin, titleKey: 'dw.feature3Title', descKey: 'dw.feature3Desc' },
    { icon: Heart, titleKey: 'dw.feature4Title', descKey: 'dw.feature4Desc' },
  ];

  const locations = [
    'Old San Juan', 'El Yunque Rainforest', 'Condado Beach',
    'Rincón', 'Vieques', 'Culebra', 'Cabo Rojo', 'Fajardo',
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Hero Section */}
        <div className="relative rounded-2xl overflow-hidden mb-16">
          <img
            src={heroImage}
            alt="Destination wedding photography on the beach in Puerto Rico — romantic sunset ceremony"
            loading="lazy"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-coffee/80 via-coffee/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <p className="font-body text-gold-light text-sm tracking-widest uppercase mb-2">
              {t('dw.subtitle')}
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-4">
              {language === 'es' ? 'Fotógrafo de Bodas Destino en Puerto Rico' : 'Destination Wedding Photographer in Puerto Rico'}
            </h1>
            <p className="font-body text-cream/90 text-lg max-w-2xl">
              {t('dw.heroDesc')}
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-card rounded-xl p-8 shadow-soft hover:shadow-elegant transition-shadow duration-300"
            >
              <feature.icon className="w-10 h-10 text-primary mb-4" />
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">
                {t(feature.titleKey)}
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                {t(feature.descKey)}
              </p>
            </div>
          ))}
        </div>

        {/* Locations */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">
            {t('dw.locationsTitle')}
          </h2>
          <p className="font-body text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('dw.locationsDesc')}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {locations.map((location) => (
              <span
                key={location}
                className="bg-muted text-foreground px-5 py-2.5 rounded-full font-body text-sm flex items-center gap-2"
              >
                <MapPin className="w-3.5 h-3.5 text-primary" />
                {location}
              </span>
            ))}
          </div>
        </div>

        {/* Why Puerto Rico */}
        <div className="bg-secondary text-secondary-foreground rounded-2xl p-8 md:p-12 mb-16">
          <div className="flex items-center gap-2 mb-4">
            <Star className="w-6 h-6 text-primary" />
            <h2 className="font-display text-2xl md:text-3xl font-bold">
              {t('dw.whyTitle')}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="font-body text-secondary-foreground/80 leading-relaxed space-y-3">
              <p>{t('dw.why1')}</p>
              <p>{t('dw.why2')}</p>
            </div>
            <div className="font-body text-secondary-foreground/80 leading-relaxed space-y-3">
              <p>{t('dw.why3')}</p>
              <p>{t('dw.why4')}</p>
            </div>
          </div>
        </div>

        {/* CTA + Internal Links */}
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">
            {t('dw.ctaTitle')}
          </h2>
          <p className="font-body text-muted-foreground mb-8 max-w-xl mx-auto">
            {t('dw.ctaDesc')}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button variant="gold" size="xl" asChild>
              <a href="https://wa.me/17873630620" target="_blank" rel="noopener noreferrer">
                {t('dw.ctaButton')}
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/portafolio">
                {language === 'es' ? 'Ver Portafolio' : 'View Portfolio'}
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/promociones">
                {language === 'es' ? 'Ver Paquetes' : 'View Packages'}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationWeddings;
