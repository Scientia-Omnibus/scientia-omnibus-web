import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/modules';
import { CONTINENT_PATHS } from '../data/map-continents';
import { AFFECTED_COUNTRIES } from '../data/countries';
import { WifiOff, Monitor, Cpu, TrendingUp, Globe, BookOpen, Zap } from 'lucide-react';
import { motion } from 'motion/react';

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

export default function ProblemMapSection({ language }: ProblemMapSectionProps) {
  const t = UI_TRANSLATIONS;
  const isEn = language === 'en';

  return (
    <section id="problem" className="py-12 sm:py-20 bg-[#FFFCEE] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <span className="font-fredoka text-xs sm:text-sm font-bold text-stone-1000 bg-cartoon-orange px-4 py-1.5 border-2 border-stone-900 rounded-lg shadow-[2px_2px_0px_#1A1A1A] uppercase tracking-wider">
            {isEn ? 'The Problem' : 'Праблема'}
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-bold text-stone-950 mt-4 sm:mt-5 mb-3 sm:mb-4 leading-tight">
            {isEn
              ? 'Digital learning has an access problem'
              : 'Лічбавая адукацыя мае праблему доступу'}
          </h2>
          <p className="text-sm sm:text-base text-gray-750 leading-relaxed font-sans font-medium">
            {isEn
              ? 'Real numbers behind the global digital divide — and why lightweight, offline tools are not a luxury but a necessity.'
              : 'Рэальныя лічбы глабальнага лічбавага разрыву — і чаму лёгкія афлайн-інструменты не раскоша, а неабходнасць.'}
          </p>
        </motion.div>

        <motion.div
          className="sketch-border bg-bg-warm p-3 sm:p-5 mb-6 sm:mb-8 overflow-x-auto relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <svg
            viewBox={VIEW_BOX}
            className="w-full h-auto min-w-[700px]"
          >
            <defs>
              <pattern id="map-grid" width="25" height="25" patternUnits="userSpaceOnUse">
                <path d="M 25 0 L 0 0 0 25" fill="none" stroke="#E8E4D8" strokeWidth="0.5" />
              </pattern>

              <filter id="continent-shadow">
                <feDropShadow dx="2" dy="2" stdDeviation="1" floodColor="#1A1A1A" floodOpacity="0.10" />
              </filter>

              {REGION_KEYS.map((r) => (
                <radialGradient key={r.id} id={`heat-${r.id}`} cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#DC2626" stopOpacity="0.18" />
                  <stop offset="50%" stopColor="#F97316" stopOpacity="0.10" />
                  <stop offset="100%" stopColor="#F97316" stopOpacity="0" />
                </radialGradient>
              ))}
            </defs>

            <rect width="1020" height="680" fill="#FFFDF5" />
            <rect width="1020" height="680" fill="url(#map-grid)" />

            {REGION_KEYS.map((r) => (
              <g key={r.id}>
                <circle
                  cx={r.cx}
                  cy={r.cy}
                  r={r.r + 25}
                  fill={`url(#heat-${r.id})`}
                />
                {r.dots.map((dot, di) => (
                  <circle
                    key={di}
                    cx={dot[0]}
                    cy={dot[1]}
                    r="2"
                    fill="#DC2626"
                    fillOpacity="0.5"
                  />
                ))}
                <text
                  x={r.cx}
                  y={r.cy - r.r - 8}
                  textAnchor="middle"
                  fill="#44403C"
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
                  fill="#FFFAF3"
                  stroke="#1A1A1A"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  style={{ paintOrder: 'stroke markers fill' }}
                />
              ))}
            </g>

            {AFFECTED_COUNTRIES.map((c) => (
              <g key={c.name}>
                <circle
                  cx={c.cx}
                  cy={c.cy}
                  r="3.5"
                  fill="#DC2626"
                  stroke="#FFFDF5"
                  strokeWidth="1"
                  className="cursor-pointer"
                >
                  <title>{`${c.name}: ${c.penetration}`}</title>
                </circle>
                {LABELED_COUNTRIES.includes(c.name) && (
                  <text
                    x={c.cx + 6}
                    y={c.cy + 1.5}
                    fill="#44403C"
                    fontSize="6.5"
                    fontWeight="600"
                    fontFamily="JetBrains Mono, monospace"
                    className="select-none"
                  >
                    {c.name}
                  </text>
                )}
                <circle
                  cx={c.cx}
                  cy={c.cy}
                  r="7"
                  fill="none"
                  stroke="#DC2626"
                  strokeWidth="0.4"
                  strokeOpacity="0.25"
                />
                <line
                  x1={c.cx + 4}
                  y1={c.cy}
                  x2={c.cx + 4}
                  y2={c.cy}
                  stroke="#DC2626"
                  strokeWidth="0.5"
                  strokeOpacity="0.15"
                  strokeDasharray="1 2"
                />
              </g>
            ))}

            <rect x="15" y="645" width="195" height="28" rx="3" fill="#FFFDF5" fillOpacity="0.9" stroke="#E8E4D8" strokeWidth="0.5" />
            <circle cx="26" cy="659" r="3" fill="#DC2626" />
            <text x="33" y="662" fill="#44403C" fontSize="7" fontWeight="600" fontFamily="JetBrains Mono, monospace">
              {`${AFFECTED_COUNTRIES.length} ${isEn ? 'affected countries' : 'пацярпелых краін'}`}
            </text>
          </svg>
        </motion.div>

        <motion.div
          className="sketch-border-sm bg-bg-warm p-4 sm:p-6 mb-8 sm:mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <span className="font-mono text-xs font-bold text-red-600 uppercase tracking-widest">
                {isEn ? 'Reach' : 'Ахоп'}
              </span>
              <div className="mt-2 space-y-1">
                {AFFECTED_COUNTRIES.slice(0, 10).map((c) => (
                  <div key={c.name} className="flex items-center gap-2 py-0.5">
                    <div className="w-1.5 h-1.5 shrink-0 rounded-full bg-red-500/60" />
                    <span className="font-mono text-[11px] text-stone-700 font-medium min-w-[80px]">
                      {isEn ? c.name : c.nameRu}
                    </span>
                    <span className="font-mono text-[11px] text-red-600 font-bold">
                      {c.penetration}
                    </span>
                    <span className="font-mono text-[10px] text-stone-400 leading-tight truncate">
                      {c.fact}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-center gap-3 p-3 sm:p-4 rounded-lg border border-stone-200 bg-white/50">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-stone-900 text-white">
                  <Globe className="h-4 w-4" />
                </div>
                <div>
                  <span className="font-display text-xl font-bold text-stone-950">3.7B</span>
                  <p className="font-mono text-[10px] text-stone-500 leading-tight">
                    {isEn ? 'people without internet access' : 'чалавек без доступу да інтэрнэту'}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-stone-900 text-white">
                  <BookOpen className="h-4 w-4" />
                </div>
                <div>
                  <span className="font-display text-xl font-bold text-stone-950">900M</span>
                  <p className="font-mono text-[10px] text-stone-500 leading-tight">
                    {isEn ? 'students lacked remote learning access in 2024' : 'студэнтаў без доступу да дыстанцыйнага навучання'}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-stone-900 text-white">
                  <Zap className="h-4 w-4" />
                </div>
                <div>
                  <span className="font-display text-xl font-bold text-stone-950">350 MB</span>
                  <p className="font-mono text-[10px] text-stone-500 leading-tight">
                    {isEn ? 'Chrome RAM per open tab' : 'АЗП Chrome на адну ўкладку'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="flex items-center justify-center gap-3 mb-6 sm:mb-8">
          <div className="h-px flex-1 max-w-16 sm:max-w-24 bg-stone-300" />
          <span className="font-mono text-xs sm:text-sm text-stone-400 font-bold select-none">
            {isEn ? 'The blind spots' : 'Нябачнае'} _
          </span>
          <div className="h-px flex-1 max-w-16 sm:max-w-24 bg-stone-300" />
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
                className="sketch-border bg-bg-warm p-5 sm:p-6"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center sketch-border-xs bg-stone-900 text-cartoon-green">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="font-display text-2xl font-bold text-stone-950 leading-none">
                    {fact.number}
                  </span>
                </div>
                <p className="text-sm text-stone-700 leading-relaxed font-sans">
                  {t[fact.key as keyof typeof t][language]}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="text-center mt-10 sm:mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-16 sm:max-w-24 bg-stone-300" />
            <span className="font-mono text-xs sm:text-sm text-stone-400 font-bold select-none">
              $ _
            </span>
            <div className="h-px flex-1 max-w-16 sm:max-w-24 bg-stone-300" />
          </div>
          <p className="text-sm sm:text-base text-stone-600 font-mono max-w-xl mx-auto">
            {isEn
              ? 'Software designed for these constraints doesn\'t limit who can learn — it sets them free.'
              : 'Праграмнае забеспячэнне, створанае для гэтых абмежаванняў, не абмяжоўвае, а вызваляе.'}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
