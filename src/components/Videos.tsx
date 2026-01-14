import { Play } from 'lucide-react';

const Videos = () => {
  return (
    <section className="min-h-[calc(100vh-64px)] py-12 md:py-16 bg-background flex flex-col justify-center">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-body text-primary text-sm tracking-widest uppercase mb-3">
            Producciones Audiovisuales
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Videos
          </h2>
          <div className="section-divider" />
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-lg">
            Creamos videos cinematográficos que capturan la esencia de cada momento especial.
          </p>
        </div>

        {/* Video Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-lg overflow-hidden shadow-elegant bg-card">
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/Q9-kybS3Mvo"
                title="Chaham's Photography & Video - Video Promocional"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
          
          {/* Video Caption */}
          <div className="text-center mt-6">
            <div className="inline-flex items-center gap-2 text-primary">
              <Play className="w-5 h-5" />
              <span className="font-body text-sm tracking-wider uppercase">
                Video Promocional
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Videos;
