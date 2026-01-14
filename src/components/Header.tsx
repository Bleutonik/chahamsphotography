import logo from '@/assets/logo.png';
import { SectionType } from '@/pages/Index';

interface HeaderProps {
  activeSection: SectionType;
  onNavigate: (section: SectionType) => void;
}

const Header = ({ activeSection, onNavigate }: HeaderProps) => {
  const navLinks: { id: SectionType; label: string }[] = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'portafolio', label: 'Portafolio' },
    { id: 'videos', label: 'Videos' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'promociones', label: 'Promociones' },
  ];

  const handleNavClick = (sectionId: SectionType) => {
    onNavigate(sectionId);
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md shadow-soft py-3">
      <div className="container mx-auto px-4 flex items-center justify-between md:justify-center">
        {/* Logo - visible on mobile */}
        <button
          onClick={() => handleNavClick('inicio')}
          className="md:hidden flex items-center gap-2 hover:opacity-80 transition-opacity"
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

        {/* Empty div for mobile layout balance */}
        <div className="md:hidden w-10" />
      </div>
    </header>
  );
};

export default Header;
