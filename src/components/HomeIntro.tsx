import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Camera, Video, Heart, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HomeIntro = () => {
  const { language } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
          {language === 'es'
            ? 'Fotógrafo y Videógrafo de Bodas en Puerto Rico'
            : 'Wedding Photographer & Videographer in Puerto Rico'}
        </h2>

        <div className="space-y-6 text-center mb-12">
          <p className="font-body text-foreground/85 text-base md:text-lg leading-relaxed">
            {language === 'es'
              ? 'En Chaham\'s Photography & Video nos especializamos en fotografía de bodas y videografía cinematográfica en Puerto Rico. Desde las playas de Rincón hasta los jardines de Río Grande, capturamos cada momento de tu boda con pasión, creatividad y atención al detalle. Nuestro equipo combina fotografía artística con video profesional para crear recuerdos que duran para siempre.'
              : 'At Chaham\'s Photography & Video, we specialize in wedding photography and cinematic videography across Puerto Rico. From the beaches of Rincón to the lush gardens of Río Grande, we capture every moment of your wedding with passion, creativity, and attention to detail. Our team combines artistic photography with professional video to create memories that last a lifetime.'}
          </p>
          <p className="font-body text-foreground/85 text-base md:text-lg leading-relaxed">
            {language === 'es'
              ? 'Con más de 10 años de experiencia fotografiando bodas, quinceañeras, retratos y eventos corporativos en toda la isla, ofrecemos paquetes completos de fotografía y video adaptados a tu visión. Ya sea una boda íntima en la playa o una celebración elegante en Old San Juan, garantizamos imágenes y videos de la más alta calidad. También disponibles para bodas destino en Estados Unidos.'
              : 'With over 10 years of experience photographing weddings, quinceañeras, portraits, and corporate events across the island, we offer complete photography and video packages tailored to your vision. Whether it\'s an intimate beach wedding or an elegant celebration in Old San Juan, we guarantee the highest quality images and videos. Also available for destination weddings in the United States.'}
          </p>
        </div>

        {/* Quick service highlights with internal links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <Link to="/servicios" className="group flex flex-col items-center gap-2 p-4 rounded-lg bg-card hover:bg-muted/50 transition-colors">
            <Camera className="w-6 h-6 text-primary" />
            <span className="font-body text-sm text-foreground group-hover:text-primary transition-colors">
              {language === 'es' ? 'Fotografía' : 'Photography'}
            </span>
          </Link>
          <Link to="/videos" className="group flex flex-col items-center gap-2 p-4 rounded-lg bg-card hover:bg-muted/50 transition-colors">
            <Video className="w-6 h-6 text-primary" />
            <span className="font-body text-sm text-foreground group-hover:text-primary transition-colors">
              {language === 'es' ? 'Videografía' : 'Videography'}
            </span>
          </Link>
          <Link to="/destination-weddings" className="group flex flex-col items-center gap-2 p-4 rounded-lg bg-card hover:bg-muted/50 transition-colors">
            <MapPin className="w-6 h-6 text-primary" />
            <span className="font-body text-sm text-foreground group-hover:text-primary transition-colors text-center">
              {language === 'es' ? 'Bodas Destino' : 'Destination Weddings'}
            </span>
          </Link>
          <Link to="/promociones" className="group flex flex-col items-center gap-2 p-4 rounded-lg bg-card hover:bg-muted/50 transition-colors">
            <Heart className="w-6 h-6 text-primary" />
            <span className="font-body text-sm text-foreground group-hover:text-primary transition-colors">
              {language === 'es' ? 'Paquetes' : 'Packages'}
            </span>
          </Link>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="gold" size="lg" asChild>
            <Link to="/portafolio">
              {language === 'es' ? 'Ver Nuestro Portafolio' : 'View Our Portfolio'}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeIntro;
