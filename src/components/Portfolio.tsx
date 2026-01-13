import portfolioPortrait from '@/assets/portfolio-portrait.jpg';
import portfolioWedding from '@/assets/portfolio-wedding.jpg';
import portfolioFamily from '@/assets/portfolio-family.jpg';
import portfolioVideo from '@/assets/portfolio-video.jpg';
import portfolioQuince from '@/assets/portfolio-quince.jpg';
import portfolioCouple1 from '@/assets/portfolio-couple-1.jpg';
import portfolioSunset from '@/assets/portfolio-sunset.jpg';
import portfolioCoupleHorse from '@/assets/portfolio-couple-horse.jpg';
import portfolioBabyshower from '@/assets/portfolio-babyshower.jpg';
import portfolioCouple2 from '@/assets/portfolio-couple-2.jpg';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const portfolioItems = [{
  id: 1,
  title: 'Retratos',
  category: 'Fotografía',
  image: portfolioPortrait
}, {
  id: 2,
  title: 'Bodas',
  category: 'Fotografía & Video',
  image: portfolioWedding
}, {
  id: 3,
  title: 'Familias',
  category: 'Fotografía',
  image: portfolioFamily
}, {
  id: 4,
  title: 'Videografía',
  category: 'Video',
  image: portfolioVideo
}, {
  id: 5,
  title: 'Quinceañera',
  category: 'Fotografía & Video',
  image: portfolioQuince
}, {
  id: 6,
  title: 'Parejas',
  category: 'Fotografía',
  image: portfolioCouple1
}, {
  id: 7,
  title: 'Atardecer',
  category: 'Fotografía',
  image: portfolioSunset
}, {
  id: 8,
  title: 'Sesión Especial',
  category: 'Fotografía',
  image: portfolioCoupleHorse
}, {
  id: 9,
  title: 'Baby Shower',
  category: 'Eventos',
  image: portfolioBabyshower
}, {
  id: 10,
  title: 'Bodas',
  category: 'Fotografía',
  image: portfolioCouple2
}];
const Portfolio = () => {
  return <section id="portafolio" className="py-20 md:py-32 bg-cream-dark">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-body text-primary text-sm tracking-widest uppercase mb-3">
            Mi Trabajo
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Portafolio
          </h2>
          <div className="section-divider" />
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-lg">
            Cada imagen cuenta una historia única. Explora mi colección de momentos capturados con pasión y dedicación.
          </p>
        </div>

        {/* Portfolio Carousel */}
        <Carousel opts={{
        align: 'center',
        loop: true
      }} className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {portfolioItems.map(item => <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/2">
                <div className="relative rounded-lg overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500 mx-2">
                  <div className="relative aspect-[4/3]">
                    <img src={item.image} alt={item.title} className="w-full h-full transition-transform duration-500 hover:scale-105 object-contain" />
                  </div>
                </div>
              </CarouselItem>)}
          </CarouselContent>
          <CarouselPrevious className="left-0 md:-left-12 bg-cream/90 hover:bg-cream border-gold text-coffee" />
          <CarouselNext className="right-0 md:-right-12 bg-cream/90 hover:bg-cream border-gold text-coffee" />
        </Carousel>
      </div>
    </section>;
};
export default Portfolio;