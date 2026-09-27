import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useCallback, useRef, useEffect } from 'react';
import { Language } from '../types';
import { Github, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import LanguageToggle from './LanguageToggle';
import { LINKS } from '../data/links';

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
      if (next >= 5) {
        setClickCount(0);
        setEasterEgg(true);
        const msg = language === 'en'
          ? '> SCIENTIA ACCESS TERMINAL\n> READY.'
          : '> ТЭРМІНАЛ ДОСТУПУ SCIENTIA\n> ГОТА.';
        typeWriter(msg, 0, '');
        setTimeout(() => setEasterEgg(false), 2200);
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
      setTimeout(() => typeWriter(text, i + 1, acc + nextChar), 18);
    }
  };

  useEffect(() => {
    if (!easterEgg) return;
    const onKey = () => setEasterEgg(false);
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      clearTimeout(clickTimer.current);
    };
  }, [easterEgg]);

  useEffect(() => {
    return () => clearTimeout(clickTimer.current);
  }, []);

  const navItems = [
    { id: 'why', label: { en: 'Why terminal', by: 'Чаму тэрмінал' } },
    { id: 'projects', label: { en: 'Projects', by: 'Праекты' } },
    { id: 'get-involved', label: { en: 'Get involved', by: 'Далучыцца' } },
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
    <header className="sticky top-0 z-30 w-full border-b border-ink-800 bg-ink-950/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl h-14 sm:h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          className="flex items-center min-w-0 gap-1.5"
          onClick={() => { goHome(); handleLogoClick(); }}
          aria-label="Scientia Omnibus"
        >
          <span className="text-phos-400 font-mono font-bold select-none text-lg leading-none">$</span>
          <span className="font-display text-base sm:text-lg font-bold tracking-tight text-ink-100 truncate">
            Scientia Omnibus
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="font-mono text-xs font-semibold text-ink-400 hover:text-phos-400 transition-colors cursor-pointer border-b border-transparent hover:border-phos-400/60 py-1"
            >
              {item.label[language]}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <LanguageToggle language={language} setLanguage={setLanguage} />

          <a
            href={LINKS.org}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-ink-300 border border-ink-700 hover:border-phos-400 hover:text-phos-300 transition-colors rounded-lg px-3 py-1.5"
            title="GitHub"
          >
            <Github className="h-3.5 w-3.5" />
            GitHub
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex h-9 w-9 items-center justify-center rounded-lg border border-ink-700 text-ink-300 hover:text-phos-400 hover:border-phos-400/60 transition-colors"
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
            className="md:hidden border-t border-ink-800 bg-ink-900 overflow-hidden"
          >
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="block w-full text-left px-3 py-2.5 font-mono text-sm text-ink-200 hover:text-phos-400 hover:bg-ink-850 rounded-lg transition-colors cursor-pointer"
                >
                  {item.label[language]}
                </button>
              ))}
              <a
                href={LINKS.org}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2.5 font-mono text-sm text-ink-200 hover:text-phos-400 hover:bg-ink-850 rounded-lg transition-colors"
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink-950/95"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setEasterEgg(false)}
          >
            <motion.div
              className="max-w-md w-full mx-4 terminal-frame p-5 sm:p-6 font-mono text-sm"
              initial={{ scale: 0.94, y: 16 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 16 }}
              onClick={(e) => e.stopPropagation()}
            >
              <pre className="text-phos-400 leading-relaxed whitespace-pre-wrap text-xs sm:text-sm">
                {easterText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="inline-block w-2 h-4 bg-phos-400 ml-0.5 align-middle"
                />
              </pre>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
