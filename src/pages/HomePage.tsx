import Hero from '../components/Hero';
import ProjectsSection from '../components/ProjectsSection';
import WhySection from '../components/WhySection';
import CommunitySection from '../components/CommunitySection';
import SectionDivider from '../components/SectionDivider';
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
      <SectionDivider />
      <ProjectsSection language={language} />
      <SectionDivider />
      <WhySection language={language} />
      <SectionDivider />
      <CommunitySection language={language} />
    </main>
  );
}
