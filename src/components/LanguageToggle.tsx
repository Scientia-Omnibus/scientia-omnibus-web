import { motion } from 'motion/react';
import { Language } from '../types';

interface LanguageToggleProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  size?: 'sm' | 'md';
}

export default function LanguageToggle({ language, setLanguage, size = 'md' }: LanguageToggleProps) {
  const isSm = size === 'sm';

  return (
    <div
      className={`
        relative grid grid-cols-2 bg-white border-2 border-stone-900 rounded-lg shadow-[2px_2px_0px_#1A1A1A]
        ${isSm ? 'w-[72px] h-8 p-0.5' : 'w-[88px] sm:w-[96px] h-8 sm:h-9 p-0.5'}
      `}
    >
      <motion.div
        className="absolute top-0.5 bottom-0.5 left-0.5 rounded bg-cartoon-green border border-stone-900 pointer-events-none"
        style={{ width: 'calc(50% - 2px)' }}
        animate={{ x: language === 'en' ? 0 : '100%' }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      />
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`relative z-10 font-black tracking-wider transition-colors cursor-pointer ${
          isSm ? 'text-[10px]' : 'text-[10px] sm:text-xs'
        } ${language === 'en' ? 'text-stone-900' : 'text-stone-500 hover:text-stone-800'}`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLanguage('by')}
        className={`relative z-10 font-black tracking-wider transition-colors cursor-pointer ${
          isSm ? 'text-[10px]' : 'text-[10px] sm:text-xs'
        } ${language === 'by' ? 'text-stone-900' : 'text-stone-500 hover:text-stone-800'}`}
      >
        BY
      </button>
    </div>
  );
}
