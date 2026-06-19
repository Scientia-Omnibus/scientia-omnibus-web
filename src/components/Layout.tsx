import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  const { language, setLanguage } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
      return;
    }
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    document.documentElement.lang = language === 'by' ? 'be' : 'en';
  }, [language]);

  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const id = location.hash.slice(1);
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  }, [location]);

  const isGuidePage = location.pathname.startsWith('/scientia-core');

  return (
    <div
      className={`min-h-screen bg-bg-warm font-sans selection:bg-cartoon-blue selection:text-stone-900 overflow-x-hidden antialiased text-stone-900 ${language === 'by' ? 'lang-by' : 'lang-en'}`}
    >
      {!isGuidePage && (
        <Header
          language={language}
          setLanguage={setLanguage}
          onScrollToSection={handleScrollToSection}
        />
      )}

      <Outlet />

      {!isGuidePage && <Footer language={language} />}
    </div>
  );
}
