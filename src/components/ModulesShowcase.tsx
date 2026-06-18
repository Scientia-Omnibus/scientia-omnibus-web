import { useState } from 'react';
import { Language } from '../types';
import { MODULES, UI_TRANSLATIONS } from '../data/modules';
import screenshotEducation from '../assets/images/screenshot-education.jpg';
import screenshotSurvival from '../assets/images/screenshot-survival.jpg';
import screenshotDiy from '../assets/images/screenshot-diy.jpg';

const SCREENSHOTS: Record<string, string> = {
  education: screenshotEducation,
  survival: screenshotSurvival,
  diy_tech: screenshotDiy,
};

interface ModulesShowcaseProps {
  language: Language;
}

export default function ModulesShowcase({ language }: ModulesShowcaseProps) {
  const t = UI_TRANSLATIONS;
  const [activeModuleId, setActiveModuleId] = useState(MODULES[0].id);

  const activeModule = MODULES.find((m) => m.id === activeModuleId) ?? MODULES[0];

  return (
    <section id="modules" className="py-12 sm:py-20 bg-[#FFFCEE] border-b-3 border-stone-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <span className="font-fredoka text-xs sm:text-sm font-bold text-stone-900 bg-cartoon-yellow px-4 py-1.5 border-2 border-stone-900 rounded-lg shadow-[2px_2px_0px_#1A1A1A] uppercase tracking-wider">
            {language === 'en' ? 'Offline Knowledge Packs' : 'Афлайн-пакеты ведаў'}
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-bold text-stone-950 mt-4 sm:mt-5 mb-3 sm:mb-4 leading-tight">
            {t.modulesTitle[language]}
          </h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-sans font-medium px-2">
            {t.modulesSubtitle[language]}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {MODULES.map((mod) => {
            const isActive = activeModuleId === mod.id;
            return (
              <button
                key={mod.id}
                onClick={() => setActiveModuleId(mod.id)}
                className={`
                  flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl text-left border-3 transition-all duration-200 cursor-pointer w-full
                  ${isActive
                    ? 'bg-[#1e1b29] border-stone-900 text-white shadow-[6px_6px_0px_#1A1A1A]'
                    : 'bg-white border-stone-900 hover:bg-cartoon-orange text-stone-900 shadow-[4px_4px_0px_#1A1A1A]'
                  }
                `}
              >
                <div
                  className={`
                    flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center border-2 border-stone-900 rounded-lg font-mono text-sm font-bold
                    ${isActive ? 'bg-cartoon-green text-stone-900 shadow-[1px_1px_0px_#1D1D1D]' : 'bg-stone-100 text-stone-900'}
                  `}
                >
                  {mod.icon}
                </div>
                <div className="min-w-0">
                  <h3
                    className="font-display font-bold text-sm sm:text-base tracking-wide"
                    style={{ color: isActive ? '#BAE6FD' : '#1A1A1A' }}
                  >
                    {mod.title[language]}
                  </h3>
                  <p className={`text-xs mt-1 sm:mt-1.5 leading-relaxed ${isActive ? 'text-stone-300' : 'text-stone-600 font-medium'}`}>
                    {mod.description[language]}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        <div className="relative mx-auto max-w-5xl rounded-xl overflow-hidden border-3 border-stone-900 bg-[#1e1b29] shadow-[6px_6px_0px_#1A1A1A] sm:shadow-[8px_8px_0px_#1A1A1A]">
          <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 bg-[#15121e] border-b-2 border-stone-900 font-mono text-[10px] sm:text-xs text-stone-400">
            <div className="flex items-center space-x-1.5 sm:space-x-2">
              <span className="inline-block h-3 w-3 sm:h-3.5 sm:w-3.5 rounded-full border border-stone-900 bg-red-400" />
              <span className="inline-block h-3 w-3 sm:h-3.5 sm:w-3.5 rounded-full border border-stone-900 bg-yellow-400" />
              <span className="inline-block h-3 w-3 sm:h-3.5 sm:w-3.5 rounded-full border border-stone-900 bg-green-400" />
            </div>
            <span className="font-bold text-orange-400 tracking-wider truncate mx-2">
              scientia-core — {activeModule.title[language]}
            </span>
            <span className="hidden sm:inline font-bold text-[10px] text-stone-500 tracking-wider shrink-0">
              {language === 'en' ? 'OFFLINE' : 'АФЛАЙН'}
            </span>
          </div>

          <div className="bg-[#110e19] p-2 sm:p-3">
            <img
              src={SCREENSHOTS[activeModule.id]}
              alt={activeModule.title[language]}
              className="w-full h-auto rounded-lg border-2 border-stone-800 select-none"
            />
          </div>

          <div className="px-4 py-3 bg-[#15121e] border-t-2 border-stone-900 font-mono text-[10px] sm:text-xs text-stone-500 text-center sm:text-left">
            {t.screenshotDesc[language]}
          </div>
        </div>
      </div>
    </section>
  );
}
