import { useState } from 'react';
import { Language } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import ModulesShowcase from './components/ModulesShowcase';
import WhySection from './components/WhySection';
import CommunitySection from './components/CommunitySection';
import Footer from './components/Footer';

export default function App() {
  const [language, setLanguage] = useState<Language>('en');

  const handleScrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-bg-warm font-sans selection:bg-cartoon-blue selection:text-stone-900 overflow-x-hidden antialiased text-stone-900">
      <Header 
        language={language} 
        setLanguage={setLanguage} 
        onScrollToSection={handleScrollToSection} 
      />

      <main>
        <Hero 
          language={language} 
          onScrollToSection={handleScrollToSection} 
        />

        <ModulesShowcase 
          language={language} 
        />

        <WhySection 
          language={language} 
        />

        <CommunitySection 
          language={language} 
        />
      </main>

      <Footer 
        language={language} 
      />
    </div>
  );
}
