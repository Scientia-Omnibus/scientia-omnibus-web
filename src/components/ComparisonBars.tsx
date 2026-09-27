import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/modules';
import { motion } from 'motion/react';
import { Terminal, Cpu, Zap } from 'lucide-react';

type TranslationKey = keyof typeof UI_TRANSLATIONS;

interface ComparisonBarsProps {
  language: Language;
}

interface BarItem {
  id: string;
  labelKey: TranslationKey;
  descKey: TranslationKey;
  value: number;
  barClass: string;
  icon: typeof Cpu;
}

const BAR_DATA: BarItem[] = [
  {
    id: 'chrome',
    labelKey: 'cmpChromeLabel',
    descKey: 'cmpChromeDesc',
    value: 350,
    barClass: 'bg-ink-600',
    icon: Cpu,
  },
  {
    id: 'scientia-core',
    labelKey: 'cmpCoreLabel',
    descKey: 'cmpCoreDesc',
    value: 8,
    barClass: 'bg-phos-400',
    icon: Terminal,
  },
  {
    id: 'scientia-editor',
    labelKey: 'cmpEditorLabel',
    descKey: 'cmpEditorDesc',
    value: 5,
    barClass: 'bg-ink-600',
    icon: Zap,
  },
];

const MAX_VALUE = 400;
const TICKS = [0, 100, 200, 300, 400];

export default function ComparisonBars({ language }: ComparisonBarsProps) {
  const t = UI_TRANSLATIONS;

  return (
    <section className="py-16 sm:py-24 bg-ink-900 overflow-hidden border-y border-ink-800">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-2xl mx-auto mb-10 sm:mb-12 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-display text-2xl sm:text-4xl lg:text-[2.75rem] font-bold text-ink-100 leading-tight mb-4">
            {t.cmpTitle[language]}
          </h2>
          <p className="text-sm sm:text-base text-ink-400 leading-relaxed">{t.cmpSubtitle[language]}</p>
        </motion.div>

        <motion.div
          className="panel p-5 sm:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center justify-between gap-4 mb-8">
            <span className="font-mono text-[11px] text-ink-500 uppercase tracking-widest font-semibold">
              {t.cmpUnit[language]}
            </span>
            <span className="chip chip-dim hidden sm:inline-flex">{t.cmpChip[language]}</span>
          </div>

          <div className="space-y-7 sm:space-y-8">
            {BAR_DATA.map((item, i) => {
              const Icon = item.icon;
              const widthPct = (item.value / MAX_VALUE) * 100;
              const isCore = item.id === 'scientia-core';

              return (
                <motion.div
                  key={item.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.4, delay: i * 0.12 },
                    },
                  }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md border ${
                        isCore
                          ? 'border-phos-400/40 bg-phos-400/10 text-phos-400'
                          : 'border-ink-700 bg-ink-850 text-ink-300'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="font-mono font-bold text-sm sm:text-base text-ink-100">
                          {t[item.labelKey][language]}
                        </span>
                        <span
                          className={`font-mono text-sm sm:text-base font-bold shrink-0 ${
                            isCore ? 'text-phos-400' : 'text-ink-300'
                          }`}
                        >
                          ≈{item.value} MB
                        </span>
                      </div>
                      <p className="text-xs text-ink-500 leading-tight mt-0.5">
                        {t[item.descKey][language]}
                      </p>
                    </div>
                  </div>

                  <div className="relative h-3 sm:h-4 bg-ink-850 rounded-full overflow-hidden border border-ink-800">
                    <motion.div
                      className={`absolute inset-y-0 left-0 rounded-full ${item.barClass}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${widthPct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, delay: i * 0.12 + 0.15, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="relative mt-6">
            <div className="h-px bg-ink-800" />
            <div className="flex justify-between -mt-px">
              {TICKS.map((tick) => (
                <span key={tick} className="font-mono text-[10px] text-ink-600">
                  {tick}
                </span>
              ))}
            </div>
          </div>

          <motion.div
            className="pt-6 mt-6 border-t border-ink-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <p className="font-mono text-xs sm:text-sm text-phos-400 font-semibold text-center">
              {t.cmpResult[language]}
            </p>
            <p className="font-mono text-[10px] sm:text-[11px] text-ink-600 mt-3 text-center leading-relaxed max-w-xl mx-auto">
              {t.cmpMethod[language]}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
