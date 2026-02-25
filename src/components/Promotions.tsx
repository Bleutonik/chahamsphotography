import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Diamond, Camera, Film, Video, Clapperboard, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

type Region = 'US' | 'PR';

const Promotions = () => {
  const { t, language } = useLanguage();
  const [region, setRegion] = useState<Region>('US');

  const promotionsUS = [
    {
      icon: Diamond,
      title: { es: 'DIAMOND ALL INCLUSIVE', en: 'DIAMOND ALL INCLUSIVE' },
      description: {
        es: '8 horas de fotografía, 8 horas de video, Teaser 1-2 min, Premium Album Set, Love Story complementario, Print Release + Galería Digital, todos los gastos incluidos.',
        en: '8 hours photography, 8 hours video, 1-2 min Teaser, Premium Album Set, complimentary Love Story, Print Release + Digital Gallery, all expenses included.',
      },
      price: '$5,500',
      badge: { es: 'Más Popular', en: 'Most Popular' },
      featured: true,
    },
    {
      icon: Camera,
      title: { es: 'FOTOGRAFÍA PREMIUM', en: 'PREMIUM PHOTOGRAPHY' },
      description: {
        es: '7 horas de cobertura, sesión Love Story (10-25 fotos), álbum 8x8 (Album Set), Print Release + Digital (USB).',
        en: '7 hours of coverage, Love Story session (10-25 photos), 8x8 Album (Album Set), Print Release + Digital (USB).',
      },
      price: '$2,800',
      badge: { es: 'Best Seller', en: 'Best Seller' },
      featured: false,
    },
    {
      icon: Film,
      title: { es: 'FOTOGRAFÍA DELUXE', en: 'DELUXE PHOTOGRAPHY' },
      description: {
        es: '5 horas de cobertura, sesión Love Story (10-24 fotos), álbum Hard Cover 8x8 (25 fotos), Print Release + Digital.',
        en: '5 hours of coverage, Love Story session (10-24 photos), Hard Cover 8x8 Album (25 photos), Print Release + Digital.',
      },
      price: '$2,500',
      badge: null,
      featured: false,
    },
    {
      icon: Video,
      title: { es: 'VIDEO PREMIUM', en: 'PREMIUM VIDEO' },
      description: {
        es: '8 horas desde la ceremonia, Love Story Video, Teaser 1 min, Video Recap del evento. (2 videógrafos: $3,400)',
        en: '8 hours from ceremony, Love Story Video, 1-min Teaser, Event Recap Video. (2 videographers: $3,400)',
      },
      price: '$2,800',
      badge: { es: 'Best Seller', en: 'Best Seller' },
      featured: false,
    },
    {
      icon: Clapperboard,
      title: { es: 'VIDEO DELUXE', en: 'DELUXE VIDEO' },
      description: {
        es: '6 horas de cobertura, Love Story Video, Teaser 1 min + Recap. (2 videógrafos: $3,200)',
        en: '6 hours of coverage, Love Story Video, 1-min Teaser + Recap. (2 videographers: $3,200)',
      },
      price: '$2,500',
      badge: null,
      featured: false,
    },
  ];

  const promotionsPR = [
    {
      icon: Camera,
      title: { es: 'FOTOGRAFÍA PREMIUM', en: 'PREMIUM PHOTOGRAPHY' },
      description: {
        es: '7 horas de cobertura, sesión Love Story (10-25 fotos), álbum 8x8, permiso de impresión + entrega en USB.',
        en: '7 hours of coverage, Love Story session (10-25 photos), 8x8 Album, print release + USB delivery.',
      },
      price: '$1,199',
      badge: { es: 'Best Seller', en: 'Best Seller' },
      featured: true,
    },
    {
      icon: Film,
      title: { es: 'FOTOGRAFÍA DELUXE', en: 'DELUXE PHOTOGRAPHY' },
      description: {
        es: '5 horas de cobertura, sesión Love Story, álbum Hard Cover 8x8 (25 fotos) y permiso de impresión.',
        en: '5 hours of coverage, Love Story session, Hard Cover 8x8 Album (25 photos) and print release.',
      },
      price: '$999',
      badge: null,
      featured: false,
    },
    {
      icon: Star,
      title: { es: 'FOTOGRAFÍA BASIC', en: 'BASIC PHOTOGRAPHY' },
      description: {
        es: '4 horas de cobertura, sesión Love Story (10-20 fotos), galería digital y permiso de impresión.',
        en: '4 hours of coverage, Love Story session (10-20 photos), digital gallery and print release.',
      },
      price: '$749',
      badge: null,
      featured: false,
    },
    {
      icon: Video,
      title: { es: 'VIDEO PREMIUM', en: 'PREMIUM VIDEO' },
      description: {
        es: '8 horas de cobertura, video Love Story, teaser y recap. (2 videógrafos: $1,799)',
        en: '8 hours of coverage, Love Story video, teaser and recap. (2 videographers: $1,799)',
      },
      price: '$1,399',
      badge: null,
      featured: false,
    },
    {
      icon: Clapperboard,
      title: { es: 'VIDEO DELUXE', en: 'DELUXE VIDEO' },
      description: {
        es: '6 horas de cobertura, video Love Story, teaser y recap. (2 videógrafos: $1,599)',
        en: '6 hours of coverage, Love Story video, teaser and recap. (2 videographers: $1,599)',
      },
      price: '$1,099',
      badge: null,
      featured: false,
    },
    {
      icon: Film,
      title: { es: 'VIDEO BASIC', en: 'BASIC VIDEO' },
      description: {
        es: '4 horas de cobertura, video Love Story, teaser y recap. (2 videógrafos: $1,299)',
        en: '4 hours of coverage, Love Story video, teaser and recap. (2 videographers: $1,299)',
      },
      price: '$899',
      badge: null,
      featured: false,
    },
  ];

  const promotions = region === 'US' ? promotionsUS : promotionsPR;

  return (
    <section className="min-h-[calc(100vh-64px)] py-12 md:py-16 bg-secondary text-secondary-foreground relative overflow-hidden flex flex-col justify-center">
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="font-body text-gold-light text-sm tracking-widest uppercase mb-3">
            {t('promotions.subtitle')}
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-4">
            {language === 'es' ? 'Paquetes de Fotografía y Video de Bodas 2026' : '2026 Wedding Photography & Video Packages'}
          </h1>
          <div className="w-24 h-px bg-gold mx-auto my-8" />
          <p className="font-body text-cream/80 max-w-2xl mx-auto text-lg mb-10">
            {language === 'es'
              ? 'Paquetes exclusivos de fotografía y video para bodas. Precios competitivos con la más alta calidad profesional. Todo es personalizable y adaptable a tu visión.'
              : 'Exclusive photography and video packages for weddings. Competitive pricing with the highest professional quality. Everything is customizable and adaptable to your vision.'}
          </p>

          {/* Region Toggle */}
          <p className="font-body text-cream/70 text-sm mb-3">
            {language === 'es' ? '¿Dónde se van a casar?' : 'Where are you getting married?'}
          </p>
          <div className="inline-flex items-center gap-2 bg-coffee-light/30 border border-gold/20 rounded-full p-1.5">
            <button
              onClick={() => setRegion('US')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-body font-semibold text-sm transition-all duration-300 ${
                region === 'US'
                  ? 'bg-gold text-coffee shadow-lg'
                  : 'text-cream/70 hover:text-cream'
              }`}
            >
              <span>🇺🇸</span> United States
            </button>
            <button
              onClick={() => setRegion('PR')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-body font-semibold text-sm transition-all duration-300 ${
                region === 'PR'
                  ? 'bg-gold text-coffee shadow-lg'
                  : 'text-cream/70 hover:text-cream'
              }`}
            >
              <span>🇵🇷</span> Puerto Rico
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {promotions.map((promo, index) => (
            <div
              key={`${region}-${promo.title.es}`}
              className={`group relative backdrop-blur-sm rounded-lg p-8 border transition-all duration-500 hover:-translate-y-2 ${
                promo.featured
                  ? 'bg-gold/10 border-gold/40 hover:border-gold/60'
                  : 'bg-coffee-light/20 border-gold/20 hover:border-gold/40'
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {promo.badge && (
                <span className="absolute -top-3 right-6 bg-gold text-coffee text-xs font-body font-semibold px-4 py-1 rounded-full">
                  {language === 'es' ? promo.badge.es : promo.badge.en}
                </span>
              )}
              <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center mb-6">
                <promo.icon className="w-7 h-7 text-gold" />
              </div>
              <h2 className="font-display text-lg font-semibold text-cream mb-3">
                {language === 'es' ? promo.title.es : promo.title.en}
              </h2>
              <p className="font-body text-cream/70 text-sm leading-relaxed mb-6">
                {language === 'es' ? promo.description.es : promo.description.en}
              </p>
              <p className="font-display text-2xl font-bold text-gold mb-6">
                {promo.price}
              </p>
              <Button variant="gold" className="w-full" asChild>
                <a
                  href={`https://wa.me/17873630620?text=${encodeURIComponent(`Hi, I'm interested in: ${language === 'es' ? promo.title.es : promo.title.en} (${region}) - ${promo.price}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('promotions.reserve')}
                </a>
              </Button>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto mt-8 space-y-2 text-center">
          <p className="text-cream/50 font-body text-sm">
            {t('promotions.extraHour')}
          </p>
          <p className="text-gold-light/80 font-body text-sm">
            {language === 'es'
              ? '* Los precios mostrados son referenciales y pueden ser negociados según tus necesidades.'
              : '* Prices shown are reference prices and can be negotiated based on your needs.'}
          </p>
          {region === 'US' && (
            <p className="text-gold-light/80 font-body text-sm">
              {language === 'es'
                ? '* Para servicios en Estados Unidos, los precios pueden variar dependiendo de la ubicación y los gastos de viaje.'
                : '* For services in the United States, prices may vary depending on the location and travel expenses.'}
            </p>
          )}
        </div>

        {/* Internal Links */}
        <div className="text-center mt-12 space-y-4">
          <h2 className="font-display text-2xl font-bold text-cream">
            {language === 'es' ? '¿Quieres ver nuestro trabajo?' : 'Want to see our work?'}
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Button variant="outline" size="sm" className="bg-transparent border-gold/40 text-cream hover:bg-gold/20 hover:text-cream" asChild>
              <Link to="/portafolio">
                {language === 'es' ? 'Ver Portafolio' : 'View Portfolio'}
              </Link>
            </Button>
            <Button variant="outline" size="sm" className="bg-transparent border-gold/40 text-cream hover:bg-gold/20 hover:text-cream" asChild>
              <Link to="/videos">
                {language === 'es' ? 'Ver Videos' : 'View Videos'}
              </Link>
            </Button>
            <Button variant="outline" size="sm" className="bg-transparent border-gold/40 text-cream hover:bg-gold/20 hover:text-cream" asChild>
              <Link to="/servicios">
                {language === 'es' ? 'Todos los Servicios' : 'All Services'}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotions;
