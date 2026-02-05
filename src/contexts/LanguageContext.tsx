import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.portfolio': 'Portafolio',
    'nav.videos': 'Videos',
    'nav.services': 'Servicios',
    'nav.promotions': 'Ofertas',
    'nav.about': 'Sobre Mí',
    'nav.contact': 'Contacto',
    'nav.photos': 'Fotos',
    
    // Hero
    'hero.tagline': 'Photography & Video',
    'hero.description': 'Capturando momentos únicos e irrepetibles en Puerto Rico y Estados Unidos',
    'hero.viewPortfolio': 'Ver Portafolio',
    'hero.contact': 'Contactar',
    
    // Services
    'services.subtitle': 'Lo Que Ofrecemos',
    'services.title': 'NUESTROS SERVICIOS',
    'services.description': 'Servicios profesionales de fotografía y video en Puerto Rico y Estados Unidos',
    'services.weddings': 'BODAS',
    'services.weddingsDesc': 'Capturamos cada momento mágico de tu día especial con elegancia y emoción.',
    'services.portraits': 'RETRATOS',
    'services.portraitsDesc': 'Capturamos tu verdadera esencia a través de una lente experta. Diseñamos sesiones personalizadas que resaltan tu personalidad única en cada etapa:',
    'services.videography': 'VIDEOGRAFÍA',
    'services.videographyDesc': 'Videos cinematográficos que cuentan tu historia de manera inolvidable.',
    'services.quinceaneras': 'QUINCEAÑERAS',
    'services.quinceanerasDesc': 'Celebramos este momento especial con fotografías dignas de una princesa.',
    'services.families': 'FAMILIAS',
    'services.familiesDesc': 'Preservamos los lazos familiares en retratos llenos de amor y conexión.',
    'services.events': 'EVENTOS',
    'services.eventsDesc': 'Cobertura completa de tus eventos corporativos y sociales.',
    'services.models': 'Modelos',
    'services.maternity': 'Maternidad',
    'services.professionalPortrait': 'Portrait Profesional',
    'services.andMore': 'Y más',
    
    // Promotions
    'promotions.subtitle': 'Ofertas Especiales',
    'promotions.title': 'OFERTAS',
    'promotions.description': 'Aprovecha nuestras ofertas exclusivas y reserva tu sesión hoy',
    'promotions.mostPopular': 'Más Popular',
    'promotions.new': 'Nuevo',
    'promotions.reserve': 'Reservar',
    'promotions.weddingPhoto': 'OFERTAS DE FOTOGRAFÍA (BODA)',
    'promotions.weddingPhotoDesc': 'Love story 10 a 15 fotos editadas (de regalo), 4 horas de servicio del día del evento, fotos editadas, fotos entregadas digital.',
    'promotions.quincePhoto': 'OFERTAS DE FOTOGRAFÍA (QUINCEAÑERA O SWEET 16)',
    'promotions.quincePhotoDesc': 'Sesión pre-quinceañera 10 a 15 fotos editadas & 1 min video teaser (de regalo), 4 horas de servicio del día del evento, fotos editadas, entregadas digital con permiso de impresión.',
    'promotions.weddingVideo': 'OFERTAS DE VIDEO (BODAS)',
    'promotions.weddingVideoDesc': 'Love Story 1 Min teaser (de regalo), 4 horas de servicio en el día del evento, 1-2 min teaser, Video Recap del evento.',
    'promotions.quinceVideo': 'OFERTAS DE VIDEO (QUINCEAÑERA O SWEET 16)',
    'promotions.quinceVideoDesc': 'Video Pre-15, 1 Min teaser (de regalo), 4 horas de servicio en el día del evento, 1-2 min teaser, Video Recap del evento.',
    'promotions.photoSessions': 'SESIONES DE FOTOS',
    'promotions.photoSessionsDesc': '30 minutos, 10 a 20 fotos digitales editadas. Perfecto para retratos, parejas (y más...)',
    
    // About
    'about.subtitle': 'Conoce al Artista',
    'about.title': 'SOBRE MÍ',
    'about.greeting': '¡Hola! Soy Luis Cabrera',
    'about.description1': 'La frase "La vida es muy corta para mañana" me ha marcado y me ha enseñado a vivir una vida llena de momentos felices.',
    'about.description2': 'También, me ha enseñado a capturar esos momentos con mi lente, para que puedas revivirlos una y otra vez.',
    'about.passion': 'Mi Pasión',
    'about.passionDesc': 'Desde hace más de 8 años, he dedicado mi vida a capturar momentos únicos.',
    'about.approach': 'Mi Enfoque',
    'about.approachDesc': 'Cada proyecto es tratado con dedicación y atención al detalle.',
    
    // Footer
    'footer.rights': 'Todos los derechos reservados.',
    
    // Portfolio
    'portfolio.subtitle': 'Galería de Trabajos',
    'portfolio.title': 'PORTAFOLIO',
    'portfolio.description': 'Una selección de nuestros mejores trabajos fotográficos',
    
    // Videos
    'videos.subtitle': 'Producción Audiovisual',
    'videos.title': 'VIDEOS',
    'videos.description': 'Contenido cinematográfico que cuenta historias únicas',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.portfolio': 'Portfolio',
    'nav.videos': 'Videos',
    'nav.services': 'Services',
    'nav.promotions': 'Offers',
    'nav.about': 'About Me',
    'nav.contact': 'Contact',
    'nav.photos': 'Photos',
    
    // Hero
    'hero.tagline': 'Photography & Video',
    'hero.description': 'Capturing unique and unrepeatable moments in Puerto Rico and the United States',
    'hero.viewPortfolio': 'View Portfolio',
    'hero.contact': 'Contact',
    
    // Services
    'services.subtitle': 'What We Offer',
    'services.title': 'OUR SERVICES',
    'services.description': 'Professional photography and video services in Puerto Rico and the United States',
    'services.weddings': 'WEDDINGS',
    'services.weddingsDesc': 'We capture every magical moment of your special day with elegance and emotion.',
    'services.portraits': 'PORTRAITS',
    'services.portraitsDesc': 'We capture your true essence through an expert lens. We design personalized sessions that highlight your unique personality at every stage:',
    'services.videography': 'VIDEOGRAPHY',
    'services.videographyDesc': 'Cinematic videos that tell your story in an unforgettable way.',
    'services.quinceaneras': 'QUINCEAÑERAS',
    'services.quinceanerasDesc': 'We celebrate this special moment with photographs worthy of a princess.',
    'services.families': 'FAMILIES',
    'services.familiesDesc': 'We preserve family bonds in portraits full of love and connection.',
    'services.events': 'EVENTS',
    'services.eventsDesc': 'Complete coverage of your corporate and social events.',
    'services.models': 'Models',
    'services.maternity': 'Maternity',
    'services.professionalPortrait': 'Professional Portrait',
    'services.andMore': 'And more',
    
    // Promotions
    'promotions.subtitle': 'Special Offers',
    'promotions.title': 'OFFERS',
    'promotions.description': 'Take advantage of our exclusive offers and book your session today',
    'promotions.mostPopular': 'Most Popular',
    'promotions.new': 'New',
    'promotions.reserve': 'Book Now',
    'promotions.weddingPhoto': 'WEDDING PHOTOGRAPHY PACKAGES',
    'promotions.weddingPhotoDesc': 'Love story 10-15 edited photos (free gift), 4 hours of event day service, edited photos, digitally delivered.',
    'promotions.quincePhoto': 'QUINCEAÑERA / SWEET 16 PHOTOGRAPHY',
    'promotions.quincePhotoDesc': 'Pre-quinceañera session 10-15 edited photos & 1 min video teaser (free gift), 4 hours of event day service, edited photos, digitally delivered with print permission.',
    'promotions.weddingVideo': 'WEDDING VIDEO PACKAGES',
    'promotions.weddingVideoDesc': 'Love Story 1 min teaser (free gift), 4 hours of event day service, 1-2 min teaser, Event Recap Video.',
    'promotions.quinceVideo': 'QUINCEAÑERA / SWEET 16 VIDEO',
    'promotions.quinceVideoDesc': 'Pre-15 Video, 1 min teaser (free gift), 4 hours of event day service, 1-2 min teaser, Event Recap Video.',
    'promotions.photoSessions': 'PHOTO SESSIONS',
    'promotions.photoSessionsDesc': '30 minutes, 10-20 edited digital photos. Perfect for portraits, couples (and more...)',
    
    // About
    'about.subtitle': 'Meet the Artist',
    'about.title': 'ABOUT ME',
    'about.greeting': 'Hello! I\'m Luis Cabrera',
    'about.description1': 'The phrase "Life is too short for tomorrow" has marked me and taught me to live a life full of happy moments.',
    'about.description2': 'It has also taught me to capture those moments with my lens, so you can relive them over and over again.',
    'about.passion': 'My Passion',
    'about.passionDesc': 'For over 8 years, I have dedicated my life to capturing unique moments.',
    'about.approach': 'My Approach',
    'about.approachDesc': 'Each project is treated with dedication and attention to detail.',
    
    // Footer
    'footer.rights': 'All rights reserved.',
    
    // Portfolio
    'portfolio.subtitle': 'Work Gallery',
    'portfolio.title': 'PORTFOLIO',
    'portfolio.description': 'A selection of our best photographic work',
    
    // Videos
    'videos.subtitle': 'Audiovisual Production',
    'videos.title': 'VIDEOS',
    'videos.description': 'Cinematic content that tells unique stories',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('es');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
