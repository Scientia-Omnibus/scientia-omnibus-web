import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useCallback, useRef, useEffect } from 'react';
import { Language } from '../types';
import { Github, Menu, X, Terminal as TerminalIcon } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import LanguageToggle from './LanguageToggle';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  onScrollToSection: (id: string) => void;
}

export default function Header({ language, setLanguage, onScrollToSection }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [easterEgg, setEasterEgg] = useState(false);
  const [easterText, setEasterText] = useState('');
  const clickTimer = useRef<ReturnType<typeof setTimeout>>();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = useCallback(() => {
    setClickCount((prev) => {
      const next = prev + 1;
      if (next >= 7) {
        setClickCount(0);
        setEasterEgg(true);
        const msg = language === 'en'
          ? '> INITIALIZING DIGITAL EQUALITY PROTOCOL...\n> SCANNING KNOWLEDGE BASES...\n> ALL SYSTEMS OPERATIONAL\n> WELCOME, PIONEER.'
          : '> ЗАПУСК ПРАТАКОЛУ ЛІЧБАВАЙ РОЎНАСЦІ...\n> СКАНАВАННЕ БАЗ ВЕДАЎ...\n> УСЕ СІСТЭМЫ ПРАЦУЮЦЬ\n> ВІТАЕМ, ПЕРШАПРАХОДЧАК.';
        typeWriter(msg, 0, '');
        setTimeout(() => setEasterEgg(false), 4000);
        return 0;
      }
      return next;
    });
    clearTimeout(clickTimer.current);
    clickTimer.current = setTimeout(() => setClickCount(0), 3000);
  }, [language]);

  const typeWriter = (text: string, i: number, acc: string) => {
    if (i < text.length) {
      const nextChar = text[i] === '\n' ? '\n' : text[i];
      setEasterText(acc + nextChar);
      setTimeout(() => typeWriter(text, i + 1, acc + nextChar), 25);
    }
  };

  useEffect(() => {
    return () => clearTimeout(clickTimer.current);
  }, []);

  const navItems = [
    { id: 'why', label: { en: 'Philosophy', by: 'Філасофія' } },
    { id: 'projects', label: { en: 'Projects', by: 'Праекты' } },
    { id: 'get-involved', label: { en: 'Get Involved', by: 'Далучыцца' } },
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
        <button type="button" className="flex items-center min-w-0 relative" onClick={() => { goHome(); handleLogoClick(); }}>
          <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-stone-900 leading-tight truncate">
            Scientia Omnibus
          </span>
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

      <AnimatePresence>
        {easterEgg && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setEasterEgg(false)}
          >
            <motion.div
              className="max-w-md w-full mx-4 bg-[#110e19] border-2 border-cartoon-green rounded-xl p-5 sm:p-6 font-mono text-sm shadow-[0_0_30px_rgba(187,247,208,0.15)]"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-stone-800">
                <div className="flex h-6 w-6 items-center justify-center rounded border border-cartoon-green">
                  <TerminalIcon className="h-3.5 w-3.5 text-cartoon-green" />
                </div>
                <span className="text-cartoon-green font-bold text-[10px] uppercase tracking-widest">
                  {language === 'en' ? 'Scientia Access Terminal' : 'Тэрмінал доступу Scientia'}
                </span>
              </div>
              <pre className="text-cartoon-green leading-relaxed whitespace-pre-wrap text-xs sm:text-sm">
                {easterText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="inline-block w-2 h-4 bg-cartoon-green ml-0.5 align-middle"
                />
              </pre>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
