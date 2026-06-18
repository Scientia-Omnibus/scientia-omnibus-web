import { useState, useMemo } from 'react';
import { Language, Module, ModuleNode } from '../types';
import { MODULES_DATABASE, UI_TRANSLATIONS } from '../data/modules';
import { 
  Terminal, Search, BookOpen, ChevronDown, ChevronRight, 
  HelpCircle, Info, X, ShieldAlert, CheckCircle, Flame
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SimulatorProps {
  language: Language;
}

export default function Simulator({ language }: SimulatorProps) {
  const t = UI_TRANSLATIONS;
  const modules = MODULES_DATABASE;

  const [searchQuery, setSearchQuery] = useState('');
  
  const [activeModuleId, setActiveModuleId] = useState<string>('linear_algebra');
  const [expandedNodes, setExpandedNodes] = useState<Record<string, boolean>>({
    'l_alg_vectors': true,
    'l_alg_vectors_ops': true,
    'surv_fire': true,
    'surv_water': true,
    'rust_why': true,
    'rust_basics': true
  });
  
  const [selectedNodeId, setSelectedNodeId] = useState<string>('l_alg_vectors_ops_add');

  const [showHelpModal, setShowHelpModal] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [historyLogs, setHistoryLogs] = useState<string[]>(['Loaded core process', 'Synchronized database. Listing offline contents...']);

  const [mobileView, setMobileView] = useState<'sidebar' | 'content'>('sidebar');

  const activeModule = useMemo(() => {
    return modules.find(m => m.id === activeModuleId) || modules[0];
  }, [activeModuleId, modules]);

  const findNodeById = (nodes: ModuleNode[], id: string): ModuleNode | null => {
    for (const node of nodes) {
      if (node.id === id) return node;
      if (node.children) {
        const found = findNodeById(node.children, id);
        if (found) return found;
      }
    }
    return null;
  };

  const activeNode = useMemo(() => {
    return findNodeById(activeModule.rootNodes, selectedNodeId) || activeModule.rootNodes[0]?.children?.[0] || activeModule.rootNodes[0];
  }, [activeModule, selectedNodeId]);

  const matchesSearch = (node: ModuleNode, query: string): boolean => {
    if (!query) return true;
    const q = query.toLowerCase();
    const titleMatch = node.title.en.toLowerCase().includes(q) || node.title.by.toLowerCase().includes(q);
    const contentMatch = node.content?.en.toLowerCase().includes(q) || node.content?.by.toLowerCase().includes(q);
    
    if (titleMatch || contentMatch) return true;
    
    if (node.children) {
      return node.children.some(child => matchesSearch(child, query));
    }
    return false;
  };

  const toggleNode = (nodeId: string) => {
    setExpandedNodes(prev => ({
      ...prev,
      [nodeId]: !prev[nodeId]
    }));
  };

  const handleSelectNode = (node: ModuleNode) => {
    if (node.content) {
      setSelectedNodeId(node.id);
      setHistoryLogs(prev => [
        ...prev.slice(-9), 
        `NAV: Selected ${node.title[language]}`
      ]);
      setMobileView('content');
    } else {
      toggleNode(node.id);
    }
  };

  const triggerF1Help = () => {
    setShowHelpModal(true);
    setHistoryLogs(prev => [...prev.slice(-9), 'CMD: Opened help (F1)']);
  };

  const triggerF2About = () => {
    setShowAboutModal(true);
    setHistoryLogs(prev => [...prev.slice(-9), 'CMD: Opened details (F2)']);
  };

  const simulateChangeDir = () => {
    alert(language === 'en' 
      ? "Terminal simulation command recognized. Initializing new local knowledge package mounting... Directory is synced." 
      : "Каманда распазнана. Падключэнне новага каталога ведаў... Сінхранізацыя завершана паспяхова!"
    );
    setHistoryLogs(prev => [...prev.slice(-9), 'FS: Mounted new custom user directory']);
  };

  const renderTreeNode = (node: ModuleNode, depth = 0) => {
    const hasChildren = node.children && node.children.length > 0;
    const isExpanded = expandedNodes[node.id];
    const isSelected = selectedNodeId === node.id;
    const satisfiesSearch = matchesSearch(node, searchQuery);

    if (!satisfiesSearch) return null;

    return (
      <div key={node.id} className="select-none">
        <div 
          onClick={() => handleSelectNode(node)}
          className={`
            flex items-center py-1 px-2 rounded-md font-mono text-xs cursor-pointer tracking-wide
            ${isSelected 
              ? 'bg-[#3e345c] text-orange-300 font-bold border-l-2 border-orange-400' 
              : 'text-stone-300 hover:bg-stone-800/50 hover:text-white'
            }
          `}
          style={{ paddingLeft: `${Math.max(8, depth * 14)}px` }}
        >
          {hasChildren ? (
            <span className="mr-1 text-stone-500">
              {isExpanded ? <ChevronDown className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
            </span>
          ) : (
            <span className="w-3.5 h-3 mr-1 inline-block border-l border-b border-stone-600/60 rounded-bl" />
          )}
          <span className="truncate">{node.title[language]}</span>
        </div>

        {hasChildren && isExpanded && (
          <div className="mt-0.5">
            {node.children?.map(child => renderTreeNode(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  const formatArticleContent = (text: string) => {
    if (!text) return null;

    const parts = text.split(/(```[\s\S]*?```)/g);

    return parts.map((part, index) => {
      if (part.startsWith('```')) {
        const lines = part.replace(/```[a-z]*/, '').replace(/```$/, '').trim().split('\n');
        return (
          <div key={index} className="my-4 bg-[#110e19] border border-[#2b253d] rounded-lg p-4 font-mono text-[11px] sm:text-xs text-stone-200 overflow-x-auto shadow-inner leading-relaxed">
            {lines.map((line, lidx) => {
              const isComment = line.trim().startsWith('//') || line.trim().startsWith('/*') || line.trim().startsWith('*');
              const containsKeyword = line.includes('let ') || line.includes('fn ') || line.includes('mut ') || line.includes('println!') || line.includes('if ');
              
              if (isComment) {
                return <div key={lidx} className="text-stone-500">{line}</div>;
              }
              if (containsKeyword) {
                let styledLine = line
                  .replace(/(let\s+mut|let|mut|fn|main)/g, '<span class="text-orange-400 font-semibold">$1</span>')
                  .replace(/(println!)/g, '<span class="text-emerald-400">$1</span>')
                  .replace(/(".*?")/g, '<span class="text-amber-300">$1</span>')
                  .replace(/(\d+)/g, '<span class="text-cyan-400">$1</span>');
                return <div key={lidx} dangerouslySetInnerHTML={{ __html: styledLine }} />;
              }
              return <div key={lidx}>{line}</div>;
            })}
          </div>
        );
      } else {
        const subParts = part.split(/(`[^`]+`)/g);
        return (
          <p key={index} className="text-xs sm:text-sm text-stone-300 font-sans leading-relaxed my-3.5">
            {subParts.map((sub, sidx) => {
              if (sub.startsWith('`') && sub.endsWith('`')) {
                return (
                  <code key={sidx} className="bg-[#241f35] px-1.5 py-0.5 rounded font-mono text-[11px] sm:text-xs text-orange-300 border border-[#3e345c] mx-0.5">
                    {sub.slice(1, -1)}
                  </code>
                );
              }
              const boldParts = sub.split(/(\*\*[^*]+\*\*)/g);
              return boldParts.map((bPart, bIdx) => {
                if (bPart.startsWith('**') && bPart.endsWith('**')) {
                  return <strong key={bIdx} className="text-white font-semibold">{bPart.slice(2, -2)}</strong>;
                }
                return bPart;
              });
            })}
          </p>
        );
      }
    });
  };

  return (
    <section id="simulator" className="py-20 bg-[#FFFCEE] border-b-3 border-stone-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="font-fredoka text-sm font-bold text-stone-900 bg-cartoon-yellow px-4 py-1.5 border-2 border-stone-900 rounded-lg shadow-[2px_2px_0px_#1A1A1A] uppercase tracking-wider">
            {language === 'en' ? 'Live Interactive App' : 'Рабочая сімуляцыя'}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-stone-950 mt-5 mb-4 leading-tight">
            {t.simulateTitle[language]}
          </h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-sans font-medium">
            {t.simulateSubtitle[language]}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {modules.map(mod => {
            const isActive = activeModuleId === mod.id;
            return (
              <button
                key={mod.id}
                onClick={() => {
                  setActiveModuleId(mod.id);
                  const firstLeafId = mod.rootNodes[0]?.children?.[0]?.id || mod.rootNodes[0]?.id;
                  if (firstLeafId) {
                    setSelectedNodeId(firstLeafId);
                  }
                  setHistoryLogs(prev => [
                    ...prev.slice(-9),
                    `FS: Mounted offline module [${mod.title[language]}]`
                  ]);
                }}
                className={`
                  flex items-start gap-4 p-5 rounded-xl text-left border-3 transition-all duration-200 cursor-pointer
                  ${isActive 
                    ? 'bg-[#1e1b29] border-stone-900 text-white shadow-[6px_6px_0px_#1A1A1A]' 
                    : 'bg-white border-stone-900 hover:bg-cartoon-orange text-stone-900 shadow-[4px_4px_0px_#1A1A1A]'
                  }
                `}
              >
                <div className={`
                  flex h-10 w-10 shrink-0 items-center justify-center border-2 border-stone-900 rounded-lg font-mono text-sm font-bold
                  ${isActive ? 'bg-cartoon-green text-stone-900 shadow-[1px_1px_0px_#1D1D1D]' : 'bg-stone-100 text-stone-900'}
                `}>
                  {mod.icon === 'Sigma' ? '∑' : mod.icon === 'Compass' ? '🧭' : '🛠️'}
                </div>
                <div>
                  <h3 className="font-display font-bold text-base tracking-wide text-stone-900" style={{ color: isActive ? '#BAE6FD' : '#1A1A1A' }}>
                    {mod.title[language]}
                  </h3>
                  <p className={`text-xs mt-1.5 leading-relaxed ${isActive ? 'text-stone-300' : 'text-stone-600 font-medium'}`}>
                    {mod.description[language]}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        <div className="relative mx-auto max-w-5xl rounded-xl overflow-hidden border-3 border-stone-900 bg-[#1e1b29] text-stone-100 shadow-[8px_8px_0px_#1A1A1A] mb-12">
          
          <div className="flex items-center justify-between px-4 py-3 bg-[#15121e] border-b-2 border-stone-900 font-mono text-xs text-stone-400">
            <div className="flex items-center space-x-2">
              <span className="inline-block h-3.5 w-3.5 rounded-full border border-stone-900 bg-red-400" />
              <span className="inline-block h-3.5 w-3.5 rounded-full border border-stone-900 bg-yellow-400" />
              <span className="inline-block h-3.5 w-3.5 rounded-full border border-stone-900 bg-green-400" />
            </div>
            
            <div className="flex items-center gap-2 bg-[#1e1b29] px-4 py-1.5 rounded-t-md text-white text-xs border-t-2 border-x-2 border-stone-900 select-none -mb-[3.5px]">
              <Terminal className="h-3.5 w-3.5 text-orange-400" />
              <span>{t.terminalTabTitle[language]}</span>
            </div>

            <div className="font-bold text-[10px] sm:text-xs text-orange-400 tracking-wider">
              {language === 'en' ? 'OFFLINE CLIENT' : 'АФЛАЙН КЛІЕНТ'}
            </div>
          </div>

          <div className="flex items-center gap-3 bg-[#13101b] border-b-2 border-stone-900 px-4 py-2.5 font-mono text-xs">
            <Search className="h-4 w-4 text-stone-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.terminalSearchPlaceholder[language]}
              className="bg-transparent text-stone-200 outline-none w-full border-none p-0 focus:ring-0 placeholder-stone-600 focus:placeholder-stone-500"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="text-stone-500 hover:text-white">
                <X className="h-3 w-3" />
              </button>
            )}
          </div>

          <div className="flex md:hidden border-b border-stone-800 text-xs font-mono select-none">
            <button
              onClick={() => setMobileView('sidebar')}
              className={`flex-1 py-3 text-center border-r border-stone-800 ${mobileView === 'sidebar' ? 'bg-[#312a45] text-white font-bold' : 'bg-[#15121e] text-stone-500'}`}
            >
              📊 {language === 'en' ? 'Content Tree' : 'Змест модуля'}
            </button>
            <button
              onClick={() => setMobileView('content')}
              className={`flex-1 py-3 text-center ${mobileView === 'content' ? 'bg-[#312a45] text-white font-bold' : 'bg-[#15121e] text-stone-500'}`}
            >
              📖 {language === 'en' ? 'Article Viewer' : 'Чытанне тэксту'}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 min-h-[460px] max-h-[600px] overflow-hidden">
            
            <div className={`
              ${mobileView === 'sidebar' ? 'block' : 'hidden md:block'}
              col-span-12 md:col-span-4 bg-[#15121e] border-r-2 border-stone-900 p-4 overflow-y-auto flex flex-col justify-between
            `}>
              
              <div className="mb-4">
                <div className="flex gap-2 text-[10px] font-mono border-b border-stone-800/80 pb-2 mb-3">
                  <span className="text-orange-400 font-bold border-b border-orange-400 pb-2 -mb-2.5">
                    {t.terminalMainTabContents[language]}
                  </span>
                  <span className="text-stone-500 hover:text-stone-300 cursor-pointer">{t.terminalMainTabLocal[language]}</span>
                  <span className="text-stone-500 hover:text-stone-300 cursor-pointer">{t.terminalMainTabBookmarks[language]}</span>
                  <span className="text-stone-500 hover:text-stone-300 cursor-pointer">{t.terminalMainTabHistory[language]}</span>
                </div>

                <div className="space-y-1 mt-2">
                  <div className="flex items-center gap-1.5 text-[10px] font-semibold text-stone-500 uppercase tracking-widest px-2 mb-2">
                    📂 {activeModule.title[language]}
                  </div>
                  {activeModule.rootNodes.map(node => renderTreeNode(node))}
                </div>
              </div>

              <div className="hidden md:block mt-6 border-t border-stone-800/60 pt-3">
                <div className="text-[9px] font-mono text-stone-600 uppercase tracking-wider mb-1.5">
                  📚 {language === 'en' ? 'System Logs Feed' : 'Лакальныя Логі Кліента'}
                </div>
                <div className="h-16 overflow-y-auto space-y-1 pr-1 font-mono text-[9px] text-stone-500">
                  {historyLogs.map((log, idx) => (
                    <div key={idx} className="truncate">
                      <span className="text-orange-400/80">&gt;</span> {log}
                    </div>
                  ))}
                </div>
              </div>

            </div>

            <div className={`
              ${mobileView === 'content' ? 'block' : 'hidden md:block'}
              col-span-12 md:col-span-8 bg-[#1e1b29] p-5 sm:p-7 overflow-y-auto flex flex-col justify-between
            `}>
              
              <div>
                <div className="flex items-center gap-2 border-b border-[#2b253d] pb-3 mb-5 text-[11px] font-mono text-stone-500">
                  <span>ROOT</span>
                  <span>/</span>
                  <span className="text-stone-400 font-medium">{activeModule.title[language]}</span>
                  <span>/</span>
                  <span className="text-orange-300 font-bold">{activeNode?.title[language]}</span>
                </div>

                <h3 className="text-2xl font-bold font-sans tracking-tight text-white mb-4">
                  {activeNode?.title[language]}
                </h3>

                <div className="text-stone-300">
                  {activeNode?.content 
                    ? formatArticleContent(activeNode.content[language]) 
                    : (
                      <div className="flex flex-col items-center justify-center py-10 text-center">
                        <BookOpen className="h-10 w-10 text-stone-600 mb-3 animate-bounce" />
                        <p className="font-mono text-xs text-stone-500">
                          {language === 'en' 
                            ? "Select a topic in the directory to explore offline." 
                            : "Выберыце падтэму ў левым меню, каб прачытаць яе цалкам па-за сеткай."
                          }
                        </p>
                      </div>
                    )
                  }
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#2b253d] flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] font-mono text-stone-600">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="h-3.5 w-3.5 text-lime-500" />
                  <span>{language === 'en' ? 'Checksum safe' : 'Кантрольная сума супадае'} (SHA-256)</span>
                </div>
                <div>
                  {language === 'en' ? 'Package: ' : 'Пакет: '} 
                  <span className="text-stone-400 font-bold uppercase">{activeModule.id}</span>
                </div>
              </div>

            </div>

          </div>

          <div className="flex flex-wrap items-center bg-[#15121e] border-t-2 border-stone-900 px-4 py-2 font-mono text-[10px] md:text-xs text-stone-400 select-none gap-y-1 gap-x-4">
            <button 
              onClick={triggerF1Help}
              className="px-2.5 py-1 rounded bg-[#2b253d] border border-stone-800 text-stone-200 hover:bg-cartoon-blue hover:text-stone-900 hover:border-stone-900 transition-all cursor-pointer font-bold"
            >
              {t.terminalFooterHelp[language]}
            </button>
            <button 
              onClick={triggerF2About}
              className="px-2.5 py-1 rounded bg-[#2b253d] border border-stone-800 text-stone-200 hover:bg-cartoon-green hover:text-stone-900 hover:border-stone-900 transition-all cursor-pointer font-bold"
            >
              {t.terminalFooterAbout[language]}
            </button>
            <button 
              onClick={() => alert(language === 'en' ? "Nav mode is active. Use mouse, tab triggers, or your up/down arrow buttons." : "Навігацыя актыўная. Выкарыстоўвайце мышку або стрэлкі на старонцы.")}
              className="px-2.5 py-1 rounded bg-[#2b253d] border border-stone-800 text-stone-200 hover:bg-cartoon-purple hover:text-stone-900 hover:border-stone-900 transition-all cursor-pointer font-bold"
            >
              {t.terminalFooterNav[language]}
            </button>
            <button 
              onClick={simulateChangeDir}
              className="px-2.5 py-1 rounded bg-[#2b253d] border border-stone-800 text-stone-200 hover:bg-cartoon-orange hover:text-stone-900 hover:border-stone-900 transition-all cursor-pointer font-bold ml-auto"
            >
              {t.terminalFooterChdir[language]}
            </button>
          </div>

        </div>

        <AnimatePresence>
          {showHelpModal && (
            <motion.div 
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div 
                className="w-full max-w-md bg-[#1e1b29] border border-[#3e345c] rounded-2xl p-6 text-stone-100 font-mono text-xs shadow-2xl relative"
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
              >
                <button 
                  onClick={() => setShowHelpModal(false)}
                  className="absolute top-4 right-4 text-stone-500 hover:text-white transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>

                <h3 className="text-sm font-bold text-orange-400 border-b border-stone-800 pb-2.5 mb-4 uppercase tracking-wider flex items-center gap-1.5">
                  <HelpCircle className="h-4.5 w-4.5" />
                  <span>Interactive Terminal Help</span>
                </h3>

                <div className="space-y-3.5 leading-relaxed">
                  <p>
                    {language === 'en' 
                      ? "Welcome to the simulation client window! Here is how to navigate:" 
                      : "Сардэчна запрашаем у дапаможнік тэрмінала. Навігацыя:"
                    }
                  </p>
                  
                  <div className="bg-[#15121e] border border-stone-800 rounded-lg p-3 space-y-2">
                    <div>
                      <strong className="text-emerald-400">Mouse Clicking:</strong>
                      <p className="text-stone-400 text-[11px] mt-0.5">Click chapters in the left tree menu to fold/unfold chapters, and click individual subchapters to read knowledge documents.</p>
                    </div>
                    <div>
                      <strong className="text-emerald-400">Search Command:</strong>
                      <p className="text-stone-400 text-[11px] mt-0.5">Focus the top bar input and type queries (e.g. "vectors" or "purification") to dynamically screen the files tree.</p>
                    </div>
                    <div>
                      <strong className="text-emerald-400">Module Switch cards:</strong>
                      <p className="text-stone-400 text-[11px] mt-0.5">Click on the mathematics, survival, or programming cards above the terminal to load clean static books inside your terminal.</p>
                    </div>
                  </div>

                  <p className="text-stone-400 text-[11px]">
                    {language === 'en'
                      ? "Scientia Core requires no complex window managers and renders entirely as text, achieving high latency savings on old CPUs."
                      : "Scientia Core не выкарыстоўвае знешні графічны сервер, адмалёўваючы кожны байт наўпрост, што дае звышвысокую хуткасць."
                    }
                  </p>
                </div>

                <div className="mt-6 flex justify-end">
                  <button 
                    onClick={() => setShowHelpModal(false)}
                    className="px-4 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 font-sans font-bold text-xs text-white shadow"
                  >
                    {language === 'en' ? 'Close Help' : 'Зачыніць'}
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showAboutModal && (
            <motion.div 
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div 
                className="w-full max-w-lg bg-[#1e1b29] border border-[#3e345c] rounded-2xl p-6 text-stone-100 font-mono text-xs shadow-2xl relative"
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
              >
                <button 
                  onClick={() => setShowAboutModal(false)}
                  className="absolute top-4 right-4 text-stone-500 hover:text-white transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>

                <h3 className="text-sm font-bold text-orange-400 border-b border-stone-800 pb-2.5 mb-4 uppercase tracking-wider flex items-center gap-1.5">
                  <Info className="h-4.5 w-4.5" />
                  <span>About Scientia Core Arch</span>
                </h3>

                <div className="space-y-4- leading-relaxed">
                  <p className="text-stone-300 font-sans text-sm mb-3">
                    {t.aboutScientiaCore[language]}
                  </p>
                  
                  <div className="bg-[#15121e] border border-stone-800 rounded-lg p-3.5 space-y-3 font-mono text-[11px] sm:text-xs">
                    <div className="flex items-start gap-2">
                      <div className="text-orange-400 italic">Core binary:</div>
                      <div className="text-stone-300">&lt; 3.2 Megabytes (Built on Rust 1.80)</div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="text-orange-400 italic">No installation:</div>
                      <div className="text-stone-300">Just download the package of files. Config loads from standard local folder.</div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="text-orange-400 italic">Render loop:</div>
                      <div className="text-stone-300">Cross-platform crossterm crate, utilizing pure raw ANSI escapes. Zero OpenGL/Vulkan overhead.</div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="text-orange-400 italic">Power save:</div>
                      <div className="text-stone-300">Sleeps when idle. Uses 0% cpu during document reading. Ideal for outdoor battery life.</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex justify-end">
                  <button 
                    onClick={() => setShowAboutModal(false)}
                    className="px-4 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 font-sans font-bold text-xs text-white shadow"
                  >
                    {language === 'en' ? 'Close Specifications' : 'Зачыніць'}
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
