import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/modules';
import { Github, Library, Keyboard } from 'lucide-react';
import joinUs from '../assets/images/join-us.jpg';

interface CommunitySectionProps {
  language: Language;
}

export default function CommunitySection({ language }: CommunitySectionProps) {
  const t = UI_TRANSLATIONS;

  return (
    <section id="community" className="py-12 sm:py-20 bg-bg-warm overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="font-fredoka text-xs sm:text-sm font-bold text-stone-900 bg-cartoon-blue px-4 py-1.5 border-2 border-stone-900 rounded-lg shadow-[2px_2px_0px_#1A1A1A] uppercase tracking-wider">
            {language === 'en' ? 'Contribute' : 'Удзел'}
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-bold text-stone-950 mt-4 sm:mt-5 mb-3 sm:mb-4 leading-tight">
            {t.contribTitle[language]}
          </h2>
          <p className="text-sm sm:text-base text-gray-750 leading-relaxed font-sans font-medium px-2">
            {t.contribSubtitle[language]}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 order-2 lg:order-1">
            <div className="p-5 sm:p-6 bg-white sketch-border hover:bg-cartoon-blue transition-colors flex flex-col sm:flex-row gap-4 sm:gap-5">
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center sketch-border-xs bg-cartoon-yellow text-stone-900">
                <Library className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-stone-950 text-lg sm:text-xl leading-snug">
                  {t.contribNonCoder[language]}
                </h3>
                <p className="text-sm text-gray-700 font-sans leading-relaxed mt-2">
                  {t.contribNonCoderDesc[language]}
                </p>
                <a
                  href="https://github.com/Scientia-Omnibus"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-mono bg-cartoon-yellow border border-stone-900 hover:bg-cartoon-orange px-2.5 py-1 rounded transition-all font-bold"
                >
                  {language === 'en' ? 'Write on GitHub' : 'Пісаць на GitHub'} &rarr;
                </a>
              </div>
            </div>

            <div className="p-5 sm:p-6 bg-white sketch-border hover:bg-cartoon-purple transition-colors flex flex-col sm:flex-row gap-4 sm:gap-5">
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center sketch-border-xs bg-cartoon-purple text-stone-900">
                <Keyboard className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-stone-950 text-lg sm:text-xl leading-snug">
                  {t.contribDev[language]}
                </h3>
                <p className="text-sm text-gray-700 font-sans leading-relaxed mt-2">
                  {t.contribDevDesc[language]}
                </p>
                <a
                  href="https://github.com/Scientia-Omnibus"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-mono bg-cartoon-blue hover:bg-cartoon-orange px-2.5 py-1 border border-stone-900 rounded transition-all font-bold"
                >
                  <Github className="h-3.5 w-3.5" />
                  <span>GitHub &rarr;</span>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
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
        </div>

        <div className="mt-12 sm:mt-16 py-8 sm:py-10 px-5 sm:px-10 bg-cartoon-orange sketch-border text-stone-950 text-center">
          <h3 className="font-display font-bold text-xl sm:text-2xl text-stone-950 leading-tight max-w-xl mx-auto mb-3">
            {language === 'en'
              ? 'Software that respects its users.'
              : 'Софт, які паважае сваіх карыстальнікаў.'}
          </h3>
          <p className="text-sm text-stone-800 max-w-md mx-auto mb-6 leading-relaxed">
            {language === 'en'
              ? 'Every contribution — a paragraph, a bug fix, a translation — makes knowledge more accessible.'
              : 'Кожны ўнёс — абзац, выпраўленне памылкі, пераклад — робіць веды даступней.'}
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
    </section>
  );
}
