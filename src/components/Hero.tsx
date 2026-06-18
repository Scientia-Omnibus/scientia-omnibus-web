import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/modules';
import { BookOpen, Github, Cpu, WifiOff, Database, Monitor } from 'lucide-react';
import { motion } from 'motion/react';
import demoMain from '../assets/images/demo-main.jpg';

interface HeroProps {
  language: Language;
  onScrollToSection: (id: string) => void;
}

export default function Hero({ language, onScrollToSection }: HeroProps) {
  const t = UI_TRANSLATIONS;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } }
  };

  return (
    <section className="relative overflow-hidden bg-bg-warm py-12 sm:py-16 lg:py-24 border-b-3 border-stone-1000">
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.07]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          <motion.div 
            className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 leading-[1.1] mb-4 sm:mb-6"
              variants={itemVariants}
            >
              {t.heroTitle[language]}
            </motion.h2>

            <motion.p 
              className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed font-medium mb-6 sm:mb-8"
              variants={itemVariants}
            >
              {t.heroSubtitle[language]}
            </motion.p>

            <motion.div 
              className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-10"
              variants={itemVariants}
            >
              <button
                onClick={() => onScrollToSection('modules')}
                className="group relative inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 sm:py-4 sketch-button bg-cartoon-blue text-stone-900 font-bold text-sm sm:text-base"
              >
                <BookOpen className="h-5 w-5 text-stone-900 group-hover:scale-110 transition-transform" />
                <span>{t.exploreModules[language]}</span>
              </button>

              <a
                href="https://github.com/Scientia-Omnibus"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 sm:py-4 sketch-button bg-cartoon-green text-stone-900 font-bold text-sm sm:text-base"
              >
                <Github className="h-5 w-5" />
                <span>{t.viewOnGithub[language]}</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.92, rotate: 1 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 70, damping: 20, delay: 0.2 }}
          >
            <div className="relative p-2 bg-white sketch-border w-full max-w-sm sm:max-w-md lg:max-w-none transform rotate-1">
              
              <div className="absolute -top-3 sm:-top-4 -left-3 sm:-left-4 bg-cartoon-green text-stone-900 font-fredoka text-[10px] sm:text-[11px] font-bold uppercase px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg border-2 border-stone-900 shadow-[3px_3px_0px_#1A1A1A] transform -rotate-3 z-10">
                🌲 {language === 'en' ? 'NO INTERNET REQUIRED' : 'НЕ ПАТРАБУЕ ІНТЭРНЭТУ'}
              </div>
              <div className="absolute -bottom-2 sm:-bottom-3 -right-2 sm:-right-3 bg-cartoon-blue text-stone-900 font-fredoka text-[10px] sm:text-[11px] font-bold uppercase px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg border-2 border-stone-900 shadow-[3px_3px_0px_#1A1A1A] transform rotate-2 z-10">
                🌐 {language === 'en' ? 'SYNC ONCE, OFFLINE FOREVER' : 'СПАМПУЙ І КАРЫСТАЙСЯ АФЛАЙН'}
              </div>

              <div className="overflow-hidden rounded-xl bg-stone-100 border-2 border-stone-900 aspect-4/3">
                <img
                  src={demoMain}
                  alt="Scientia Omnibus — offline learning anywhere"
                  className="w-full h-full object-cover select-none pointer-events-none"
                />
              </div>
            </div>
          </motion.div>

        </div>

        <div id="benchmarks" className="mt-12 sm:mt-20">
          <div className="text-center mb-6 sm:mb-10">
            <h3 className="text-xs sm:text-sm font-fredoka font-bold text-stone-850 uppercase tracking-widest bg-cartoon-orange border-2 border-stone-900 px-3 sm:px-4 py-1 rounded-lg inline-block shadow-[2px_2px_0px_#1A1A1A]">
              {language === 'en' ? 'SCIENTIA-CORE BENCHMARKS' : 'ПРАДУКЦЫЙНАСЦЬ SCIENTIA-CORE'}
            </h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            
            <motion.div 
              className="p-5 sm:p-6 bg-white sketch-border hover:bg-cartoon-orange transition-colors duration-200 group"
              whileHover={{ y: -4 }}
            >
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center sketch-border-xs bg-cartoon-orange text-stone-900 mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                <Cpu className="h-5 w-5" />
              </div>
              <h4 className="font-display text-xl sm:text-2xl font-bold text-stone-900 mb-1.5 sm:mb-2 leading-tight">
                {t.statZeroOverhead[language]}
              </h4>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-sans">
                {t.statZeroOverheadDesc[language]}
              </p>
            </motion.div>

            <motion.div 
              className="p-5 sm:p-6 bg-white sketch-border hover:bg-cartoon-green transition-colors duration-200 group"
              whileHover={{ y: -4 }}
            >
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center sketch-border-xs bg-cartoon-green text-stone-900 mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                <WifiOff className="h-5 w-5" />
              </div>
              <h4 className="font-display text-xl sm:text-2xl font-bold text-stone-900 mb-1.5 sm:mb-2 leading-tight">
                {t.statOffline[language]}
              </h4>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-sans">
                {t.statOfflineDesc[language]}
              </p>
            </motion.div>

            <motion.div 
              className="p-5 sm:p-6 bg-white sketch-border hover:bg-cartoon-blue transition-colors duration-200 group"
              whileHover={{ y: -4 }}
            >
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center sketch-border-xs bg-cartoon-blue text-stone-900 mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                <Database className="h-5 w-5" />
              </div>
              <h4 className="font-display text-xl sm:text-2xl font-bold text-stone-900 mb-1.5 sm:mb-2 leading-tight">
                {t.statLightweight[language]}
              </h4>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-sans">
                {t.statLightweightDesc[language]}
              </p>
            </motion.div>

            <motion.div 
              className="p-5 sm:p-6 bg-white sketch-border hover:bg-cartoon-purple transition-colors duration-200 group"
              whileHover={{ y: -4 }}
            >
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center sketch-border-xs bg-cartoon-purple text-stone-900 mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                <Monitor className="h-5 w-5" />
              </div>
              <h4 className="font-display text-xl sm:text-2xl font-bold text-stone-900 mb-1.5 sm:mb-2 leading-tight">
                {t.statHardware[language]}
              </h4>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-sans">
                {t.statHardwareDesc[language]}
              </p>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
