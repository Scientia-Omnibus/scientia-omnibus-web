import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../types';
import { RELEASED_PROJECTS, UPCOMING_PROJECTS, UI_TRANSLATIONS } from '../data/modules';
import { LINKS } from '../data/links';
import { Github, BookOpen, Terminal, Play, ChevronLeft, ChevronRight, Map, Download } from 'lucide-react';
import { motion } from 'motion/react';
import screenshotEducation from '../assets/images/screenshot-education.png';
import screenshotSurvival from '../assets/images/screenshot-survival.png';
import screenshotEditor from '../assets/images/screenshot-editor.png';
import corePreviewVideo from '../assets/videos/scientia-core-preview.mp4';
import InstallCallout from './InstallCallout';

interface ProjectsSectionProps {
  language: Language;
}

export default function ProjectsSection({ language }: ProjectsSectionProps) {
  type PreviewMode = 'video' | 'education' | 'survival';
  const [previewMode, setPreviewMode] = useState<PreviewMode>('video');
  const t = UI_TRANSLATIONS;
  const coreProject = RELEASED_PROJECTS[0];
  const previewLabels = {
    video: { en: 'Preview', by: 'Прэв’ю' },
    education: { en: 'Formal Sciences', by: 'Фармальныя навукі' },
    survival: { en: 'Survival', by: 'Выжыванне' },
  };
  const previewModes: PreviewMode[] = ['video', 'education', 'survival'];

  return (
    <section id="projects" className="py-16 sm:py-24 bg-ink-900 overflow-hidden border-b border-ink-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl mx-auto mb-10 sm:mb-14 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-display text-2xl sm:text-4xl lg:text-[2.75rem] font-bold text-ink-100 leading-tight mb-4">
            {t.projectsTitle[language]}
          </h2>
          <p className="text-sm sm:text-base text-ink-400 leading-relaxed">
            {t.projectsSubtitle[language]}
          </p>
        </motion.div>

        <p className="font-mono text-xs font-bold uppercase tracking-widest text-ink-500 mb-4">
          {t.releasedLabel[language]}
        </p>

        <div className="panel p-5 sm:p-8 mb-10 sm:mb-14">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-ink-850 border border-ink-700 text-phos-400">
                <Terminal className="h-6 w-6" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-ink-100">
                    {coreProject.name}
                  </h3>
                  <span className="chip chip-ok">{t.statusReleased[language]}</span>
                </div>
                <p className="text-sm text-ink-400 font-medium mb-2">
                  {coreProject.tagline[language]}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {coreProject.stack.map((tech) => (
                    <span key={tech} className="chip chip-dim">{tech}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 shrink-0">
              <a
                href={coreProject.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>
              <a
                href={LINKS.coreExe}
                download
                className="btn btn-primary"
              >
                <Download className="h-4 w-4" />
                <span>{t.downloadWindows[language]}</span>
              </a>
              <Link to={LINKS.coreGuide} className="btn btn-primary">
                <BookOpen className="h-4 w-4" />
                <span>{t.viewGuide[language]}</span>
              </Link>
            </div>
          </div>

          <p className="text-sm text-ink-400 leading-relaxed mb-6 max-w-3xl">
            {coreProject.description[language]}
          </p>

          <InstallCallout language={language} className="mb-6" />

          <div className="terminal-frame relative">
            <div className="flex items-center gap-2 px-3 py-2 bg-ink-900 border-b border-ink-800">
              <span className="h-2.5 w-2.5 rounded-full bg-ink-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-ink-700" />
              <span className="ml-2 font-mono text-[10px] sm:text-xs text-ink-500 truncate">
                scientia-core
              </span>
              <div className="ml-auto flex flex-wrap gap-1.5 justify-end">
                <button
                  onClick={() => setPreviewMode('video')}
                  className={`inline-flex items-center gap-1 text-xs font-mono font-bold px-3 py-1.5 rounded border transition-all ${
                    previewMode === 'video'
                      ? 'bg-phos-400 text-ink-950 border-phos-400'
                      : 'text-ink-500 border-ink-700 hover:text-ink-200 hover:border-ink-500'
                  }`}
                >
                  <Play className="h-3 w-3" />
                  {previewLabels.video[language]}
                </button>
                <button
                  onClick={() => setPreviewMode('education')}
                  className={`inline-flex items-center gap-1 text-xs font-mono font-bold px-3 py-1.5 rounded border transition-all ${
                    previewMode === 'education'
                      ? 'bg-phos-400 text-ink-950 border-phos-400'
                      : 'text-ink-500 border-ink-700 hover:text-ink-200 hover:border-ink-500'
                  }`}
                >
                  <BookOpen className="h-3 w-3" />
                  {previewLabels.education[language]}
                </button>
                <button
                  onClick={() => setPreviewMode('survival')}
                  className={`inline-flex items-center gap-1 text-xs font-mono font-bold px-3 py-1.5 rounded border transition-all ${
                    previewMode === 'survival'
                      ? 'bg-phos-400 text-ink-950 border-phos-400'
                      : 'text-ink-500 border-ink-700 hover:text-ink-200 hover:border-ink-500'
                  }`}
                >
                  <Map className="h-3 w-3" />
                  {previewLabels.survival[language]}
                </button>
              </div>
            </div>

            <div className="bg-ink-950 p-2 sm:p-3 relative group">
              {previewMode === 'video' ? (
                <video
                  src={corePreviewVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-auto rounded border border-ink-800"
                />
              ) : (
                <img
                  src={previewMode === 'education' ? screenshotEducation : screenshotSurvival}
                  alt="scientia-core"
                  className="w-full h-auto rounded border border-ink-800"
                />
              )}

              <button
                onClick={() => {
                  const idx = previewModes.indexOf(previewMode);
                  setPreviewMode(previewModes[(idx - 1 + 3) % 3]);
                }}
                className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-70 hover:!opacity-100 transition-all bg-ink-950/80 hover:bg-ink-950 text-ink-100 rounded-full p-1.5 border border-ink-700"
                aria-label="Previous"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => {
                  const idx = previewModes.indexOf(previewMode);
                  setPreviewMode(previewModes[(idx + 1) % 3]);
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-70 hover:!opacity-100 transition-all bg-ink-950/80 hover:bg-ink-950 text-ink-100 rounded-full p-1.5 border border-ink-700"
                aria-label="Next"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 pb-3 pt-2 bg-ink-900 border-t border-ink-800/50">
              {previewModes.map((mode) => (
                <button
                  key={mode}
                  onClick={() => setPreviewMode(mode)}
                  className={`transition-all duration-300 rounded-full ${
                    previewMode === mode
                      ? 'bg-phos-400 w-6 h-2'
                      : 'bg-ink-700 hover:bg-ink-500 w-2 h-2'
                  }`}
                  title={previewLabels[mode][language]}
                />
              ))}
            </div>
          </div>

          <div className="mt-6">
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-ink-500 mb-3">
              {t.knowledgeBasesTitle[language]}
            </p>

            <a
              href={LINKS.formalSciences}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-mono text-sm font-semibold text-ink-200 hover:text-phos-400 transition-colors"
            >
              formal-sciences <Github className="h-3 w-3" />
            </a>
            <p className="text-xs text-ink-500 mt-0.5 mb-2">
              {t.formalSciencesDesc[language]}
            </p>

            <div className="ml-2 mb-4 font-mono text-xs sm:text-sm">
              <div className="relative pl-4 pb-0.5">
                <span className="absolute left-0 top-0 bottom-0 w-3 border-l border-ink-700 rounded-bl" />
                <span className="absolute left-0 top-[0.55em] w-3 border-b border-ink-700" />
                <span className="pl-1 text-ink-100 font-semibold">{t.kbBasic[language]}/</span>
                <span className="text-[10px] ml-1.5 text-phos-400 font-semibold">{t.kbDone[language]}</span>
              </div>
              <div className="relative pl-4 pb-0.5">
                <span className="absolute left-0 top-0 bottom-0 w-3 border-l border-ink-700 rounded-bl" />
                <span className="absolute left-0 top-[0.55em] w-3 border-b border-ink-700" />
                <span className="pl-1 text-ink-300">{t.kbAlgebraCore[language]}/</span>
                <span className="text-[10px] ml-1.5 text-phos-400 font-semibold">{t.kbDone[language]}</span>
              </div>
              <div className="relative pl-4">
                <span className="absolute left-0 top-0 w-3 border-l border-ink-700" style={{ height: '0.55em' }} />
                <span className="absolute left-0 top-[0.55em] w-3 border-b border-ink-700" />
                <span className="pl-1 text-ink-600">{t.kbAdvanced[language]}</span>
              </div>
            </div>

            <a
              href={LINKS.survival}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-mono text-sm font-semibold text-ink-200 hover:text-phos-400 transition-colors"
            >
              survival-and-medicine <Github className="h-3 w-3" />
            </a>
            <p className="text-xs text-ink-500 mt-0.5 mb-2">{t.survivalDesc[language]}</p>

            <div className="ml-2 mb-4 font-mono text-xs sm:text-sm">
              <div className="relative pl-4 pb-0.5">
                <span className="absolute left-0 top-0 bottom-0 w-3 border-l border-ink-700 rounded-bl" />
                <span className="absolute left-0 top-[0.55em] w-3 border-b border-ink-700" />
                <span className="pl-1 text-ink-100 font-semibold">{t.kbSurvival[language]}/</span>
                <span className="text-[10px] ml-1.5 text-phos-400 font-semibold">{t.kbDone[language]}</span>
              </div>
              <div className="relative pl-4">
                <span className="absolute left-0 top-0 w-3 border-l border-ink-700" style={{ height: '0.55em' }} />
                <span className="absolute left-0 top-[0.55em] w-3 border-b border-ink-700" />
                <span className="pl-1 text-ink-600">{t.medicinePlanned[language]}</span>
              </div>
            </div>

            <p className="font-mono text-xs font-bold uppercase tracking-widest text-ink-500 mb-2">
              {t.kbPlanned[language]}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-3">
              <span className="chip chip-dim">{t.kbHumanities[language]}</span>
              <span className="chip chip-dim">{t.kbSocial[language]}</span>
              <span className="chip chip-dim">{t.kbNatural[language]}</span>
              <span className="chip chip-dim">{t.kbDiy[language]}</span>
            </div>

            <p className="text-xs text-ink-500 leading-relaxed">
              {t.kbContrib[language]}{' '}
              <a href={LINKS.formalSciences} target="_blank" rel="noopener noreferrer" className="text-phos-400 font-semibold underline decoration-phos-400/40 hover:text-phos-300 transition-colors">formal-sciences</a>
              {' / '}
              <a href={LINKS.survival} target="_blank" rel="noopener noreferrer" className="text-phos-400 font-semibold underline decoration-phos-400/40 hover:text-phos-300 transition-colors">survival-and-medicine</a>
              {' / '}
              <a href={LINKS.core} target="_blank" rel="noopener noreferrer" className="text-phos-400 font-semibold underline decoration-phos-400/40 hover:text-phos-300 transition-colors">scientia-core</a>
            </p>
          </div>
        </div>

        {RELEASED_PROJECTS.filter((p) => p.id !== 'scientia-core').map((project) => (
          <div key={project.id} className="panel p-5 sm:p-8 mb-10 sm:mb-14">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-ink-850 border border-ink-700 text-phos-400">
                  <Terminal className="h-6 w-6" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-ink-100">
                      {project.name}
                    </h3>
                    {project.sourcePublic ? (
                      <span className="chip chip-ok">{t.statusReleased[language]}</span>
                    ) : (
                      <span className="chip">{t.statusSourcePrivate[language]}</span>
                    )}
                  </div>
                  <p className="text-sm text-ink-400 font-medium mb-2">
                    {project.tagline[language]}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span key={tech} className="chip chip-dim">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 shrink-0">
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    <Github className="h-4 w-4" />
                    <span>GitHub</span>
                  </a>
                )}
                <Link to={`/${project.id}/guide`} className="btn btn-primary">
                  <BookOpen className="h-4 w-4" />
                  <span>{t.viewGuide[language]}</span>
                </Link>
              </div>
            </div>

            <p className="text-sm text-ink-400 leading-relaxed mb-6 max-w-3xl">
              {project.description[language]}
            </p>

            <InstallCallout language={language} project={project.id as 'scientia-core' | 'scientia-editor'} className="mb-4" />

            <div className="terminal-frame relative">
              <div className="flex items-center gap-2 px-3 py-2 bg-ink-900 border-b border-ink-800">
                <span className="h-2.5 w-2.5 rounded-full bg-ink-700" />
                <span className="h-2.5 w-2.5 rounded-full bg-ink-700" />
                <span className="h-2.5 w-2.5 rounded-full bg-ink-700" />
                <span className="ml-2 font-mono text-[10px] sm:text-xs text-ink-500 truncate">
                  {project.name}
                </span>
              </div>
              <div className="bg-ink-950 p-2 sm:p-3">
                <img
                  src={screenshotEditor}
                  alt="scientia-editor"
                  className="w-full h-auto rounded border border-ink-800"
                />
              </div>
            </div>
          </div>
        ))}

        {UPCOMING_PROJECTS.length > 0 && (
          <>
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-ink-500 mb-4">
              {t.inDevelopmentLabel[language]}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {UPCOMING_PROJECTS.map((project) => (
                <div
                  key={project.id}
                  className="p-5 sm:p-6 rounded-xl border border-dashed border-ink-700 bg-ink-900/40 relative overflow-hidden"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-display text-lg font-bold text-ink-200">
                      {project.name}
                    </h3>
                    <span className="chip">{t.statusInDevelopment[language]}</span>
                  </div>
                  <p className="text-sm text-ink-400 leading-relaxed mb-3">
                    {project.description[language]}
                  </p>
                  {project.stack && (
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.map((tech) => (
                        <span key={tech} className="chip chip-dim">{tech}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
