import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/modules';
import { Github } from 'lucide-react';

interface FooterProps {
  language: Language;
}

export default function Footer({ language }: FooterProps) {
  const t = UI_TRANSLATIONS;

  return (
    <footer className="bg-ink-950 text-ink-400 py-10 sm:py-14 border-t border-ink-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start pb-8 border-b border-ink-800">
          <div className="md:col-span-4 space-y-2">
            <div className="flex items-center gap-1.5">
              <span className="text-phos-400 font-mono font-bold select-none">$</span>
              <span className="font-display font-bold text-lg sm:text-xl text-ink-100">
                Scientia Omnibus
              </span>
            </div>
            <p className="font-mono text-[11px] text-ink-500 uppercase tracking-widest font-semibold">
              {language === 'en' ? 'Volunteer open-source initiative' : 'Валонцёрская open-source ініцыятыва'}
            </p>
          </div>

          <div className="md:col-span-5 text-sm max-w-md leading-relaxed md:border-l md:border-ink-800 md:pl-6">
            <p className="text-ink-400">
              {t.footerMission[language]}
            </p>
          </div>

          <div className="md:col-span-3 flex justify-start md:justify-end">
            <a
              href="https://github.com/Scientia-Omnibus"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-ink-300 border border-ink-700 hover:border-phos-400 hover:text-phos-300 transition-colors rounded-lg px-3.5 py-2"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center pt-5 gap-3 font-mono text-[11px] text-ink-500 font-medium text-center sm:text-left">
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
