import { Terminal, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/modules';

const UV_COMMAND = 'uv tool install scientia-core';
const BASH_COMMAND =
  'bash <(curl -fsSL https://raw.githubusercontent.com/Scientia-Omnibus/scientia-core/main/install.sh)';

interface InstallCalloutProps {
  language: Language;
  className?: string;
}

export default function InstallCallout({ language, className = '' }: InstallCalloutProps) {
  const t = UI_TRANSLATIONS;

  return (
    <div
      className={`rounded-xl overflow-hidden border-2 border-stone-900 bg-[#1e1b29] shadow-[4px_4px_0px_#1A1A1A] ${className}`}
    >
      <div className="flex items-center justify-between gap-3 px-4 py-3 bg-[#15121e] border-b border-stone-800">
        <div className="flex items-center gap-2 min-w-0">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400 border border-stone-700 shrink-0" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400 border border-stone-700 shrink-0" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400 border border-stone-700 shrink-0" />
          <span className="ml-1 font-mono text-[10px] sm:text-xs text-stone-500 truncate">
            terminal
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 shrink-0 font-fredoka text-[10px] font-bold uppercase tracking-wider text-stone-900 bg-cartoon-green border border-stone-900 px-2.5 py-1 rounded shadow-[1px_1px_0px_#1A1A1A]">
          <Terminal className="h-3 w-3" />
          {t.installTitle[language]}
        </span>
      </div>

      <div className="p-4 sm:p-5 bg-[#110e19] space-y-5">
        <div className="rounded-xl border-2 border-cartoon-green bg-[#15121e] p-4 sm:p-5 shadow-[3px_3px_0px_#BBF7D0]">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <p className="text-xs sm:text-sm font-display font-bold text-stone-100">
              {t.installOneLiner[language]}
            </p>
            <span className="inline-flex items-center gap-1 font-fredoka text-[10px] font-bold uppercase tracking-wider text-stone-900 bg-cartoon-yellow border border-stone-900 px-2 py-0.5 rounded shadow-[1px_1px_0px_#1A1A1A]">
              <Sparkles className="h-3 w-3" />
              {t.installRecommended[language]}
            </span>
          </div>
          <pre className="bg-stone-950 text-cartoon-green px-4 py-4 sm:py-5 rounded-lg border-2 border-stone-700 text-sm sm:text-base font-mono overflow-x-auto shadow-[2px_2px_0px_#1A1A1A]">
            <span className="text-stone-500 select-none">$ </span>
            {BASH_COMMAND}
          </pre>
        </div>

        <div className="rounded-lg border border-stone-800 bg-[#0d0b14] p-3 sm:p-4">
          <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-stone-500 mb-2">
            {t.installManual[language]}
          </p>
          <p className="text-xs text-stone-500 mb-3 leading-relaxed">
            {t.installManualGit[language]}{' '}
            <a
              href="https://git-scm.com/downloads"
              target="_blank"
              rel="noreferrer"
              className="text-stone-400 underline decoration-stone-600 hover:text-cartoon-green transition-colors"
            >
              git-scm.com
            </a>
          </p>
          <pre className="bg-stone-950/80 text-stone-400 px-3 py-2.5 rounded-lg border border-stone-800 text-xs sm:text-sm font-mono overflow-x-auto">
            <span className="text-stone-600 select-none">$ </span>
            {UV_COMMAND}
          </pre>
        </div>

        <p className="text-[11px] font-mono text-stone-500 leading-relaxed pt-1 border-t border-stone-800">
          {t.installUpcoming[language]}
        </p>
      </div>
    </div>
  );
}
