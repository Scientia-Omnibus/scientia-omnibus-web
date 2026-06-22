import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { UI_TRANSLATIONS } from '../data/modules';
import { GUIDE_SECTIONS } from '../data/scientia-core-guide';
import { ShortcutTable, CommandTable } from '../components/ShortcutTable';
import LanguageToggle from '../components/LanguageToggle';
import InstallCallout from '../components/InstallCallout';

export default function ScientiaCoreGuidePage() {
  const { language, setLanguage } = useLanguage();
  const t = UI_TRANSLATIONS;
  const [activeSection, setActiveSection] = useState(GUIDE_SECTIONS[0].id);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    GUIDE_SECTIONS.forEach((section) => {
      const el = document.getElementById(section.id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(section.id);
        },
        { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-bg-warm">
      <div className="sticky top-0 z-20 border-b-2 border-stone-900 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm font-bold text-stone-700 hover:text-stone-900 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">{t.backToProjects[language]}</span>
          </Link>

          <span className="font-mono text-xs text-stone-500 hidden sm:inline">
            scientia-core / guide
          </span>

          <LanguageToggle language={language} setLanguage={setLanguage} size="sm" />
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <header className="mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-4xl font-display font-bold text-stone-950 mb-2">
            {t.guideTitle[language]}
          </h1>
          <p className="text-sm sm:text-base text-stone-600 max-w-2xl">
            {t.guideSubtitle[language]}
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <nav className="lg:w-48 shrink-0">
            <div className="lg:sticky lg:top-20">
              <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-stone-400 mb-3 hidden lg:block">
                {language === 'en' ? 'Contents' : 'Змест'}
              </p>
              <ul className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                {GUIDE_SECTIONS.map((section) => (
                  <li key={section.id} className="shrink-0">
                    <button
                      onClick={() => scrollTo(section.id)}
                      className={`
                        block w-full text-left px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap
                        ${activeSection === section.id
                          ? 'bg-cartoon-blue text-stone-900 border border-stone-900'
                          : 'text-stone-600 hover:bg-stone-100'
                        }
                      `}
                    >
                      {section.title[language]}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <div className="flex-1 min-w-0 space-y-6 sm:space-y-8">
            {GUIDE_SECTIONS.map((section) => (
              <article
                key={section.id}
                id={section.id}
                className="scroll-mt-20 bg-white border-2 border-stone-900 rounded-xl p-5 sm:p-7 shadow-[3px_3px_0px_#1A1A1A]"
              >
                <h2 className="font-display text-lg sm:text-xl font-bold text-stone-950 mb-4 pb-3 border-b border-stone-200">
                  {section.title[language]}
                </h2>

                {section.intro && (
                  <p className="text-sm text-stone-700 mb-4">{section.intro[language]}</p>
                )}

                {section.id === 'installation' && (
                  <InstallCallout language={language} className="mb-4" />
                )}

                {section.codeBlocks && (
                  <div className="space-y-3 mb-4">
                    {section.codeBlocks.map((block, i) => (
                      <div key={i}>
                        <p className="text-[11px] font-mono font-bold text-stone-500 mb-1">
                          {block.label[language]}
                        </p>
                        <pre className="bg-stone-900 text-cartoon-green p-3 rounded-lg border border-stone-700 overflow-x-auto text-sm font-mono shadow-[2px_2px_0px_#1A1A1A]">
                          $ {block.command}
                        </pre>
                      </div>
                    ))}
                  </div>
                )}

                {section.bullets && (
                  <dl className="space-y-3 mb-4">
                    {section.bullets.map((b) => (
                      <div key={b.term.en} className="flex flex-col sm:flex-row sm:gap-3">
                        <dt className="font-semibold text-sm text-stone-900 sm:w-28 shrink-0">
                          {b.term[language]}
                        </dt>
                        <dd className="text-sm text-stone-600">{b.description[language]}</dd>
                      </div>
                    ))}
                  </dl>
                )}

                {section.shortcuts && (
                  <ShortcutTable shortcuts={section.shortcuts} language={language} />
                )}

                {section.commands && (
                  <CommandTable commands={section.commands} language={language} />
                )}

                {section.notes?.map((note, i) => (
                  <p key={i} className="text-sm text-stone-500 mt-4 pt-3 border-t border-stone-100">
                    {note[language]}
                  </p>
                ))}
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
