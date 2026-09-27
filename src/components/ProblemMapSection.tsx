import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/modules';
import { CONTINENT_PATHS } from '../data/map-continents';
import { MAP_REGIONS } from '../data/map-regions';
import { AFFECTED_COUNTRIES } from '../data/countries';
import { SOURCES } from '../data/sources';
import { Globe, BookOpen, WifiOff, Cpu, ShieldAlert, Ban } from 'lucide-react';
import { motion } from 'motion/react';
import AnimatedNumber from './AnimatedNumber';

interface ProblemMapSectionProps {
  language: Language;
}

const VIEW_BOX = '0 0 1020 680';
const LABELED_COUNTRIES = ['Nigeria', 'India', 'Brazil', 'Indonesia', 'DR Congo', 'Ethiopia', 'Bangladesh', 'Pakistan', 'Colombia'];
const CONTINENT_IDS = ['africa', 'north_america', 'south_america', 'asia', 'europe', 'australia'];

const PALETTE = {
  mapBg: '#0E1219',
  grid: '#1B2231',
  continentFill: '#171D29',
  continentStroke: '#2C3648',
  land: '#7D8A9E',
  strong: '#9AA7B8',
  dot: 'oklch(0.62 0.09 45)',
  dotSoft: 'oklch(0.70 0.055 48)',
};

const MAP_STATS = [
  { icon: WifiOff, value: 2.2, decimals: 1, suffix: 'B', labelKey: 'mapStatOffline', source: SOURCES.itu2025 },
  { icon: BookOpen, value: 500, decimals: 0, suffix: 'M', labelKey: 'mapStatStudents', source: SOURCES.unescoGem2023 },
  { icon: Globe, value: 58, decimals: 0, suffix: '%', labelKey: 'mapStatRural', source: SOURCES.itu2025 },
] as const;

const MAP_FACTS = [
  { icon: WifiOff, key: 'mapFactDistance', figure: '500M+', source: SOURCES.unescoGem2023 },
  { icon: Cpu, key: 'mapFactSchools', figure: '40%', source: SOURCES.unescoGem2023 },
  { icon: ShieldAlert, key: 'mapFactCoverage', figure: '96%', source: SOURCES.itu2025 },
  { icon: Ban, key: 'mapFactEdtech', figure: '85%', source: SOURCES.unescoGem2023 },
] as const;

