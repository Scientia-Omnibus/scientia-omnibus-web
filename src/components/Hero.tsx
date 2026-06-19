import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/modules';
import { Github } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
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
    <section className="relative overflow-hidden bg-bg-warm border-b-3 border-stone-900">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_55%_at_30%_0%,#000_60%,transparent_100%)] opacity-[0.05]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <motion.div
            className="lg:col-span-7 order-2 lg:order-1"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <p className="font-display text-sm sm:text-base font-semibold text-stone-800 tracking-tight mb-3">
              Scientia Omnibus
            </p>

            <h1
              className={`
                font-display font-bold text-stone-950 leading-[1.12] mb-6
                text-[1.75rem] sm:text-4xl lg:text-[2.75rem] xl:text-5xl
                max-w-2xl
                ${language === 'by' ? 'tracking-tight' : ''}
              `}
            >
              {t.heroTitle[language]}
            </h1>

            <p className="text-base sm:text-lg text-stone-600 leading-relaxed mb-8 max-w-xl">
              {t.heroSubtitle[language]}
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-12">
              <button
                type="button"
                onClick={() => onScrollToSection('projects')}
                className="inline-flex items-center justify-center px-6 py-3 sketch-button bg-stone-900 text-white font-bold text-sm hover:bg-stone-800"
              >
                {t.viewProjects[language]}
              </button>

              <a
                href="https://github.com/Scientia-Omnibus/scientia-core"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 sketch-button bg-cartoon-green text-stone-900 font-bold text-sm"
              >
                <Github className="h-4 w-4" />
                {t.viewOnGithub[language]}
              </a>

              <Link
                to="/scientia-core/guide"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-stone-900 rounded-lg text-stone-900 font-bold text-sm hover:bg-white transition-colors"
              >
                {t.viewGuide[language]}
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-8 border-t border-stone-300">
              {HERO_STATS.map(({ key, descKey }) => (
                <div key={key}>
                  <h2 className="font-display font-bold text-base sm:text-lg text-stone-900 leading-snug">
                    {t[key][language]}
                  </h2>
                  <p className="text-sm text-stone-500 leading-relaxed mt-2">
                    {t[descKey][language]}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-5 order-1 lg:order-2 lg:pt-8"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            <div className="mx-auto w-full max-w-md lg:max-w-none">
              <div className="overflow-hidden rounded-xl border-3 border-stone-900 bg-stone-100 shadow-[6px_6px_0px_#1A1A1A]">
                <img
                  src={demoMain}
                  alt="Scientia Omnibus"
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
