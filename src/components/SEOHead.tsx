import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import { SectionType } from '@/pages/Index';

interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  jsonLd?: object;
}

const seoData: Record<SectionType, Record<'en' | 'es', SEOConfig>> = {
  inicio: {
    en: {
      title: 'Wedding Photographer Puerto Rico | Chaham Photography',
      description: 'Award-winning wedding photography & videography in Puerto Rico. 10+ years capturing love stories. Destination weddings, portraits & events. Book now!',
      keywords: 'wedding photographer puerto rico, wedding videographer, destination wedding photography, puerto rico photographer',
      canonical: 'https://chahamsphotography.lovable.app/',
    },
    es: {
      title: 'Fotógrafo de Bodas Puerto Rico | Chaham Photography',
      description: 'Fotografía y video profesional de bodas en Puerto Rico. Más de 10 años capturando historias de amor. Bodas destino, retratos y eventos. ¡Reserva ahora!',
      keywords: 'fotógrafo de bodas puerto rico, videógrafo de bodas, fotografía bodas destino, fotógrafo puerto rico',
      canonical: 'https://chahamsphotography.lovable.app/',
    },
  },
  portafolio: {
    en: {
      title: 'Wedding Photography Portfolio | Chaham Photography PR',
      description: 'Browse our stunning wedding photography portfolio. Real couples, real moments captured across Puerto Rico. See our work in weddings, portraits & events.',
      keywords: 'wedding photography portfolio, puerto rico wedding photos, wedding photographer gallery, couple photography',
      canonical: 'https://chahamsphotography.lovable.app/portafolio',
    },
    es: {
      title: 'Portafolio Fotografía de Bodas | Chaham Photography PR',
      description: 'Explora nuestro portafolio de fotografía de bodas. Parejas reales, momentos auténticos en Puerto Rico. Bodas, retratos, eventos y más.',
      keywords: 'portafolio fotografía bodas, fotos bodas puerto rico, galería fotógrafo bodas, fotografía parejas',
      canonical: 'https://chahamsphotography.lovable.app/portafolio',
    },
  },
  videos: {
    en: {
      title: 'Wedding Videography Puerto Rico | Cinematic Films',
      description: 'Cinematic wedding videos in Puerto Rico. Professional videography that tells your love story beautifully. Teasers, recaps & full wedding films.',
      keywords: 'wedding videography puerto rico, cinematic wedding film, wedding video, videographer puerto rico',
      canonical: 'https://chahamsphotography.lovable.app/videos',
    },
    es: {
      title: 'Videografía de Bodas Puerto Rico | Videos Cinematográficos',
      description: 'Videos cinematográficos de bodas en Puerto Rico. Videografía profesional que cuenta tu historia de amor. Teasers, recaps y películas de boda.',
      keywords: 'videografía bodas puerto rico, video cinematográfico boda, videógrafo puerto rico, video boda profesional',
      canonical: 'https://chahamsphotography.lovable.app/videos',
    },
  },
  servicios: {
    en: {
      title: 'Photography & Video Services | Chaham Photography PR',
      description: 'Professional photography & videography services: weddings, quinceañeras, portraits, corporate events & families. Serving Puerto Rico & the United States.',
      keywords: 'photography services puerto rico, videography services, wedding services, quinceañera photographer, event photographer',
      canonical: 'https://chahamsphotography.lovable.app/servicios',
    },
    es: {
      title: 'Servicios Fotografía y Video | Chaham Photography PR',
      description: 'Servicios profesionales de fotografía y video: bodas, quinceañeras, retratos, eventos corporativos y familias. Puerto Rico y Estados Unidos.',
      keywords: 'servicios fotografía puerto rico, servicios videografía, servicios boda, fotógrafo quinceañera, fotógrafo eventos',
      canonical: 'https://chahamsphotography.lovable.app/servicios',
    },
  },
  promociones: {
    en: {
      title: 'Wedding Packages & Pricing 2026 | Chaham Photography',
      description: 'Affordable 2026 wedding photography & video packages starting at $2,500. Diamond All-Inclusive, Premium & Deluxe options. Puerto Rico wedding deals.',
      keywords: 'wedding photography packages, wedding pricing puerto rico, affordable wedding photographer, wedding package deals 2026',
      canonical: 'https://chahamsphotography.lovable.app/promociones',
    },
    es: {
      title: 'Paquetes de Boda y Precios 2026 | Chaham Photography',
      description: 'Paquetes de fotografía y video de bodas 2026 desde $2,500. Diamond All-Inclusive, Premium y Deluxe. Ofertas para bodas en Puerto Rico.',
      keywords: 'paquetes fotografía bodas, precios boda puerto rico, fotógrafo bodas asequible, paquetes boda 2026',
      canonical: 'https://chahamsphotography.lovable.app/promociones',
    },
  },
  sobremi: {
    en: {
      title: 'About Luis Alvarado | Photographer Puerto Rico',
      description: 'Meet Luis Alvarado — 10+ years of photography & 5 years of videography experience. Professional, reliable & passionate wedding photographer in Puerto Rico.',
      keywords: 'luis alvarado photographer, about chaham photography, wedding photographer bio, puerto rico photographer experience',
      canonical: 'https://chahamsphotography.lovable.app/sobre-mi',
    },
    es: {
      title: 'Sobre Luis Alvarado | Fotógrafo Puerto Rico',
      description: 'Conoce a Luis Alvarado — más de 10 años en fotografía y 5 en videografía profesional. Fotógrafo de bodas confiable y apasionado en Puerto Rico.',
      keywords: 'luis alvarado fotógrafo, sobre chaham photography, biografía fotógrafo bodas, fotógrafo experiencia puerto rico',
      canonical: 'https://chahamsphotography.lovable.app/sobre-mi',
    },
  },
  'destination-weddings': {
    en: {
      title: 'Destination Weddings Puerto Rico | Chaham Photography',
      description: 'Plan your dream destination wedding in Puerto Rico. No passport needed for US citizens! Professional photography & video at stunning island locations.',
      keywords: 'destination wedding puerto rico, beach wedding photographer, tropical wedding, old san juan wedding, el yunque wedding',
      canonical: 'https://chahamsphotography.lovable.app/destination-weddings',
    },
    es: {
      title: 'Bodas Destino Puerto Rico | Chaham Photography',
      description: 'Planifica tu boda de destino soñada en Puerto Rico. ¡Sin pasaporte para ciudadanos de EE.UU.! Fotografía y video profesional en locaciones paradisíacas.',
      keywords: 'boda destino puerto rico, fotógrafo boda playa, boda tropical, boda old san juan, boda el yunque',
      canonical: 'https://chahamsphotography.lovable.app/destination-weddings',
    },
  },
};

