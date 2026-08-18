import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/modules';
import { BookOpen, Terminal, Share2, Github, ExternalLink, Languages, GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';
import joinUs from '../assets/images/join-us.jpg';

interface MergedHelpSectionProps {
  language: Language;
}

export default function MergedHelpSection({ language }: MergedHelpSectionProps) {
  const t = UI_TRANSLATIONS;
  const isEn = language === 'en';

  const reveal = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.45, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section id="get-involved" className="py-16 sm:py-24 bg-ink-950 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl mx-auto mb-10 sm:mb-14 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="eyebrow mb-4">{isEn ? 'Get involved' : 'Далучыцца'}</p>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-[2.75rem] font-bold text-ink-100 leading-tight mb-4">
            {t.helpSectionTitle[language]}
          </h2>
          <p className="text-sm sm:text-base text-ink-400 leading-relaxed">
            {t.helpSectionSubtitle[language]}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-10 sm:mb-12">
          <motion.div
            {...reveal(0.05)}
            className="panel p-5 sm:p-6 flex flex-col hover:border-phos-400/50 transition-colors"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-ink-850 border border-ink-700 text-phos-400 mb-4">
              <Languages className="h-5 w-5" />
            </div>
            <h3 className="font-mono font-bold text-ink-100 text-base sm:text-lg leading-snug mb-2">
              {t.helpTranslatorTitle[language]}
            </h3>
            <p className="text-sm text-ink-400 leading-relaxed flex-grow">
              {t.helpTranslatorDesc[language]}
            </p>
            <a
              href="https://github.com/Scientia-Omnibus"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-phos-400 hover:text-phos-300 transition-colors"
            >
              {isEn ? 'Translate on GitHub' : 'Перакладаць на GitHub'} <ExternalLink className="h-3 w-3" />
            </a>
          </motion.div>

          <motion.div
            {...reveal(0.12)}
            className="panel p-5 sm:p-6 flex flex-col hover:border-phos-400/50 transition-colors"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-ink-850 border border-ink-700 text-phos-400 mb-4">
              <BookOpen className="h-5 w-5" />
            </div>
            <h3 className="font-mono font-bold text-ink-100 text-base sm:text-lg leading-snug mb-2">
              {t.helpWriteTitle[language]}
            </h3>
            <p className="text-sm text-ink-400 leading-relaxed flex-grow">
              {t.helpWriteDesc[language]}
            </p>
            <div className="space-y-2.5 mt-4">
              <a
                href="https://github.com/Scientia-Omnibus/formal-sciences"
                target="_blank"
                rel="noreferrer"
                className="group block p-3 rounded-lg border border-ink-700 bg-ink-850/50 hover:border-phos-400/50 hover:bg-ink-850 transition-all"
              >
                <div className="flex items-center gap-2 font-mono text-sm font-bold text-ink-200 mb-0.5">
                  <Github className="h-3.5 w-3.5 shrink-0" />
                  <span>formal-sciences</span>
                  <ExternalLink className="h-3 w-3 ml-auto opacity-30 group-hover:opacity-100 transition-opacity shrink-0" />
                </div>
                <p className="text-xs text-ink-500 leading-snug">
                  {t.helpFormalDesc[language]}
                </p>
              </a>
              <a
                href="https://github.com/Scientia-Omnibus/survival-and-medicine"
                target="_blank"
                rel="noreferrer"
                className="group block p-3 rounded-lg border border-ink-700 bg-ink-850/50 hover:border-phos-400/50 hover:bg-ink-850 transition-all"
              >
                <div className="flex items-center gap-2 font-mono text-sm font-bold text-ink-200 mb-0.5">
                  <Github className="h-3.5 w-3.5 shrink-0" />
                  <span>survival-and-medicine</span>
                  <ExternalLink className="h-3 w-3 ml-auto opacity-30 group-hover:opacity-100 transition-opacity shrink-0" />
                </div>
                <p className="text-xs text-ink-500 leading-snug">
                  {t.helpSurvivalDesc[language]}
                </p>
              </a>
            </div>
          </motion.div>

          <motion.div
            {...reveal(0.19)}
            className="panel p-5 sm:p-6 flex flex-col hover:border-phos-400/50 transition-colors"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-ink-850 border border-ink-700 text-phos-400 mb-4">
              <GraduationCap className="h-5 w-5" />
            </div>
            <h3 className="font-mono font-bold text-ink-100 text-base sm:text-lg leading-snug mb-2">
              {t.helpTeacherTitle[language]}
            </h3>
            <p className="text-sm text-ink-400 leading-relaxed flex-grow">
              {t.helpTeacherDesc[language]}
            </p>
            <a
              href="https://github.com/Scientia-Omnibus"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-phos-400 hover:text-phos-300 transition-colors"
            >
              {isEn ? 'Report feedback' : 'Падзяліцца меркаваннем'} <ExternalLink className="h-3 w-3" />
            </a>
          </motion.div>

          <motion.div
            {...reveal(0.26)}
            className="panel p-5 sm:p-6 flex flex-col hover:border-phos-400/50 transition-colors"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-ink-850 border border-ink-700 text-phos-400 mb-4">
              <Terminal className="h-5 w-5" />
            </div>
            <h3 className="font-mono font-bold text-ink-100 text-base sm:text-lg leading-snug mb-2">
              {t.helpBuildTitle[language]}
            </h3>
            <p className="text-sm text-ink-400 leading-relaxed flex-grow">
              {t.helpBuildDesc[language]}
            </p>
            <div className="space-y-2.5 mt-4">
              <a
                href="https://github.com/Scientia-Omnibus/scientia-core"
                target="_blank"
                rel="noreferrer"
                className="group block p-3 rounded-lg border border-ink-700 bg-ink-850/50 hover:border-phos-400/50 hover:bg-ink-850 transition-all"
              >
                <div className="flex items-center gap-2 font-mono text-sm font-bold text-ink-200 mb-0.5">
                  <Github className="h-3.5 w-3.5 shrink-0" />
                  <span>scientia-core</span>
                  <ExternalLink className="h-3 w-3 ml-auto opacity-30 group-hover:opacity-100 transition-opacity shrink-0" />
                </div>
                <p className="text-xs text-ink-500 leading-snug">
                  {isEn
                    ? 'Python/Textual — bug fixes, optimizations, translations.'
                    : 'Python/Textual — выпраўленні, аптымізацыя, пераклады.'}
                </p>
              </a>
              <div className="p-3 rounded-lg border border-dashed border-ink-700 bg-ink-850/50">
                <div className="flex items-center gap-2 font-mono text-sm font-bold text-ink-400 mb-0.5">
                  <Github className="h-3.5 w-3.5 shrink-0" />
                  <span>scientia-editor</span>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400 border border-amber-400/40 px-2 py-0.5 rounded ml-auto shrink-0">
                    {isEn ? 'Open Source Coming' : 'Open Source хутка'}
                  </span>
                </div>
                <p className="text-xs text-ink-500 leading-snug">
                  {t.helpEditorComing[language]}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          {...reveal(0.05)}
          className="panel p-6 sm:p-8 mb-10 sm:mb-12 border-phos-400/40 bg-gradient-to-br from-ink-900 to-ink-900/40 relative overflow-hidden"
        >
          <div className="absolute -right-16 -top-16 h-48 w-48 bg-phos-400/10 blur-3xl rounded-full pointer-events-none" />
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 relative">
            <div className="max-w-2xl">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-ink-100 mb-2 leading-tight">
                {t.helpNoCodeTitle[language]}
              </h3>
              <p className="text-sm text-ink-400 leading-relaxed">
                {t.helpNoCodeDesc[language]}
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a
                href="https://github.com/Scientia-Omnibus"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                <Github className="h-4 w-4" />
                {isEn ? 'Join the community' : 'Далучыцца да супольнасці'}
              </a>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          <motion.div
            className="lg:col-span-5 flex justify-center"
            {...reveal(0.1)}
          >
            <div className="relative p-2 rounded-xl border border-ink-700 bg-ink-900 w-full max-w-sm lg:max-w-none">
              <div className="overflow-hidden rounded-lg bg-ink-900 border border-ink-800 aspect-4/3">
                <img
                  src={joinUs}
                  alt="Join the Scientia Omnibus community"
                  className="w-full h-full object-cover select-none pointer-events-none"
                />
              </div>
              <a
                href="https://github.com/Scientia-Omnibus"
                target="_blank"
                rel="noreferrer"
                className="absolute -bottom-3 sm:-bottom-4 -left-3 sm:-left-4 inline-flex items-center gap-1.5 bg-phos-400 text-ink-950 font-mono text-xs font-bold uppercase px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg shadow-lg hover:bg-phos-300 transition-colors"
              >
                <Github className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                <span>{isEn ? 'Join on GitHub' : 'Далучыцца на GitHub'}</span>
              </a>
            </div>
          </motion.div>

          <div className="lg:col-span-7">
            <motion.div
              className="panel p-5 sm:p-7 mb-4"
              {...reveal(0.15)}
            >
              <div className="flex items-start gap-3">
                <Share2 className="h-5 w-5 text-phos-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-mono font-bold text-lg text-ink-100 mb-2">
                    {t.helpShareTitle[language]}
                  </h3>
                  <p className="text-sm text-ink-400 leading-relaxed mb-4">
                    {t.helpShareDesc[language]}
                  </p>
                  <p className="text-xs font-mono font-semibold text-phos-400 leading-snug">
                    {t.helpCTA[language]}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="panel p-5 sm:p-7 border-l-2 border-l-phos-500"
              {...reveal(0.2)}
            >
              <h3 className="font-display font-bold text-xl sm:text-2xl text-ink-100 leading-tight mb-3">
                {isEn ? 'Software that respects its users.' : 'Софт, які паважае сваіх карыстальнікаў.'}
              </h3>
              <p className="text-sm text-ink-400 max-w-lg mb-5 leading-relaxed">
                {isEn
                  ? 'A paragraph, a bug fix, a translation — every contribution makes knowledge more accessible.'
                  : 'Абзац, выпраўленне памылкі, пераклад — кожны ўнёсак робіць веды даступней.'}
              </p>
              <a
                href="https://github.com/Scientia-Omnibus"
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
              >
                <Github className="h-4 w-4" />
                <span>github.com/Scientia-Omnibus</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
