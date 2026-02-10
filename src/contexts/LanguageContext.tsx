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
    'promotions.subtitle': 'Paquetes de Boda 2026',
    'promotions.title': 'PAQUETES',
    'promotions.description': 'Propuestas exclusivas para tu día especial. Todo es personalizable y adaptable a tus gustos.',
    'promotions.mostPopular': 'Más Popular',
    'promotions.bestSeller': 'Best Seller',
    'promotions.reserve': 'Reservar Ahora',
    'promotions.extraHour': 'Hora extra: $200',
    'promotions.diamond': 'DIAMOND ALL INCLUSIVE',
    'promotions.diamondDesc': '8 horas de fotografía, 8 horas de video, Teaser 1-2 min, Premium Album Set, Love Story complementario, Print Release + Galería Digital, todos los gastos incluidos.',
    'promotions.premiumPhoto': 'FOTOGRAFÍA PREMIUM',
    'promotions.premiumPhotoDesc': '7 horas de cobertura, sesión Love Story (10-25 fotos), álbum 8x8 (Album Set), Print Release + Digital (USB).',
    'promotions.deluxePhoto': 'FOTOGRAFÍA DELUXE',
    'promotions.deluxePhotoDesc': '5 horas de cobertura, sesión Love Story (10-24 fotos), álbum Hard Cover 8x8 (25 fotos), Print Release + Digital.',
    'promotions.premiumVideo': 'VIDEO PREMIUM',
    'promotions.premiumVideoDesc': '8 horas desde la ceremonia, Love Story Video, Teaser 1 min, Video Recap del evento. (2 videógrafos: $3,400)',
    'promotions.deluxeVideo': 'VIDEO DELUXE',
    'promotions.deluxeVideoDesc': '6 horas de cobertura, Love Story Video, Teaser 1 min + Recap. (2 videógrafos: $3,200)',
    
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
    'promotions.subtitle': '2026 Wedding Packages',
    'promotions.title': 'PACKAGES',
    'promotions.description': 'Exclusive proposals for your special day. Everything is customizable and adaptable to your taste.',
    'promotions.mostPopular': 'Most Popular',
    'promotions.bestSeller': 'Best Seller',
    'promotions.reserve': 'Book Now',
    'promotions.extraHour': 'Extra hour: $200',
    'promotions.diamond': 'DIAMOND ALL INCLUSIVE',
    'promotions.diamondDesc': '8 hours photography, 8 hours video, 1-2 min Teaser, Premium Album Set, complimentary Love Story, Print Release + Digital Gallery, all expenses included.',
    'promotions.premiumPhoto': 'PREMIUM PHOTOGRAPHY',
    'promotions.premiumPhotoDesc': '7 hours of coverage, Love Story session (10-25 photos), 8x8 Album (Album Set), Print Release + Digital (USB).',
    'promotions.deluxePhoto': 'DELUXE PHOTOGRAPHY',
    'promotions.deluxePhotoDesc': '5 hours of coverage, Love Story session (10-24 photos), Hard Cover 8x8 Album (25 photos), Print Release + Digital.',
    'promotions.premiumVideo': 'PREMIUM VIDEO',
    'promotions.premiumVideoDesc': '8 hours from ceremony, Love Story Video, 1-min Teaser, Event Recap Video. (2 videographers: $3,400)',
    'promotions.deluxeVideo': 'DELUXE VIDEO',
    'promotions.deluxeVideoDesc': '6 hours of coverage, Love Story Video, 1-min Teaser + Recap. (2 videographers: $3,200)',
    
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
  const [language, setLanguage] = useState<Language>('en');

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
