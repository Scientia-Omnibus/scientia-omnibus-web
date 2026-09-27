export interface LocalizedSourceLabel {
  en: string;
  by: string;
}

export interface StatSource {
  id: string;
  label: LocalizedSourceLabel;
  url: string;
}

export const SOURCES = {
  itu2025: {
    id: 'itu2025',
    label: {
      en: 'ITU, Facts and Figures 2025',
      by: 'ITU, Facts and Figures 2025',
    },
    url: 'https://www.itu.int/en/mediacentre/Pages/PR-2025-11-17-Facts-and-Figures.aspx',
  },
  unescoGem2023: {
    id: 'unescoGem2023',
    label: {
      en: 'UNESCO, Global Education Monitoring Report 2023',
      by: 'UNESCO, Сучасны адукацыйны манітор 2023',
    },
    url: 'https://www.unesco.org/gem-report/en/publication/technology',
  },
  ituCountryEstimates: {
    id: 'ituCountryEstimates',
    label: {
      en: 'Individuals using the Internet, ITU via World Bank',
      by: 'Асобныя, якія карыстаюцца інтэрнэтам, ITU праз Сусветны банк',
    },
    url: 'https://data.worldbank.org/indicator/IT.NET.USER.ZS',
  },
} as const;
