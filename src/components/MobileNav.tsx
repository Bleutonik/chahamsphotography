import { Home, Image, Video, Briefcase, Gift, MessageCircle } from 'lucide-react';
import { SectionType } from '@/pages/Index';
import { useLanguage } from '@/contexts/LanguageContext';

interface MobileNavProps {
  activeSection: SectionType;
  onNavigate: (section: SectionType) => void;
}

const MobileNav = ({ activeSection, onNavigate }: MobileNavProps) => {
  const { language, toggleLanguage, t } = useLanguage();

  const navItems: { id: SectionType; labelKey: string; icon: typeof Home }[] = [
    { id: 'inicio', labelKey: 'nav.home', icon: Home },
    { id: 'portafolio', labelKey: 'nav.photos', icon: Image },
    { id: 'videos', labelKey: 'nav.videos', icon: Video },
    { id: 'servicios', labelKey: 'nav.services', icon: Briefcase },
    { id: 'promociones', labelKey: 'nav.promotions', icon: Gift },
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
              {t(item.labelKey)}
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
          <span className="text-[9px] font-body font-semibold leading-tight">{t('nav.contact')}</span>
        </a>
      </div>
    </nav>
  );
};

export default MobileNav;
