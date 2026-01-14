import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import Videos from '@/components/Videos';
import Services from '@/components/Services';
import Promotions from '@/components/Promotions';
import Footer from '@/components/Footer';

export type SectionType = 'inicio' | 'portafolio' | 'videos' | 'servicios' | 'promociones';

const Index = () => {
  const [activeSection, setActiveSection] = useState<SectionType>('inicio');

  const renderSection = () => {
    switch (activeSection) {
      case 'inicio':
        return <Hero onNavigate={setActiveSection} />;
      case 'portafolio':
        return <Portfolio />;
      case 'videos':
        return <Videos />;
      case 'servicios':
        return <Services />;
      case 'promociones':
        return <Promotions />;
      default:
        return <Hero onNavigate={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header activeSection={activeSection} onNavigate={setActiveSection} />
      <main className="flex-1">
        {renderSection()}
      </main>
      <Footer onNavigate={setActiveSection} />
    </div>
  );
};

export default Index;
