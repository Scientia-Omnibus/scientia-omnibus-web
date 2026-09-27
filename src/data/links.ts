const ORG = 'https://github.com/Scientia-Omnibus';

export const LINKS = {
  org: ORG,
  web: `${ORG}/scientia-omnibus-web`,
  core: `${ORG}/scientia-core`,
  formalSciences: `${ORG}/formal-sciences`,
  survival: `${ORG}/survival-and-medicine`,

  coreIssues: `${ORG}/scientia-core/issues`,
  license: `${ORG}/scientia-omnibus-web/blob/main/LICENSE`,

  coreInstaller: 'https://raw.githubusercontent.com/Scientia-Omnibus/scientia-core/main/install.sh',
  editorInstaller: 'https://raw.githubusercontent.com/Scientia-Omnibus/scientia-omnibus-web/main/install.sh',
  rustup: 'https://rustup.rs',

  coreExe: '/scientia-core.exe',
  coreGuide: '/scientia-core/guide',
  editorGuide: '/scientia-editor/guide',
} as const;

export const REPO_BY_ID = {
  'scientia-core': LINKS.core,
  'formal-sciences': LINKS.formalSciences,
  'survival-and-medicine': LINKS.survival,
} as const;
