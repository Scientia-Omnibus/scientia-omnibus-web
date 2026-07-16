import Hero from '../components/Hero';
import ProblemMapSection from '../components/ProblemMapSection';
import ComparisonBars from '../components/ComparisonBars';
import ProjectsSection from '../components/ProjectsSection';
import WhySection from '../components/WhySection';
import MergedHelpSection from '../components/MergedHelpSection';
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
      <ProblemMapSection language={language} />
      <SectionDivider />
      <ComparisonBars language={language} />
      <SectionDivider />
      <ProjectsSection language={language} />
      <SectionDivider />
      <WhySection language={language} />
      <SectionDivider />
      <MergedHelpSection language={language} />
    </main>
  );
}
