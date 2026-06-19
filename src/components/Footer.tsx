import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/modules';
import { Github } from 'lucide-react';

interface FooterProps {
  language: Language;
}

export default function Footer({ language }: FooterProps) {
  const t = UI_TRANSLATIONS;

  return (
    <footer className="bg-[#1e1b29] text-stone-300 py-8 sm:py-12 border-t-3 border-stone-1000">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center pb-6 sm:pb-8 border-b-2 border-stone-800">
          <div className="md:col-span-4 space-y-2">
            <div className="flex items-center space-x-2">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center border-2 border-stone-900 rounded-lg bg-cartoon-yellow text-stone-900 font-bold text-base shadow-[1.5px_1.5px_0px_#1D1D1D]">
                S
              </div>
              <span className="font-display font-medium text-lg sm:text-xl text-white font-fredoka">
                Scientia Omnibus
              </span>
            </div>
            <p className="font-mono text-[10px] sm:text-xs text-stone-400 uppercase tracking-widest font-semibold">
              {language === 'en' ? 'Volunteer open-source initiative' : 'Валонцёрская open-source ініцыятыва'}
            </p>
          </div>

          <div className="md:col-span-5 text-stone-400 font-sans text-xs max-w-md leading-relaxed md:border-l-2 md:border-stone-800 md:pl-6">
            <p className="text-stone-300 font-medium">
              {t.footerMission[language]}
            </p>
          </div>

          <div className="md:col-span-3 flex justify-start md:justify-end">
            <a
              href="https://github.com/Scientia-Omnibus"
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-1.5 rounded-lg bg-cartoon-blue border-2 border-stone-900 text-stone-900 hover:bg-cartoon-orange transition-all font-mono font-bold text-xs flex items-center gap-1.5 shadow-[2px_2px_0px_#1A1A1A]"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center pt-4 sm:pt-6 gap-3 font-mono text-[10px] text-stone-400 font-semibold text-center sm:text-left">
          <div>
            &copy; {new Date().getFullYear()} Scientia Omnibus. {t.footerRights[language]}
          </div>
          <div>
            {language === 'en' ? 'GPL-3.0 License' : 'Ліцэнзія GPL-3.0'}
          </div>
        </div>
      </div>
    </footer>
  );
}
