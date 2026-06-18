export type Language = 'en' | 'by';

export interface LocalizedString {
  en: string;
  by: string;
}

export interface ModuleNode {
  id: string;
  title: LocalizedString;
  content?: LocalizedString; // Text support in both languages
  children?: ModuleNode[];
}

export interface Module {
  id: string;
  icon: string; // Lucide icon identifier
  title: LocalizedString;
  description: LocalizedString;
  rootNodes: ModuleNode[];
}

export interface TranslationDict {
  heroTitle: LocalizedString;
  heroSubtitle: LocalizedString;
  statZeroOverhead: LocalizedString;
  statZeroOverheadDesc: LocalizedString;
  statOffline: LocalizedString;
  statOfflineDesc: LocalizedString;
  statLightweight: LocalizedString;
  statLightweightDesc: LocalizedString;
  statHardware: LocalizedString;
  statHardwareDesc: LocalizedString;
  viewOnGithub: LocalizedString;
  joinDiscord: LocalizedString;
  launchApp: LocalizedString;
  simulateTitle: LocalizedString;
  simulateSubtitle: LocalizedString;
  screenshotLabel: LocalizedString;
  screenshotDesc: LocalizedString;
  whyTitle: LocalizedString;
  whySubtitle: LocalizedString;
  equityTitle: LocalizedString;
  equityDesc: LocalizedString;
  efficiencyTitle: LocalizedString;
  efficiencyDesc: LocalizedString;
  empowermentTitle: LocalizedString;
  empowermentDesc: LocalizedString;
  uwcSectionTitle: LocalizedString;
  uwcQuote: LocalizedString;
  uwcPara1: LocalizedString;
  uwcPara2: LocalizedString;
  contribTitle: LocalizedString;
  contribSubtitle: LocalizedString;
  contribNonCoder: LocalizedString;
  contribNonCoderDesc: LocalizedString;
  contribDev: LocalizedString;
  contribDevDesc: LocalizedString;
  upcomingTitle: LocalizedString;
  upcomingDesc: LocalizedString;
  terminalTabTitle: LocalizedString;
  terminalFooterHelp: LocalizedString;
  terminalFooterAbout: LocalizedString;
  terminalFooterNav: LocalizedString;
  terminalFooterChdir: LocalizedString;
  terminalSearchPlaceholder: LocalizedString;
  terminalMainTabContents: LocalizedString;
  terminalMainTabLocal: LocalizedString;
  terminalMainTabBookmarks: LocalizedString;
  terminalMainTabHistory: LocalizedString;
  footerRights: LocalizedString;
  footerUwcMessage: LocalizedString;
  aboutScientiaCore: LocalizedString;
}
