import { Language } from '../types';
import { motion } from 'motion/react';
import { Terminal, Cpu, Zap } from 'lucide-react';

interface ComparisonBarsProps {
  language: Language;
}

const BAR_DATA = [
  {
    id: 'chrome',
    label: { en: 'Modern Browser (Chrome)', by: 'Сучасны браўзер (Chrome)' },
    value: 450,
    unit: 'MB',
    color: 'bg-gradient-to-r from-red-400 to-red-500',
    barColor: '#EF4444',
    icon: Cpu,
    desc: { en: 'RAM per open tab', by: 'АЗП на адну ўкладку' },
  },
  {
    id: 'scientia-core',
    label: { en: 'scientia-core', by: 'scientia-core' },
    value: 8,
    unit: 'MB',
    color: 'bg-gradient-to-r from-emerald-400 to-emerald-500',
    barColor: '#34D399',
    icon: Terminal,
    desc: { en: 'Offline knowledge reader', by: 'Афлайн рэдар ведаў' },
  },
  {
    id: 'scientia-editor',
    label: { en: 'scientia-editor', by: 'scientia-editor' },
    value: 5,
    unit: 'MB',
    color: 'bg-gradient-to-r from-sky-400 to-sky-500',
    barColor: '#38BDF8',
    icon: Zap,
    desc: { en: 'Terminal code editor', by: 'Тэрмінальны рэдактар кода' },
  },
];

const MAX_VALUE = 500;

export default function ComparisonBars({ language }: ComparisonBarsProps) {
  return (
    <section className="py-12 sm:py-16 bg-bg-warm overflow-hidden">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <span className="font-fredoka text-xs sm:text-sm font-bold text-stone-1000 bg-cartoon-green px-4 py-1.5 border-2 border-stone-900 rounded-lg shadow-[2px_2px_0px_#1A1A1A] uppercase tracking-wider">
            {language === 'en' ? 'The Difference' : 'Розніца'}
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-bold text-stone-950 mt-4 sm:mt-5 mb-3 sm:mb-4 leading-tight">
            {language === 'en' ? 'Memory footprint matters' : 'Спажыванне памяці мае значэнне'}
          </h2>
          <p className="text-sm sm:text-base text-gray-750 leading-relaxed font-sans font-medium">
            {language === 'en'
              ? 'One browser tab does more work for a page — our tools do more with nearly nothing.'
              : 'Адна ўкладка браўзера робіць больш працы дзеля старонкі — нашы інструменты робяць больш амаль без рэсурсаў.'}
          </p>
        </motion.div>

        <div className="sketch-border bg-white p-5 sm:p-8 space-y-6 sm:space-y-8">
          {BAR_DATA.map((item, i) => {
            const Icon = item.icon;
            const widthPct = (item.value / MAX_VALUE) * 100;

            return (
              <motion.div
                key={item.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.5, delay: i * 0.15 },
                  },
                }}
              >
                <div className="flex items-center gap-3 mb-2">
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md border-2 border-stone-900 ${
                        item.id === 'chrome'
                          ? 'bg-red-100 text-red-600'
                          : item.id === 'scientia-core'
                            ? 'bg-emerald-100 text-emerald-600'
                            : 'bg-sky-100 text-sky-600'
                      }`}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="font-display font-bold text-sm sm:text-base text-stone-950">
                        {item.label[language]}
                      </span>
                      <span className={`font-mono text-xs sm:text-sm font-bold shrink-0 ${
                        item.id === 'chrome' ? 'text-red-600' : 'text-emerald-600'
                      }`}>
                        {item.value} {item.unit}
                      </span>
                    </div>
                    <p className="text-[11px] text-stone-500 font-sans leading-tight">
                      {item.desc[language]}
                    </p>
                  </div>
                </div>

                <div className="relative h-6 sm:h-7 bg-stone-100 border-2 border-stone-900 rounded-md overflow-hidden">
                  <motion.div
                    className={`absolute inset-y-0 left-0 rounded-sm ${item.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${widthPct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.15 + 0.2, ease: 'easeOut' }}
                    style={{ minWidth: item.id !== 'chrome' ? '6%' : undefined }}
                  />
                  {item.id === 'chrome' && (
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                      <span className="text-[9px] font-mono font-bold text-red-700">
                        {language === 'en' ? '50+ tabs impossible' : '50+ укладак немагчыма'}
                      </span>
                    </div>
                  )}
                  {item.id === 'scientia-core' && (
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                      <span className="text-[9px] font-mono font-bold text-emerald-700">
                        {language === 'en' ? 'Runs on any machine' : 'Працуе на любой тэхніцы'}
                      </span>
                    </div>
                  )}
                  {item.id === 'scientia-editor' && (
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                      <span className="text-[9px] font-mono font-bold text-sky-700">
                        {language === 'en' ? '5 MB — same as a photo' : '5 MB — як адно фота'}
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}

          <motion.div
            className="pt-3 border-t-2 border-dashed border-stone-300 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <span className="font-mono text-[11px] sm:text-xs text-stone-500 font-bold">
              {language === 'en'
                ? 'Browsers are built for video and ads. Our tools are built for text and learning.'
                : 'Браўзеры створаны для відэа і рэкламы. Нашы інструменты — для тэксту і навучання.'}
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
