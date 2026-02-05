import { Button } from '@/components/ui/button';
import { Sparkles, Gift, Calendar, Video, Film } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Promotions = () => {
  const { t } = useLanguage();

  const promotions = [
    {
      icon: Gift,
      titleKey: 'promotions.weddingPhoto',
      descriptionKey: 'promotions.weddingPhotoDesc',
      price: 'Desde $749.99',
      badgeKey: 'promotions.mostPopular',
    },
    {
      icon: Sparkles,
      titleKey: 'promotions.quincePhoto',
      descriptionKey: 'promotions.quincePhotoDesc',
      price: 'Desde $649.99',
      badgeKey: null,
    },
    {
      icon: Video,
      titleKey: 'promotions.weddingVideo',
      descriptionKey: 'promotions.weddingVideoDesc',
      price: 'Desde $979.99',
      badgeKey: null,
    },
    {
      icon: Film,
      titleKey: 'promotions.quinceVideo',
      descriptionKey: 'promotions.quinceVideoDesc',
      price: 'Desde $879.99',
      badgeKey: null,
    },
    {
      icon: Calendar,
      titleKey: 'promotions.photoSessions',
      descriptionKey: 'promotions.photoSessionsDesc',
      price: 'Desde $150.00',
      badgeKey: 'promotions.new',
    },
  ];

  return (
    <section className="min-h-[calc(100vh-64px)] py-12 md:py-16 bg-secondary text-secondary-foreground relative overflow-hidden flex flex-col justify-center">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-body text-gold-light text-sm tracking-widest uppercase mb-3">
            {t('promotions.subtitle')}
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-4">
            {t('promotions.title')}
          </h2>
          <div className="w-24 h-px bg-gold mx-auto my-8" />
          <p className="font-body text-cream/80 max-w-2xl mx-auto text-lg">
            {t('promotions.description')}
          </p>
        </div>

        {/* Promotions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {promotions.map((promo, index) => (
            <div
              key={promo.titleKey}
              className="group relative bg-coffee-light/20 backdrop-blur-sm rounded-lg p-8 border border-gold/20 hover:border-gold/40 transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {promo.badgeKey && (
                <span className="absolute -top-3 right-6 bg-gold text-coffee text-xs font-body font-semibold px-4 py-1 rounded-full">
                  {t(promo.badgeKey)}
                </span>
              )}
              <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center mb-6">
                <promo.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-display text-lg font-semibold text-cream mb-3">
                {t(promo.titleKey)}
              </h3>
              <p className="font-body text-cream/70 text-sm leading-relaxed mb-6">
                {t(promo.descriptionKey)}
              </p>
              <p className="font-display text-2xl font-bold text-gold mb-6">
                {promo.price}
              </p>
              <Button variant="gold" className="w-full" asChild>
                <a 
                  href={`https://wa.me/17873630620?text=${encodeURIComponent(`Hola, me interesa reservar: ${t(promo.titleKey)}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('promotions.reserve')}
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promotions;
