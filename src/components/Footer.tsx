import { Language } from '../types';
import { UI_TRANSLATIONS, type TranslationKey } from '../data/modules';
import { LINKS } from '../data/links';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

interface FooterProps {
  language: Language;
}

type FooterLinkKind = 'external' | 'route' | 'download';

interface FooterLink {
  labelKey: TranslationKey;
  href: string;
  kind: FooterLinkKind;
}

const FOOTER_COLUMNS: { titleKey: TranslationKey; links: FooterLink[] }[] = [
  {
    titleKey: 'footerProjects',
    links: [
      { labelKey: 'footerCore', href: LINKS.core, kind: 'external' },
      { labelKey: 'footerEditor', href: LINKS.editorGuide, kind: 'route' },
      { labelKey: 'footerFormalSciences', href: LINKS.formalSciences, kind: 'external' },
      { labelKey: 'footerSurvival', href: LINKS.survival, kind: 'external' },
    ],
  },
  {
    titleKey: 'footerDocs',
    links: [
      { labelKey: 'footerGuides', href: LINKS.coreGuide, kind: 'route' },
      { labelKey: 'footerWindows', href: LINKS.coreExe, kind: 'download' },
    ],
  },
  {
    titleKey: 'footerCommunity',
    links: [
      { labelKey: 'footerOrg', href: LINKS.org, kind: 'external' },
      { labelKey: 'footerIssues', href: LINKS.coreIssues, kind: 'external' },
      { labelKey: 'footerWebsite', href: LINKS.web, kind: 'external' },
    ],
  },
];

export default function Footer({ language }: FooterProps) {
  const t = UI_TRANSLATIONS;

  return (
    <footer className="bg-ink-950 text-ink-400 py-10 sm:py-14 border-t border-ink-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 pb-8 border-b border-ink-800">
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.titleKey} className="space-y-3">
              <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-phos-400">
                {t[column.titleKey][language]}
              </h4>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.labelKey}>
                    {link.kind === 'route' ? (
                      <Link
                        to={link.href}
                        className="inline-flex items-center gap-1.5 text-sm text-ink-400 hover:text-phos-400 transition-colors font-mono"
                      >
                        {t[link.labelKey][language]}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        download={link.kind === 'download' || undefined}
                        target={link.kind === 'external' ? '_blank' : undefined}
                        rel={link.kind === 'external' ? 'noopener noreferrer' : undefined}
                        className="inline-flex items-center gap-1.5 text-sm text-ink-400 hover:text-phos-400 transition-colors font-mono"
                      >
                        {t[link.labelKey][language]}
                        {link.kind === 'external' && <ExternalLink className="h-3 w-3 opacity-50" />}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-6 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex items-center gap-1.5">
            <span className="text-phos-400 font-bold select-none">$</span>
            <span className="font-display font-bold text-sm text-ink-100">Scientia Omnibus</span>
          </div>

          <p className="font-mono text-[11px] text-ink-500 leading-relaxed max-w-xl order-last lg:order-none">
            {t.footerMission[language]}
          </p>

          <div className="font-mono text-[11px] text-ink-500 leading-relaxed shrink-0">
            <div>
              &copy; {new Date().getFullYear()} &middot;{' '}
              <a
                href={LINKS.license}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-phos-400 transition-colors"
              >
                {t.footerLicense[language]}
              </a>
            </div>
            <div className="mt-0.5">{t.footerRights[language]}</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
