import { Home, Image, Video, Briefcase, Gift, MessageCircle, User } from 'lucide-react';
import { SectionType } from '@/pages/Index';

interface MobileNavProps {
  activeSection: SectionType;
  onNavigate: (section: SectionType) => void;
}

const MobileNav = ({ activeSection, onNavigate }: MobileNavProps) => {
  const navItems: { id: SectionType; label: string; icon: typeof Home }[] = [
    { id: 'inicio', label: 'Inicio', icon: Home },
    { id: 'portafolio', label: 'Fotos', icon: Image },
    { id: 'videos', label: 'Videos', icon: Video },
    { id: 'servicios', label: 'Servicios', icon: Briefcase },
    { id: 'promociones', label: 'Ofertas', icon: Gift },
    { id: 'sobremi', label: 'Sobre Mí', icon: User },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-t border-border shadow-elegant safe-area-bottom">
      <div className="flex items-center justify-evenly py-1.5 px-0.5">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`flex flex-col items-center gap-0.5 px-1 py-1.5 rounded-md transition-all duration-300 flex-1 ${
              activeSection === item.id
                ? 'text-primary'
                : 'text-muted-foreground'
            }`}
          >
            <item.icon className={`w-5 h-5 ${activeSection === item.id ? 'text-primary' : ''}`} />
            <span className={`text-[9px] font-body leading-tight ${activeSection === item.id ? 'font-semibold' : ''}`}>
              {item.label}
            </span>
          </button>
        ))}
        <a
          href="https://wa.me/17873630620"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-0.5 px-1 py-1.5 rounded-md text-gold flex-1"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-[9px] font-body font-semibold leading-tight">Contacto</span>
        </a>
      </div>
    </nav>
  );
};

export default MobileNav;
