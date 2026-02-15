import { Star, Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Testimonials = () => {
  const { language } = useLanguage();

  const testimonials = [
    {
      name: 'María & Carlos',
      event: language === 'es' ? 'Boda en Río Grande' : 'Wedding in Río Grande',
      text: language === 'es'
        ? 'Luis capturó cada momento de nuestra boda con una sensibilidad increíble. Las fotos y el video superaron todas nuestras expectativas. ¡Altamente recomendado!'
        : 'Luis captured every moment of our wedding with incredible sensitivity. The photos and video exceeded all our expectations. Highly recommended!',
      stars: 5,
    },
    {
      name: 'Jessica & David',
      event: language === 'es' ? 'Destination Wedding - Old San Juan' : 'Destination Wedding - Old San Juan',
      text: language === 'es'
        ? 'Vinimos desde New York para casarnos en Puerto Rico y Luis hizo que todo fuera perfecto. Su conocimiento de las locaciones y su profesionalismo nos dieron total tranquilidad.'
        : 'We came from New York to get married in Puerto Rico and Luis made everything perfect. His knowledge of the locations and professionalism gave us complete peace of mind.',
      stars: 5,
    },
    {
      name: 'Ana Rodríguez',
      event: language === 'es' ? 'Quinceañera' : 'Quinceañera',
      text: language === 'es'
        ? 'Las fotos de la quinceañera de mi hija quedaron espectaculares. Luis tiene un ojo artístico único y nos hizo sentir muy cómodas durante toda la sesión.'
        : "The photos of my daughter's quinceañera turned out spectacular. Luis has a unique artistic eye and made us feel very comfortable throughout the entire session.",
      stars: 5,
    },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <p className="font-body text-primary text-sm tracking-widest uppercase mb-3">
            {language === 'es' ? 'Testimonios' : 'Testimonials'}
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            {language === 'es' ? 'Lo Que Dicen Nuestros Clientes' : 'What Our Clients Say'}
          </h2>
          <div className="section-divider" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-card rounded-xl p-6 shadow-soft hover:shadow-elegant transition-shadow duration-300 relative"
            >
              <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: testimonial.stars }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4 italic">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-display text-foreground font-semibold text-sm">{testimonial.name}</p>
                <p className="font-body text-primary text-xs">{testimonial.event}</p>
              </div>
            </div>
          ))}
        </div>

        {/* JSON-LD for reviews */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: "Chaham's Photography & Video",
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '5',
                reviewCount: '3',
                bestRating: '5',
              },
              review: testimonials.map((t) => ({
                '@type': 'Review',
                author: { '@type': 'Person', name: t.name },
                reviewRating: { '@type': 'Rating', ratingValue: String(t.stars) },
                reviewBody: t.text,
              })),
            }),
          }}
        />
      </div>
    </section>
  );
};

export default Testimonials;
