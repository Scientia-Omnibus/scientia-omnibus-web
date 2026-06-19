import { LocalizedString, TranslationDict } from '../types';

export interface ModuleInfo {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
}

export interface ProjectInfo {
  id: string;
  name: string;
  repoUrl?: string;
  tagline: LocalizedString;
  description: LocalizedString;
  stack?: string[];
}

export const UI_TRANSLATIONS: TranslationDict = {
  heroTitle: {
    en: "Knowledge shouldn't demand gigabytes.",
    by: "Веды не павінны патрабаваць гігабайтаў."
  },
  heroSubtitle: {
    en: "A volunteer open-source initiative building lightweight, offline-first software — for communities where internet is unreliable and hardware is old.",
    by: "Валонцёрская open-source ініцыятыва, якая стварае лёгкі афлайн-софт — для суполак, дзе інтэрнэт ненадзейны, а тэхніка састарэлая."
  },
  statZeroOverhead: {
    en: "0MB Base Overhead",
    by: "0 МБ накладных выдаткаў"
  },
  statZeroOverheadDesc: {
    en: "No heavy Electron shells or memory-hogging web components. Native terminal speeds.",
    by: "Ніякага цяжкага Electron або хрому. Натуральная хуткасць тэрмінала."
  },
  statOffline: {
    en: "100% Offline-First",
    by: "100% праца па-за сеткай"
  },
  statOfflineDesc: {
    en: "Internet is only needed for the first download. Everything else works without a connection.",
    by: "Інтэрнэт патрэбны толькі для першага спампоўвання. Далей усё працуе без сувязі."
  },
  statLightweight: {
    en: "< 10 Megabytes",
    by: "Менш за 10 Мегабайтаў"
  },
  statLightweightDesc: {
    en: "Every tool we ship fits on an old floppy disk. No installers, no background services.",
    by: "Кожны наш інструмент змяшчаецца на старую дыскету. Без усталёўшчыкаў і фонавых сэрвісаў."
  },
  statHardware: {
    en: "15-Year-Old PCs",
    by: "ПК 15-гадовай даўнасці"
  },
  statHardwareDesc: {
    en: "Designed for old school laptops, low-power boards, and hardware others have left behind.",
    by: "Разлічана на старыя школьныя нетбукі, слабыя платы і абсталяванне, якое іншыя ўжо не падтрымліваюць."
  },
  viewOnGithub: {
    en: "View on GitHub",
    by: "Адкрыць на GitHub"
  },
  viewProjects: {
    en: "View Projects",
    by: "Паглядзець праекты"
  },
  projectsLabel: {
    en: "Open Source",
    by: "Open Source"
  },
  projectsTitle: {
    en: "Our Projects",
    by: "Нашы праекты"
  },
  projectsSubtitle: {
    en: "Real software, shipped and maintained. Each project is designed to run on minimal hardware and work fully offline.",
    by: "Рэальны софт, які мы распрацоўваем і падтрымліваем. Кожны праект разлічаны на мінімальнае абсталяванне і поўную афлайн-працу."
  },
  releasedLabel: {
    en: "Released",
    by: "Выпушчана"
  },
  inDevelopmentLabel: {
    en: "In Development",
    by: "У распрацоўцы"
  },
  statusReleased: {
    en: "Released",
    by: "Выпушчана"
  },
  statusInDevelopment: {
    en: "In Development",
    by: "У распрацоўцы"
  },
  viewGuide: {
    en: "Usage Guide",
    by: "Дапаможнік"
  },
  guideTitle: {
    en: "Scientia Core — Usage Guide",
    by: "Scientia Core — Дапаможнік"
  },
  guideSubtitle: {
    en: "Keyboard shortcuts, navigation, and commands for the offline knowledge reader.",
    by: "Спалучэнні клавіш, навігацыя і каманды для афлайн-рэдара ведаў."
  },
  backToProjects: {
    en: "Back to projects",
    by: "Назад да праектаў"
  },
  whyTitle: {
    en: "Software Built for Real Constraints",
    by: "Софт для рэальных абмежаванняў"
  },
  whySubtitle: {
    en: "Billions of people lack reliable internet and modern hardware. We design tools that work within those limits — not despite them.",
    by: "Мільярды людзей не маюць стабільнага інтэрнэту і сучаснай тэхнікі. Мы ствараем інструменты, якія працуюць у гэтых умовах — а не ігноруюць іх."
  },
  problemTitle: {
    en: "The cost of bloated software",
    by: "Цана цяжкага софту"
  },
  problemDesc: {
    en: "A single educational webpage can consume 100+ MB of RAM. Students with old laptops or metered connections are effectively excluded from digital learning.",
    by: "Адна адукацыйная старонка можа спажываць 100+ МБ АЗП. Вучні са старымі ноўтбукамі або абмежаваным трафікам фактычна адрэзаны ад лічбавага навучання."
  },
  problemStat: {
    en: "Typical browser tab: 100+ MB",
    by: "Тыповая ўкладка: 100+ МБ"
  },
  impactTitle: {
    en: "Concrete impact",
    by: "Канкрэтны ўплыў"
  },
  impactItems: {
    en: "A rural school downloads Education modules once — students study math offline during power outages. A volunteer packs Survival guides onto a USB stick for field teams. A maker follows DIY instructions without needing YouTube.",
    by: "Сельская школа спампоўвае модулі Адукацыі адзін раз — вучні вучаць матэматыку афлайн падчас адключэння святла. Валонтэр запісвае даведнікі Выжывання на USB для польскіх каманд. Майстар выконвае DIY-інструкцыі без YouTube."
  },
  equityTitle: {
    en: "Access without barriers",
    by: "Доступ без бар'ераў"
  },
  equityDesc: {
    en: "Premium educational content should not require premium hardware. Our tools run on five-dollar single-board computers and decade-old laptops.",
    by: "Якасныя адукацыйныя матэрыялы не павінны патрабаваць дарагой тэхнікі. Нашы інструменты працуюць на мікракампутары за 5 даляраў і 10-гадовых ноўтбуках."
  },
  efficiencyTitle: {
    en: "Efficiency by design",
    by: "Эфектыўнасць па задуме"
  },
  efficiencyDesc: {
    en: "Terminal interfaces and direct file reads use up to 98% less memory than web browsers. Less RAM means less electricity and longer battery life.",
    by: "Тэкставыя інтэрфейсы і прамое чытанне файлаў спажываюць да 98% менш АЗП, чым браўзеры. Менш памяці — менш электрычнасці і даўжэй працуе батарэя."
  },
  empowermentTitle: {
    en: "You own your knowledge",
    by: "Веды належаць вам"
  },
  empowermentDesc: {
    en: "No subscriptions, no cloud lock-in. Download once and the entire library is yours — on a USB drive, an old phone, or a Raspberry Pi.",
    by: "Без падпісак і воблачнай залежнасці. Спампавалі адзін раз — і ўся бібліятэка ваша: на USB, старым тэлефоне ці Raspberry Pi."
  },
  contribTitle: {
    en: "Open Source Community",
    by: "Супольнасць Open Source"
  },
  contribSubtitle: {
    en: "Scientia Omnibus is a volunteer initiative. Writers, translators, and developers are all welcome to contribute.",
    by: "Scientia Omnibus — валонцёрская ініцыятыва. Аўтары, перакладчыкі і распрацоўшчыкі могуць далучыцца."
  },
  contribNonCoder: {
    en: "Content creators",
    by: "Аўтары кантэнту"
  },
  contribNonCoderDesc: {
    en: "Write survival guides, educational articles, or translations in simple Markdown. No programming required.",
    by: "Пішыце даведнікі па выжыванні, адукацыйныя артыкулы ці пераклады ў простым Markdown. Праграмаванне не патрэбна."
  },
  contribDev: {
    en: "Developers",
    by: "Распрацоўшчыкі"
  },
  contribDevDesc: {
    en: "Optimize performance, improve the terminal UI, compress modules, or port to new platforms. All contributions go through GitHub.",
    by: "Аптымізуйце прадукцыйнасць, палягчайце інтэрфейс, сціскайце модулі ці пераносьце на новыя платформы. Усе ўнёскі — праз GitHub."
  },
  footerRights: {
    en: "All knowledge is free. Open-source initiative.",
    by: "Усе веды — бясплатныя. Ініцыятыва з адкрытым кодам."
  },
  footerMission: {
    en: "Volunteer project promoting digital and educational equity through lightweight, offline open-source software.",
    by: "Валонцёрскі праект, які прасоўвае лічбавую і адукацыйную роўнасць праз лёгкі афлайн-софт з адкрытым кодам."
  },
  knowledgeBasesTitle: {
    en: "Knowledge Bases",
    by: "Базы ведаў"
  },
  formalSciencesDesc: {
    en: "Formal sciences — mathematics from basics to calculus.",
    by: "Фармальныя навукі — матэматыка ад асноў да вылічэнняў."
  },
  kbBasic: {
    en: "Basic",
    by: "Асновы"
  },
  kbAlgebraCore: {
    en: "Algebra & Trigonometry Core",
    by: "Алгебра і трыганаметрыя"
  },
  kbAdvanced: {
    en: "advanced (coming soon)",
    by: "advanced (хутка)"
  },
  kbPlanned: {
    en: "Planned",
    by: "Плануецца"
  },
  kbHumanities: {
    en: "humanities-sciences",
    by: "humanities-sciences"
  },
  kbSocial: {
    en: "social-sciences",
    by: "social-sciences"
  },
  kbNatural: {
    en: "natural-sciences",
    by: "natural-sciences"
  },
  kbDiy: {
    en: "DIY (make it yourself)",
    by: "DIY (зрабі сам)"
  },
  kbSurvival: {
    en: "Survival & Medicine",
    by: "Выжыванне і медыцына"
  },
  kbContrib: {
    en: "Contribute — fix a bug, write content, or translate:",
    by: "Дапамажыце — выпраўце памылку, напішыце тэкст ці перакладзіце:"
  },
};

