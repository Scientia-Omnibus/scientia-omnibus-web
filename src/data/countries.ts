export interface CountryData {
  name: string;
  nameBy: string;
  cx: number;
  cy: number;
  /** Share of the population using the Internet, ITU estimate. */
  penetration: number;
  /** Year of the ITU estimate for that country. */
  year: number;
}

/**
 * Share of the population using the Internet, ITU figures published by the
 * World Bank (IT.NET.USER.ZS), latest year available per country.
 * Sorted from lowest to highest — this list is shown as "where access is hardest".
 */
export const AFFECTED_COUNTRIES: CountryData[] = [
  { name: 'Uganda', nameBy: 'Уганда', cx: 571.5, cy: 480.8, penetration: 8.9, year: 2024 },
  { name: 'DR Congo', nameBy: 'ДР Конга', cx: 551.7, cy: 489.6, penetration: 19.7, year: 2024 },
  { name: 'Mozambique', nameBy: 'Мазамбік', cx: 580.1, cy: 537.2, penetration: 20.5, year: 2024 },
  { name: 'Ethiopia', nameBy: 'Эфіопія', cx: 594.2, cy: 457.3, penetration: 21.9, year: 2024 },
  { name: 'Tanzania', nameBy: 'Танзанія', cx: 580.1, cy: 501.3, penetration: 31.2, year: 2024 },
  { name: 'Kenya', nameBy: 'Кенія', cx: 588.6, cy: 486.6, penetration: 35, year: 2024 },
  { name: 'Nigeria', nameBy: 'Нігерыя', cx: 503.5, cy: 466.2, penetration: 41.2, year: 2024 },
  { name: 'Bangladesh', nameBy: 'Бангладэш', cx: 736.0, cy: 411.5, penetration: 53.4, year: 2024 },
  { name: 'Pakistan', nameBy: 'Пакістан', cx: 665.1, cy: 381.5, penetration: 57.3, year: 2024 },
  { name: 'Philippines', nameBy: 'Філіпіны', cx: 826.8, cy: 448.4, penetration: 67.3, year: 2024 },
  { name: 'India', nameBy: 'Індыя', cx: 702.0, cy: 424.1, penetration: 70, year: 2025 },
  { name: 'Indonesia', nameBy: 'Інданезія', cx: 821.1, cy: 498.3, penetration: 72.8, year: 2024 },
  { name: 'South Africa', nameBy: 'Паўднёчная Афрыка', cx: 551.7, cy: 575.6, penetration: 78.4, year: 2024 },
  { name: 'Colombia', nameBy: 'Калумбія', cx: 276.6, cy: 472.0, penetration: 79.3, year: 2024 },
  { name: 'Bolivia', nameBy: 'Балівія', cx: 293.6, cy: 534.1, penetration: 79.7, year: 2024 },
  { name: 'Peru', nameBy: 'Перу', cx: 265.2, cy: 513.1, penetration: 82, year: 2024 },
  { name: 'Vietnam', nameBy: "В'етнам", cx: 787.1, cy: 442.4, penetration: 84.2, year: 2024 },
  { name: 'Brazil', nameBy: 'Бразілія', cx: 327.6, cy: 528.0, penetration: 84.5, year: 2024 },
  { name: 'Thailand', nameBy: 'Тайланд', cx: 767.2, cy: 439.4, penetration: 90.9, year: 2024 },
];
