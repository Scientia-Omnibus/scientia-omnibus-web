import { LocalizedString } from '../types';
import { AFFECTED_COUNTRIES } from './countries';

export interface MapRegion {
  id: string;
  label: LocalizedString;
  /** Figure caption, built from the ITU estimates of the countries in this cluster. */
  figure: (language: 'en' | 'by') => string;
  cx: number;
  cy: number;
  r: number;
  dots: [number, number][];
}

const CLUSTERS = [
  {
    id: 'subSaharanAfrica',
    label: { en: 'Sub-Saharan Africa', by: 'Афрыка на поўдзень ад Сахары' } as const,
    countries: ['Uganda', 'DR Congo', 'Mozambique', 'Ethiopia', 'Tanzania', 'Kenya'],
  },
  {
    id: 'southAsia',
    label: { en: 'South Asia', by: 'Паўднёвая Азія' } as const,
    countries: ['India', 'Bangladesh', 'Pakistan'],
  },
  {
    id: 'southeastAsia',
    label: { en: 'Southeast Asia', by: 'Паўднёва-Усходняя Азія' } as const,
    countries: ['Indonesia', 'Philippines', 'Thailand', 'Vietnam'],
  },
  {
    id: 'latinAmerica',
    label: { en: 'Latin America', by: 'Лацінская Амерыка' } as const,
    countries: ['Brazil', 'Colombia', 'Peru', 'Bolivia'],
  },
];

const byName = new Map(AFFECTED_COUNTRIES.map((c) => [c.name, c]));

/** Deterministic scatter inside a circle, so the particles can never drift off their cluster. */
function scatter(seed: number, count: number, radius: number): [number, number][] {
  let state = seed;
  const next = () => {
    state = (state * 1664525 + 1013904223) % 4294967296;
    return state / 4294967296;
  };
  const points: [number, number][] = [];
  for (let i = 0; i < count; i++) {
    const angle = next() * Math.PI * 2;
    const dist = Math.sqrt(next()) * radius;
    points.push([Math.cos(angle) * dist, Math.sin(angle) * dist]);
  }
  return points;
}

export const MAP_REGIONS: MapRegion[] = CLUSTERS.map((cluster, index) => {
  const members = cluster.countries.map((name) => byName.get(name)!);
  const cx = members.reduce((sum, c) => sum + c.cx, 0) / members.length;
  const cy = members.reduce((sum, c) => sum + c.cy, 0) / members.length;
  const spread = Math.max(...members.map((c) => Math.hypot(c.cx - cx, c.cy - cy)));

  return {
    id: cluster.id,
    label: cluster.label,
    figure: (language) => {
      const rates = members.map((c) => c.penetration);
      const range = `${Math.min(...rates)}–${Math.max(...rates)}%`;
      return language === 'en' ? `${range} online` : `${range} у сетцы`;
    },
    cx: Number(cx.toFixed(1)),
    cy: Number(cy.toFixed(1)),
    r: Math.round(spread),
    dots: scatter(index + 7, 12, spread * 0.85).map(([dx, dy]) => [
      Number((cx + dx).toFixed(1)),
      Number((cy + dy).toFixed(1)),
    ]),
  };
});
