import { Language } from '../types';
import { WifiOff, Monitor, Cpu, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

interface ProblemMapSectionProps {
  language: Language;
}

interface ProblemEntry {
  id: string;
  number: string;
  icon: typeof WifiOff;
  title: { en: string; by: string };
  desc: { en: string; by: string };
}

const PROBLEMS: ProblemEntry[] = [
  {
    id: 'offline',
    number: '2.6B',
    icon: WifiOff,
    title: {
      en: 'People Without Internet',
      by: 'Людзі без інтэрнэту',
    },
    desc: {
      en: 'Cloud-dependent educational tools are inaccessible to nearly 2.6 billion people. The digital divide is not shrinking fast enough.',
      by: 'Воблачныя адукацыйныя інструменты недаступныя амаль 2,6 млрд чалавек. Лічбавы разрыў не скарачаецца дастаткова хутка.',
    },
  },
  {
    id: 'memory',
    number: '100+ MB',
    icon: Monitor,
    title: {
      en: 'Per Browser Tab',
      by: 'На ўкладку браўзера',
    },
    desc: {
      en: 'A single educational webpage can consume more RAM than many older school computers possess. Software has grown beyond its hardware.',
      by: 'Адна адукацыйная старонка можа спажываць больш АЗП, чым мае шмат які стары школьны кампутар. Софт вырас за межы свайго абсталявання.',
    },
  },
  {
    id: 'hardware',
    number: '15+ yrs',
    icon: Cpu,
    title: {
      en: 'Old School Hardware',
      by: 'Састарэлая тэхніка',
    },
    desc: {
      en: 'Fifteen-year-old PCs and low-cost single-board computers are still classroom staples across the developing world. Modern software leaves them behind.',
      by: '15-гадовыя ПК і недарагія мікракампутары — усё яшчэ аснова ў школах развіваючагася свету. Сучасны софт іх ігнаруе.',
    },
  },
  {
    id: 'bloat',
    number: '3×',
    icon: TrendingUp,
    title: {
      en: 'Page Bloat in a Decade',
      by: 'Разбуханне за дзесяцігоддзе',
    },
    desc: {
      en: 'The average webpage has tripled in size over ten years. Educational platforms follow the same trajectory, making them slower and heavier.',
      by: 'Памер сярэдняй вэб-старонкі вырас у 3 разы за дзесяць гадоў. Адукацыйныя платформы ідуць тым жа шляхам.',
    },
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function ProblemMapSection({ language }: ProblemMapSectionProps) {
  return (
    <section className="py-12 sm:py-20 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="font-fredoka text-xs sm:text-sm font-bold text-stone-900 bg-cartoon-orange px-4 py-1.5 border-2 border-stone-900 rounded-lg shadow-[2px_2px_0px_#1A1A1A] uppercase tracking-wider">
            {language === 'en' ? 'The Problem' : 'Праблема'}
          </span>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-bold text-stone-950 mt-4 sm:mt-5 mb-3 sm:mb-4 leading-tight">
            {language === 'en'
              ? 'Digital learning has an access problem'
              : 'Лічбавая адукацыя мае праблему доступу'}
          </h2>

          <p className="text-sm sm:text-base text-gray-750 leading-relaxed font-sans font-medium">
            {language === 'en'
              ? 'Real numbers behind the global digital divide — and why lightweight, offline tools are not a luxury but a necessity.'
              : 'Рэальныя лічбы глабальнага лічбавага разрыву — і чаму лёгкія афлайн-інструменты не раскоша, а неабходнасць.'}
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {PROBLEMS.map((problem) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={problem.id}
                className="sketch-border bg-bg-warm p-6 sm:p-8"
                variants={cardVariants}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center sketch-border-xs bg-stone-900 text-cartoon-green">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="block font-display text-3xl sm:text-4xl font-bold text-stone-950 leading-none mb-1">
                      {problem.number}
                    </span>
                    <h3 className="font-display font-bold text-base sm:text-lg text-stone-950 leading-tight">
                      {problem.title[language]}
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-gray-750 leading-relaxed font-sans">
                  {problem.desc[language]}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="text-center mt-10 sm:mt-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-16 sm:max-w-24 bg-stone-300" />
            <span className="font-mono text-xs sm:text-sm text-stone-400 font-bold select-none">
              $ _
            </span>
            <div className="h-px flex-1 max-w-16 sm:max-w-24 bg-stone-300" />
          </div>
          <p className="text-sm sm:text-base text-stone-600 font-mono max-w-xl mx-auto">
            {language === 'en'
              ? 'This is the environment our software is built for — not despite the constraints, but because of them.'
              : 'Гэта асяроддзе, для якога створаны наш софт — не насуперак абмежаванням, а дзякуючы ім.'}
          </p>
        </div>
      </div>
    </section>
  );
}
