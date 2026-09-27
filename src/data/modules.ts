import { LocalizedString } from '../types';
import { LINKS } from './links';

export interface ProjectInfo {
  id: string;
  name: string;
  repoUrl?: string;
  tagline: LocalizedString;
  description: LocalizedString;
  stack?: string[];
  sourcePublic: boolean;
}

export const UI_TRANSLATIONS = {
  heroEyebrow: {
    en: 'Volunteer open-source project',
    by: 'Валонцёрскі open-source праект',
  },
  heroTitle: {
    en: "Knowledge shouldn't demand gigabytes.",
    by: 'Веды не павінны патрабаваць гігабайтаў.',
  },
  heroSubtitle: {
    en: 'We are volunteers. We write small programs for the terminal that keep working when the network does not, on computers other people have already thrown away.',
    by: 'Мы — валанцёры. Мы пішам невялікія праграмы для тэрмінала, якія працуюць і без сеткі, на камп’ютарах, якія ўжо спісалі.',
  },
  viewProjects: {
    en: 'See the tools',
    by: 'Глядзець інструменты',
  },
  viewOnGithub: {
    en: 'Source on GitHub',
    by: 'Крыжык на GitHub',
  },
  heroStatFootprintDesc: {
    en: 'scientia-core, memory in use',
    by: 'scientia-core, занятая памяць',
  },
  heroStatMemoryDesc: {
    en: 'less memory than one browser tab',
    by: 'менш памяці, чым адна ўкладка браўзера',
  },
  heroStatOfflineDesc: {
    en: 'works offline after the first download',
    by: 'працуе афлайн пасля першай загрузкі',
  },
  heroStatHardwareDesc: {
    en: 'years-old hardware we design for',
    by: 'гадоў — на такой тэхніцы мы разлічаем',
  },

  projectsTitle: {
    en: 'The tools',
    by: 'Інструменты',
  },
  projectsSubtitle: {
    en: 'Two programs, both for the terminal. Each one runs on old hardware and keeps working without a connection.',
    by: 'Два праграмы, абодва для тэрмінала. Кожны працуе на старой тэхніцы і працаўтае без сувязі.',
  },
  releasedLabel: {
    en: 'Released',
    by: 'Выпушчана',
  },
  inDevelopmentLabel: {
    en: 'In Development',
    by: 'У распрацоўцы',
  },
  statusReleased: {
    en: 'Released',
    by: 'Выпушчана',
  },
  statusSourcePrivate: {
    en: 'Source not public',
    by: 'Крыжык не публічны',
  },
  statusInDevelopment: {
    en: 'In Development',
    by: 'У распрацоўцы',
  },
  viewGuide: {
    en: 'Usage guide',
    by: 'Дапаможнік',
  },
  downloadWindows: {
    en: 'Windows build',
    by: 'Зборка для Windows',
  },
  knowledgeBasesTitle: {
    en: 'Knowledge packs',
    by: 'Пакеты ведаў',
  },
  formalSciencesDesc: {
    en: 'Formal sciences — mathematics from basics to calculus.',
    by: 'Фармальныя навукі — матэматыка ад асноў да вылічэнняў.',
  },
  survivalDesc: {
    en: 'Water purification, campfires, and navigation — practical guides for the field.',
    by: 'Ачыстка вады, вогнішча і арыентаванне — практычныя даведнікі для паходу.',
  },
  medicinePlanned: {
    en: 'Medicine (coming soon)',
    by: 'Медыцына (хутка)',
  },
  kbBasic: {
    en: 'Arithmetic & algebra basics',
    by: 'Арыфметыка і асновы алгебры',
  },
  kbAlgebraCore: {
    en: 'Algebra & trigonometry',
    by: 'Алгебра і трыганаметрыя',
  },
  kbSurvival: {
    en: 'Survival & Medicine',
    by: 'Выжыванне і медыцына',
  },
  kbDone: {
    en: 'done',
    by: 'гатова',
  },
  kbAdvanced: {
    en: 'Calculus (in progress)',
    by: 'Вылічэнні (у працы)',
  },
  kbPlanned: {
    en: 'Planned',
    by: 'Плануецца',
  },
  kbHumanities: {
    en: 'humanities',
    by: 'гуманітарныя',
  },
  kbSocial: {
    en: 'social sciences',
    by: 'грамадскія навукі',
  },
  kbNatural: {
    en: 'natural sciences',
    by: 'прыродазнаўчыя навукі',
  },
  kbDiy: {
    en: 'DIY',
    by: 'DIY',
  },
  kbContrib: {
    en: 'Packs are plain Markdown. To add a chapter or fix a typo, open a pull request in',
    by: 'Пакеты — гэта просты Markdown. Каб дадаць раздзел або выправіць памылку, адкрыйце pull request у',
  },

  guideTitle: {
    en: 'scientia-core — usage guide',
    by: 'scientia-core — дапаможнік',
  },
  guideSubtitle: {
    en: 'Shortcuts, panels and commands for the offline knowledge reader.',
    by: 'Спалучэнні клавіш, панэлі і каманды афлайн-праграмы для чытання ведаў.',
  },
  editorGuideTitle: {
    en: 'scientia-editor — usage guide',
    by: 'scientia-editor — дапаможнік',
  },
  editorGuideSubtitle: {
    en: 'Shortcuts, commands and configuration for the terminal code editor.',
    by: 'Спалучэнні клавіш, каманды і налады тэрмінальнага рэдактара кода.',
  },
  backToProjects: {
    en: 'Back to the tools',
    by: 'Назад да інструментаў',
  },

  installTitle: {
    en: 'Install',
    by: 'Усталяванне',
  },
  installOneLiner: {
    en: 'Linux / macOS',
    by: 'Linux / macOS',
  },
  installRecommended: {
    en: 'One line',
    by: 'Адной камандай',
  },
  installManual: {
    en: 'Manual install',
    by: 'Уручную',
  },
  installManualRust: {
    en: 'Install Rust first, then run:',
    by: 'Спачатку ўсталюйце Rust, потым выканайце:',
  },
  installCopy: {
    en: 'Copy',
    by: 'Скапіраваць',
  },
  installDownload: {
    en: 'Download',
    by: 'Спампаваць',
  },
  installWindowsNote: {
    en: 'Single file, no installer. Double-click it.',
    by: 'Адзін файл, без усталёўшчыка. Проста адкрыйце яго.',
  },

  whyTitle: {
    en: 'Built for the computer people actually have',
    by: 'Зроблена для тэхнікі, якая ў людзей ёсць',
  },
  whySubtitle: {
    en: 'A large part of the world has a slow connection and an old computer. Everything below is written for that case.',
    by: 'Вялікая частка свету мае павольную сувязь і стары кампутар. Усё ніжэй напісана менавіта для гэтага выпадку.',
  },
  whyPlatformLabel: {
    en: 'The terminal is the platform',
    by: 'Платформа — тэрмінал',
  },
  problemTitle: {
    en: 'The cost of a heavy web app',
    by: 'Цана цяжкага вэб-дадатку',
  },
  problemDesc: {
    en: 'A browser tab takes a few hundred megabytes of memory before a lesson even loads. On a machine with 2 GB of RAM that is the difference between opening a page and giving up.',
    by: 'Ўкладка браўзера з’ядае некалькі сотняў мегабайтаў памяці яшчэ да загрузкі ўроку. На кампутары з 2 ГБ АЗП гэта розніца паміж «адкрыць старонку» і «адстаць».',
  },
  problemStat: {
    en: '≈350 MB for one blank tab',
    by: '≈350 МБ на адну пустую ўкладку',
  },
  impactTitle: {
    en: 'What that changes',
    by: 'Што гэта мяняе',
  },
  impactItems: {
    en: 'A school downloads the maths pack once. During a power cut the lesson goes on, because the files are already on the machine.',
    by: 'Школа спампоўвае падручнік па матэматыцы адзін раз. Падчас адключэння святла ўрок працягваецца, бо файлы ўжо на камп’ютары.',
  },
  equityTitle: {
    en: 'The same file everywhere',
    by: 'Адзін і той жа файл усюды',
  },
  equityDesc: {
    en: 'It opens on a Raspberry Pi, on a ten-year-old laptop and on a school desktop. A textbook should not depend on which of those you got.',
    by: 'Ён адкрываецца на Raspberry Pi, на дзесяцігадовым ноўтбуку і на школьным кампутары. Падручнік не павінен залежаць ад таго, які з іх у вас.',
  },
  efficiencyTitle: {
    en: 'No browser in between',
    by: 'Без браўзера паміжку',
  },
  efficiencyDesc: {
    en: 'A terminal program reads files directly. On the machine measured in the chart above, that is 8 MB of memory where a browser tab needs 350.',
    by: 'Тэрмінальная праграма чытае файлы напраўму. На машыне, змеранай на графіку вышэй, гэта 8 МБ памяці там, дзе ўкладцы браўзера патрэбна 350.',
  },
  empowermentTitle: {
    en: 'It stays yours',
    by: 'Ўстаёцца вашым',
  },
  empowermentDesc: {
    en: 'Download a pack once and it works from a USB drive, an old phone or a single-board computer. There is no account, and nothing to cancel later.',
    by: 'Спампавалі пакет адзін раз — ён працуе з USB, старога тэлефона або аднаплатнай платы. Ні акаўнта, нічога адмяняць пазней.',
  },

  mapTitle: {
    en: 'Digital learning has an access problem',
    by: 'Лічбавая адукацыя мае праблему доступу',
  },
  mapSubtitle: {
    en: 'Where the connection is thin, and what that does to an ordinary lesson.',
    by: 'Дзе сувязь тонкая і што гэта значыць для звычайнага ўроку.',
  },
  mapHardestLabel: {
    en: 'Where access is hardest',
    by: 'Дзе доступ найцяжэйшы',
  },
  mapHardestHint: {
    en: 'Share of the population using the internet, lowest first',
    by: 'Доля насельніцтва, якая карыстаецца інтэрнэтам, ад найменшай',
  },
  mapLegend: {
    en: 'countries shown',
    by: 'краін паказана',
  },
  mapStatOffline: {
    en: 'people are still offline',
    by: 'чалавек усё яшчэ па-за сеткай',
  },
  mapStatStudents: {
    en: 'students that distance learning never reached',
    by: 'вучняў, да якіх дыстанцыйнае навучанне не дайшло',
  },
  mapStatRural: {
    en: 'of the rural population is online, against 85% in cities',
    by: 'сельскага насельніцтва ў сетцы, супраць 85% у гарадах',
  },
  mapNumbersLabel: {
    en: 'By the numbers',
    by: 'Лічбы',
  },
  mapFactDistance: {
    en: 'Distance learning failed to reach at least half a billion students worldwide, and 72% of the poorest.',
    by: 'Дыстанцыйнае навучанне не дайшло як мінімум да паўмільярда вучняў у свеце і да 72% самых бедных.',
  },
  mapFactSchools: {
    en: 'Only 40% of primary schools are connected to the internet. One in four has no electricity at all.',
    by: 'Да інтэрнэту падключана толькі 40% пачатковых школ. Адна з чатырёх увогуле не мае электрычнасці.',
  },
  mapFactCoverage: {
    en: '96% of the people who are offline live in low- and middle-income countries.',
    by: '96% людзей, якія застаюцца па-за сеткай, жывуць у краінах з нізкім і сярэднім прыбыткам.',
  },
  mapFactEdtech: {
    en: 'A study of 7,000 commercial teaching tools priced at $13 billion found 85% were a poor fit or badly implemented.',
    by: 'Даследаванне 7 000 камерцыйных адукацыйных інструментаў на 13 млрд долараў: 85% не падыходзяць або дрэнна зроблены.',
  },
  mapClosing: {
    en: 'A file on disk does not care whether the network is there.',
    by: 'Файл на дыску не цікавіць, ёсць сетка ці не.',
  },

  cmpTitle: {
    en: 'What each tool costs to run',
    by: 'Колькі памяці патрабуе кожны інструмент',
  },
  cmpSubtitle: {
    en: 'Memory in use while idle, with nothing loaded. The way to reproduce these numbers is under the chart.',
    by: 'Памяць, якая занята ў ідыльным рэжыме, без загружанага змесціва. Як праверыць гэтыя лічбы — пад графікам.',
  },
  cmpUnit: {
    en: 'MB of memory per running instance',
    by: 'МБ памяці на запушчаны працэс',
  },
  cmpChip: {
    en: 'our measurement',
    by: 'наша вымярэнне',
  },
  cmpChromeLabel: {
    en: 'Chrome, one blank tab',
    by: 'Chrome, адна пустая ўкладка',
  },
  cmpChromeDesc: {
    en: 'Memory of the renderer process',
    by: 'Памяць працэсу адлюстраваўніка',
  },
  cmpCoreLabel: {
    en: 'scientia-core',
    by: 'scientia-core',
  },
  cmpCoreDesc: {
    en: 'Offline knowledge reader',
    by: 'Афлайн-праграма для чытання ведаў',
  },
  cmpEditorLabel: {
    en: 'scientia-editor',
    by: 'scientia-editor',
  },
  cmpEditorDesc: {
    en: 'Terminal code editor',
    by: 'Тэрмінальны рэдактар кода',
  },
  cmpResult: {
    en: 'scientia-core needs about 44× less memory than a single Chrome tab.',
    by: 'scientia-core патрабуе прыблізна ў 44 разы менш памяці, чым адна ўкладка Chrome.',
  },
  cmpMethod: {
    en: 'Reproduce it: open a blank tab and read the Chrome renderer in your task manager. Launch a terminal tool and read ps or htop. Your numbers will differ; the ratio will not.',
    by: 'Праверце самі: адкрыйце пустую ўкладку і паглядзіце працэс Chrome у дыспетчары заданч. Запусціце тэрмінальны інструмент і паглядзіце ps або htop. Вашы лічбы будуць іншымі; суадносіны застануцца тымі ж.',
  },

  helpSectionTitle: {
    en: 'You can help without writing code',
    by: 'Можна дапамагчы, не пішучи кода',
  },
  helpSectionSubtitle: {
    en: 'Most of the work here is text. Translating, editing and testing help as much as a patch does.',
    by: 'Асноўная частка працы тут — тэкст. Пераклад, рэдактура і тэставанне дапамагаюць не менш, чым заплатка.',
  },
  helpTranslatorTitle: {
    en: 'Translators',
    by: 'Перакладчыкі',
  },
  helpTranslatorDesc: {
    en: 'The packs are Markdown. If you speak a language we do not, you can translate one of them.',
    by: 'Пакеты — гэта Markdown. Калі вы гаварыце на мове, якой у нас няма, можаце перавесці адзін з іх.',
  },
  helpTranslateLink: {
    en: 'Packs to translate',
    by: 'Пакеты для перакладу',
  },
  helpWriteTitle: {
    en: 'Write and edit',
    by: 'Пісаць і рэдагаваць',
  },
  helpWriteDesc: {
    en: 'Fix a typo, add a chapter, translate an existing one. It is all plain Markdown, and edits go straight into the pack.',
    by: 'Выпраўце памылку, дададзьце раздзел або перакладзеце існы. Усё гэта просты Markdown, і праўкі трапляюць проста ў пакет.',
  },
  helpFormalDesc: {
    en: 'Open math textbook collection — arithmetic through calculus, with advanced topics coming.',
    by: 'Адкрытая калекцыя падручнікаў па матэматыцы — ад арыфметыкі да вылічэнняў, хутка прасунутыя тэмы.',
  },
  helpSurvivalDesc: {
    en: '31 chapters of field-proven survival knowledge — medicine, shelter, water, fire, and more.',
    by: '31 раздзел правераных ведаў па выжыванні — медыцына, жытло, вада, агонь і іншае.',
  },
  helpTeacherTitle: {
    en: 'Teachers and testers',
    by: 'Настаўнікі і тэстары',
  },
  helpTeacherDesc: {
    en: 'Run it in a real classroom and tell us what broke. Lesson ideas are welcome too.',
    by: 'Запусціце ў рэальным класе і напішыце, што зламалася. Падзяліцеся і ідэямі заняткаў.',
  },
  helpFeedbackLink: {
    en: 'Open an issue',
    by: 'Адкрыць памылку',
  },
  helpBuildTitle: {
    en: 'Build the tools',
    by: 'Пісаць інструменты',
  },
  helpBuildDesc: {
    en: 'scientia-core is Python and Textual: fix a bug or make it faster. scientia-editor is written in Rust and its source is not published yet.',
    by: 'scientia-core напісаны на Python і Textual: выпраўце памылку або паскорце яго. scientia-editor напісаны на Rust, ягоны крыжык пакуль не апублікаваны.',
  },
  helpCoreDesc: {
    en: 'Python, Textual — bug fixes and profiling',
    by: 'Python, Textual — выпраўленні і прафіляванне',
  },
  helpEditorDesc: {
    en: 'Rust, TUI — runs from crates.io, source not public yet',
    by: 'Rust, TUI — ставіцца з crates.io, крыжык пакуль не публічны',
  },
  helpNoCodeTitle: {
    en: 'No code? Good.',
    by: 'Без кода? Дыкін добра.',
  },
  helpNoCodeDesc: {
    en: 'Everything in the knowledge packs was written or checked by a person. A translated chapter is worth as much as a bug fix, and we need both.',
    by: 'Усё ў пакетах ведаў напісана або выпрацавана чалавекам. Перакладзены раздзел варты столькі ж, сколькі выпраўленне памылкі, а патрэбны і тое, і тое.',
  },
  helpShareTitle: {
    en: 'Pass it on',
    by: 'Перадаць далей',
  },
  helpShareDesc: {
    en: 'If you know a teacher, a volunteer group or a field team without a reliable connection, send them this page.',
    by: 'Калі вы ведаеце настаўніка, групу валанцёраў або палявую каманду без надзейнай сувязі, дашліце ім гэту старонку.',
  },
  helpJoinCommunity: {
    en: 'Join us on GitHub',
    by: 'Далучыцца на GitHub',
  },
  helpJoinOrg: {
    en: 'All repositories',
    by: 'Усе рэпазіторыі',
  },

  footerProjects: {
    en: 'Projects',
    by: 'Праекты',
  },
  footerDocs: {
    en: 'Docs',
    by: 'Дакументацыя',
  },
  footerCommunity: {
    en: 'Contribute',
    by: 'Дапамога праекту',
  },
  footerCore: {
    en: 'scientia-core',
    by: 'scientia-core',
  },
  footerEditor: {
    en: 'scientia-editor',
    by: 'scientia-editor',
  },
  footerFormalSciences: {
    en: 'formal-sciences',
    by: 'formal-sciences',
  },
  footerSurvival: {
    en: 'survival-and-medicine',
    by: 'survival-and-medicine',
  },
  footerGuides: {
    en: 'scientia-core guide',
    by: 'Дапаможнік scientia-core',
  },
  footerWindows: {
    en: 'Windows build (.exe)',
    by: 'Зборка для Windows (.exe)',
  },
  footerOrg: {
    en: 'All repositories',
    by: 'Усе рэпазіторыі',
  },
  footerIssues: {
    en: 'Report a bug',
    by: 'Паведаміць пра памылку',
  },
  footerWebsite: {
    en: 'This web site',
    by: 'Гэты вэб-сайт',
  },
  footerLicense: {
    en: 'GPL-3.0',
    by: 'GPL-3.0',
  },
  footerRights: {
    en: 'Free knowledge, open source.',
    by: 'Бясплатныя веды, адкрыты код.',
  },
  footerMission: {
    en: 'A volunteer project building offline open-source software for schools and field teams on old hardware.',
    by: 'Валонцёрскі праект: афлайн-софт з адкрытым кодам для школ і палявых камандаў на старой тэхніцы.',
  },
  sourceLabel: {
    en: 'Sources',
    by: 'Крыніцы',
  },
} as const;

