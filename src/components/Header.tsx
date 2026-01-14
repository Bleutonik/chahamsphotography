import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo.png';
import { SectionType } from '@/pages/Index';

interface HeaderProps {
  activeSection: SectionType;
  onNavigate: (section: SectionType) => void;
}

const Header = ({ activeSection, onNavigate }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks: { id: SectionType; label: string }[] = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'portafolio', label: 'Portafolio' },
    { id: 'videos', label: 'Videos' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'promociones', label: 'Promociones' },
  ];

  const handleNavClick = (sectionId: SectionType) => {
    onNavigate(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md shadow-soft py-3">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('inicio')}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <img src={logo} alt="Chaham's Photography" className="h-10 w-auto" />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`font-body text-sm tracking-wide px-4 py-2 rounded-md transition-all duration-300 ${
                activeSection === link.id
                  ? 'bg-primary text-primary-foreground'
                  : 'text-foreground hover:bg-muted hover:text-primary'
              }`}
            >
              {link.label}
            </button>
          ))}
          <a
            href="https://wa.me/17873630620"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm tracking-wide px-4 py-2 rounded-md bg-gold text-coffee hover:bg-gold-dark transition-all duration-300 ml-2"
          >
            Contacto
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-card/98 backdrop-blur-md shadow-elegant transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`font-body text-lg text-left px-4 py-3 rounded-md transition-all duration-300 ${
                activeSection === link.id
                  ? 'bg-primary text-primary-foreground'
                  : 'text-foreground hover:bg-muted hover:text-primary'
              }`}
            >
              {link.label}
            </button>
          ))}
          <a
            href="https://wa.me/17873630620"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-body text-lg text-center px-4 py-3 rounded-md bg-gold text-coffee hover:bg-gold-dark transition-all duration-300 mt-2"
          >
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
