export type Language = 'en' | 'by';

export interface LocalizedString {
  en: string;
  by: string;
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
  exploreModules: LocalizedString;
  modulesTitle: LocalizedString;
  modulesSubtitle: LocalizedString;
  screenshotDesc: LocalizedString;
  whyTitle: LocalizedString;
  whySubtitle: LocalizedString;
  equityTitle: LocalizedString;
  equityDesc: LocalizedString;
  efficiencyTitle: LocalizedString;
  efficiencyDesc: LocalizedString;
  empowermentTitle: LocalizedString;
  empowermentDesc: LocalizedString;
  contribTitle: LocalizedString;
  contribSubtitle: LocalizedString;
  contribNonCoder: LocalizedString;
  contribNonCoderDesc: LocalizedString;
  contribDev: LocalizedString;
  contribDevDesc: LocalizedString;
  upcomingTitle: LocalizedString;
  upcomingDesc: LocalizedString;
  footerRights: LocalizedString;
  footerUwcMessage: LocalizedString;
}
