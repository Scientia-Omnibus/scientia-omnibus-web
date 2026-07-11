import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/modules';
import { Github } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  language: Language;
  onScrollToSection: (id: string) => void;
}

const HERO_STATS = [
  { key: 'statLightweight' as const, descKey: 'statLightweightDesc' as const },
  { key: 'statOffline' as const, descKey: 'statOfflineDesc' as const },
  { key: 'statHardware' as const, descKey: 'statHardwareDesc' as const },
] as const;

export default function Hero({ language, onScrollToSection }: HeroProps) {
  const t = UI_TRANSLATIONS;

  return (
    <section className="relative overflow-hidden bg-bg-warm">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span
            className={`
              inline-block font-fredoka text-xs sm:text-sm font-bold
              text-stone-1000 bg-cartoon-purple px-4 py-1.5
              border-2 border-stone-900 rounded-lg
              shadow-[2px_2px_0px_#1A1A1A] uppercase tracking-wider
              mb-6 sm:mb-8
            `}
          >
            {language === 'en'
              ? 'Volunteer Open-Source Initiative'
              : 'Валонцёрская Open-Source Ініцыятыва'}
          </span>

          <h1
            className={`
              font-display font-bold text-stone-950 leading-[1.1] mb-6
              text-[2rem] sm:text-[3rem] lg:text-[3.5rem] xl:text-[4rem]
              max-w-3xl mx-auto
              ${language === 'by' ? 'tracking-tight' : ''}
            `}
          >
            {t.heroTitle[language]}
          </h1>

          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px flex-1 max-w-16 sm:max-w-24 bg-stone-300" />
            <span className="font-mono text-sm sm:text-base text-stone-400 font-bold select-none">
              $ _
            </span>
            <div className="h-px flex-1 max-w-16 sm:max-w-24 bg-stone-300" />
          </div>

          <p className="text-base sm:text-lg text-stone-600 leading-relaxed mb-10 max-w-2xl mx-auto font-mono">
            {t.heroSubtitle[language]}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 mb-14 sm:mb-18">
            <button
              type="button"
              onClick={() => onScrollToSection('projects')}
              className="inline-flex items-center justify-center px-6 py-3 sketch-button bg-stone-900 text-white font-bold text-sm hover:bg-stone-800"
            >
              {t.viewProjects[language]}
            </button>

            <a
              href="https://github.com/Scientia-Omnibus"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 sketch-button bg-cartoon-green text-stone-900 font-bold text-sm"
            >
              <Github className="h-4 w-4" />
              {t.viewOnGithub[language]}
            </a>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
          >
            {HERO_STATS.map(({ key, descKey }) => (
              <div key={key} className="flex flex-col gap-1.5 items-center">
                <span className="font-mono text-xs sm:text-sm font-bold text-stone-700 bg-stone-100 border border-stone-300 rounded-md px-2.5 py-1 w-fit leading-none">
                  {t[key][language]}
                </span>
                <p className="text-xs sm:text-sm text-stone-500 leading-relaxed text-center">
                  {t[descKey][language]}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
