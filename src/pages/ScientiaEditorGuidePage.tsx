import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Copy, Check, ExternalLink } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { UI_TRANSLATIONS } from '../data/modules';
import { GUIDE_SECTIONS } from '../data/scientia-editor-guide';
import { ShortcutTable, CommandTable } from '../components/ShortcutTable';
import LanguageToggle from '../components/LanguageToggle';
import InstallCallout from '../components/InstallCallout';

export default function ScientiaEditorGuidePage() {
  const { language, setLanguage } = useLanguage();
  const t = UI_TRANSLATIONS;
  const [activeSection, setActiveSection] = useState(GUIDE_SECTIONS[0].id);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyCommand = async (text: string, idx: number) => {
    await navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const activeData = GUIDE_SECTIONS.find((s) => s.id === activeSection) ?? GUIDE_SECTIONS[0];
  const activeIndex = GUIDE_SECTIONS.indexOf(activeData);
  const nextSection = activeIndex < GUIDE_SECTIONS.length - 1 ? GUIDE_SECTIONS[activeIndex + 1] : undefined;

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
            scientia-editor / guide
          </span>

          <LanguageToggle language={language} setLanguage={setLanguage} size="sm" />
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <header className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-4xl font-display font-bold text-stone-950 mb-2">
            {t.editorGuideTitle[language]}
          </h1>
          <p className="text-sm sm:text-base text-stone-600 max-w-2xl">
            {t.editorGuideSubtitle[language]}
          </p>
        </header>

        <div className="flex flex-wrap gap-1.5 mb-6 sm:mb-8 pb-1 overflow-x-auto">
          {GUIDE_SECTIONS.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`
                shrink-0 text-[11px] font-mono font-bold px-3 py-1.5 rounded-lg border transition-all whitespace-nowrap
                ${activeSection === section.id
                  ? 'bg-cartoon-blue border-stone-900 text-stone-900 shadow-[2px_2px_0px_#1A1A1A]'
                  : 'bg-stone-100 border-stone-300 text-stone-500 hover:border-stone-500 hover:text-stone-700'
                }
              `}
            >
              {section.title[language]}
            </button>
          ))}
        </div>

        <div className="flex-1 min-w-0">
          <article className="bg-white border-2 border-stone-900 rounded-xl p-5 sm:p-7 shadow-[3px_3px_0px_#1A1A1A]">
            <h2 className="font-display text-lg sm:text-xl font-bold text-stone-950 mb-4 pb-3 border-b border-stone-200">
              {activeData.title[language]}
            </h2>

            {activeData.intro && (
              <p className="text-sm text-stone-700 mb-4">{activeData.intro[language]}</p>
            )}

            {activeData.id === 'installation' && (
              <InstallCallout language={language} project="scientia-editor" className="mb-4" />
            )}

            {activeData.codeBlocks && (
              <div className="space-y-3 mb-4">
                {activeData.codeBlocks.map((block, i) => (
                  <div key={i}>
                    <p className="text-[11px] font-mono font-bold text-stone-500 mb-1">
                      {block.label[language]}
                    </p>
                    <div className="relative">
                      <button
                        onClick={() => copyCommand(block.command, i)}
                        className="absolute top-2 right-2 z-10 p-1.5 rounded border bg-stone-800 border-stone-600 text-stone-500 hover:text-stone-300 hover:border-stone-400 transition-colors"
                        aria-label="Copy command"
                      >
                        {copiedIndex === i
                          ? <Check className="h-3.5 w-3.5 text-cartoon-green" />
                          : <Copy className="h-3.5 w-3.5" />
                        }
                      </button>
                      <pre className="bg-stone-900 text-cartoon-green p-3 rounded-lg border border-stone-700 overflow-x-auto text-sm font-mono shadow-[2px_2px_0px_#1A1A1A] whitespace-pre-wrap">
                        $ {block.command}
                      </pre>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeData.bullets && (
              <dl className="space-y-3 mb-4">
                {activeData.bullets.map((b) => (
                  <div key={b.term.en} className="flex flex-col sm:flex-row sm:gap-3">
                    <dt className="font-semibold text-sm text-stone-900 sm:w-40 shrink-0">
                      {b.term[language]}
                    </dt>
                    <dd className="text-sm text-stone-600">{b.description[language]}</dd>
                  </div>
                ))}
              </dl>
            )}

            {activeData.shortcuts && (
              <ShortcutTable shortcuts={activeData.shortcuts} language={language} />
            )}

            {activeData.commands && (
              <CommandTable commands={activeData.commands} language={language} />
            )}

            {activeData.notes?.map((note, i) => (
              <p key={i} className="text-sm text-stone-500 mt-4 pt-3 border-t border-stone-100">
                {note[language]}
              </p>
            ))}

            {activeData.id === 'tech' && (
              <div className="mt-4 pt-3 border-t border-stone-100">
                <a
                  href="https://github.com/Scientia-Omnibus/scientia-editor"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-stone-700 hover:text-cartoon-purple transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  {language === 'en' ? 'View on GitHub' : 'Глядзець на GitHub'}
                </a>
              </div>
            )}

            {nextSection && (
              <div className="mt-6 pt-4 border-t border-stone-200 flex justify-end">
                <button
                  onClick={() => setActiveSection(nextSection.id)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 sketch-button bg-cartoon-blue text-stone-900 font-bold text-sm"
                >
                  <span>{nextSection.title[language]}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </article>
          </div>
      </div>
    </div>
  );
}
