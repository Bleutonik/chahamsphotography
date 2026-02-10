import logo from '@/assets/logo.png';
import { SectionType } from '@/pages/Index';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

interface HeaderProps {
  activeSection: SectionType;
  onNavigate: (section: SectionType) => void;
}

const Header = ({ activeSection, onNavigate }: HeaderProps) => {
  const { language, toggleLanguage, t } = useLanguage();

  const navLinks: { id: SectionType; labelKey: string }[] = [
    { id: 'inicio', labelKey: 'nav.home' },
    { id: 'portafolio', labelKey: 'nav.portfolio' },
    { id: 'videos', labelKey: 'nav.videos' },
    { id: 'servicios', labelKey: 'nav.services' },
    { id: 'promociones', labelKey: 'nav.promotions' },
    { id: 'sobremi', labelKey: 'nav.about' },
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
              {t(link.labelKey)}
            </button>
          ))}
          <a
            href="https://wa.me/17873630620"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm tracking-wide px-4 py-2 rounded-md bg-gold text-coffee hover:bg-gold-dark transition-all duration-300 ml-2"
          >
            {t('nav.contact')}
          </a>
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="ml-2 flex items-center gap-1.5 px-3 py-2 rounded-md bg-muted hover:bg-muted/80 text-foreground transition-all duration-300 font-body text-sm"
            title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
          >
            <Globe className="w-4 h-4" />
            <span className="font-semibold">{language === 'es' ? 'EN' : 'ES'}</span>
          </button>
        </nav>

        {/* Language Toggle for Mobile */}
        <button
          onClick={toggleLanguage}
          className="md:hidden flex items-center gap-1 px-2 py-1.5 rounded-md bg-muted hover:bg-muted/80 text-foreground transition-all duration-300 font-body text-xs"
          title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
        >
          <Globe className="w-4 h-4" />
          <span className="font-semibold">{language === 'es' ? 'EN' : 'ES'}</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
