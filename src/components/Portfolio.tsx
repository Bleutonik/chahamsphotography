import { useState } from 'react';
import portfolioPortrait from '@/assets/portfolio-portrait.jpg';
import portfolioVideo from '@/assets/portfolio-video.jpg';
import portfolioCouple1 from '@/assets/portfolio-couple-1.jpg';
import portfolioSunset from '@/assets/portfolio-sunset.jpg';
import portfolioCoupleHorse from '@/assets/portfolio-couple-horse.jpg';
import portfolioBabyshower from '@/assets/portfolio-babyshower.jpg';
import portfolioCouple2 from '@/assets/portfolio-couple-2.jpg';
import portfolioWeb1 from '@/assets/portfolio-web1.jpg';
import portfolioWeb2 from '@/assets/portfolio-web2.jpg';
import portfolioWeb3 from '@/assets/portfolio-web3.jpg';
import portfolioWeb4 from '@/assets/portfolio-web4.jpg';
import portfolioWeb5 from '@/assets/portfolio-web5.jpg';
import portfolioWeb6 from '@/assets/portfolio-web6.jpg';
import portfolioWeb7 from '@/assets/portfolio-web7.jpg';
import portfolioMaternity from '@/assets/portfolio-maternity.jpg';
import portfolioCorporativo1 from '@/assets/portfolio-corporativo1.jpg';
import portfolioCorporativo2 from '@/assets/portfolio-corporativo2.jpg';
import portfolioCorporativo3 from '@/assets/portfolio-corporativo3.jpg';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Lightbox from '@/components/Lightbox';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const portfolioItems = [
  { id: 1, image: portfolioPortrait, alt: 'Professional portrait photography session in Puerto Rico' },
  { id: 19, image: portfolioCorporativo1, alt: 'Corporate event photography Puerto Rico' },
  { id: 4, image: portfolioVideo, alt: 'Cinematic wedding video still Puerto Rico' },
  { id: 6, image: portfolioCouple1, alt: 'Romantic couple photography session on the beach' },
  { id: 20, image: portfolioCorporativo2, alt: 'Corporate headshot photography Puerto Rico' },
  { id: 7, image: portfolioSunset, alt: 'Golden hour sunset couple photography' },
  { id: 8, image: portfolioCoupleHorse, alt: 'Couple portrait with horse in Puerto Rico countryside' },
  { id: 9, image: portfolioBabyshower, alt: 'Baby shower event photography celebration' },
  { id: 10, image: portfolioCouple2, alt: 'Engagement photography session Puerto Rico' },
  { id: 21, image: portfolioCorporativo3, alt: 'Professional corporate photography services' },
  { id: 11, image: portfolioWeb1, alt: 'Wedding photography ceremony moments' },
  { id: 12, image: portfolioWeb2, alt: 'Wedding reception photography Puerto Rico' },
  { id: 13, image: portfolioWeb3, alt: 'Bride and groom wedding photography' },
  { id: 14, image: portfolioWeb4, alt: 'Destination wedding photography Old San Juan' },
  { id: 15, image: portfolioWeb5, alt: 'Beach wedding photography Rincón Puerto Rico' },
  { id: 16, image: portfolioWeb6, alt: 'Wedding details and decorations photography' },
  { id: 17, image: portfolioWeb7, alt: 'Wedding party group photography' },
  { id: 18, image: portfolioMaternity, alt: 'Maternity photography session Puerto Rico' },
];

const Portfolio = () => {
  const { language } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);
  const goToNext = () => setCurrentImageIndex((prev) => (prev + 1) % portfolioItems.length);
  const goToPrev = () => setCurrentImageIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);

  return (
    <>
      <section className="min-h-[calc(100vh-64px)] py-12 md:py-16 bg-cream-dark flex flex-col justify-center">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="font-body text-primary text-sm tracking-widest uppercase mb-3">
              {language === 'es' ? 'Galería de Trabajos' : 'Work Gallery'}
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              {language === 'es' ? 'Portafolio de Fotografía de Bodas' : 'Wedding Photography Portfolio'}
            </h1>
            <div className="section-divider" />
            <p className="font-body text-muted-foreground max-w-2xl mx-auto text-lg">
              {language === 'es'
                ? 'Explora nuestra colección de fotografía profesional de bodas, retratos, quinceañeras y eventos en Puerto Rico. Cada imagen refleja nuestra pasión por capturar momentos auténticos e inolvidables.'
                : 'Explore our collection of professional wedding photography, portraits, quinceañeras, and events across Puerto Rico. Each image reflects our passion for capturing authentic and unforgettable moments.'}
            </p>
          </div>

          {/* Portfolio Carousel */}
          <Carousel opts={{ align: 'center', loop: true }} className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {portfolioItems.map((item, index) => (
                <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/2">
                  <div
                    className="relative rounded-lg overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500 mx-2 cursor-pointer group"
                    onClick={() => openLightbox(index)}
                  >
                    <div className="relative aspect-[4/3]">
                      <img
                        src={item.image}
                        alt={item.alt}
                        loading="lazy"
                        className="w-full h-full transition-transform duration-500 group-hover:scale-105 object-contain"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                        <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-body text-sm tracking-wider">
                          {language === 'es' ? 'Ver imagen' : 'View image'}
                        </span>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 md:-left-12 bg-cream/90 hover:bg-cream border-gold text-coffee" />
            <CarouselNext className="right-0 md:-right-12 bg-cream/90 hover:bg-cream border-gold text-coffee" />
          </Carousel>

          {/* SEO Content + Internal Links */}
          <div className="max-w-3xl mx-auto mt-16 space-y-6 text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              {language === 'es' ? 'Fotografía Profesional en Puerto Rico' : 'Professional Photography in Puerto Rico'}
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed">
              {language === 'es'
                ? 'Nuestro portafolio incluye bodas en Río Grande, Old San Juan, Rincón, Vieques y toda la isla. Especializados en fotografía de bodas, retratos profesionales, quinceañeras, maternidad y eventos corporativos. Cada sesión es una experiencia personalizada diseñada para capturar tu esencia.'
                : 'Our portfolio includes weddings in Río Grande, Old San Juan, Rincón, Vieques, and across the island. Specialized in wedding photography, professional portraits, quinceañeras, maternity, and corporate events. Each session is a personalized experience designed to capture your essence.'}
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-4">
              <Button variant="outline" size="sm" asChild>
                <Link to="/servicios">
                  {language === 'es' ? 'Ver Servicios' : 'View Services'}
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link to="/promociones">
                  {language === 'es' ? 'Ver Paquetes' : 'View Packages'}
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link to="/videos">
                  {language === 'es' ? 'Ver Videos' : 'View Videos'}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Lightbox
        images={portfolioItems.map(item => ({ ...item, title: '', category: '' }))}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onNext={goToNext}
        onPrev={goToPrev}
      />
    </>
  );
};

export default Portfolio;