export default function ProblemMapSection({ language }: ProblemMapSectionProps) {
  const t = UI_TRANSLATIONS;

  return (
    <section id="problem" className="py-16 sm:py-24 bg-ink-950 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl mx-auto mb-10 sm:mb-14 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-display text-2xl sm:text-4xl lg:text-[2.75rem] font-bold text-ink-100 leading-tight mb-4">
            {t.mapTitle[language]}
          </h2>
          <p className="text-sm sm:text-base text-ink-400 leading-relaxed">
            {t.mapSubtitle[language]}
          </p>
        </motion.div>

        <motion.div
          className="panel p-2 sm:p-4 mb-6 sm:mb-8 overflow-x-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <svg viewBox={VIEW_BOX} className="w-full h-auto min-w-[620px]">
            <defs>
              <pattern id="map-grid" width="25" height="25" patternUnits="userSpaceOnUse">
                <path d="M 25 0 L 0 0 0 25" fill="none" stroke={PALETTE.grid} strokeWidth="0.5" />
              </pattern>

              <filter id="continent-shadow">
                <feDropShadow dx="1" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.35" />
              </filter>

              {MAP_REGIONS.map((region) => (
                <radialGradient key={region.id} id={`heat-${region.id}`} cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor={PALETTE.dot} stopOpacity="0.30" />
                  <stop offset="55%" stopColor={PALETTE.dotSoft} stopOpacity="0.12" />
                  <stop offset="100%" stopColor={PALETTE.dotSoft} stopOpacity="0" />
                </radialGradient>
              ))}
            </defs>

            <rect width="1020" height="680" fill={PALETTE.mapBg} />
            <rect width="1020" height="680" fill="url(#map-grid)" />

            {MAP_REGIONS.map((region, ri) => (
              <g key={region.id}>
                <circle cx={region.cx} cy={region.cy} r={region.r + 25} fill={`url(#heat-${region.id})`} />
                <motion.circle
                  cx={region.cx}
                  cy={region.cy}
                  r={region.r}
                  fill="none"
                  stroke={PALETTE.dot}
                  strokeWidth="1"
                  opacity="0.5"
                  animate={{ r: [region.r, region.r + 16, region.r], opacity: [0.45, 0, 0.45] }}
                  transition={{ duration: 3.4, repeat: Infinity, ease: 'easeOut', delay: ri * 0.7 }}
                />
                {region.dots.map((dot, di) => (
                  <circle key={di} cx={dot[0]} cy={dot[1]} r="2" fill={PALETTE.dot} fillOpacity="0.55" />
                ))}
                <text
                  x={region.cx}
                  y={region.cy - region.r - 12}
                  textAnchor="middle"
                  fill={PALETTE.strong}
                  fontSize="9"
                  fontWeight="700"
                  fontFamily="JetBrains Mono, monospace"
                  className="select-none"
                >
                  {region.label[language]}
                </text>
                <text
                  x={region.cx}
                  y={region.cy - region.r - 3}
                  textAnchor="middle"
                  fill={PALETTE.land}
                  fontSize="7"
                  fontFamily="JetBrains Mono, monospace"
                  className="select-none"
                >
                  {region.figure(language)}
                </text>
              </g>
            ))}

            <g filter="url(#continent-shadow)">
              {CONTINENT_IDS.map((cid) => (
                <path
                  key={cid}
                  d={CONTINENT_PATHS[cid]}
                  fill={PALETTE.continentFill}
                  stroke={PALETTE.continentStroke}
                  strokeWidth="1.2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  style={{ paintOrder: 'stroke markers fill' }}
                />
              ))}
            </g>

            {AFFECTED_COUNTRIES.map((country) => (
              <g key={country.name}>
                <circle
                  cx={country.cx}
                  cy={country.cy}
                  r="3.5"
                  fill={PALETTE.dot}
                  stroke={PALETTE.mapBg}
                  strokeWidth="1"
                  className="cursor-pointer"
                >
                  <title>{`${country.name}: ${country.penetration}% (ITU ${country.year})`}</title>
                </circle>
                {LABELED_COUNTRIES.includes(country.name) && (
                  <text
                    x={country.cx + 6}
                    y={country.cy + 1.5}
                    fill={PALETTE.land}
                    fontSize="6.5"
                    fontWeight="600"
                    fontFamily="JetBrains Mono, monospace"
                    className="select-none"
                  >
                    {country.name}
                  </text>
                )}
                <circle cx={country.cx} cy={country.cy} r="7" fill="none" stroke={PALETTE.dot} strokeWidth="0.4" strokeOpacity="0.25" />
              </g>
            ))}

            <rect x="15" y="645" width="230" height="26" rx="3" fill={PALETTE.mapBg} fillOpacity="0.92" stroke={PALETTE.continentStroke} strokeWidth="0.5" />
            <circle cx="27" cy="658" r="3" fill={PALETTE.dot} />
            <text x="35" y="662" fill={PALETTE.land} fontSize="7" fontWeight="600" fontFamily="JetBrains Mono, monospace">
              {`${AFFECTED_COUNTRIES.length} ${t.mapLegend[language]}`}
            </text>
          </svg>
        </motion.div>

        <motion.div
          className="panel p-5 sm:p-7 mb-8 sm:mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <span className="font-mono text-[11px] font-bold text-clay-400 uppercase tracking-widest">
                {t.mapHardestLabel[language]}
              </span>
              <p className="font-mono text-[11px] text-ink-600 mt-1">{t.mapHardestHint[language]}</p>
              <div className="mt-3 space-y-1">
                {AFFECTED_COUNTRIES.slice(0, 10).map((country) => (
                  <div key={country.name} className="flex items-baseline gap-2 py-1">
                    <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-clay-400/70 translate-y-[-1px]" />
                    <span className="font-mono text-xs text-ink-300 font-medium">
                      {language === 'en' ? country.name : country.nameBy}
                    </span>
                    <span className="font-mono text-xs text-clay-400 font-bold tabular-nums">
                      {country.penetration}%
                    </span>
                    <span className="font-mono text-[10px] text-ink-700 ml-auto">ITU {country.year}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center gap-4 rounded-lg border border-ink-800 bg-ink-850/50 p-4 sm:p-5">
              {MAP_STATS.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.labelKey} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ink-800 text-phos-400 border border-ink-700">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <a
                        href={stat.source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-80 transition-opacity"
                        title={stat.source.label[language]}
                      >
                        <AnimatedNumber
                          value={stat.value}
                          decimals={stat.decimals}
                          suffix={stat.suffix}
                          className="stat-num text-2xl"
                        />
                      </a>
                      <p className="font-mono text-[11px] text-ink-500 leading-tight mt-0.5">
                        {t[stat.labelKey][language]}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        <div className="flex items-center justify-center gap-3 mb-6 sm:mb-8">
          <div className="h-px flex-1 max-w-24 bg-ink-800" />
          <span className="font-mono text-xs text-ink-500 font-semibold select-none">
            {t.mapNumbersLabel[language]}
          </span>
          <div className="h-px flex-1 max-w-24 bg-ink-800" />
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
        >
          {MAP_FACTS.map((fact) => {
            const Icon = fact.icon;
            return (
              <motion.div
                key={fact.key}
                className="panel p-5 sm:p-6"
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-ink-850 border border-ink-700 text-clay-400">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="font-display text-xl font-bold text-ink-100 leading-none">
                    {fact.figure}
                  </span>
                </div>
                <p className="text-sm text-ink-400 leading-relaxed mb-3">
                  {t[fact.key][language]}
                </p>
                <a
                  href={fact.source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[10px] text-ink-600 hover:text-phos-400 transition-colors"
                >
                  {fact.source.label[language]} →
                </a>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
          <span className="font-mono text-[10px] text-ink-600 uppercase tracking-widest">
            {t.sourceLabel[language]}
          </span>
          {[SOURCES.itu2025, SOURCES.unescoGem2023, SOURCES.ituCountryEstimates].map((source) => (
            <a
              key={source.id}
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] text-ink-500 hover:text-phos-400 transition-colors"
            >
              {source.label[language]}
            </a>
          ))}
        </div>

        <motion.p
          className="text-center mt-10 font-mono text-sm sm:text-base text-ink-300 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {t.mapClosing[language]}
        </motion.p>
      </div>
    </section>
  );
}
