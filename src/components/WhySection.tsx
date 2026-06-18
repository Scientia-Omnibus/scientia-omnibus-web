import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/modules';
import { ShieldAlert, Zap, Globe, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface WhySectionProps {
  language: Language;
}

export default function WhySection({ language }: WhySectionProps) {
  const t = UI_TRANSLATIONS;

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <section id="philosophy" className="py-20 bg-bg-warm overflow-hidden border-b-3 border-stone-1000">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-fredoka text-sm font-bold text-stone-1000 bg-cartoon-purple px-4 py-1.5 border-2 border-stone-900 rounded-lg shadow-[2px_2px_0px_#1A1A1A] uppercase tracking-wider">
            {language === 'en' ? 'Philosophical Stand' : 'Гуманітарны пасыл'}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-stone-950 mt-5 mb-4 leading-tight">
            {t.whyTitle[language]}
          </h2>
          <p className="text-sm sm:text-base text-gray-750 leading-relaxed font-sans font-medium">
            {t.whySubtitle[language]}
          </p>
        </div>

        <div className="mb-14 p-6 sm:p-8 bg-cartoon-orange sketch-border flex flex-col md:flex-row gap-5 items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-red-400 border-2 border-stone-900 text-stone-950 rounded-lg shrink-0 shadow-[2px_2px_0px_#111111]">
              <ShieldAlert className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-stone-950">
                {language === 'en' 
                  ? "The 100MB Chrome Tab Exclusion Trap" 
                  : "Пастка 100-мегабайтнай укладкі ў Google Chrome"
                }
              </h3>
              <p className="text-xs sm:text-sm text-stone-850 mt-2.5 leading-relaxed max-w-2xl font-sans font-medium">
                {language === 'en'
                  ? "Today, loading a single webpage with a simple article burns upwards of 100 megabytes of memory. Web frameworks require heavy browser engines. This bloating isolates vulnerable, low-income students with outdated, low-spec laptops."
                  : "Сёння адкрыццё простага артыкула патрабуе каля 100 мегабайт памяці і рэсурсаў. Гэта азначае, што вучні са слабымі ноўтбукамі ці без доступу да высакахуткаснага інтэрнэту проста адрэзаны ад сучаснага свету і ведаў."
                }
              </p>
            </div>
          </div>
          <div className="shrink-0 bg-white border-2 border-stone-900 px-4 py-2.5 rounded-lg font-mono text-xs text-stone-900 font-bold shadow-[3px_3px_0px_#111111]">
            🚨 {language === 'en' ? 'Electron Overhead: 100%' : 'Лішак АЗП: 1000 %'}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <motion.div 
            className="p-8 bg-white sketch-border hover:bg-cartoon-blue transition-colors duration-200 group relative overflow-hidden"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="flex h-12 w-12 items-center justify-center sketch-border-xs bg-cartoon-blue text-stone-900 mb-6 font-bold">
              <Globe className="h-6 w-6" />
            </div>
            <h3 className="font-display text-2xl font-bold text-stone-950 mb-3 leading-tight">
              {t.equityTitle[language]}
            </h3>
            <p className="text-sm text-gray-700 font-sans leading-relaxed font-semibold">
              {t.equityDesc[language]}
            </p>
          </motion.div>

          <motion.div 
            className="p-8 bg-white sketch-border hover:bg-cartoon-purple transition-colors duration-200 group relative overflow-hidden"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="flex h-12 w-12 items-center justify-center sketch-border-xs bg-cartoon-purple text-stone-900 mb-6 font-bold">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="font-display text-2xl font-bold text-stone-950 mb-3 leading-tight">
              {t.efficiencyTitle[language]}
            </h3>
            <p className="text-sm text-gray-700 font-sans leading-relaxed font-semibold">
              {t.efficiencyDesc[language]}
            </p>
          </motion.div>

          <motion.div 
            className="p-8 bg-white sketch-border hover:bg-cartoon-green transition-colors duration-200 group relative overflow-hidden"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="flex h-12 w-12 items-center justify-center sketch-border-xs bg-cartoon-green text-stone-900 mb-6 font-bold">
              <Sparkles className="h-6 w-6" />
            </div>
            <h3 className="font-display text-2xl font-bold text-stone-950 mb-3 leading-tight">
              {t.empowermentTitle[language]}
            </h3>
            <p className="text-sm text-gray-700 font-sans leading-relaxed font-semibold">
              {t.empowermentDesc[language]}
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
