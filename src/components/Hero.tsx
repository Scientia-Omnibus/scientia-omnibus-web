import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/modules';
import { Github } from 'lucide-react';
import { motion } from 'motion/react';
import demoMain from '../assets/images/demo-main.jpg';

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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <h1
              className={`
                font-display font-bold text-stone-950 leading-[1.12] mb-6
                text-[1.75rem] sm:text-4xl lg:text-[2.75rem] xl:text-[2.85rem]
                max-w-xl
                ${language === 'by' ? 'tracking-tight' : ''}
              `}
            >
              {t.heroTitle[language]}
            </h1>

            <p className="text-base sm:text-lg text-stone-600 leading-relaxed mb-8 max-w-lg font-mono">
              {t.heroSubtitle[language]}
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
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
              className="mt-12 sm:mt-14 pt-8 sm:pt-10 border-t border-stone-300 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2 }}
            >
              {HERO_STATS.map(({ key, descKey }) => (
                <div key={key} className="flex flex-col gap-1.5">
                  <span className="font-mono text-[11px] sm:text-xs font-bold text-stone-700 bg-stone-100 border border-stone-300 rounded-md px-2.5 py-1 w-fit leading-none">
                    {t[key][language]}
                  </span>
                  <p className="text-xs sm:text-sm text-stone-500 leading-relaxed">
                    {t[descKey][language]}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            <div className="w-full max-w-md lg:max-w-lg">
              <div className="overflow-hidden rounded-xl border-2 border-stone-900 bg-stone-100 shadow-[4px_4px_0px_#1A1A1A]">
                <img
                  src={demoMain}
                  alt=""
                  className="w-full aspect-4/3 object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
