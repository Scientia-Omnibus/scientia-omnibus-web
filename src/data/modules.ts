import { LocalizedString, TranslationDict } from '../types';

export interface ModuleInfo {
  id: string;
  icon: string;
  title: LocalizedString;
  description: LocalizedString;
}

export const UI_TRANSLATIONS: TranslationDict = {
  heroTitle: {
    en: "Knowledge shouldn't demand gigabytes.",
    by: "Веды не павінны патрабаваць гігабайтаў."
  },
  heroSubtitle: {
    en: "Most developers have forgotten about users with limited internet and weak hardware. We build open-source, ultra-efficient, and fully offline tools designed for digital equity. Access textbooks, guides, and practical knowledge anywhere—from remote classrooms to deep forests.",
    by: "Большасць распрацоўшчыкаў забыліся на карыстальнікаў з абмежаваным інтэрнэтам і слабым абсталяваннем. Мы ствараем звышэфектыўны софт з адкрытым кодам для лічбавай роўнасці. Чытайце падручнікі, вывучайце навуку і практычныя навыкі ў любым месцы — ад аддаленых школ да гушчару лесу."
  },
  statZeroOverhead: {
    en: "0MB Base Overhead",
    by: "0 МБ накладных выдаткаў"
  },
  statZeroOverheadDesc: {
    en: "No heavy Electron shells or memory-hogging web components. Native desktop speeds.",
    by: "Ніякага цяжкага прымусу Electron або хрому. Чыстая роўная хуткасць наўпрост."
  },
  statOffline: {
    en: "100% Offline-First",
    by: "100% праца па-за сеткай"
  },
  statOfflineDesc: {
    en: "Internet is only needed for the first download and local update sync. The rest is 100% offline-ready anywhere.",
    by: "Інтэрнэт патрэбны толькі для першага спампоўвання і абнаўленняў. Далей усё працуе цалкам афлайн у паходах і лесе."
  },
  statLightweight: {
    en: "< 10 Megabytes",
    by: "Менш за 10 Мегабайтаў"
  },
  statLightweightDesc: {
    en: "The entire application core fits on an old floppy disk. Runs immediately without installation.",
    by: "Усё ядро праграмы змяшчаецца на старую дыскету і запускаецца імгненна без усталёўкі."
  },
  statHardware: {
    en: "15-Year-Old PCs Support",
    by: "Падтрымка 15-гадовых ПК"
  },
  statHardwareDesc: {
    en: "Runs perfectly on old school laptops, low-power single-board computers, and legacy machines.",
    by: "Выдатна працуе на старых школьных нетбуках, мікракампутарах і спадчынных платах."
  },
  viewOnGithub: {
    en: "View on GitHub",
    by: "Адкрыць на GitHub"
  },
  joinDiscord: {
    en: "Join Discord Community",
    by: "Далучыцца да Discord"
  },
  exploreModules: {
    en: "Explore Modules",
    by: "Паглядзець модулі"
  },
  modulesTitle: {
    en: "Scientia Core: Offline Knowledge Packs",
    by: "Scientia Core: Афлайн-пакеты ведаў"
  },
  modulesSubtitle: {
    en: "Download lightweight Markdown modules once and read them forever without internet. Three core topics — Education, Survival, and Do Technology — built for real-world learning.",
    by: "Спампуйце лёгкія модулі ў фармаце Markdown адзін раз і чытайце без інтэрнэту. Тры асноўныя тэмы — Адукацыя, Выжыванне і Тэхналогіі DIY — для рэальнага навучання."
  },
  screenshotDesc: {
    en: "A real screenshot of Scientia Core — our ultra-lightweight terminal reader that loads in milliseconds and renders formatted knowledge with elegant typography.",
    by: "Рэальны скрыншот Scientia Core — нашага звышлёгкага тэрмінальнага рэдара, які загружаецца за мілісекунды і паказвае фарматаваныя веды."
  },
  whyTitle: {
    en: "Why Software Needs a Revolution",
    by: "Чаму праграмам патрэбная рэвалюцыя"
  },
  whySubtitle: {
    en: "Modern computing has isolated billions. Learn how we are tackling this issue of digital and educational inequality.",
    by: "Сучаснае праграмнае забеспячэнне пакінула па-за бортам мільярды людзей. Даведайцеся, як мы вырашаем праблему лічбавай і адукацыйнай няроўнасці."
  },
  equityTitle: {
    en: "Bridging the Digital Divide",
    by: "Адоленне лічбавага бар'ера"
  },
  equityDesc: {
    en: "As websites and educational portals grow bloated, students in developing nations and rural areas with weak devices are locked out. Scientia Omnibus levels the playing field—making premium content accessible on five-dollar hardware.",
    by: "Пакуль сучасныя сайты растуць у памерах, вучні ў аддаленых вёсках і раёнах са слабымі ноўтбукамі губляюць доступ да ведаў. Scientia Omnibus дае роўныя магчымасці, робячы якасны кантэнт даступным нават на тэхніцы за 5 даляраў."
  },
  efficiencyTitle: {
    en: "Absolute Mechanical Efficiency",
    by: "Абсалютная эфектыўнасць"
  },
  efficiencyDesc: {
    en: "By adopting optimized terminal interfaces and direct local data reads, our core programs consume up to 98% less memory than web browsers. Squeezing maximum speed out of simple PCs saves electricity and hardware.",
    by: "Выкарыстоўваючы тэкставыя інтэрфейсы і наўпроставае чытанне дадзеных, нашы праграмы спажываюць да 98% менш АЗП, чым браўзеры. Гэта беражэ электрычнасць і слабыя ПК."
  },
  empowermentTitle: {
    en: "Complete Academic Autonomy",
    by: "Поўная акадэмічная аўтаномія"
  },
  empowermentDesc: {
    en: "With Scientia Core, knowledge isn't locked behind standard cloud systems or subscriptions. Once downloaded, you own the database. If you can carry a mobile phone or a small single-board computer, you can carry a university library.",
    by: "З нашым ядром веды не зачыненыя за воблачнымі сэрвісамі ці падпіскамі. Спампаваўшы адзін раз, вы фізічна валодаеце базай дадзеных. Вы можаце насіць усе веды сусвету ў сваёй кішэні або на мікракампутары."
  },
  contribTitle: {
    en: "The Power of Open Source Community",
    by: "Сіла Open Source супольнасці"
  },
  contribSubtitle: {
    en: "We believe in collective intelligence. Whether you are a senior developer or a high school student who likes writing articles, there is a place for you in Scientia Omnibus.",
    by: "Мы верым у сілу супольнага розуму. Незалежна ад таго, ці вы прафесійны распрацоўшчык, ці проста вучань, які любіць пісаць тэксты — для вас ёсць пачэснае месца ў Scientia Omnibus."
  },
  contribNonCoder: {
    en: "For Content Creators & Editors",
    by: "Для аўтараў тэкстаў і рэдактараў"
  },
  contribNonCoderDesc: {
    en: "You don't need to write code to make an impact. Contribute survival instructions, educational articles, or translate existing books into Belarusian, Spanish, or Hindi. Write simple Markdown texts and help thousands.",
    by: "Вам не трэба быць кодэрам, каб дапамагаць. Стварайце інструкцыі па выжыванні, адукацыйныя артыкулы або перакладайце матэрыялы на беларускую ці іншыя мовы. Просты Markdown — і вы дапамагаеце тысячам."
  },
  contribDev: {
    en: "For Engineers & Optimizers",
    by: "Для інжынераў і аптымізатараў"
  },
  contribDevDesc: {
    en: "Are you passionate about low-level algorithms, assembly, or embedded systems? Help us squeeze the absolute maximum out of every byte. Join our GitHub to optimize client structures and compress modules.",
    by: "Цікавіцеся нізкаўзроўневымі алгарытмамі, мовай асэмблера ці эмбэдам? Дапамажыце нам выціснуць максімум з кожнага байта. Далучайцеся да GitHub для аптымізацыі ядра ісціны за кодам."
  },
  upcomingTitle: {
    en: "Coming Soon: The Ultra-Lightweight Code Editor",
    by: "Тут будзе: Ультра-лёгкі тэрмінальны рэдактар кода"
  },
  upcomingDesc: {
    en: "An ultra-low footprint terminal file and code editor designed for both beginners and experts. Running directly in your command-line terminal, it makes software development accessible and incredibly fast on fifteen-year-old computers.",
    by: "Адкрыты звышлёгкі рэдактар кода для пачаткоўцаў і прафесіяналаў. Ён працуе наўпрост у тэрмінале Unix/Windows, дазваляючы зручна праграмаваць нават на самых старых і слабых ПК."
  },
  footerRights: {
    en: "All knowledge is free. Scientia Omnibus open-source initiative.",
    by: "Усе веды — бясплатныя. Open-source ініцыятыва Scientia Omnibus."
  },
  footerUwcMessage: {
    en: "Dedicated to promoting digital and educational equity through offline open-source software, in harmony with United World Colleges values of peace and a sustainable future.",
    by: "Прысвечана прасоўванню лічбавай і адукацыйнай роўнасці праз афлайн-софт з адкрытым кодам у гармоніі з каштоўнасцямі каледжаў UWC: мір і будучыня."
  },
};

export const MODULES: ModuleInfo[] = [
  {
    id: "education",
    icon: "📚",
    title: {
      en: "Education",
      by: "Адукацыя"
    },
    description: {
      en: "Mathematics, science, and academic subjects — compact textbooks in Markdown format.",
      by: "Матэматыка, навука і акадэмічныя прадметы — кампактныя падручнікі ў фармаце Markdown."
    },
  },
  {
    id: "survival",
    icon: "🧭",
    title: {
      en: "Survival",
      by: "Выжыванне"
    },
    description: {
      en: "Practical offline guidance on finding water, starting campfires, and wild navigation.",
      by: "Практычныя парады: як знайсці ваду, запаліць агонь і зарыентавацца ў глухім лесе без сувязі."
    },
  },
  {
    id: "diy_tech",
    icon: "🛠️",
    title: {
      en: "Do Technology",
      by: "Тэхналогіі DIY"
    },
    description: {
      en: "Build low-power solar chargers, simple electronics, and independent tech without power grids.",
      by: "Стварайце аўтаномныя сонечныя сістэмы і наладжвайце простую нізкавольтную электроніку."
    },
  },
];
