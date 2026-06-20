import { LocalizedString } from '../types';

export interface GuideBullet {
  term: LocalizedString;
  description: LocalizedString;
}

export interface GuideShortcut {
  keys: string;
  action: LocalizedString;
}

export interface GuideCommand {
  command: string;
  aliases: string;
  description: LocalizedString;
}

export interface GuideCodeBlock {
  label: LocalizedString;
  command: string;
}

export interface GuideSection {
  id: string;
  title: LocalizedString;
  intro?: LocalizedString;
  codeBlocks?: GuideCodeBlock[];
  bullets?: GuideBullet[];
  shortcuts?: GuideShortcut[];
  commands?: GuideCommand[];
  notes?: LocalizedString[];
}

export const GUIDE_SECTIONS: GuideSection[] = [
  {
    id: 'installation',
    title: { en: 'Installation', by: 'Installation' },
    intro: {
      en: 'Install scientia-core with one of the following methods:',
      by: 'Install scientia-core with one of the following methods:',
    },
    codeBlocks: [
      {
        label: { en: 'via uv (recommended)', by: 'via uv (recommended)' },
        command: 'uv tool install scientia-core',
      },
      {
        label: { en: 'via pip', by: 'via pip' },
        command: 'pip install scientia-core',
      },
      {
        label: { en: 'Linux / macOS (one-liner)', by: 'Linux / macOS (one-liner)' },
        command: "bash <(curl -fsSL https://raw.githubusercontent.com/Scientia-Omnibus/scientia-core/main/install.sh)",
      },
    ],
    notes: [
      {
        en: 'Git must be installed when using uv or pip.',
        by: 'Git must be installed when using uv or pip.',
      },
      {
        en: 'Windows support will be added later.',
        by: 'Windows support will be added later.',
      },
    ],
  },
  {
    id: 'quick-start',
    title: { en: 'Quick Start', by: 'Хуткі старт' },
    intro: {
      en: 'Get started with scientia-core in three steps:',
      by: 'Пачніце працаваць з scientia-core у тры крокі:',
    },
    bullets: [
      {
        term: { en: '1. Launch', by: '1. Запуск' },
        description: {
          en: 'Run scientia-core in your terminal. The interface has an omnibox (top bar), a navigation panel (left side), and a document viewer (main area).',
          by: 'Запусціце scientia-core у тэрмінале. Інтэрфейс складаецца з omnibox (верхняя панэль), панэлі навігацыі (злева) і прагляду дакументаў (асноўная вобласць).',
        },
      },
      {
        term: { en: '2. Find content', by: '2. Пошук' },
        description: {
          en: 'Press / to focus the omnibox, then type to search for documents. Select a result with arrow keys and press Enter to open it.',
          by: 'Націсніце / каб перайсці да omnibox, затым увядзіце запыт для пошуку дакументаў. Выберыце вынік стрэлкамі і націсніце Enter.',
        },
      },
      {
        term: { en: '3. Read & navigate', by: '3. Чытанне' },
        description: {
          en: 'Use j/k or w/s to scroll, Ctrl+N to toggle the sidebar, and Ctrl+G to download knowledge repositories.',
          by: 'Выкарыстоўвайце j/k ці w/s для пракруткі, Ctrl+N каб схаваць/паказаць панэль і Ctrl+G для спампоўкі баз ведаў.',
        },
      },
    ],
  },
  {
    id: 'interface',
    title: { en: 'Interface', by: 'Інтэрфейс' },
    intro: {
      en: 'The application has three main areas:',
      by: 'Праграма складаецца з трох асноўных зон:',
    },
    bullets: [
      {
        term: { en: 'Omnibox', by: 'Omnibox' },
        description: {
          en: 'Top bar for command input — works like a browser address bar.',
          by: 'Верхняя панэль для ўводу каманд — як адрасны радок у браўзеры.',
        },
      },
      {
        term: { en: 'Navigation', by: 'Навігацыя' },
        description: {
          en: 'Side panel with four tabs: Contents, Local, Bookmarks, History.',
          by: 'Бакавая панэль з чатырма ўкладкамі: Змест, Лакальна, Закладкі, Гісторыя.',
        },
      },
      {
        term: { en: 'Viewer', by: 'Прагляд' },
        description: {
          en: 'Main area — Markdown document viewer.',
          by: 'Галоўная зона — прагляд Markdown-дакументаў.',
        },
      },
    ],
    notes: [
      {
        en: 'The side panel can be hidden or shown (Ctrl+N), tabs can be switched, and the panel can be docked to the opposite side (\\).',
        by: 'Бакавую панэль можна хаваць і паказваць (Ctrl+N), пераключаць укладкі і пераносіць на процілеглы бок (\\).',
      },
    ],
  },
  {
    id: 'search',
    title: { en: 'Search', by: 'Пошук' },
    intro: {
      en: 'As you type in the omnibox, fuzzy search scans the knowledge directory for matching .md files. Results appear in a dropdown below.',
      by: 'Пры ўводзе ў omnibox нечаткі пошук сканіруе каталог ведаў на .md файлы. Вынікі з\'яўляюцца ў выпадным спісе.',
    },
    shortcuts: [
      { keys: 'Down', action: { en: 'Move focus to results list', by: 'Фокус на спіс вынікаў' } },
      { keys: 'Up', action: { en: 'Return focus to omnibox (at top of results)', by: 'Вярнуць фокус у omnibox' } },
      { keys: 'Enter', action: { en: 'Open selected file', by: 'Адкрыць выбраны файл' } },
      { keys: 'Escape', action: { en: 'Close results dropdown', by: 'Зачыніць спіс вынікаў' } },
    ],
  },
  {
    id: 'document-viewer',
    title: { en: 'Document viewer', by: 'Прагляд дакумента' },
    intro: {
      en: 'When the viewer is focused:',
      by: 'Калі фокус у праглядзе:',
    },
    shortcuts: [
      { keys: 'w / k', action: { en: 'Scroll up', by: 'Пракруціць уверх' } },
      { keys: 's / j', action: { en: 'Scroll down', by: 'Пракруціць уніз' } },
      { keys: 'Space', action: { en: 'Page down', by: 'Старонка ўніз' } },
      { keys: 'b', action: { en: 'Page up', by: 'Старонка ўверх' } },
    ],
  },
  {
    id: 'commands',
    title: { en: 'Commands', by: 'Каманды' },
    intro: {
      en: 'Press / or click the omnibox, then enter a command:',
      by: 'Націсніце / або клікніце omnibox, затым увядзіце каманду:',
    },
    commands: [
      { command: 'about', aliases: 'a', description: { en: 'Show application information', by: 'Інфармацыя пра праграму' } },
      { command: 'bookmarks', aliases: 'b, bm', description: { en: 'Show bookmarks list', by: 'Спіс закладак' } },
      { command: 'contents', aliases: 'c, toc', description: { en: 'Show table of contents', by: 'Паказаць змест' } },
      { command: 'help', aliases: '?', description: { en: 'Show help', by: 'Паказаць дапамогу' } },
      { command: 'history', aliases: 'h', description: { en: 'Show history', by: 'Паказаць гісторыю' } },
      { command: 'local', aliases: 'l', description: { en: 'Show local files', by: 'Паказаць лакальныя файлы' } },
      { command: 'quit', aliases: 'q', description: { en: 'Quit application', by: 'Выйсці з праграмы' } },
    ],
  },
  {
    id: 'navigation-panel',
    title: { en: 'Navigation panel', by: 'Панэль навігацыі' },
    shortcuts: [
      { keys: ', / a / h / Ctrl+Left / Shift+Left', action: { en: 'Previous tab', by: 'Папярэдняя ўкладка' } },
      { keys: '. / d / l / Ctrl+Right / Shift+Right', action: { en: 'Next tab', by: 'Наступная ўкладка' } },
      { keys: '\\', action: { en: 'Dock panel left/right', by: 'Перанесці панэль лева/права' } },
    ],
  },
  {
    id: 'global-shortcuts',
    title: { en: 'Global shortcuts', by: 'Глабальныя спалучэнні' },
    shortcuts: [
      { keys: '/ or :', action: { en: 'Focus the omnibox', by: 'Фокус на omnibox' } },
      { keys: 'Escape', action: { en: 'Return to omnibox / clear / quit', by: 'Вярнуцца ў omnibox / ачысціць / выйсці' } },
      { keys: 'Ctrl+N', action: { en: 'Show/hide navigation sidebar', by: 'Паказаць/схаваць бакавую панэль' } },
      { keys: 'Ctrl+B', action: { en: 'Show bookmarks', by: 'Паказаць закладкі' } },
      { keys: 'Ctrl+L', action: { en: 'Show local files', by: 'Паказаць лакальныя файлы' } },
      { keys: 'Ctrl+T', action: { en: 'Show table of contents', by: 'Паказаць змест' } },
      { keys: 'Ctrl+Y', action: { en: 'Show history', by: 'Паказаць гісторыю' } },
      { keys: 'Ctrl+Left', action: { en: 'Go backward in history', by: 'Назад у гісторыі' } },
      { keys: 'Ctrl+Right', action: { en: 'Go forward in history', by: 'Наперад у гісторыі' } },
      { keys: 'Ctrl+D', action: { en: 'Bookmark current document', by: 'Дадаць закладку' } },
      { keys: 'Ctrl+R', action: { en: 'Reload current document', by: 'Перазагрузіць дакумент' } },
      { keys: 'Ctrl+Q', action: { en: 'Quit application', by: 'Выйсці з праграмы' } },
      { keys: 'F1', action: { en: 'Help', by: 'Дапамога' } },
      { keys: 'F2', action: { en: 'About', by: 'Пра праграму' } },
      { keys: 'F10', action: { en: 'Toggle dark/light theme', by: 'Пераключыць тэму' } },
    ],
  },
  {
    id: 'bookmarks',
    title: { en: 'Bookmarks', by: 'Закладкі' },
    shortcuts: [
      { keys: 'Delete', action: { en: 'Delete bookmark', by: 'Выдаліць закладку' } },
      { keys: 'r', action: { en: 'Rename bookmark', by: 'Перайменаваць закладку' } },
    ],
  },
  {
    id: 'history',
    title: { en: 'History', by: 'Гісторыя' },
    shortcuts: [
      { keys: 'Delete', action: { en: 'Delete history entry', by: 'Выдаліць запіс' } },
      { keys: 'Backspace', action: { en: 'Clear all history', by: 'Ачысціць усю гісторыю' } },
    ],
  },
  {
    id: 'knowledge-base-sync',
    title: { en: 'Knowledge Base Sync', by: 'Сінхранізацыя баз ведаў' },
    intro: {
      en: 'Ctrl+G opens a dialog to download or update knowledge repositories. Currently one repository is available:',
      by: 'Ctrl+G адкрывае дыялог для спампоўкі або абнаўлення рэпазіторыяў ведаў. На дадзены момант даступны адзін рэпазіторый:',
    },
    bullets: [
      {
        term: { en: 'formal-sciences', by: 'formal-sciences' },
        description: {
          en: 'Mathematics from basics to calculus. More repositories will be added in future releases.',
          by: 'Матэматыка ад асноў да вылічэнняў. У будучых версіях будуць дададзены новыя рэпазіторыі.',
        },
      },
    ],
    notes: [
      {
        en: 'Select a repository and press OK. If the repository already exists locally, it will be force-synced — any local changes are overwritten with the remote version. If it does not exist, it will be cloned from GitHub (github.com/Scientia-Omnibus). After syncing, the file tree navigates to the downloaded repository so you can browse its contents immediately.',
        by: 'Абярыце рэпазіторый і націсніце OK. Калі рэпазіторый ужо існуе лакальна, ён будзе прымусова сінхранізаваны — усе лакальныя змены будуць заменены выдаленай версіяй. Калі не існуе, ён будзе скапіяваны з GitHub (github.com/Scientia-Omnibus). Пасля сінхранізацыі дрэва файлаў перамесціцца ў спампаваны рэпазіторый, каб вы маглі адразу праглядаць яго змесціва.',
      },
    ],
  },
];
