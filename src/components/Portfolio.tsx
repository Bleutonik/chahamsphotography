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

const portfolioItems = [{
  id: 1,
  title: '',
  category: '',
  image: portfolioPortrait
}, {
  id: 19,
  title: '',
  category: '',
  image: portfolioCorporativo1
}, {
  id: 4,
  title: '',
  category: '',
  image: portfolioVideo
}, {
  id: 6,
  title: '',
  category: '',
  image: portfolioCouple1
}, {
  id: 20,
  title: '',
  category: '',
  image: portfolioCorporativo2
}, {
  id: 7,
  title: '',
  category: '',
  image: portfolioSunset
}, {
  id: 8,
  title: '',
  category: '',
  image: portfolioCoupleHorse
}, {
  id: 9,
  title: '',
  category: '',
  image: portfolioBabyshower
}, {
  id: 10,
  title: '',
  category: '',
  image: portfolioCouple2
}, {
  id: 21,
  title: '',
  category: '',
  image: portfolioCorporativo3
}, {
  id: 11,
  title: '',
  category: '',
  image: portfolioWeb1
}, {
  id: 12,
  title: '',
  category: '',
  image: portfolioWeb2
}, {
  id: 13,
  title: '',
  category: '',
  image: portfolioWeb3
}, {
  id: 14,
  title: '',
  category: '',
  image: portfolioWeb4
}, {
  id: 15,
  title: '',
  category: '',
  image: portfolioWeb5
}, {
  id: 16,
  title: '',
  category: '',
  image: portfolioWeb6
}, {
  id: 17,
  title: '',
  category: '',
  image: portfolioWeb7
}, {
  id: 18,
  title: '',
  category: '',
  image: portfolioMaternity
}];

const Portfolio = () => {
  const { t, language } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % portfolioItems.length);
  };

  const goToPrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
  };

  return (
    <>
      <section className="min-h-[calc(100vh-64px)] py-12 md:py-16 bg-cream-dark flex flex-col justify-center">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="font-body text-primary text-sm tracking-widest uppercase mb-3">
              {t('portfolio.subtitle')}
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              {t('portfolio.title')}
            </h2>
            <div className="section-divider" />
            <p className="font-body text-muted-foreground max-w-2xl mx-auto text-lg">
              {language === 'es' 
                ? 'Cada imagen cuenta una historia única. Explora mi colección de momentos capturados con pasión y dedicación.'
                : 'Each image tells a unique story. Explore my collection of moments captured with passion and dedication.'}
            </p>
          </div>

          {/* Portfolio Carousel */}
          <Carousel opts={{
            align: 'center',
            loop: true
          }} className="w-full max-w-5xl mx-auto">
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
                        alt={item.title} 
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
        </div>
      </section>

      <Lightbox
        images={portfolioItems}
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
