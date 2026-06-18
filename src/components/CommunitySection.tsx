import { Language } from '../types';
import { UI_TRANSLATIONS } from '../data/modules';
import { Github, MessageSquare, Library, Keyboard, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface CommunitySectionProps {
  language: Language;
}

export default function CommunitySection({ language }: CommunitySectionProps) {
  const t = UI_TRANSLATIONS;

  return (
    <section id="community" className="py-20 bg-bg-warm overflow-hidden border-b-3 border-stone-1000">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-fredoka text-sm font-bold text-stone-900 bg-cartoon-blue px-4 py-1.5 border-2 border-stone-900 rounded-lg shadow-[2px_2px_0px_#1A1A1A] uppercase tracking-wider font-semibold">
            {language === 'en' ? 'Democratic Collaboration' : 'Сіла адкрытага коду'}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-stone-950 mt-5 mb-4 leading-tight">
            {t.contribTitle[language]}
          </h2>
          <p className="text-sm sm:text-base text-gray-750 leading-relaxed font-sans font-medium">
            {t.contribSubtitle[language]}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-12 xl:col-span-7 space-y-8">
            
            <div className="p-6 bg-white sketch-border hover:bg-cartoon-blue transition-colors flex flex-col sm:flex-row gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center sketch-border-xs bg-cartoon-yellow text-stone-900 font-bold shadow-[2px_2px_0px_#1D1D1D]">
                <Library className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-stone-950 text-xl leading-snug">
                  {t.contribNonCoder[language]}
                </h3>
                <p className="text-sm text-gray-700 font-sans leading-relaxed mt-2.5 font-medium">
                  {t.contribNonCoderDesc[language]}
                </p>
                <button 
                  onClick={() => alert(language === 'en' ? "Welcome! Please email us or join Github to add your text chapters to the offline library." : "Сардэчна запрашаем! Вырабляйце навуковыя артыкулы з намі праз спасылку на Гітхабе.")}
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-mono text-stone-955 bg-cartoon-yellow border border-stone-900 hover:bg-cartoon-orange px-2.5 py-1 rounded transition-all font-bold cursor-pointer"
                >
                  ✍️ {language === 'en' ? 'Learn content checklist' : 'Пачаць пісаць артыкулы'} &rarr;
                </button>
              </div>
            </div>

            <div className="p-6 bg-white sketch-border hover:bg-cartoon-purple transition-colors flex flex-col sm:flex-row gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center sketch-border-xs bg-cartoon-purple text-stone-900 font-bold shadow-[2px_2px_0px_#1D1D1D]">
                <Keyboard className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-stone-950 text-xl leading-snug">
                  {t.contribDev[language]}
                </h3>
                <p className="text-sm text-gray-700 font-sans leading-relaxed mt-2.5 font-medium">
                  {t.contribDevDesc[language]}
                </p>
                <div className="mt-4">
                  <a
                    href="https://github.com/Scientia-Omnibus"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-stone-950 bg-cartoon-blue hover:bg-cartoon-orange px-2.5 py-1 border border-stone-900 rounded transition-all font-bold"
                  >
                    <Github className="h-3.5 w-3.5" />
                    <span>{language === 'en' ? 'Open GitHub Repository' : 'Партаваць сервіс на GitHub'} &rarr;</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 bg-cartoon-yellow sketch-border flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center sketch-border-xs bg-cartoon-orange text-stone-950 font-black text-lg shadow-[2px_2px_0px_#111111]">
                E
              </div>
              <div>
                <h4 className="font-display font-bold text-stone-1050 text-lg flex items-center gap-1.5 leading-snug">
                  <Sparkles className="h-4.5 w-4.5 text-amber-600 fill-amber-300" />
                  {t.upcomingTitle[language]}
                </h4>
                <p className="text-xs sm:text-sm text-stone-900 font-sans font-medium leading-relaxed mt-1.5">
                  {t.upcomingDesc[language]}
                </p>
                <span className="inline-block mt-3 bg-stone-950 text-cartoon-yellow font-mono text-[10px] uppercase font-black px-2.5 py-0.5 rounded border-2 border-stone-950">
                  {language === 'en' ? 'In Development' : 'У распрацоўцы'}
                </span>
              </div>
            </div>

          </div>

          <div className="lg:col-span-12 xl:col-span-5 flex justify-center">
            <div className="relative p-2 bg-white border-3 border-stone-900 rounded-xl shadow-[8px_8px_0px_#1A1A1A] max-w-sm lg:max-w-none">
              <div className="overflow-hidden rounded-lg bg-[#FFFCEE] border-2 border-stone-900 aspect-4/3">
                <img
                  src="/src/assets/images/community_chalk_doodle_1781807898559.jpg"
                  alt="Scientia Omnibus Worldwide Community Collaboration Sketch"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover select-none pointer-events-none hover:scale-102 transition-transform duration-700"
                />
              </div>
              
              <a
                href="https://github.com/Scientia-Omnibus"
                target="_blank"
                rel="noreferrer"
                className="absolute -bottom-4 -left-4 bg-cartoon-orange text-stone-950 font-display text-xs sm:text-sm font-bold uppercase px-4 py-2 rounded-lg border-2 border-stone-900 shadow-[3px_3px_0px_#1D1D1D] transform -rotate-1 select-none z-10 flex items-center gap-1.5 cursor-pointer hover:scale-105 transition-all"
              >
                <Github className="h-4 w-4" />
                <span>{language === 'en' ? 'JOIN US ON GITHUB!' : 'ДАЛУЧАЙЦЕСЯ ДА ГІТХАБА!'}</span>
              </a>
            </div>
          </div>

        </div>

        <div className="mt-20 py-12 px-6 sm:px-12 bg-cartoon-orange sketch-border text-stone-950 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#FFFCEE]/20 opacity-40 pointer-events-none" />
          
          <h3 className="font-display font-bold text-3xl sm:text-4xl text-stone-950 leading-tight max-w-2xl mx-auto mb-4">
            {language === 'en' 
              ? "Let's build software that treats people with respect." 
              : "Давайце разам створым софт, які паважае кожнага чалавека."
            }
          </h3>
          <p className="text-sm sm:text-base text-stone-850 font-sans max-w-lg mx-auto mb-8 leading-relaxed font-semibold">
            {language === 'en'
              ? "Join your local team, help write educational databases, optimize algorithms, or invite Scientia Omnibus systems to your school community."
              : "Далучайцеся да лакальнай суполкі, пішыце навуковыя дапаможнікі, працуйце над аптымізацыяй кода альбо раскажыце пра нас калегам і сябрам."
            }
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="https://github.com/Scientia-Omnibus"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-stone-900 text-white border-2 border-stone-900 hover:bg-stone-950 hover:shadow-[3px_3px_0px_#111111] font-mono text-sm font-bold shadow-[2px_2px_0px_#111111] transition-all"
            >
              <Github className="h-4.5 w-4.5 text-cartoon-orange" />
              <span>github.com/Scientia-Omnibus</span>
            </a>
            
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert(language === 'en' ? "Simulated Discord Community invitation! Active channel code is loaded." : "Сімуляцыя запрашэння ў Дыскорд суполку! Код спасылкі загружаны.");
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-stone-950 border-2 border-stone-900 hover:bg-gray-100 hover:shadow-[3px_3px_0px_#111111] font-display font-bold text-sm shadow-[2px_2px_0px_#111111] transition-all cursor-pointer"
            >
              <MessageSquare className="h-4.5 w-4.5 text-cartoon-orange fill-cartoon-yellow" />
              <span>{t.joinDiscord[language]}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
