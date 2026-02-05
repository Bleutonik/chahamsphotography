import { Camera, Video, Heart, Users, Sparkles, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const { t } = useLanguage();

  const services = [{
    icon: Heart,
    titleKey: 'services.weddings',
    descriptionKey: 'services.weddingsDesc'
  }, {
    icon: Camera,
    titleKey: 'services.portraits',
    descriptionKey: 'services.portraitsDesc',
    categoryKeys: ['services.models', 'services.maternity', 'services.professionalPortrait', 'services.andMore']
  }, {
    icon: Video,
    titleKey: 'services.videography',
    descriptionKey: 'services.videographyDesc'
  }, {
    icon: Sparkles,
    titleKey: 'services.quinceaneras',
    descriptionKey: 'services.quinceanerasDesc'
  }, {
    icon: Users,
    titleKey: 'services.families',
    descriptionKey: 'services.familiesDesc'
  }, {
    icon: Clock,
    titleKey: 'services.events',
    descriptionKey: 'services.eventsDesc'
  }];

  return (
    <section className="min-h-[calc(100vh-64px)] py-12 md:py-16 bg-card flex flex-col justify-center">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-body text-primary text-sm tracking-widest uppercase mb-3">
            {t('services.subtitle')}
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            {t('services.title')}
          </h2>
          <div className="section-divider" />
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-lg">
            {t('services.description')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.titleKey} 
              className="group p-8 rounded-lg bg-background hover:bg-muted/50 border border-transparent hover:border-primary/20 shadow-soft hover:shadow-elegant transition-all duration-500" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                {t(service.titleKey)}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed text-sm">
                {t(service.descriptionKey)}
              </p>
              {service.categoryKeys && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {service.categoryKeys.map((categoryKey) => (
                    <Badge 
                      key={categoryKey} 
                      variant="secondary" 
                      className="bg-primary/10 text-primary hover:bg-primary/20 border-none font-medium text-xs px-3 py-1"
                    >
                      {t(categoryKey)}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;