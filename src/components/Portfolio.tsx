import portfolioPortrait from '@/assets/portfolio-portrait.jpg';
import portfolioWedding from '@/assets/portfolio-wedding.jpg';
import portfolioFamily from '@/assets/portfolio-family.jpg';
import portfolioVideo from '@/assets/portfolio-video.jpg';
import portfolioQuince from '@/assets/portfolio-quince.jpg';

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

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className={`group image-hover relative rounded-lg overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500 ${
                index === 0 ? 'md:row-span-2' : ''
              } ${index === 1 ? 'lg:col-span-2' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`relative ${index === 0 ? 'aspect-[3/4] md:h-full' : 'aspect-[4/3]'}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
