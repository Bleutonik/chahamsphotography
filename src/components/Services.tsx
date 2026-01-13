import { Camera, Video, Heart, Users, Sparkles, Clock } from 'lucide-react';

const services = [
  {
    icon: Heart,
    title: 'Bodas',
    description: 'Capturamos cada momento mágico de tu día especial con elegancia y emoción.',
  },
  {
    icon: Camera,
    title: 'Retratos',
    description: 'Sesiones personalizadas que reflejan tu esencia y personalidad única.',
  },
  {
    icon: Video,
    title: 'Videografía',
    description: 'Videos cinematográficos que cuentan tu historia de manera inolvidable.',
  },
  {
    icon: Sparkles,
    title: 'Quinceañeras',
    description: 'Celebramos este momento especial con fotografías dignas de una princesa.',
  },
  {
    icon: Users,
    title: 'Familias',
    description: 'Preservamos los lazos familiares en retratos llenos de amor y conexión.',
  },
  {
    icon: Clock,
    title: 'Eventos',
    description: 'Cobertura completa de tus eventos corporativos y sociales.',
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-body text-primary text-sm tracking-widest uppercase mb-3">
            Lo Que Ofrecemos
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Nuestros Servicios
          </h2>
          <div className="section-divider" />
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-lg">
            Servicios profesionales de fotografía y video en Puerto Rico y Estados Unidos
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 rounded-lg bg-background hover:bg-muted/50 border border-transparent hover:border-primary/20 shadow-soft hover:shadow-elegant transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
