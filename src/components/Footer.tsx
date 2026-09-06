import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/modules';
import { ExternalLink } from 'lucide-react';

interface FooterProps {
  language: Language;
}

interface FooterLink {
  labelKey: keyof typeof UI_TRANSLATIONS;
  href: string;
  external: boolean;
}

const FOOTER_LINKS: Record<string, FooterLink[]> = {
  projects: [
    { labelKey: 'footerCore', href: 'https://github.com/Scientia-Omnibus/scientia-core', external: true },
    { labelKey: 'footerFormalSciences', href: 'https://github.com/Scientia-Omnibus/formal-sciences', external: true },
    { labelKey: 'footerSurvival', href: 'https://github.com/Scientia-Omnibus/survival-and-medicine', external: true },
  ],
  resources: [
    { labelKey: 'footerGuides', href: '/scientia-core/guide', external: false },
    { labelKey: 'footerGitHub', href: 'https://github.com/Scientia-Omnibus', external: true },
    { labelKey: 'footerKnowledgeBases', href: 'https://github.com/Scientia-Omnibus/formal-sciences', external: true },
  ],
  community: [
    { labelKey: 'footerContribute', href: 'https://github.com/Scientia-Omnibus/scientia-omnibus-web/blob/main/CONTRIBUTING.md', external: true },
    { labelKey: 'footerIssues', href: 'https://github.com/Scientia-Omnibus/scientia-core/issues', external: true },
  ],
  legal: [
    { labelKey: 'footerLicense', href: 'https://github.com/Scientia-Omnibus/scientia-core/blob/main/LICENSE', external: true },
  ],
};

export default function Footer({ language }: FooterProps) {
  const t = UI_TRANSLATIONS;

  const renderColumn = (titleKey: keyof typeof UI_TRANSLATIONS, links: FooterLink[]) => (
    <div className="space-y-3">
      <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-phos-400">
        {t[titleKey][language]}
      </h4>
      <ul className="space-y-2">
        {links.map((link, i) => (
          <li key={i}>
            <a
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noreferrer' : undefined}
              className="inline-flex items-center gap-1.5 text-sm text-ink-400 hover:text-phos-400 transition-colors font-mono"
            >
              {t[link.labelKey][language]}
              {link.external && <ExternalLink className="h-3 w-3 opacity-50" />}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="bg-ink-950 text-ink-400 py-10 sm:py-14 border-t border-ink-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 pb-8 border-b border-ink-800">
          {renderColumn('footerProjects', FOOTER_LINKS.projects)}
          {renderColumn('footerResources', FOOTER_LINKS.resources)}
          {renderColumn('footerCommunity', FOOTER_LINKS.community)}
          {renderColumn('footerLegal', FOOTER_LINKS.legal)}
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center pt-5 gap-3 font-mono text-[11px] text-ink-500 font-medium text-center sm:text-left">
          <div className="flex items-center gap-1.5">
            <span className="text-phos-400 font-bold select-none">$</span>
            <span className="font-display font-bold text-sm text-ink-100">
              Scientia Omnibus
            </span>
          </div>
          <div>
            &copy; {new Date().getFullYear()} Scientia Omnibus. {t.footerRights[language]}
          </div>
        </div>
      </div>
    </footer>
  );
}