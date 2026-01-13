import { Button } from '@/components/ui/button';
import { Sparkles, Gift, Calendar } from 'lucide-react';

const promotions = [
  {
    icon: Gift,
    title: 'Paquete Bodas 2025',
    description: '8 horas de cobertura, 500+ fotos editadas, video highlight de 5 min, álbum de lujo incluido.',
    price: 'Desde $2,500',
    badge: 'Más Popular',
  },
  {
    icon: Sparkles,
    title: 'Sesión Quinceañera',
    description: 'Sesión pre-quinceañera, cobertura del evento, 200 fotos editadas y video resumen.',
    price: 'Desde $1,200',
    badge: null,
  },
  {
    icon: Calendar,
    title: 'Mini Sesión',
    description: '30 minutos, 25 fotos digitales editadas. Perfecto para retratos y parejas.',
    price: 'Desde $250',
    badge: 'Nuevo',
  },
];

const Promotions = () => {
  return (
    <section id="promociones" className="py-20 md:py-32 bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-body text-gold-light text-sm tracking-widest uppercase mb-3">
            Ofertas Especiales
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-4">
            Promociones
          </h2>
          <div className="w-24 h-px bg-gold mx-auto my-8" />
          <p className="font-body text-cream/80 max-w-2xl mx-auto text-lg">
            Aprovecha nuestras promociones exclusivas y reserva tu sesión hoy
          </p>
        </div>

        {/* Promotions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {promotions.map((promo, index) => (
            <div
              key={promo.title}
              className="group relative bg-coffee-light/20 backdrop-blur-sm rounded-lg p-8 border border-gold/20 hover:border-gold/40 transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {promo.badge && (
                <span className="absolute -top-3 right-6 bg-gold text-coffee text-xs font-body font-semibold px-4 py-1 rounded-full">
                  {promo.badge}
                </span>
              )}
              <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center mb-6">
                <promo.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-display text-xl font-semibold text-cream mb-3">
                {promo.title}
              </h3>
              <p className="font-body text-cream/70 text-sm leading-relaxed mb-6">
                {promo.description}
              </p>
              <p className="font-display text-2xl font-bold text-gold mb-6">
                {promo.price}
              </p>
              <Button variant="gold" className="w-full" asChild>
                <a href="#contacto">Reservar</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promotions;
