import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import Videos from '@/components/Videos';
import Services from '@/components/Services';
import Promotions from '@/components/Promotions';

import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <Videos />
        <Services />
        <Promotions />
        
      </main>

      <Footer />
    </div>
  );
};

export default Index;
