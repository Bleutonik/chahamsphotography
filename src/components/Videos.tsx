import { useState } from 'react';
import { Play } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Videos = () => {
  const { language } = useLanguage();
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className="min-h-[calc(100vh-64px)] py-12 md:py-16 bg-background flex flex-col justify-center">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-body text-primary text-sm tracking-widest uppercase mb-3">
            {language === 'es' ? 'Producción Audiovisual' : 'Audiovisual Production'}
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            {language === 'es' ? 'Videografía Cinematográfica de Bodas' : 'Cinematic Wedding Videography'}
          </h1>
          <div className="section-divider" />
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-lg">
            {language === 'es'
              ? 'Creamos videos cinematográficos de bodas en Puerto Rico que capturan la emoción, la alegría y cada detalle de tu día especial. Desde teasers hasta películas completas de boda.'
              : 'We create cinematic wedding videos in Puerto Rico that capture the emotion, joy, and every detail of your special day. From teasers to full-length wedding films.'}
          </p>
        </div>

        {/* Video Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-lg overflow-hidden shadow-elegant bg-card">
            <div className="aspect-video">
              {videoLoaded ? (
                <iframe
                  src="https://www.youtube.com/embed/Q9-kybS3Mvo?autoplay=1"
                  title="Chaham Photography Wedding Videography Showreel Puerto Rico"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                />
              ) : (
                <button
                  onClick={() => setVideoLoaded(true)}
                  className="relative w-full h-full group cursor-pointer bg-coffee"
                  aria-label="Play wedding videography showreel"
                >
                  <img
                    src={`https://img.youtube.com/vi/Q9-kybS3Mvo/hqdefault.jpg`}
                    alt="Wedding videography showreel thumbnail — Chaham Photography Puerto Rico"
                    loading="lazy"
                    decoding="async"
                    width={480}
                    height={360}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground ml-1" />
                    </div>
                  </div>
                </button>
              )}
            </div>
          </div>

          {/* Video Caption */}
          <div className="text-center mt-6">
            <div className="inline-flex items-center gap-2 text-primary">
              <Play className="w-5 h-5" />
              <span className="font-body text-sm tracking-wider uppercase">
                {language === 'es' ? 'Video Promocional' : 'Promotional Video'}
              </span>
            </div>
          </div>
        </div>

        {/* SEO Content */}
        <div className="max-w-3xl mx-auto mt-16 space-y-6 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            {language === 'es' ? 'Video Profesional de Bodas en Puerto Rico' : 'Professional Wedding Video in Puerto Rico'}
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed">
            {language === 'es'
              ? 'Nuestro equipo de videografía utiliza equipos de última generación para crear videos cinematográficos que cuentan tu historia de amor. Ofrecemos teasers de 1-2 minutos, recaps de eventos y películas completas de boda. Con experiencia filmando en las locaciones más hermosas de Puerto Rico — desde las playas de Cabo Rojo hasta los históricos salones de Old San Juan — garantizamos contenido audiovisual de la más alta calidad.'
              : 'Our videography team uses state-of-the-art equipment to create cinematic videos that tell your love story. We offer 1-2 minute teasers, event recaps, and full wedding films. With experience filming at the most beautiful locations in Puerto Rico — from the beaches of Cabo Rojo to the historic venues of Old San Juan — we guarantee the highest quality audiovisual content.'}
          </p>
          <h3 className="font-display text-xl font-semibold text-foreground">
            {language === 'es' ? 'Nuestros Servicios de Video Incluyen' : 'Our Video Services Include'}
          </h3>
          <ul className="font-body text-muted-foreground text-sm space-y-2">
            <li>{language === 'es' ? '• Teasers cinematográficos de 1-2 minutos' : '• Cinematic 1-2 minute teasers'}</li>
            <li>{language === 'es' ? '• Love Story videos previos a la boda' : '• Pre-wedding Love Story videos'}</li>
            <li>{language === 'es' ? '• Cobertura completa del evento en video' : '• Full event video coverage'}</li>
            <li>{language === 'es' ? '• Recap highlights de la celebración' : '• Celebration highlight recaps'}</li>
          </ul>
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <Button variant="outline" size="sm" asChild>
              <Link to="/promociones">
                {language === 'es' ? 'Ver Paquetes de Video' : 'View Video Packages'}
              </Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link to="/portafolio">
                {language === 'es' ? 'Ver Portafolio' : 'View Portfolio'}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Videos;