const getJsonLd = (section: SectionType, language: 'en' | 'es') => {
  const baseJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://chahamsphotography.lovable.app',
    name: "Chaham's Photography & Video",
    image: 'https://chahamsphotography.lovable.app/favicon.png',
    telephone: '+1-787-363-0620',
    url: 'https://chahamsphotography.lovable.app',
    description: language === 'en'
      ? 'Professional wedding photography and videography in Puerto Rico and the United States.'
      : 'Fotografía y videografía profesional de bodas en Puerto Rico y Estados Unidos.',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Puerto Rico',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 18.4655,
      longitude: -66.1057,
    },
    areaServed: [
      { '@type': 'Place', name: 'Puerto Rico' },
      { '@type': 'Country', name: 'United States' },
    ],
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '08:00',
      closes: '20:00',
    },
    sameAs: [
      'https://www.instagram.com/chahamphotography',
      'https://www.facebook.com/ChahamPhotography/',
    ],
  };

  if (section === 'promociones') {
    return [
      baseJsonLd,
      {
        '@context': 'https://schema.org',
        '@type': 'OfferCatalog',
        name: language === 'en' ? '2026 Wedding Packages' : 'Paquetes de Boda 2026',
        itemListElement: [
          {
            '@type': 'Offer',
            name: 'Diamond All Inclusive',
            price: '5500',
            priceCurrency: 'USD',
            description: language === 'en' ? '8 hours photography, 8 hours video, Teaser, Premium Album' : '8 horas fotografía, 8 horas video, Teaser, Album Premium',
          },
          {
            '@type': 'Offer',
            name: 'Premium Photography',
            price: '2800',
            priceCurrency: 'USD',
          },
          {
            '@type': 'Offer',
            name: 'Premium Video',
            price: '2800',
            priceCurrency: 'USD',
          },
        ],
      },
    ];
  }

  return baseJsonLd;
};

interface SEOHeadProps {
  section: SectionType;
}

const SEOHead = ({ section }: SEOHeadProps) => {
  const { language } = useLanguage();
  const seo = seoData[section][language];
  const jsonLd = getJsonLd(section, language);

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <link rel="canonical" href={seo.canonical} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://chahamsphotography.lovable.app/favicon.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <html lang={language} />
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
};

export default SEOHead;