export const RELEASED_PROJECTS: ProjectInfo[] = [
  {
    id: 'scientia-core',
    name: 'scientia-core',
    repoUrl: 'https://github.com/Scientia-Omnibus/scientia-core',
    tagline: {
      en: 'Offline terminal knowledge reader',
      by: 'Афлайн тэрмінальны рэдар ведаў',
    },
    description: {
      en: 'A lightweight Python application that downloads Markdown knowledge packs once and lets you read them forever without internet. Built with the Textual framework for a fast, keyboard-driven interface.',
      by: 'Лёгкая Python-праграма, якая спампоўвае Markdown-пакеты ведаў адзін раз і дазваляе чытаць іх без інтэрнэту. Створана на Textual для хуткага кіравання з клавіятуры.',
    },
    stack: ['Python', 'Textual'],
  },
];

export const UPCOMING_PROJECTS: ProjectInfo[] = [
  {
    id: 'code-editor',
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
  },
];

export const MODULES: ModuleInfo[] = [
  {
    id: "education",
    title: { en: "Education", by: "Адукацыя" },
    description: {
      en: "Mathematics, science, and academic subjects in compact Markdown textbooks.",
      by: "Матэматыка, навука і акадэмічныя прадметы ў кампактных Markdown-падручніках.",
    },
  },
  {
    id: "survival",
    title: { en: "Survival", by: "Выжыванне" },
    description: {
      en: "Water purification, campfires, and navigation — practical guides for the field.",
      by: "Ачыстка вады, вогнішча і арыентаванне — практычныя даведнікі для паходу.",
    },
  },
];
