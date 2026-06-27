import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/modules';
import { Globe, Terminal, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';

interface WhySectionProps {
  language: Language;
}

export default function WhySection({ language }: WhySectionProps) {
  const t = UI_TRANSLATIONS;

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <section id="why" className="py-12 sm:py-20 bg-bg-warm overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="font-fredoka text-xs sm:text-sm font-bold text-stone-1000 bg-cartoon-purple px-4 py-1.5 border-2 border-stone-900 rounded-lg shadow-[2px_2px_0px_#1A1A1A] uppercase tracking-wider">
            {language === 'en' ? 'Our approach' : 'Наш падыход'}
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-bold text-stone-950 mt-4 sm:mt-5 mb-3 sm:mb-4 leading-tight">
            {t.whyTitle[language]}
          </h2>
          <p className="text-sm sm:text-base text-gray-750 leading-relaxed font-sans font-medium px-2">
            {t.whySubtitle[language]}
          </p>
        </div>

        <div className="mb-8 sm:mb-10 p-5 sm:p-7 bg-white sketch-border">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-stone-950 mb-2">
                {t.problemTitle[language]}
              </h3>
              <p className="text-sm text-stone-700 leading-relaxed max-w-2xl">
                {t.problemDesc[language]}
              </p>
            </div>
            <div className="shrink-0 bg-cartoon-orange border-2 border-stone-900 px-4 py-2.5 rounded-lg font-mono text-xs text-stone-900 font-bold shadow-[2px_2px_0px_#111111]">
              {t.problemStat[language]}
            </div>
          </div>
        </div>

        <div className="mb-10 sm:mb-14 p-5 sm:p-7 bg-cartoon-green/40 border-2 border-stone-900 rounded-xl">
          <div className="flex items-start gap-3">
            <BookOpen className="h-5 w-5 text-stone-800 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-display font-bold text-base sm:text-lg text-stone-950 mb-2">
                {t.impactTitle[language]}
              </h3>
              <p className="text-sm text-stone-800 leading-relaxed">
                {t.impactItems[language]}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
          <motion.div
            className="p-6 sm:p-8 bg-white sketch-border hover:bg-cartoon-blue transition-colors duration-200"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="flex h-11 w-11 items-center justify-center sketch-border-xs bg-cartoon-blue text-stone-900 mb-4">
              <Globe className="h-5 w-5" />
            </div>
            <h3 className="font-display text-xl font-bold text-stone-950 mb-2 leading-tight">
              {t.equityTitle[language]}
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              {t.equityDesc[language]}
            </p>
          </motion.div>

          <motion.div
            className="p-6 sm:p-8 bg-white sketch-border hover:bg-cartoon-green transition-colors duration-200"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="flex h-11 w-11 items-center justify-center sketch-border-xs bg-stone-900 text-cartoon-green mb-4">
              <Terminal className="h-5 w-5" />
            </div>
            <h3 className="font-display text-xl font-bold text-stone-950 mb-2 leading-tight">
              {t.efficiencyTitle[language]}
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              {t.efficiencyDesc[language]}
            </p>
          </motion.div>

          <motion.div
            className="p-6 sm:p-8 bg-white sketch-border hover:bg-cartoon-orange transition-colors duration-200"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="flex h-11 w-11 items-center justify-center sketch-border-xs bg-cartoon-orange text-stone-900 mb-4">
              <BookOpen className="h-5 w-5" />
            </div>
            <h3 className="font-display text-xl font-bold text-stone-950 mb-2 leading-tight">
              {t.empowermentTitle[language]}
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              {t.empowermentDesc[language]}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
