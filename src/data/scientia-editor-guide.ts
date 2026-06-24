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
    title: { en: 'Installation', by: 'Усталяванне' },
    intro: {
      en: 'Coming soon.',
      by: 'Хутка.',
    },
  },
  {
    id: 'quick-start',
    title: { en: 'Quick Start', by: 'Хуткі старт' },
    intro: {
      en: 'Launch scientia-editor in your terminal:',
      by: 'Запусціце scientia-editor у тэрмінале:',
    },
    codeBlocks: [
      {
        label: { en: 'Open current directory', by: 'Адкрыць бягучую папку' },
        command: 'scientia-editor .',
      },
      {
        label: { en: 'Open a specific file', by: 'Адкрыць пэўны файл' },
        command: 'scientia-editor <file>',
      },
      {
        label: { en: 'Start with empty buffer', by: 'Пусты буфер' },
        command: 'scientia-editor',
      },
    ],
    bullets: [
      {
        term: { en: '1. Navigate', by: '1. Навігацыя' },
        description: {
          en: 'Use arrow keys to move the cursor. Ctrl+B toggles the sidebar file tree.',
          by: 'Выкарыстоўвайце стрэлкі для перамяшчэння курсора. Ctrl+B паказвае/хавае бакавую панэль з файламі.',
        },
      },
      {
        term: { en: '2. Edit', by: '2. Рэдагаванне' },
        description: {
          en: 'Type to insert text. Use Ctrl+Z/Y for undo/redo. Cut, copy, and paste with Ctrl+X/C/V.',
          by: 'Друкуйце для ўводу тэксту. Ctrl+Z/Y для адмены/паўтору. Выразанне, капіяванне і ўстаўка — Ctrl+X/C/V.',
        },
      },
      {
        term: { en: '3. Save', by: '3. Захаванне' },
        description: {
          en: 'Press Ctrl+S to save. Ctrl+Shift+S for save as. Ctrl+N for a new file.',
          by: 'Націсніце Ctrl+S каб захаваць. Ctrl+Shift+S — захаваць як. Ctrl+N — новы файл.',
        },
      },
    ],
  },
  {
    id: 'file-ops',
    title: { en: 'File Operations', by: 'Аперацыі з файламі' },
    shortcuts: [
      { keys: 'Ctrl+S', action: { en: 'Save current file', by: 'Захаваць бягучы файл' } },
      { keys: 'Ctrl+Shift+S', action: { en: 'Save as', by: 'Захаваць як' } },
      { keys: 'Ctrl+N', action: { en: 'New file', by: 'Новы файл' } },
      { keys: 'Ctrl+W', action: { en: 'Close current tab', by: 'Закрыць бягучую ўкладку' } },
      { keys: 'Ctrl+Q', action: { en: 'Quit editor', by: 'Выйсці з рэдактара' } },
    ],
  },
  {
    id: 'navigation',
    title: { en: 'Navigation', by: 'Навігацыя' },
    shortcuts: [
      { keys: '↑ ↓ ← →', action: { en: 'Move cursor', by: 'Перамясціць курсор' } },
      { keys: 'Home', action: { en: 'Go to start of line', by: 'Пачатак радка' } },
      { keys: 'End', action: { en: 'Go to end of line', by: 'Канец радка' } },
      { keys: 'Ctrl+Home', action: { en: 'Go to start of file', by: 'Пачатак файла' } },
      { keys: 'Ctrl+End', action: { en: 'Go to end of file', by: 'Канец файла' } },
      { keys: 'Page Up', action: { en: 'Scroll up one page', by: 'Старонка ўверх' } },
      { keys: 'Page Down', action: { en: 'Scroll down one page', by: 'Старонка ўніз' } },
      { keys: 'Ctrl+←', action: { en: 'Jump to previous word', by: 'Папярэдняе слова' } },
      { keys: 'Ctrl+→', action: { en: 'Jump to next word', by: 'Наступнае слова' } },
    ],
  },
  {
    id: 'selection',
    title: { en: 'Selection', by: 'Вылучэнне' },
    shortcuts: [
      { keys: 'Shift+← →', action: { en: 'Select characters', by: 'Вылучыць сімвалы' } },
      { keys: 'Shift+↑ ↓', action: { en: 'Select lines', by: 'Вылучыць радкі' } },
      { keys: 'Ctrl+Shift+←', action: { en: 'Select previous word', by: 'Вылучыць папярэдняе слова' } },
      { keys: 'Ctrl+Shift+→', action: { en: 'Select next word', by: 'Вылучыць наступнае слова' } },
      { keys: 'Ctrl+A', action: { en: 'Select all', by: 'Вылучыць усё' } },
    ],
  },
  {
    id: 'editing',
    title: { en: 'Editing', by: 'Рэдагаванне' },
    shortcuts: [
      { keys: 'Ctrl+Z', action: { en: 'Undo', by: 'Адмяніць' } },
      { keys: 'Ctrl+Y', action: { en: 'Redo', by: 'Паўтарыць' } },
      { keys: 'Ctrl+X', action: { en: 'Cut', by: 'Вырэзаць' } },
      { keys: 'Ctrl+C', action: { en: 'Copy', by: 'Капіяваць' } },
      { keys: 'Ctrl+V', action: { en: 'Paste', by: 'Уставіць' } },
      { keys: 'Ctrl+Tab', action: { en: 'Next tab', by: 'Наступная ўкладка' } },
      { keys: 'Ctrl+Shift+Tab', action: { en: 'Previous tab', by: 'Папярэдняя ўкладка' } },
    ],
    notes: [
      {
        en: 'Clipboard requires xclip (X11) or wl-clipboard (Wayland). Without them, clipboard operations silently no-op.',
        by: 'Буфер абмену патрабуе xclip (X11) або wl-clipboard (Wayland). Без іх аперацыі з буферам абмену маўкліва ігнаруюцца.',
      },
    ],
  },
  {
    id: 'search',
    title: { en: 'Search', by: 'Пошук' },
    shortcuts: [
      { keys: 'Ctrl+F', action: { en: 'Find in file', by: 'Знайсці ў файле' } },
      { keys: 'Ctrl+H', action: { en: 'Find and replace', by: 'Знайсці і замяніць' } },
      { keys: 'F3', action: { en: 'Next match', by: 'Наступны вынік' } },
      { keys: 'Shift+F3', action: { en: 'Previous match', by: 'Папярэдні вынік' } },
    ],
  },
  {
    id: 'ui',
    title: { en: 'UI Controls', by: 'Кіраванне інтэрфейсам' },
    intro: {
      en: 'Ctrl+P opens the command palette — a searchable list of every editor action: save, save as, close tab, change theme, help, and more. Just type what you want to do.',
      by: 'Ctrl+P адкрывае камандную палітру — пошукавы спіс усіх дзеянняў рэдактара: захаваць, захаваць як, закрыць укладку, змяніць тэму, дапамога і іншае. Проста ўвядзіце, што хочаце зрабіць.',
    },
    shortcuts: [
      { keys: 'Ctrl+P', action: { en: 'Open command palette (save, save as, theme, help, etc.)', by: 'Камандная палітра (захаваць, захаваць як, тэма, дапамога і інш.)' } },
      { keys: 'Ctrl+B', action: { en: 'Toggle sidebar', by: 'Паказаць/схаваць бакавую панэль' } },
      { keys: 'Ctrl+[', action: { en: 'Focus sidebar', by: 'Фокус на бакавую панэль' } },
      { keys: 'Ctrl+]', action: { en: 'Focus editor', by: 'Фокус на рэдактар' } },
      { keys: 'F1', action: { en: 'Show help', by: 'Дапамога' } },
    ],
  },
  {
    id: 'sidebar',
    title: { en: 'Sidebar Navigation', by: 'Бакавая панэль' },
    intro: {
      en: 'When the sidebar (file tree) is focused:',
      by: 'Калі фокус у бакавой панэлі:',
    },
    shortcuts: [
      { keys: '↑ ↓', action: { en: 'Navigate files', by: 'Навігацыя па файлах' } },
      { keys: 'Enter / →', action: { en: 'Open file / enter directory', by: 'Адкрыць файл / увайсці ў папку' } },
      { keys: '← / Backspace', action: { en: 'Go back', by: 'Назад' } },
      { keys: 'Esc / Tab', action: { en: 'Return to editor', by: 'Вярнуцца ў рэдактар' } },
      { keys: 'A / N', action: { en: 'New file', by: 'Новы файл' } },
      { keys: 'Q', action: { en: 'Quit editor', by: 'Выйсці з рэдактара' } },
    ],
  },
  {
    id: 'configuration',
    title: { en: 'Configuration', by: 'Канфігурацыя' },
    intro: {
      en: 'Create or edit ~/.config/scientia-editor/config.toml:',
      by: 'Стварыце ці адрэдагуйце ~/.config/scientia-editor/config.toml:',
    },
    codeBlocks: [
      {
        label: { en: 'Example config', by: 'Прыклад канфігурацыі' },
        command: 'theme = "catppuccin-mocha"\ntab_size = 2\nshow_line_numbers = true\nshow_sidebar = true\nsidebar_width = 32\nword_wrap = false\nauto_save = false',
      },
    ],
    bullets: [
      {
        term: { en: 'File location', by: 'Размяшчэнне' },
        description: {
          en: '~/.config/scientia-editor/config.toml. See scientia-editor.config.example.toml for all options.',
          by: '~/.config/scientia-editor/config.toml. Глядзіце scientia-editor.config.example.toml для ўсіх опцый.',
        },
      },
    ],
  },
  {
    id: 'themes',
    title: { en: 'Themes', by: 'Тэмы' },
    intro: {
      en: 'Built-in themes available in config.toml:',
      by: 'Убудаваныя тэмы, даступныя ў config.toml:',
    },
    bullets: [
      {
        term: { en: 'catppuccin-mocha', by: 'catppuccin-mocha' },
        description: {
          en: 'Dark, purple, warm. The default. Correct.',
          by: 'Цёмная, фіялетавая, цёплая. Стандартная. Правільны выбар.',
        },
      },
      {
        term: { en: 'dracula', by: 'dracula' },
        description: {
          en: 'Also dark, more purple. For people who cannot let go.',
          by: 'Таксама цёмная, больш фіялетавая. Для тых, хто не можа адпусціць.',
        },
      },
      {
        term: { en: 'nord', by: 'nord' },
        description: {
          en: 'Arctic blue-gray. For when you miss the snow.',
          by: 'Арктычны блакітна-шэры. Калі вы сумуеце па снезе.',
        },
      },
    ],
  },
  {
    id: 'tech',
    title: { en: 'Technology Stack', by: 'Тэхналогіі' },
    intro: {
      en: 'scientia-editor is built with:',
      by: 'scientia-editor пабудаваны на:',
    },
    bullets: [
      {
        term: { en: 'ratatui', by: 'ratatui' },
        description: {
          en: 'Rust TUI framework for terminal UI rendering.',
          by: 'Rust TUI фрэймворк для адмалёўкі тэрмінальнага інтэрфейсу.',
        },
      },
      {
        term: { en: 'crossterm', by: 'crossterm' },
        description: {
          en: 'Cross-platform terminal backend.',
          by: 'Крос-платформенны тэрмінальны бэкэнд.',
        },
      },
      {
        term: { en: 'syntect', by: 'syntect' },
        description: {
          en: 'Syntax highlighting engine.',
          by: 'Рушвій падсветкі сінтаксісу.',
        },
      },
      {
        term: { en: 'Rust', by: 'Rust' },
        description: {
          en: 'Systems programming language — because we are adults.',
          by: 'Мова сістэмнага праграмавання — таму што мы дарослыя.',
        },
      },
    ],
    notes: [
      {
        en: '~5 MB binary vs 30 MB for comparable editors. Starts instantly, uses <10 MB of RAM.',
        by: '~5 МБ бінарнік супраць 30 МБ у аналагаў. Запускаецца імгненна, спажывае <10 МБ АЗП.',
      },
    ],
  },
];
