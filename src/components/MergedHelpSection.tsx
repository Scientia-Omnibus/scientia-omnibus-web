import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/modules';
import { BookOpen, Terminal, Share2, Github, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import joinUs from '../assets/images/join-us.jpg';

interface MergedHelpSectionProps {
  language: Language;
}

export default function MergedHelpSection({ language }: MergedHelpSectionProps) {
  const t = UI_TRANSLATIONS;

  return (
    <section id="get-involved" className="py-12 sm:py-20 bg-[#FFFCEE] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="font-fredoka text-xs sm:text-sm font-bold text-stone-900 bg-cartoon-purple px-4 py-1.5 border-2 border-stone-900 rounded-lg shadow-[2px_2px_0px_#1A1A1A] uppercase tracking-wider">
            {language === 'en' ? 'Get Involved' : 'Далучыцца'}
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-bold text-stone-950 mt-4 sm:mt-5 mb-3 sm:mb-4 leading-tight">
            {t.helpSectionTitle[language]}
          </h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-sans font-medium">
            {t.helpSectionSubtitle[language]}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-white sketch-border p-5 sm:p-6 flex flex-col hover:shadow-[8px_8px_0px_#1A1A1A] transition-shadow"
          >
            <div className="flex h-12 w-12 items-center justify-center sketch-border-xs bg-cartoon-yellow text-stone-900 mb-4">
              <BookOpen className="h-6 w-6" />
            </div>
            <h3 className="font-display font-bold text-stone-950 text-lg sm:text-xl leading-snug mb-2">
              {t.helpWriteTitle[language]}
            </h3>
            <p className="text-sm text-gray-700 font-sans leading-relaxed mb-5 flex-grow">
              {t.helpWriteDesc[language]}
            </p>

            <div className="space-y-3 mt-auto">
              <a
                href="https://github.com/Scientia-Omnibus/formal-sciences"
                target="_blank"
                rel="noreferrer"
                className="group block p-3 border-2 border-stone-200 rounded-xl bg-[#FFFCEE] hover:border-cartoon-purple hover:bg-cartoon-purple/20 transition-all"
              >
                <div className="flex items-center gap-2 text-sm font-bold text-stone-900 mb-0.5">
                  <Github className="h-3.5 w-3.5 shrink-0" />
                  <span>formal-sciences</span>
                  <ExternalLink className="h-3 w-3 ml-auto opacity-30 group-hover:opacity-100 transition-opacity shrink-0" />
                </div>
                <p className="text-xs text-stone-500 leading-snug">
                  {t.helpFormalDesc[language]}
                </p>
              </a>

              <a
                href="https://github.com/Scientia-Omnibus/survival-and-medicine"
                target="_blank"
                rel="noreferrer"
                className="group block p-3 border-2 border-stone-200 rounded-xl bg-[#FFFCEE] hover:border-cartoon-purple hover:bg-cartoon-purple/20 transition-all"
              >
                <div className="flex items-center gap-2 text-sm font-bold text-stone-900 mb-0.5">
                  <Github className="h-3.5 w-3.5 shrink-0" />
                  <span>survival-and-medicine</span>
                  <ExternalLink className="h-3 w-3 ml-auto opacity-30 group-hover:opacity-100 transition-opacity shrink-0" />
                </div>
                <p className="text-xs text-stone-500 leading-snug">
                  {t.helpSurvivalDesc[language]}
                </p>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-white sketch-border p-5 sm:p-6 flex flex-col hover:shadow-[8px_8px_0px_#1A1A1A] transition-shadow"
          >
            <div className="flex h-12 w-12 items-center justify-center sketch-border-xs bg-cartoon-blue text-stone-900 mb-4">
              <Terminal className="h-6 w-6" />
            </div>
            <h3 className="font-display font-bold text-stone-950 text-lg sm:text-xl leading-snug mb-2">
              {t.helpBuildTitle[language]}
            </h3>
            <p className="text-sm text-gray-700 font-sans leading-relaxed mb-5 flex-grow">
              {t.helpBuildDesc[language]}
            </p>

            <div className="space-y-3 mt-auto">
              <a
                href="https://github.com/Scientia-Omnibus/scientia-core"
                target="_blank"
                rel="noreferrer"
                className="group block p-3 border-2 border-stone-200 rounded-xl bg-[#FFFCEE] hover:border-cartoon-blue hover:bg-cartoon-blue/20 transition-all"
              >
                <div className="flex items-center gap-2 text-sm font-bold text-stone-900 mb-0.5">
                  <Github className="h-3.5 w-3.5 shrink-0" />
                  <span>scientia-core</span>
                  <ExternalLink className="h-3 w-3 ml-auto opacity-30 group-hover:opacity-100 transition-opacity shrink-0" />
                </div>
                <p className="text-xs text-stone-500 leading-snug">
                  {language === 'en'
                    ? 'Python/Textual — offline knowledge reader. Bug fixes, optimizations, translations.'
                    : 'Python/Textual — афлайн чытальнік ведаў. Выпраўленні, аптымізацыя, пераклады.'}
                </p>
              </a>

              <div className="p-3 border-2 border-dashed border-stone-400 rounded-xl bg-[#FFFCEE]">
                <div className="flex items-center gap-2 text-sm font-bold text-stone-700 mb-0.5">
                  <Github className="h-3.5 w-3.5 shrink-0" />
                  <span>scientia-editor</span>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-cartoon-yellow border border-stone-400 text-stone-700 px-2 py-0.5 rounded ml-auto shrink-0">
                    {language === 'en' ? 'Open Source Coming' : 'Open Source хутка'}
                  </span>
                </div>
                <p className="text-xs text-stone-500 leading-snug">
                  {t.helpEditorComing[language]}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="bg-white sketch-border p-5 sm:p-6 flex flex-col hover:shadow-[8px_8px_0px_#1A1A1A] transition-shadow md:col-span-2 lg:col-span-1"
          >
            <div className="flex h-12 w-12 items-center justify-center sketch-border-xs bg-cartoon-green text-stone-900 mb-4">
              <Share2 className="h-6 w-6" />
            </div>
            <h3 className="font-display font-bold text-stone-950 text-lg sm:text-xl leading-snug mb-2">
              {t.helpShareTitle[language]}
            </h3>
            <p className="text-sm text-gray-700 font-sans leading-relaxed mb-6 flex-grow">
              {t.helpShareDesc[language]}
            </p>

            <div className="mt-auto p-4 sm:p-5 bg-cartoon-orange border-2 border-stone-900 rounded-xl text-center">
              <p className="text-xs font-mono font-bold text-stone-800 mb-3 leading-snug">
                {t.helpCTA[language]}
              </p>
              <a
                href="https://github.com/Scientia-Omnibus"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 sketch-button bg-stone-900 text-white text-xs font-bold hover:bg-stone-950"
              >
                <Github className="h-3.5 w-3.5 text-cartoon-green" />
                {language === 'en' ? 'Join the Community' : 'Далучыцца да супольнасці'}
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative p-2 bg-white border-3 border-stone-900 rounded-xl shadow-[6px_6px_0px_#1A1A1A] w-full max-w-sm lg:max-w-none">
              <div className="overflow-hidden rounded-lg bg-[#FFFCEE] border-2 border-stone-900 aspect-4/3">
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
                className="absolute -bottom-3 sm:-bottom-4 -left-3 sm:-left-4 bg-cartoon-orange text-stone-950 font-display text-[10px] sm:text-sm font-bold uppercase px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg border-2 border-stone-900 shadow-[3px_3px_0px_#1D1D1D] transform -rotate-1 z-10 flex items-center gap-1.5 hover:scale-105 transition-all"
              >
                <Github className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                <span>{language === 'en' ? 'Join on GitHub' : 'Далучыцца на GitHub'}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 text-center lg:text-left">
            <div className="p-5 sm:p-7 bg-cartoon-orange sketch-border">
              <h3 className="font-display font-bold text-xl sm:text-2xl text-stone-950 leading-tight mb-3">
                {language === 'en'
                  ? 'Software that respects its users.'
                  : 'Софт, які паважае сваіх карыстальнікаў.'}
              </h3>
              <p className="text-sm text-stone-800 max-w-lg mx-auto lg:mx-0 mb-5 leading-relaxed">
                {language === 'en'
                  ? 'A paragraph, a bug fix, a translation — every contribution makes knowledge more accessible.'
                  : 'Абзац, выпраўленне памылкі, пераклад — кожны ўнёсак робіць веды даступней.'}
              </p>
              <a
                href="https://github.com/Scientia-Omnibus"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-stone-900 text-white border-2 border-stone-900 font-mono text-xs sm:text-sm font-bold shadow-[2px_2px_0px_#111111] transition-all hover:bg-stone-950"
              >
                <Github className="h-4 w-4 text-cartoon-orange" />
                <span>github.com/Scientia-Omnibus</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
