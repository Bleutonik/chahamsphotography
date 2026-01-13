import portfolioPortrait from '@/assets/portfolio-portrait.jpg';
import portfolioWedding from '@/assets/portfolio-wedding.jpg';
import portfolioFamily from '@/assets/portfolio-family.jpg';
import portfolioVideo from '@/assets/portfolio-video.jpg';
import portfolioQuince from '@/assets/portfolio-quince.jpg';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const portfolioItems = [
  {
    id: 1,
    title: 'Retratos',
    category: 'Fotografía',
    image: portfolioPortrait,
  },
  {
    id: 2,
    title: 'Bodas',
    category: 'Fotografía & Video',
    image: portfolioWedding,
  },
  {
    id: 3,
    title: 'Familias',
    category: 'Fotografía',
    image: portfolioFamily,
  },
  {
    id: 4,
    title: 'Videografía',
    category: 'Video',
    image: portfolioVideo,
  },
  {
    id: 5,
    title: 'Bodas',
    category: 'Fotografía & Video',
    image: portfolioQuince,
  },
];

const Portfolio = () => {
  return (
    <section id="portafolio" className="py-20 md:py-32 bg-cream-dark">
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
        <Carousel
          opts={{
            align: 'center',
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {portfolioItems.map((item) => (
              <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/2">
                <div className="group relative rounded-lg overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500 mx-2">
                  <div className="relative aspect-[4/3]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-coffee/80 via-coffee/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <p className="font-body text-gold-light text-sm tracking-wider uppercase mb-1">
                        {item.category}
                      </p>
                      <h3 className="font-display text-2xl font-bold text-cream">
                        {item.title}
                      </h3>
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
  );
};

export default Portfolio;
