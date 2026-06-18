import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/modules';
import { Terminal, Github, MessageSquare, Cpu, WifiOff, Database, Monitor } from 'lucide-react';
import { motion } from 'motion/react';

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
    <section className="relative overflow-hidden bg-bg-warm py-16 sm:py-24 border-b-3 border-stone-1000">
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.07]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <motion.div 
            className="lg:col-span-7 flex flex-col justify-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 
              className="text-4xl sm:text-5xl lg:text-6.5xl font-display font-bold text-gray-900 leading-[1.1] mb-6"
              variants={itemVariants}
            >
              {t.heroTitle[language]}
            </motion.h2>

            <motion.p 
              className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium mb-8"
              variants={itemVariants}
            >
              {t.heroSubtitle[language]}
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-10"
              variants={itemVariants}
            >
              <button
                onClick={() => onScrollToSection('simulator')}
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-4 sketch-button bg-cartoon-blue text-stone-900 font-bold"
              >
                <Terminal className="h-5 w-5 text-stone-900 group-hover:scale-110 transition-transform" />
                <span>{t.launchApp[language]}</span>
              </button>

              <a
                href="https://github.com/Scientia-Omnibus"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 sketch-button bg-cartoon-green text-stone-900 font-bold"
              >
                <Github className="h-5 w-5" />
                <span>{t.viewOnGithub[language]}</span>
              </a>

              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 sketch-button bg-cartoon-purple text-stone-900 font-bold"
              >
                <MessageSquare className="h-5 w-5" />
                <span>{language === 'en' ? 'Community Discord' : 'Дыскорд суполкі'}</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="lg:col-span-5 flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.92, rotate: 1 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 70, damping: 20, delay: 0.2 }}
          >
            <div className="relative p-2 bg-white sketch-border max-w-md lg:max-w-none transform rotate-1">
              
              <div className="absolute -top-4 -left-4 bg-cartoon-green text-stone-900 font-fredoka text-[11px] font-bold uppercase px-3 py-1.5 rounded-lg border-2 border-stone-900 shadow-[3px_3px_0px_#1A1A1A] transform -rotate-3 z-10">
                🌲 {language === 'en' ? 'NO INTERNET REQUIRED' : 'НЕ ПАТРАБУЕ ІНТЭРНЭТУ'}
              </div>
              <div className="absolute -bottom-3 -right-3 bg-cartoon-blue text-stone-900 font-fredoka text-[11px] font-bold uppercase px-3 py-1.5 rounded-lg border-2 border-stone-900 shadow-[3px_3px_0px_#1A1A1A] transform rotate-2 z-10">
                🌐 {language === 'en' ? 'SYNC ONCE, OFFLINE FOREVER' : 'СПАМПУЙ І КАРЫСТАЙСЯ АФЛАЙН'}
              </div>

              <div className="overflow-hidden rounded-xl bg-stone-100 border-2 border-stone-900 aspect-4/3">
                <img
                  src="/src/assets/images/offline_crayon_forest_1781807882967.jpg"
                  alt="Scientia Omnibus Student Learning Offline in Forest"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover select-none pointer-events-none hover:scale-103 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </motion.div>

        </div>

        <div id="philosophy" className="mt-20">
          <div className="text-center mb-10">
            <h3 className="text-sm font-fredoka font-bold text-stone-850 uppercase tracking-widest bg-cartoon-orange border-2 border-stone-900 px-4 py-1 rounded-lg inline-block shadow-[2px_2px_0px_#1A1A1A]">
              {language === 'en' ? 'SCIENTIA-CORE BENCHMARKS' : 'ПРАДУКЦЫЙНАСЦЬ SCIENTIA-CORE'}
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <motion.div 
              className="p-6 bg-white sketch-border hover:bg-cartoon-orange transition-colors duration-200 group"
              whileHover={{ y: -4 }}
            >
              <div className="flex h-12 w-12 items-center justify-center sketch-border-xs bg-cartoon-orange text-stone-900 mb-4 group-hover:scale-110 transition-transform">
                <Cpu className="h-5.5 w-5.5" />
              </div>
              <h4 className="font-display text-2xl font-bold text-stone-900 mb-2 leading-tight">
                {t.statZeroOverhead[language]}
              </h4>
              <p className="text-sm text-gray-700 leading-relaxed font-sans">
                {t.statZeroOverheadDesc[language]}
              </p>
            </motion.div>

            <motion.div 
              className="p-6 bg-white sketch-border hover:bg-cartoon-green transition-colors duration-200 group"
              whileHover={{ y: -4 }}
            >
              <div className="flex h-12 w-12 items-center justify-center sketch-border-xs bg-cartoon-green text-stone-900 mb-4 group-hover:scale-110 transition-transform">
                <WifiOff className="h-5.5 w-5.5" />
              </div>
              <h4 className="font-display text-2xl font-bold text-stone-900 mb-2 leading-tight">
                {t.statOffline[language]}
              </h4>
              <p className="text-sm text-gray-700 leading-relaxed font-sans">
                {t.statOfflineDesc[language]}
              </p>
            </motion.div>

            <motion.div 
              className="p-6 bg-white sketch-border hover:bg-cartoon-blue transition-colors duration-200 group"
              whileHover={{ y: -4 }}
            >
              <div className="flex h-12 w-12 items-center justify-center sketch-border-xs bg-cartoon-blue text-stone-900 mb-4 group-hover:scale-110 transition-transform">
                <Database className="h-5.5 w-5.5" />
              </div>
              <h4 className="font-display text-2xl font-bold text-stone-900 mb-2 leading-tight">
                {t.statLightweight[language]}
              </h4>
              <p className="text-sm text-gray-700 leading-relaxed font-sans">
                {t.statLightweightDesc[language]}
              </p>
            </motion.div>

            <motion.div 
              className="p-6 bg-white sketch-border hover:bg-cartoon-purple transition-colors duration-200 group"
              whileHover={{ y: -4 }}
            >
              <div className="flex h-12 w-12 items-center justify-center sketch-border-xs bg-cartoon-purple text-stone-900 mb-4 group-hover:scale-110 transition-transform">
                <Monitor className="h-5.5 w-5.5" />
              </div>
              <h4 className="font-display text-2xl font-bold text-stone-900 mb-2 leading-tight">
                {t.statHardware[language]}
              </h4>
              <p className="text-sm text-gray-700 leading-relaxed font-sans">
                {t.statHardwareDesc[language]}
              </p>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
