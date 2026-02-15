import { useLanguage } from '@/contexts/LanguageContext';

const HomeIntro = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
          {t('home.introTitle')}
        </h2>
        <div className="space-y-6 text-center">
          <p className="font-body text-foreground/85 text-base md:text-lg leading-relaxed">
            {t('home.intro1')}
          </p>
          <p className="font-body text-foreground/85 text-base md:text-lg leading-relaxed">
            {t('home.intro2')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeIntro;
