import logo from '@/assets/logo.png';
import { Instagram, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <img
            src={logo}
            alt="Chaham's Photography & Video"
            className="h-20 w-auto mb-6 brightness-0 invert opacity-90"
          />

          {/* Tagline */}
          <p className="font-body text-cream/70 max-w-md mb-8">
            Capturando momentos únicos e irrepetibles en Puerto Rico y Estados Unidos
          </p>

          {/* Social Links */}
          <div className="flex gap-4 mb-8">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-coffee transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-coffee transition-all duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="mailto:info@chahamsphotography.com"
              className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-coffee transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 mb-8">
            <a href="#inicio" className="font-body text-sm text-cream/70 hover:text-gold transition-colors">
              Inicio
            </a>
            <a href="#portafolio" className="font-body text-sm text-cream/70 hover:text-gold transition-colors">
              Portafolio
            </a>
            <a href="#servicios" className="font-body text-sm text-cream/70 hover:text-gold transition-colors">
              Servicios
            </a>
            <a href="#promociones" className="font-body text-sm text-cream/70 hover:text-gold transition-colors">
              Promociones
            </a>
            <a href="#contacto" className="font-body text-sm text-cream/70 hover:text-gold transition-colors">
              Contacto
            </a>
          </nav>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gold/20 mb-6" />

          {/* Copyright */}
          <p className="font-body text-sm text-cream/50">
            © {currentYear} Chaham's Photography & Video. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
