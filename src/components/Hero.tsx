import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/modules';
import { LINKS } from '../data/links';
import { Github } from 'lucide-react';
import { motion } from 'motion/react';
import AnimatedNumber from './AnimatedNumber';

interface HeroProps {
  language: Language;
  onScrollToSection: (id: string) => void;
}

const HERO_STATS = [
  { key: 'heroStatFootprint', descKey: 'heroStatFootprintDesc', value: 8, suffix: ' MB' },
  { key: 'heroStatMemory', descKey: 'heroStatMemoryDesc', value: 98, suffix: '%' },
  { key: 'heroStatOffline', descKey: 'heroStatOfflineDesc', value: 100, suffix: '%' },
  { key: 'heroStatHardware', descKey: 'heroStatHardwareDesc', value: 15, suffix: '+' },
] as const;

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.25 } },
};

const wordVariant = {
  hidden: { opacity: 0, y: 42, filter: 'blur(12px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Hero({ language, onScrollToSection }: HeroProps) {
  const t = UI_TRANSLATIONS;
  const words = t.heroTitle[language].split(' ');
  const subtitleDelay = 0.25 + words.length * 0.09 + 0.55;
  const ctaDelay = subtitleDelay + 0.3;

  return (
    <section className="relative overflow-hidden bg-ink-950 min-h-[calc(100svh-3.5rem)] sm:min-h-[calc(100svh-4rem)] flex flex-col">
      <div className="grid-bg absolute inset-0 pointer-events-none" />

      <div className="relative flex-1 flex flex-col items-center justify-center mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
        <motion.p
          className="eyebrow mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {t.heroEyebrow[language]}
        </motion.p>

        <h1 className="font-display font-bold text-ink-100 tracking-tight leading-[1.12] text-[2.6rem] sm:text-6xl lg:text-7xl xl:text-[5rem]">
          <motion.span
            className="inline-flex flex-wrap justify-center"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {words.map((word, i) => (
              <motion.span
                key={`${word}-${i}`}
                variants={wordVariant}
                className="inline-block mr-[0.28em] last:mr-0"
              >
                {word}
              </motion.span>
            ))}
            <motion.span variants={wordVariant} className="inline-block ml-1">
              <span className="blink inline-block w-[0.5em] h-[0.85em] bg-phos-400 align-[-0.12em]" />
            </motion.span>
          </motion.span>
        </h1>

        <motion.p
          className="text-base sm:text-lg text-ink-300 leading-relaxed mt-7 sm:mt-8 mb-10 sm:mb-12 max-w-2xl font-sans"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: subtitleDelay, ease: [0.16, 1, 0.3, 1] }}
        >
          {t.heroSubtitle[language]}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-3"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: ctaDelay, ease: [0.16, 1, 0.3, 1] }}
        >
          <button
            type="button"
            onClick={() => onScrollToSection('projects')}
            className="btn btn-primary"
          >
            {t.viewProjects[language]}
          </button>
          <a
            href={LINKS.org}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <Github className="h-4 w-4" />
            {t.viewOnGithub[language]}
          </a>
        </motion.div>
      </div>

      <motion.div
        className="relative border-t border-ink-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: ctaDelay + 0.35 }}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-ink-800">
            {HERO_STATS.map(({ key, descKey, value, suffix }) => (
              <div key={key} className="bg-ink-950 px-4 sm:px-6 py-4 sm:py-5 text-left flex flex-col gap-1.5">
                <AnimatedNumber
                  value={value}
                  suffix={suffix}
                  className="stat-num text-xl sm:text-2xl"
                />
                <p className="text-[10px] sm:text-[11px] text-ink-500 leading-snug font-mono">
                  {t[descKey][language]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
