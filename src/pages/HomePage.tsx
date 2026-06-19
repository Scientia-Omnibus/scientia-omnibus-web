import Hero from '../components/Hero';
import ProjectsSection from '../components/ProjectsSection';
import WhySection from '../components/WhySection';
import CommunitySection from '../components/CommunitySection';
import { useLanguage } from '../context/LanguageContext';

export default function HomePage() {
  const { language } = useLanguage();

  const handleScrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <main>
      <Hero language={language} onScrollToSection={handleScrollToSection} />
      <ProjectsSection language={language} />
      <WhySection language={language} />
      <CommunitySection language={language} />
    </main>
  );
}
