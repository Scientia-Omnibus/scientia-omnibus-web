import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/modules';
import { Globe, Terminal, BookOpen, Keyboard } from 'lucide-react';
import { motion } from 'motion/react';

interface WhySectionProps {
  language: Language;
}

const CAPABILITIES = {
  en: ['keyboard-first', 'scriptable', 'offline', 'runs on anything'],
  by: ['кіраванне з клавіятуры', 'скрыптабельны', 'афлайн', 'працуе на чым заўгодна'],
} as const;

export default function WhySection({ language }: WhySectionProps) {
  const t = UI_TRANSLATIONS;

  const cardVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="why" className="py-16 sm:py-24 bg-ink-950 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl mx-auto mb-10 sm:mb-14 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-display text-2xl sm:text-4xl lg:text-[2.75rem] font-bold text-ink-100 leading-tight mb-4">
            {t.whyTitle[language]}
          </h2>
          <p className="text-sm sm:text-base text-ink-400 leading-relaxed">
            {t.whySubtitle[language]}
          </p>
        </motion.div>

        <motion.div
          className="panel px-5 sm:px-7 py-4 mb-8 sm:mb-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-dashed"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <span className="inline-flex items-center gap-2 font-mono text-xs font-bold text-phos-400 uppercase tracking-widest">
            <Keyboard className="h-4 w-4" />
            {t.whyPlatformLabel[language]}
          </span>
          {CAPABILITIES[language].map((cap) => (
            <span key={cap} className="font-mono text-xs text-ink-400">
              <span className="text-phos-500 mr-1.5">▸</span>
              {cap}
            </span>
          ))}
        </motion.div>

        <motion.div
          className="panel p-5 sm:p-7 mb-8 sm:mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="font-mono font-bold text-lg sm:text-xl text-ink-100 mb-2">
                {t.problemTitle[language]}
              </h3>
              <p className="text-sm text-ink-400 leading-relaxed max-w-2xl">
                {t.problemDesc[language]}
              </p>
            </div>
            <div className="shrink-0 inline-flex items-center gap-2 rounded-lg border border-clay-400/40 bg-clay-400/10 px-4 py-2.5 font-mono text-xs text-clay-300 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-clay-400" />
              {t.problemStat[language]}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="panel p-5 sm:p-7 mb-10 sm:mb-14 border-l-2 border-l-phos-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <div className="flex items-start gap-3">
            <BookOpen className="h-5 w-5 text-phos-400 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-mono font-bold text-base sm:text-lg text-ink-100 mb-2">
                {t.impactTitle[language]}
              </h3>
              <p className="text-sm text-ink-400 leading-relaxed">
                {t.impactItems[language]}
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          <motion.div
            className="panel p-6 sm:p-7 hover:border-phos-400/50 transition-colors duration-200"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-ink-850 border border-ink-700 text-phos-400 mb-4">
              <Globe className="h-5 w-5" />
            </div>
            <h3 className="font-mono text-lg font-bold text-ink-100 mb-2 leading-tight">
              {t.equityTitle[language]}
            </h3>
            <p className="text-sm text-ink-400 leading-relaxed">
              {t.equityDesc[language]}
            </p>
          </motion.div>

          <motion.div
            className="panel p-6 sm:p-7 hover:border-phos-400/50 transition-colors duration-200"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-ink-850 border border-ink-700 text-phos-400 mb-4">
              <Terminal className="h-5 w-5" />
            </div>
            <h3 className="font-mono text-lg font-bold text-ink-100 mb-2 leading-tight">
              {t.efficiencyTitle[language]}
            </h3>
            <p className="text-sm text-ink-400 leading-relaxed">
              {t.efficiencyDesc[language]}
            </p>
          </motion.div>

          <motion.div
            className="panel p-6 sm:p-7 hover:border-phos-400/50 transition-colors duration-200"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-ink-850 border border-ink-700 text-phos-400 mb-4">
              <BookOpen className="h-5 w-5" />
            </div>
            <h3 className="font-mono text-lg font-bold text-ink-100 mb-2 leading-tight">
              {t.empowermentTitle[language]}
            </h3>
            <p className="text-sm text-ink-400 leading-relaxed">
              {t.empowermentDesc[language]}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
