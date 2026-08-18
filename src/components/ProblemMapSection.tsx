import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/modules';
import { CONTINENT_PATHS } from '../data/map-continents';
import { AFFECTED_COUNTRIES } from '../data/countries';
import { WifiOff, Monitor, Cpu, TrendingUp, Globe, BookOpen, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import AnimatedNumber from './AnimatedNumber';

interface ProblemMapSectionProps {
  language: Language;
}

const VIEW_BOX = '0 0 1020 680';
const LABELED_COUNTRIES = ['Nigeria', 'India', 'Brazil', 'Indonesia', 'DR Congo', 'Ethiopia', 'Bangladesh', 'Pakistan', 'Myanmar', 'Colombia'];

const REGION_KEYS: { id: string; cx: number; cy: number; r: number; dots: [number, number][] }[] = [
  {
    id: 'regionAfrica',
    cx: 520,
    cy: 485,
    r: 40,
    dots: [
      [510, 460], [515, 470], [498, 475], [505, 490], [495, 505],
      [512, 510], [525, 495], [535, 478], [528, 465], [520, 455],
      [505, 450], [530, 470],
    ],
  },
  {
    id: 'regionSouthAsia',
    cx: 685,
    cy: 295,
    r: 20,
    dots: [
      [675, 285], [685, 290], [695, 295], [690, 305], [680, 300],
      [672, 290], [678, 288], [695, 285],
    ],
  },
  {
    id: 'regionSoutheastAsia',
    cx: 810,
    cy: 250,
    r: 22,
    dots: [
      [800, 235], [815, 240], [825, 250], [815, 260], [805, 255],
      [795, 245], [810, 248], [820, 245],
    ],
  },
  {
    id: 'regionLatinAmerica',
    cx: 324,
    cy: 565,
    r: 25,
    dots: [
      [315, 550], [325, 555], [310, 565], [330, 575], [335, 560],
      [328, 545], [315, 558], [320, 570],
    ],
  },
];

const CONTINENT_IDS = ['africa', 'north_america', 'south_america', 'asia', 'europe', 'australia'];

const PALETTE = {
  mapBg: '#0E1219',
  grid: '#1B2231',
  continentFill: '#171D29',
  continentStroke: '#2C3648',
  land: '#7D8A9E',
  strong: '#9AA7B8',
  dot: 'oklch(0.64 0.19 27)',
  dotSoft: 'oklch(0.72 0.13 32)',
};

export default function ProblemMapSection({ language }: ProblemMapSectionProps) {
  const t = UI_TRANSLATIONS;
  const isEn = language === 'en';

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
          <p className="eyebrow mb-4">{isEn ? 'The problem' : 'Праблема'}</p>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-[2.75rem] font-bold text-ink-100 leading-tight mb-4">
            {isEn ? 'Digital learning has an access problem' : 'Лічбавая адукацыя мае праблему доступу'}
          </h2>
          <p className="text-sm sm:text-base text-ink-400 leading-relaxed">
            {isEn
              ? 'Real numbers behind the global digital divide — and why lightweight, offline tools are not a luxury but a necessity.'
              : 'Рэальныя лічбы глабальнага лічбавага разрыву — і чаму лёгкія афлайн-інструменты не раскоша, а неабходнасць.'}
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

              {REGION_KEYS.map((r) => (
                <radialGradient key={r.id} id={`heat-${r.id}`} cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor={PALETTE.dot} stopOpacity="0.30" />
                  <stop offset="55%" stopColor={PALETTE.dotSoft} stopOpacity="0.12" />
                  <stop offset="100%" stopColor={PALETTE.dotSoft} stopOpacity="0" />
                </radialGradient>
              ))}
            </defs>

            <rect width="1020" height="680" fill={PALETTE.mapBg} />
            <rect width="1020" height="680" fill="url(#map-grid)" />

            {REGION_KEYS.map((r, ri) => (
              <g key={r.id}>
                <circle cx={r.cx} cy={r.cy} r={r.r + 25} fill={`url(#heat-${r.id})`} />
                <motion.circle
                  cx={r.cx}
                  cy={r.cy}
                  r={r.r}
                  fill="none"
                  stroke={PALETTE.dot}
                  strokeWidth="1"
                  opacity="0.5"
                  animate={{ r: [r.r, r.r + 16, r.r], opacity: [0.45, 0, 0.45] }}
                  transition={{ duration: 3.4, repeat: Infinity, ease: 'easeOut', delay: ri * 0.7 }}
                />
                {r.dots.map((dot, di) => (
                  <circle key={di} cx={dot[0]} cy={dot[1]} r="2" fill={PALETTE.dot} fillOpacity="0.55" />
                ))}
                <text
                  x={r.cx}
                  y={r.cy - r.r - 8}
                  textAnchor="middle"
                  fill={PALETTE.strong}
                  fontSize="9"
                  fontWeight="700"
                  fontFamily="JetBrains Mono, monospace"
                  className="select-none"
                >
                  {r.id === 'regionAfrica' && (isEn ? 'Sub-Saharan Africa' : 'Афрыка')}
                  {r.id === 'regionSouthAsia' && (isEn ? 'South Asia' : 'Паўдн. Азія')}
                  {r.id === 'regionSoutheastAsia' && (isEn ? 'Southeast Asia' : 'Паўдн.-Усх. Азія')}
                  {r.id === 'regionLatinAmerica' && (isEn ? 'Latin America' : 'Лац. Амерыка')}
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

            {AFFECTED_COUNTRIES.map((c) => (
              <g key={c.name}>
                <circle cx={c.cx} cy={c.cy} r="3.5" fill={PALETTE.dot} stroke={PALETTE.mapBg} strokeWidth="1" className="cursor-pointer">
                  <title>{`${c.name}: ${c.penetration}`}</title>
                </circle>
                {LABELED_COUNTRIES.includes(c.name) && (
                  <text
                    x={c.cx + 6}
                    y={c.cy + 1.5}
                    fill={PALETTE.land}
                    fontSize="6.5"
                    fontWeight="600"
                    fontFamily="JetBrains Mono, monospace"
                    className="select-none"
                  >
                    {c.name}
                  </text>
                )}
                <circle cx={c.cx} cy={c.cy} r="7" fill="none" stroke={PALETTE.dot} strokeWidth="0.4" strokeOpacity="0.25" />
              </g>
            ))}

            <rect x="15" y="645" width="230" height="26" rx="3" fill={PALETTE.mapBg} fillOpacity="0.92" stroke={PALETTE.continentStroke} strokeWidth="0.5" />
            <circle cx="27" cy="658" r="3" fill={PALETTE.dot} />
            <text x="35" y="662" fill={PALETTE.land} fontSize="7" fontWeight="600" fontFamily="JetBrains Mono, monospace">
              {`${AFFECTED_COUNTRIES.length} ${isEn ? 'affected countries' : 'пацярпелых краін'}`}
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
              <span className="font-mono text-[11px] font-bold text-alert-400 uppercase tracking-widest">
                {isEn ? 'Where access is hardest' : 'Дзе доступ найцяжэйшы'}
              </span>
              <div className="mt-3 space-y-1">
                {AFFECTED_COUNTRIES.slice(0, 10).map((c) => (
                  <div key={c.name} className="flex items-center gap-2 py-1">
                    <div className="w-1.5 h-1.5 shrink-0 rounded-full bg-alert-400/70" />
                    <span className="font-mono text-xs text-ink-300 font-medium min-w-[88px]">
                      {isEn ? c.name : c.nameRu}
                    </span>
                    <span className="font-mono text-xs text-alert-400 font-bold">
                      {c.penetration}
                    </span>
                    <span className="font-mono text-[11px] text-ink-600 leading-tight truncate">
                      {c.fact}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center gap-4 rounded-lg border border-ink-800 bg-ink-850/50 p-4 sm:p-5">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ink-800 text-phos-400 border border-ink-700">
                  <Globe className="h-5 w-5" />
                </div>
                <div>
                  <AnimatedNumber value={2.6} decimals={1} suffix="B" className="stat-num text-2xl" />
                  <p className="font-mono text-[11px] text-ink-500 leading-tight mt-0.5">
                    {isEn ? 'people still offline worldwide' : 'чалавек усё яшчэ па-за сеткай'}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ink-800 text-phos-400 border border-ink-700">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <AnimatedNumber value={500} suffix="M" className="stat-num text-2xl" />
                  <p className="font-mono text-[11px] text-ink-500 leading-tight mt-0.5">
                    {isEn ? 'students lost remote learning access' : 'вучняў страцілі доступ да дыстанцыйнага навучання'}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ink-800 text-phos-400 border border-ink-700">
                  <Zap className="h-5 w-5" />
                </div>
                <div>
                  <AnimatedNumber value={350} suffix=" MB" className="stat-num text-2xl" />
                  <p className="font-mono text-[11px] text-ink-500 leading-tight mt-0.5">
                    {isEn ? 'typical browser RAM per tab' : 'тыповыя АЗП браўзера на ўкладку'}
                  </p>
                </div>
              </div>
              <p className="font-mono text-[10px] text-ink-600 leading-relaxed mt-1">
                {isEn
                  ? 'Sources: ITU 2024 · UNESCO 2020 · typical Chrome measurement'
                  : 'Крыніцы: ITU 2024 · UNESCO 2020 · тыповае вымярэнне Chrome'}
              </p>
            </div>
          </div>
        </motion.div>

        <div className="flex items-center justify-center gap-3 mb-6 sm:mb-8">
          <div className="h-px flex-1 max-w-24 bg-ink-800" />
          <span className="font-mono text-xs text-ink-500 font-semibold select-none">
            {isEn ? 'The blind spots' : 'Нябачнае'}
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
          {([{ icon: WifiOff, key: 'mapFactStudents', number: '~400M' },
             { icon: Monitor, key: 'mapFactSchools', number: '43%' },
             { icon: Cpu, key: 'mapFactHardware', number: '12+ yrs' },
             { icon: TrendingUp, key: 'mapFactBloat', number: '300%' }] as const).map((fact) => {
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
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-ink-850 border border-ink-700 text-alert-400">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="font-display text-xl font-bold text-ink-100 leading-none">
                    {fact.number}
                  </span>
                </div>
                <p className="text-sm text-ink-400 leading-relaxed">
                  {t[fact.key as keyof typeof t][language]}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-sm sm:text-base text-ink-400 font-mono max-w-xl mx-auto">
            {isEn
              ? 'Software designed for these constraints doesn\'t limit who can learn — it sets them free.'
              : 'Праграмнае забеспячэнне, створанае для гэтых абмежаванняў, не абмяжоўвае, а вызваляе.'}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
