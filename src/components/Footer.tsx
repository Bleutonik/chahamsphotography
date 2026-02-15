import cameraLogo from '@/assets/camera-logo.png';
import { Instagram, Facebook, MessageCircle } from 'lucide-react';
import { SectionType, sectionRoutes } from '@/pages/Index';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const navLinks: { id: SectionType; labelKey: string }[] = [
    { id: 'inicio', labelKey: 'nav.home' },
    { id: 'portafolio', labelKey: 'nav.portfolio' },
    { id: 'videos', labelKey: 'nav.videos' },
    { id: 'servicios', labelKey: 'nav.services' },
    { id: 'promociones', labelKey: 'nav.promotions' },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <img
              src={cameraLogo}
              alt="Chaham's Photography & Video"
              className="w-24 h-auto mb-4"
            />
          </Link>

          {/* Social Links */}
          <div className="flex gap-4 mb-8">
            <a
              href="https://www.instagram.com/chahamphotography"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-coffee transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/ChahamPhotography/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-coffee transition-all duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/17873630620"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-coffee transition-all duration-300"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 mb-8">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={sectionRoutes[link.id]}
                className="font-body text-sm text-cream/70 hover:text-gold transition-colors"
              >
                {t(link.labelKey)}
              </Link>
            ))}
            <a 
              href="https://wa.me/17873630620" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-body text-sm text-cream/70 hover:text-gold transition-colors"
            >
              {t('nav.contact')}
            </a>
          </nav>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gold/20 mb-6" />

          {/* Copyright */}
          <p className="font-body text-sm text-cream/50">
            © {currentYear} Chaham's Photography & Video. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
