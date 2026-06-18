import { Language } from '../types';
import { Github, MessageSquare, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  onScrollToSection: (id: string) => void;
}

export default function Header({ language, setLanguage, onScrollToSection }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 w-full border-b-3 border-stone-900 bg-bg-warm/95 py-2 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl h-18 items-center justify-between px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="flex h-10 w-10 items-center justify-center sketch-border-xs bg-cartoon-blue text-stone-900 shadow-sm">
            <span className="font-display text-xl font-bold">∑</span>
          </div>
          <div>
            <h1 className="font-display text-xl font-bold tracking-tight text-stone-900 flex items-center gap-1.5 leading-tight">
              Scientia Omnibus
            </h1>
            <p className="text-[10px] sm:text-xs font-mono font-bold text-stone-600 uppercase tracking-wider">
              {language === 'en' ? 'Knowledge for Everyone' : 'Веды для Кожнага'}
            </p>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <button 
            onClick={() => onScrollToSection('philosophy')} 
            className="text-sm font-bold text-stone-850 hover:text-orange-650 transition-colors cursor-pointer border-b-2 border-transparent hover:border-stone-900 px-1 py-0.5"
          >
            {language === 'en' ? 'Philosophy' : 'Філасофія'}
          </button>
          <button 
            onClick={() => onScrollToSection('simulator')} 
            className="text-sm font-bold text-stone-850 hover:text-orange-650 transition-colors cursor-pointer border-b-2 border-transparent hover:border-stone-900 px-1 py-0.5"
          >
            {language === 'en' ? 'Core App' : 'Кліент Core'}
          </button>
          <button 
            onClick={() => onScrollToSection('community')} 
            className="text-sm font-bold text-stone-850 hover:text-orange-650 transition-colors cursor-pointer border-b-2 border-transparent hover:border-stone-900 px-1 py-0.5"
          >
            {language === 'en' ? 'Open Source' : 'Супольнасць'}
          </button>
        </nav>

        <div className="flex items-center space-x-4">
          
          <div className="relative flex items-center bg-white border-2 border-stone-900 rounded-lg p-0.5 w-24 h-9 shadow-[2px_2px_0px_#1A1A1A]">
            <motion.div
              className="absolute top-[2px] bottom-[2px] rounded bg-cartoon-green border border-stone-900 cursor-pointer"
              style={{ width: '40px' }}
              animate={{ x: language === 'en' ? 2 : 44 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            />
            <button
              onClick={() => setLanguage('en')}
              className={`relative z-10 w-1/2 text-xs font-black tracking-wider ${
                language === 'en' ? 'text-stone-900' : 'text-stone-500 hover:text-stone-800'
              } transition-colors cursor-pointer`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('by')}
              className={`relative z-10 w-1/2 text-xs font-black tracking-wider ${
                language === 'by' ? 'text-stone-900' : 'text-stone-500 hover:text-stone-800'
              } transition-colors cursor-pointer`}
            >
              BY
            </button>
          </div>

          <div className="flex items-center space-x-2">
            <a
              href="https://github.com/Scientia-Omnibus"
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center sketch-button bg-cartoon-green text-stone-900 hover:scale-105 transition-transform"
              title="GitHub Profile"
            >
              <Github className="h-4.5 w-4.5" />
            </a>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="flex h-9 w-9 items-center justify-center sketch-button bg-cartoon-purple text-stone-900 hover:scale-105 transition-transform"
              title="Discord Server"
            >
              <MessageSquare className="h-4.5 w-4.5" />
            </a>
          </div>

        </div>
      </div>
    </header>
  );
}