export type TranslationKey = keyof typeof UI_TRANSLATIONS;

export const RELEASED_PROJECTS: ProjectInfo[] = [
  {
    id: 'scientia-core',
    name: 'scientia-core',
    repoUrl: LINKS.core,
    tagline: {
      en: 'Offline terminal knowledge reader',
      by: 'Афлайн тэрмінальны рэдар ведаў',
    },
    description: {
      en: 'A lightweight Python application that downloads Markdown knowledge packs once and lets you read them forever without internet. Built with the Textual framework for a fast, keyboard-driven interface.',
      by: 'Лёгкая Python-праграма, якая спампоўвае Markdown-пакеты ведаў адзін раз і дазваляе чытаць іх без інтэрнэту. Створана на Textual для хуткага кіравання з клавіятуры.',
    },
    stack: ['Python', 'Textual'],
    sourcePublic: true,
  },
  {
    id: 'scientia-editor',
    name: 'scientia-editor',
    tagline: {
      en: 'Ultra-lightweight terminal code editor',
      by: 'Ультра-лёгкі тэрмінальны рэдактар кода',
    },
    description: {
      en: 'A terminal file and code editor for beginners and experts. Designed to make software development accessible on fifteen-year-old computers.',
      by: 'Тэрмінальны рэдактар файлаў і кода для пачаткоўцаў і прафесіяналаў. Разлічаны на працу нават на 15-гадовых кампутарах.',
    },
    stack: ['Rust', 'TUI'],
    sourcePublic: false,
  },
];

export const UPCOMING_PROJECTS: ProjectInfo[] = [];

