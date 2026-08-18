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
        relative grid grid-cols-2 bg-ink-850 border border-ink-700 rounded-lg
        ${isSm ? 'w-[72px] h-8 p-0.5' : 'w-[88px] sm:w-[96px] h-9 p-0.5'}
      `}
      role="group"
      aria-label="Language"
    >
      <motion.div
        className="absolute top-0.5 bottom-0.5 left-0.5 rounded-md bg-phos-400 pointer-events-none"
        style={{ width: 'calc(50% - 2px)' }}
        animate={{ x: language === 'en' ? 0 : '100%' }}
        transition={{ type: 'spring', stiffness: 420, damping: 32 }}
      />
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`relative z-10 font-mono font-bold tracking-wider transition-colors cursor-pointer ${
          isSm ? 'text-[10px]' : 'text-[10px] sm:text-xs'
        } ${language === 'en' ? 'text-ink-950' : 'text-ink-400 hover:text-ink-200'}`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLanguage('by')}
        className={`relative z-10 font-mono font-bold tracking-wider transition-colors cursor-pointer ${
          isSm ? 'text-[10px]' : 'text-[10px] sm:text-xs'
        } ${language === 'by' ? 'text-ink-950' : 'text-ink-400 hover:text-ink-200'}`}
      >
        BY
      </button>
    </div>
  );
}
