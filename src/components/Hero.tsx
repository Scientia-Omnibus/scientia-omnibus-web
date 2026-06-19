import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/modules';
import { Github, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import demoMain from '../assets/images/demo-main.jpg';

interface HeroProps {
  language: Language;
  onScrollToSection: (id: string) => void;
}

const QUICK_STATS = [
  { key: 'statLightweight' as const, descKey: 'statLightweightDesc' as const },
  { key: 'statOffline' as const, descKey: 'statOfflineDesc' as const },
  { key: 'statHardware' as const, descKey: 'statHardwareDesc' as const },
] as const;

export default function Hero({ language, onScrollToSection }: HeroProps) {
  const t = UI_TRANSLATIONS;

  return (
    <section className="relative overflow-hidden bg-bg-warm border-b-3 border-stone-900">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_65%,transparent_100%)] opacity-[0.06]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 lg:pt-20 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-[0.15em] text-stone-500 mb-4">
              {t.heroEyebrow[language]}
            </p>

            <h1
              className={`
                font-display font-bold text-stone-950 leading-[1.08] mb-5
                text-[2rem] sm:text-5xl lg:text-[3.25rem] xl:text-6xl
                ${language === 'by' ? 'tracking-tight' : ''}
              `}
            >
              {t.heroTitle[language]}
            </h1>

            <p className="text-base sm:text-lg text-stone-700 font-medium leading-relaxed mb-3 max-w-xl">
              {t.heroLead[language]}
            </p>

            <p className="text-sm text-stone-500 leading-relaxed mb-8 max-w-xl">
              {t.heroSubtitle[language]}
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-10">
              <button
                onClick={() => onScrollToSection('projects')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sketch-button bg-stone-900 text-white font-bold text-sm sm:text-base hover:bg-stone-800"
              >
                <span>{t.viewProjects[language]}</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <a
                href="https://github.com/Scientia-Omnibus/scientia-core"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sketch-button bg-cartoon-green text-stone-900 font-bold text-sm sm:text-base"
              >
                <Github className="h-4 w-4" />
                <span>{t.viewOnGithub[language]}</span>
              </a>

              <Link
                to="/scientia-core/guide"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-stone-900 rounded-lg text-stone-900 font-bold text-sm sm:text-base hover:bg-cartoon-blue transition-colors"
              >
                <span>{t.viewGuide[language]}</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-xl lg:max-w-none">
              {QUICK_STATS.map(({ key, descKey }) => (
                <div
                  key={key}
                  className="px-4 py-3 bg-white border-2 border-stone-900 rounded-lg shadow-[2px_2px_0px_#1A1A1A]"
                >
                  <p className="font-display font-bold text-base sm:text-lg text-stone-900 leading-tight">
                    {t[key][language]}
                  </p>
                  <p className="text-[11px] sm:text-xs text-stone-500 mt-1 leading-snug">
                    {t[descKey][language]}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="relative w-full max-w-md lg:max-w-lg">
              <div className="absolute -inset-3 bg-cartoon-blue/30 rounded-2xl border-2 border-stone-900/10 -z-10" />

              <div className="overflow-hidden rounded-xl border-3 border-stone-900 bg-stone-100 shadow-[8px_8px_0px_#1A1A1A]">
                <img
                  src={demoMain}
                  alt="Scientia Omnibus"
                  className="w-full aspect-4/3 object-cover"
                />
              </div>

              <div className="absolute -bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-auto flex flex-wrap gap-2 justify-center sm:justify-end">
                <span className="inline-block bg-white border-2 border-stone-900 text-stone-900 font-mono text-[10px] sm:text-xs font-bold uppercase px-3 py-1.5 rounded-lg shadow-[2px_2px_0px_#1A1A1A]">
                  {language === 'en' ? 'Offline-first' : 'Афлайн-падыход'}
                </span>
                <span className="inline-block bg-cartoon-green border-2 border-stone-900 text-stone-900 font-mono text-[10px] sm:text-xs font-bold uppercase px-3 py-1.5 rounded-lg shadow-[2px_2px_0px_#1A1A1A]">
                  {language === 'en' ? 'GPL-3.0' : 'Адкрыты код'}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
