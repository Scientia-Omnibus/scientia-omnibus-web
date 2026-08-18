import { useState } from 'react';
import { Terminal, Sparkles, Copy, Check, Monitor } from 'lucide-react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/modules';

type Project = 'scientia-core' | 'scientia-editor';

const PROJECT_CONFIG: Record<Project, { bashCommand: string; manualCommand: string; manualLabel?: keyof typeof UI_TRANSLATIONS; downloadUrl?: string; downloadLabel?: string; hasOneLiner?: boolean }> = {
  'scientia-core': {
    bashCommand: 'curl -fsSL https://raw.githubusercontent.com/Scientia-Omnibus/scientia-core/main/install.sh | bash',
    manualCommand: 'uv tool install scientia-core',
    hasOneLiner: true,
  },
  'scientia-editor': {
    bashCommand: 'curl -fsSL https://raw.githubusercontent.com/Scientia-Omnibus/scientia-omnibus-web/main/install.sh | bash',
    manualCommand: 'cargo install scientia-editor',
    manualLabel: 'installManualRust',
    downloadUrl: 'https://rustup.rs',
    downloadLabel: 'rustup.rs',
    hasOneLiner: true,
  },
};

interface InstallCalloutProps {
  language: Language;
  className?: string;
  project?: Project;
}

export default function InstallCallout({ language, className = '', project = 'scientia-core' }: InstallCalloutProps) {
  const [copiedBash, setCopiedBash] = useState(false);
  const [copiedManual, setCopiedManual] = useState(false);
  const t = UI_TRANSLATIONS;
  const config = PROJECT_CONFIG[project];

  const copyToClipboard = async (text: string, setCopied: (v: boolean) => void) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`terminal-frame ${className}`}>
      <div className="flex items-center justify-between gap-3 px-4 py-3 bg-ink-900 border-b border-ink-800">
        <div className="flex items-center gap-2 min-w-0">
          <span className="h-2.5 w-2.5 rounded-full bg-alert-400/70 shrink-0" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/60 shrink-0" />
          <span className="h-2.5 w-2.5 rounded-full bg-phos-500/70 shrink-0" />
          <span className="ml-1 font-mono text-[10px] sm:text-xs text-ink-500 truncate">
            terminal
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 shrink-0 font-mono text-[10px] font-bold uppercase tracking-widest text-phos-400 border border-phos-400/30 px-2.5 py-1 rounded">
          <Terminal className="h-3 w-3" />
          {t.installTitle[language]}
        </span>
      </div>

      <div className="p-4 sm:p-5 bg-ink-950 space-y-5">
        {config.hasOneLiner !== false && (
          <div className="rounded-xl border border-phos-400/40 bg-ink-900 p-4 sm:p-5">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <p className="text-xs sm:text-sm font-mono font-bold text-ink-100">
                {t.installOneLiner[language]}
              </p>
              <span className="inline-flex items-center gap-1 font-mono text-[10px] font-bold uppercase tracking-widest text-phos-400 border border-phos-400/40 px-2 py-0.5 rounded">
                <Sparkles className="h-3 w-3" />
                {t.installRecommended[language]}
              </span>
            </div>
            <div className="relative">
              <button
                onClick={() => copyToClipboard(config.bashCommand, setCopiedBash)}
                className="absolute top-2 right-2 z-10 p-1.5 rounded border bg-ink-850 border-ink-700 text-ink-400 hover:text-phos-300 hover:border-phos-400/50 transition-colors"
                aria-label="Copy command"
              >
                {copiedBash ? <Check className="h-3.5 w-3.5 text-phos-400" /> : <Copy className="h-3.5 w-3.5" />}
              </button>
              <pre className="bg-ink-950 text-phos-400 px-4 py-4 sm:py-5 rounded-lg border border-ink-700 text-sm sm:text-base font-mono overflow-x-auto">
                <span className="text-ink-600 select-none">$ </span>
                {config.bashCommand}
              </pre>
            </div>
          </div>
        )}

        <div className="rounded-lg border border-ink-800 bg-ink-900/50 p-3 sm:p-4">
          <p className="text-[11px] font-mono font-bold uppercase tracking-widest text-ink-500 mb-2">
            {t.installManual[language]}
          </p>
          {config.downloadUrl && (
            <p className="text-xs text-ink-500 mb-3 leading-relaxed">
              {t[config.manualLabel!][language]}{' '}
              <a
                href={config.downloadUrl}
                target="_blank"
                rel="noreferrer"
                className="text-ink-300 underline decoration-ink-600 hover:text-phos-400 transition-colors"
              >
                {config.downloadLabel}
              </a>
            </p>
          )}
          <div className="relative">
            <button
              onClick={() => copyToClipboard(config.manualCommand, setCopiedManual)}
              className="absolute top-1.5 right-1.5 z-10 p-1 rounded border bg-ink-850 border-ink-700 text-ink-500 hover:text-phos-300 hover:border-phos-400/50 transition-colors"
              aria-label="Copy command"
            >
              {copiedManual ? <Check className="h-3 w-3 text-phos-400" /> : <Copy className="h-3 w-3" />}
            </button>
            <pre className="bg-ink-950/80 text-ink-300 px-3 py-2.5 rounded-lg border border-ink-800 text-xs sm:text-sm font-mono overflow-x-auto">
              <span className="text-ink-600 select-none">$ </span>
              {config.manualCommand}
            </pre>
          </div>
        </div>

        <div className="rounded-lg border border-dashed border-amber-400/30 bg-ink-900/50 p-3 sm:p-4">
          <div className="flex items-center gap-2 mb-1">
            <Monitor className="h-3.5 w-3.5 shrink-0 text-amber-400" />
            <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase tracking-widest text-amber-400 border border-amber-400/40 px-2 py-0.5 rounded">
              {t.installWindowsLabel[language]}
            </span>
            <span className="text-xs font-mono text-ink-400 font-semibold">
              {t.installUpcoming[language]}
            </span>
          </div>
          <p className="text-[11px] font-mono text-ink-500 leading-relaxed ml-6">
            {t.installWindowsDesc[language]}
          </p>
        </div>
      </div>
    </div>
  );
}
