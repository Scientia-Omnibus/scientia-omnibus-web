import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Language } from '../types';
import { Github, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import LanguageToggle from './LanguageToggle';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  onScrollToSection: (id: string) => void;
}

export default function Header({ language, setLanguage, onScrollToSection }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: 'why', label: { en: 'Philosophy', by: 'Філасофія' } },
    { id: 'projects', label: { en: 'Projects', by: 'Праекты' } },
    { id: 'community', label: { en: 'Community', by: 'Супольнасць' } },
  ];

  const handleNavClick = (id: string) => {
    onScrollToSection(id);
    setMobileMenuOpen(false);
  };

  const goHome = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-30 w-full border-b-3 border-stone-900 bg-bg-warm/95 py-2 backdrop-blur-md shadow-[0_2px_0px_0px_rgba(187,247,208,0.15)]">
      <div className="mx-auto flex max-w-7xl h-14 sm:h-18 items-center justify-between px-4 sm:px-6 lg:px-8">
        <button type="button" className="flex items-center space-x-2 sm:space-x-3 min-w-0" onClick={goHome}>
          <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center sketch-border-xs bg-cartoon-blue text-stone-900 shadow-sm">
            <span className="font-display text-lg sm:text-xl font-bold">S</span>
          </div>
          <div className="min-w-0 text-left">
            <span className="font-display text-base sm:text-xl font-bold tracking-tight text-stone-900 leading-tight truncate block">
              Scientia Omnibus
            </span>
            <span className="text-[9px] sm:text-xs font-mono font-bold text-stone-600 uppercase tracking-wider hidden sm:block">
              {language === 'en' ? 'Knowledge for Everyone' : 'Веды для Кожнага'}
            </span>
          </div>
        </button>

        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-sm font-bold text-stone-850 hover:text-orange-650 transition-colors cursor-pointer border-b-2 border-transparent hover:border-stone-900 px-1 py-0.5"
            >
              {item.label[language]}
            </button>
          ))}
        </nav>

        <div className="flex items-center space-x-2 sm:space-x-4">
          <LanguageToggle language={language} setLanguage={setLanguage} />

          <a
            href="https://github.com/Scientia-Omnibus"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center sketch-button bg-cartoon-green text-stone-900 hover:scale-105 transition-transform"
            title="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex h-8 w-8 items-center justify-center sketch-button bg-cartoon-orange text-stone-900"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, maxHeight: 0 }}
            animate={{ opacity: 1, maxHeight: 300 }}
            exit={{ opacity: 0, maxHeight: 0 }}
            className="md:hidden border-t-2 border-stone-900 bg-bg-warm overflow-hidden"
          >
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="block w-full text-left px-3 py-2.5 text-sm font-bold text-stone-900 hover:bg-cartoon-blue rounded-lg transition-colors"
                >
                  {item.label[language]}
                </button>
              ))}
              <a
                href="https://github.com/Scientia-Omnibus"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3 py-2.5 text-sm font-bold text-stone-900 hover:bg-cartoon-green rounded-lg transition-colors"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
