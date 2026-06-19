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
  viewProjects: LocalizedString;
  projectsLabel: LocalizedString;
  projectsTitle: LocalizedString;
  projectsSubtitle: LocalizedString;
  releasedLabel: LocalizedString;
  inDevelopmentLabel: LocalizedString;
  statusReleased: LocalizedString;
  statusInDevelopment: LocalizedString;
  viewGuide: LocalizedString;
  guideTitle: LocalizedString;
  guideSubtitle: LocalizedString;
  backToProjects: LocalizedString;
  whyTitle: LocalizedString;
  whySubtitle: LocalizedString;
  problemTitle: LocalizedString;
  problemDesc: LocalizedString;
  problemStat: LocalizedString;
  impactTitle: LocalizedString;
  impactItems: LocalizedString;
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
  footerRights: LocalizedString;
  footerMission: LocalizedString;
  knowledgeBasesTitle: LocalizedString;
  formalSciencesDesc: LocalizedString;
  kbBasic: LocalizedString;
  kbAlgebraCore: LocalizedString;
  kbAdvanced: LocalizedString;
  kbPlanned: LocalizedString;
  kbHumanities: LocalizedString;
  kbSocial: LocalizedString;
  kbNatural: LocalizedString;
  kbDiy: LocalizedString;
  kbSurvival: LocalizedString;
  kbContrib: LocalizedString;
}
