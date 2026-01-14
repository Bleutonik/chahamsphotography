import cameraLogo from '@/assets/camera-logo.png';
import { Instagram, Facebook, MessageCircle } from 'lucide-react';
import { SectionType } from '@/pages/Index';

interface FooterProps {
  onNavigate: (section: SectionType) => void;
}

const Footer = ({ onNavigate }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const navLinks: { id: SectionType; label: string }[] = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'portafolio', label: 'Portafolio' },
    { id: 'videos', label: 'Videos' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'promociones', label: 'Promociones' },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <button onClick={() => onNavigate('inicio')} className="hover:opacity-80 transition-opacity">
            <img
              src={cameraLogo}
              alt="Chaham's Photography & Video"
              className="w-24 h-auto mb-4"
            />
          </button>

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
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className="font-body text-sm text-cream/70 hover:text-gold transition-colors"
              >
                {link.label}
              </button>
            ))}
            <a 
              href="https://wa.me/17873630620" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-body text-sm text-cream/70 hover:text-gold transition-colors"
            >
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
