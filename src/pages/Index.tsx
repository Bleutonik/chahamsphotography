import Header from '@/components/Header';
import MobileNav from '@/components/MobileNav';
import Hero from '@/components/Hero';
import HomeIntro from '@/components/HomeIntro';
import Portfolio from '@/components/Portfolio';
import Videos from '@/components/Videos';
import Services from '@/components/Services';
import Promotions from '@/components/Promotions';
import AboutMe from '@/components/AboutMe';
import DestinationWeddings from '@/components/DestinationWeddings';
import Footer from '@/components/Footer';
import { useLocation } from 'react-router-dom';

export type SectionType = 'inicio' | 'portafolio' | 'videos' | 'servicios' | 'promociones' | 'sobremi' | 'destination-weddings';

export const sectionRoutes: Record<SectionType, string> = {
  'inicio': '/',
  'portafolio': '/portafolio',
  'videos': '/videos',
  'servicios': '/servicios',
  'promociones': '/promociones',
  'sobremi': '/sobre-mi',
  'destination-weddings': '/destination-weddings',
};

export const routeToSection: Record<string, SectionType> = Object.fromEntries(
  Object.entries(sectionRoutes).map(([section, route]) => [route, section as SectionType])
) as Record<string, SectionType>;

interface IndexProps {
  section: SectionType;
}

const Index = ({ section }: IndexProps) => {
  const renderSection = () => {
    switch (section) {
      case 'inicio':
        return (
          <>
            <Hero />
            <HomeIntro />
          </>
        );
      case 'portafolio':
        return <Portfolio />;
      case 'videos':
        return <Videos />;
      case 'servicios':
        return <Services />;
      case 'promociones':
        return <Promotions />;
      case 'sobremi':
        return <AboutMe />;
      case 'destination-weddings':
        return <DestinationWeddings />;
      default:
        return (
          <>
            <Hero />
            <HomeIntro />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col pb-16 md:pb-0">
      <Header activeSection={section} />
      <main className="flex-1">
        {renderSection()}
      </main>
      <Footer />
      <MobileNav activeSection={section} />
    </div>
  );
};

export default Index;
