import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../types';
import { MODULES, RELEASED_PROJECTS, UPCOMING_PROJECTS, UI_TRANSLATIONS } from '../data/modules';
import { Github, BookOpen, Terminal } from 'lucide-react';
import screenshotEducation from '../assets/images/screenshot-education.jpg';
import screenshotSurvival from '../assets/images/screenshot-survival.jpg';
import screenshotDiy from '../assets/images/screenshot-diy.jpg';

const SCREENSHOTS: Record<string, string> = {
  education: screenshotEducation,
  survival: screenshotSurvival,
  diy_tech: screenshotDiy,
};

interface ProjectsSectionProps {
  language: Language;
}

export default function ProjectsSection({ language }: ProjectsSectionProps) {
  const t = UI_TRANSLATIONS;
  const [activeModuleId, setActiveModuleId] = useState(MODULES[0].id);
  const activeModule = MODULES.find((m) => m.id === activeModuleId) ?? MODULES[0];
  const coreProject = RELEASED_PROJECTS[0];

  return (
    <section id="projects" className="py-12 sm:py-20 bg-[#FFFCEE] border-b-3 border-stone-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="font-fredoka text-xs sm:text-sm font-bold text-stone-900 bg-cartoon-yellow px-4 py-1.5 border-2 border-stone-900 rounded-lg shadow-[2px_2px_0px_#1A1A1A] uppercase tracking-wider">
            {t.projectsLabel[language]}
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-bold text-stone-950 mt-4 sm:mt-5 mb-3 sm:mb-4 leading-tight">
            {t.projectsTitle[language]}
          </h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-sans font-medium">
            {t.projectsSubtitle[language]}
          </p>
        </div>

        <p className="text-xs font-mono font-bold uppercase tracking-widest text-stone-500 mb-4">
          {t.releasedLabel[language]}
        </p>

        <div className="bg-white sketch-border p-5 sm:p-8 mb-10 sm:mb-14">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center sketch-border-xs bg-[#1e1b29] text-cartoon-green">
                <Terminal className="h-6 w-6" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-stone-950">
                    {coreProject.name}
                  </h3>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-cartoon-green border border-stone-900 px-2 py-0.5 rounded">
                    {t.statusReleased[language]}
                  </span>
                </div>
                <p className="text-sm text-stone-600 font-medium mb-2">
                  {coreProject.tagline[language]}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {coreProject.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono bg-stone-100 border border-stone-300 text-stone-600 px-2 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 shrink-0">
              <a
                href={coreProject.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 sketch-button bg-cartoon-green text-stone-900 font-bold text-sm"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>
              <Link
                to="/scientia-core/guide"
                className="inline-flex items-center gap-1.5 px-4 py-2 sketch-button bg-cartoon-blue text-stone-900 font-bold text-sm"
              >
                <BookOpen className="h-4 w-4" />
                <span>{t.viewGuide[language]}</span>
              </Link>
            </div>
          </div>

          <p className="text-sm text-gray-700 leading-relaxed mb-6 max-w-3xl">
            {coreProject.description[language]}
          </p>

          <div className="mb-3">
            <p className="text-[11px] font-mono font-bold uppercase tracking-widest text-stone-500 mb-2.5">
              {language === 'en' ? 'Sample knowledge packs' : 'Прыклады пакетаў ведаў'}
            </p>
            <div className="flex flex-wrap gap-2">
              {MODULES.map((mod) => {
                const isActive = activeModuleId === mod.id;
                return (
                  <button
                    key={mod.id}
                    type="button"
                    onClick={() => setActiveModuleId(mod.id)}
                    className={`
                      px-3.5 py-1.5 rounded-lg font-sans text-sm font-semibold border-2 transition-colors cursor-pointer
                      ${isActive
                        ? 'bg-stone-900 text-white border-stone-900 shadow-[2px_2px_0px_#1A1A1A]'
                        : 'bg-white text-stone-700 border-stone-300 hover:border-stone-900 hover:bg-stone-50'
                      }
                    `}
                  >
                    {mod.title[language]}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="rounded-xl overflow-hidden border-2 border-stone-900 bg-[#1e1b29] shadow-[4px_4px_0px_#1A1A1A]">
            <div className="flex items-center gap-2 px-3 py-2 bg-[#15121e] border-b border-stone-800">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400 border border-stone-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400 border border-stone-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400 border border-stone-700" />
              <span className="ml-2 font-mono text-[10px] sm:text-xs text-stone-500 truncate">
                scientia-core
              </span>
            </div>

            <div className="bg-[#110e19] p-2 sm:p-3">
              <img
                src={SCREENSHOTS[activeModule.id]}
                alt={activeModule.title[language]}
                className="w-full h-auto rounded border border-stone-800"
              />
            </div>
          </div>

          <p className="mt-3 text-sm text-stone-600 leading-relaxed">
            <span className="font-semibold text-stone-800">{activeModule.title[language]}.</span>{' '}
            {activeModule.description[language]}
          </p>
        </div>

        <p className="text-xs font-mono font-bold uppercase tracking-widest text-stone-500 mb-4">
          {t.inDevelopmentLabel[language]}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {UPCOMING_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="p-5 sm:p-6 bg-stone-50 border-2 border-dashed border-stone-400 rounded-xl"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="font-display text-lg font-bold text-stone-800">
                  {project.name}
                </h3>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-stone-200 text-stone-600 border border-stone-400 px-2 py-0.5 rounded shrink-0">
                  {t.statusInDevelopment[language]}
                </span>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed mb-3">
                {project.description[language]}
              </p>
              {project.stack && (
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono bg-white border border-stone-300 text-stone-500 px-2 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
