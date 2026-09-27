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
    <div className="min-h-screen bg-ink-950">
      <div className="sticky top-0 z-20 border-b border-ink-800 bg-ink-950/85 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 font-mono text-sm font-semibold text-ink-400 hover:text-phos-400 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">{t.backToProjects[language]}</span>
          </Link>

          <span className="font-mono text-xs text-ink-500 hidden sm:inline">
            scientia-editor / guide
          </span>

          <LanguageToggle language={language} setLanguage={setLanguage} size="sm" />
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <header className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-4xl font-display font-bold text-ink-100 mb-2">
            {t.editorGuideTitle[language]}
          </h1>
          <p className="text-sm sm:text-base text-ink-400 max-w-2xl">
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
                  ? 'bg-phos-400 border-phos-400 text-ink-950'
                  : 'text-ink-500 border-ink-700 hover:border-ink-500 hover:text-ink-200'
                }
              `}
            >
              {section.title[language]}
            </button>
          ))}
        </div>

        <div className="flex-1 min-w-0">
          <article className="panel p-5 sm:p-7">
            <h2 className="font-display text-lg sm:text-xl font-bold text-ink-100 mb-4 pb-3 border-b border-ink-800">
              {activeData.title[language]}
            </h2>

            {activeData.intro && (
              <p className="text-sm text-ink-400 mb-4">{activeData.intro[language]}</p>
            )}

            {activeData.id === 'installation' && (
              <InstallCallout language={language} project="scientia-editor" className="mb-4" />
            )}

            {activeData.codeBlocks && (
              <div className="space-y-3 mb-4">
                {activeData.codeBlocks.map((block, i) => (
                  <div key={i}>
                    <p className="text-[11px] font-mono font-bold text-ink-500 mb-1">
                      {block.label[language]}
                    </p>
                    <div className="relative">
                      <button
                        onClick={() => copyCommand(block.command, i)}
                        className="absolute top-2 right-2 z-10 p-1.5 rounded border bg-ink-850 border-ink-700 text-ink-500 hover:text-phos-300 hover:border-phos-400/50 transition-colors"
                        aria-label="Copy command"
                      >
                        {copiedIndex === i
                          ? <Check className="h-3.5 w-3.5 text-phos-400" />
                          : <Copy className="h-3.5 w-3.5" />
                        }
                      </button>
                      <pre className="bg-ink-950 text-phos-400 p-3 rounded-lg border border-ink-700 overflow-x-auto text-sm font-mono whitespace-pre-wrap">
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
                    <dt className="font-mono font-semibold text-sm text-ink-100 sm:w-40 shrink-0">
                      {b.term[language]}
                    </dt>
                    <dd className="text-sm text-ink-400">{b.description[language]}</dd>
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
              <p key={i} className="text-sm text-ink-500 mt-4 pt-3 border-t border-ink-800">
                {note[language]}
              </p>
            ))}

            {activeData.id === 'tech' && (
              <div className="mt-4 pt-3 border-t border-ink-800">
                <a
                  href="https://crates.io/crates/scientia-editor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-sm font-semibold text-phos-400 hover:text-phos-300 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  {language === 'en' ? 'Package on crates.io' : 'Пакет на crates.io'}
                </a>
              </div>
            )}

            {nextSection && (
              <div className="mt-6 pt-4 border-t border-ink-800 flex justify-end">
                <button
                  onClick={() => setActiveSection(nextSection.id)}
                  className="btn btn-secondary"
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
