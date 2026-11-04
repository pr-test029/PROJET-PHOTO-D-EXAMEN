import React, { useState, useEffect } from 'react';
import MarketSection from './components/MarketSection';
import ValuePropSection from './components/ValuePropSection';
import EconomicModelSection from './components/EconomicModelSection';
import OperationsSection from './components/OperationsSection';
import ImpactSection from './components/ImpactSection';
import RoadmapSection from './components/RoadmapSection';
import PerformanceOverviewSection from './components/PerformanceOverviewSection';
import ChatBot from './components/ChatBot';
import SchoolFinder from './components/SchoolFinder';
import CreatorSection from './components/CreatorSection';
import { Camera, Home, BarChart3, Target, PieChart, Users, ArrowRight, Star, Zap, ShieldCheck, UserCircle, Sun, Moon } from 'lucide-react';

type View = 'home' | 'market' | 'solution' | 'model' | 'impact' | 'creator';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    try {
      return localStorage.getItem('theme') !== 'light';
    } catch {
      return true;
    }
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    const nextMode = !isDarkMode;
    setIsDarkMode(nextMode);
    try {
      if (nextMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    } catch (e) {}
  };

  const renderContent = () => {
    switch (currentView) {
      case 'market':
        return (
          <div className="space-y-8 animate-fade-in">
             <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-cyan-600 dark:text-cyan-400">Analyse du Marché</h2>
                <p className="text-slate-600 dark:text-slate-400">Comprendre le besoin et localiser la demande.</p>
             </div>
             <MarketSection />
             <SchoolFinder />
          </div>
        );
      case 'solution':
         return (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-cyan-600 dark:text-cyan-400">Notre Solution</h2>
                <p className="text-slate-600 dark:text-slate-400">Une offre imbattable et une logistique simplifiée.</p>
             </div>
             <ValuePropSection />
             <OperationsSection />
          </div>
         );
      case 'model':
         return (
          <div className="space-y-8 animate-fade-in">
             <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-cyan-600 dark:text-cyan-400">Modèle Économique</h2>
                <p className="text-slate-600 dark:text-slate-400">Transparence des coûts et rentabilité assurée.</p>
             </div>
             <EconomicModelSection />
          </div>
         );
      case 'impact':
          return (
            <div className="space-y-8 animate-fade-in">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-cyan-600 dark:text-cyan-400">Impact & Avenir</h2>
                <p className="text-slate-600 dark:text-slate-400">Vision RICHE, performance stratégique et projection sur 3 ans.</p>
             </div>
             <ImpactSection />
             <PerformanceOverviewSection />
             <RoadmapSection />
            </div>
          );
      case 'creator':
          return (
            <div className="space-y-8 animate-fade-in">
              <CreatorSection />
            </div>
          );
      case 'home':
      default:
        return (
          <div className="space-y-16 animate-fade-in">
            {/* Hero Section */}
            <section className="relative py-12 md:py-24 text-center overflow-hidden">
                {/* Background glow effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/15 dark:bg-cyan-500/20 blur-[100px] rounded-full -z-10 pointer-events-none"></div>
                
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 dark:bg-cyan-950/50 border border-cyan-300 dark:border-cyan-800 text-cyan-800 dark:text-cyan-400 text-sm font-medium mb-8 backdrop-blur-sm shadow-sm">
                    <Star className="w-4 h-4 fill-cyan-500 dark:fill-cyan-400 text-cyan-600 dark:text-cyan-400" /> 
                    <span>Projet Pilote Brazzaville</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-black text-slate-950 dark:text-white tracking-tight mb-8 leading-tight">
                    La Photo Scolaire <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-500">Réinventée.</span>
                </h1>
                
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed font-normal">
                    <strong className="text-slate-900 dark:text-white font-semibold">POWERFUL REACH</strong> transforme une obligation administrative coûteuse en une opportunité sociale et économique majeure pour les écoles congolaises.
                </p>
                
                <div className="flex justify-center flex-col sm:flex-row gap-4">
                    <button 
                        onClick={() => setCurrentView('market')}
                        className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl transition-all shadow-[0_0_30px_rgba(8,145,178,0.3)] hover:shadow-[0_0_40px_rgba(8,145,178,0.5)] flex items-center justify-center gap-3 group transform hover:-translate-y-0.5"
                    >
                        Explorer l'Opportunité
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button 
                        onClick={() => setCurrentView('creator')}
                        className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-white dark:border-slate-600 dark:hover:border-cyan-500/50 font-bold rounded-xl transition-all flex items-center justify-center gap-3 group shadow-sm"
                    >
                        Contacter le Fondateur
                    </button>
                </div>
            </section>

            {/* The Core Value Cards */}
            <section className="grid md:grid-cols-3 gap-6 lg:gap-8 px-4">
                <div className="glass-panel p-8 rounded-2xl border-t-4 border-cyan-500 hover:-translate-y-1 transition-transform duration-300">
                    <div className="bg-cyan-100 dark:bg-cyan-950/50 p-4 rounded-xl w-fit mb-6 border border-cyan-200 dark:border-cyan-500/20">
                        <Zap className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Service Rapide</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">
                        Un studio mobile qui se déplace directement dans les écoles. Prise de vue, traitement professionnel et livraison en 48h chrono.
                    </p>
                </div>
                <div className="glass-panel p-8 rounded-2xl border-t-4 border-blue-500 hover:-translate-y-1 transition-transform duration-300">
                    <div className="bg-blue-100 dark:bg-blue-950/50 p-4 rounded-xl w-fit mb-6 border border-blue-200 dark:border-blue-500/20">
                        <ShieldCheck className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Prix Accessible</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">
                        Des tarifs divisés par deux (300-500 FCFA) par rapport au marché pour soulager les familles tout en assurant une marge confortable.
                    </p>
                </div>
                <div className="glass-panel p-8 rounded-2xl border-t-4 border-purple-500 hover:-translate-y-1 transition-transform duration-300">
                    <div className="bg-purple-100 dark:bg-purple-950/50 p-4 rounded-xl w-fit mb-6 border border-purple-200 dark:border-purple-500/20">
                        <Users className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Impact Social</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">
                        Plus qu'un simple business : une vision RICHE pour inspirer la jeunesse, créer de l'emploi local et faciliter l'accès à l'éducation.
                    </p>
                </div>
            </section>

            {/* Navigation Grid Teaser */}
            <section className="py-12 px-4">
                <div className="flex flex-col items-center mb-12">
                     <span className="text-cyan-600 dark:text-cyan-500 font-bold tracking-widest text-xs uppercase mb-2">Plan du Projet</span>
                     <h2 className="text-3xl md:text-4xl font-black text-center text-slate-900 dark:text-white">Découvrez le projet en détail</h2>
                </div>
               
                <div className="grid md:grid-cols-2 gap-6">
                    <div onClick={() => setCurrentView('market')} className="group cursor-pointer glass-panel p-8 rounded-2xl flex items-center gap-6 hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-all border border-slate-200 dark:border-slate-700 hover:border-cyan-500/50 hover:shadow-lg">
                        <div className="text-5xl lg:text-6xl font-black text-slate-300 dark:text-slate-800 group-hover:text-cyan-600 dark:group-hover:text-cyan-900/80 transition-colors font-mono">01</div>
                        <div>
                            <h3 className="text-xl lg:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">L'Opportunité de Marché</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm mt-2 font-medium">Analyse de la demande massive et récurrente.</p>
                        </div>
                        <div className="ml-auto bg-slate-100 dark:bg-slate-800 p-2.5 rounded-full group-hover:bg-cyan-600 transition-colors">
                             <ArrowRight className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:text-white transition-colors" />
                        </div>
                    </div>

                    <div onClick={() => setCurrentView('solution')} className="group cursor-pointer glass-panel p-8 rounded-2xl flex items-center gap-6 hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-all border border-slate-200 dark:border-slate-700 hover:border-cyan-500/50 hover:shadow-lg">
                        <div className="text-5xl lg:text-6xl font-black text-slate-300 dark:text-slate-800 group-hover:text-cyan-600 dark:group-hover:text-cyan-900/80 transition-colors font-mono">02</div>
                        <div>
                            <h3 className="text-xl lg:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">Notre Solution</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm mt-2 font-medium">Comparaison des prix et logistique optimisée.</p>
                        </div>
                        <div className="ml-auto bg-slate-100 dark:bg-slate-800 p-2.5 rounded-full group-hover:bg-cyan-600 transition-colors">
                             <ArrowRight className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:text-white transition-colors" />
                        </div>
                    </div>

                    <div onClick={() => setCurrentView('model')} className="group cursor-pointer glass-panel p-8 rounded-2xl flex items-center gap-6 hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-all border border-slate-200 dark:border-slate-700 hover:border-cyan-500/50 hover:shadow-lg">
                        <div className="text-5xl lg:text-6xl font-black text-slate-300 dark:text-slate-800 group-hover:text-cyan-600 dark:group-hover:text-cyan-900/80 transition-colors font-mono">03</div>
                        <div>
                            <h3 className="text-xl lg:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">Rentabilité</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm mt-2 font-medium">Simulateur de bénéfices et structure des coûts.</p>
                        </div>
                        <div className="ml-auto bg-slate-100 dark:bg-slate-800 p-2.5 rounded-full group-hover:bg-cyan-600 transition-colors">
                             <ArrowRight className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:text-white transition-colors" />
                        </div>
                    </div>

                    <div onClick={() => setCurrentView('impact')} className="group cursor-pointer glass-panel p-8 rounded-2xl flex items-center gap-6 hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-all border border-slate-200 dark:border-slate-700 hover:border-cyan-500/50 hover:shadow-lg">
                        <div className="text-5xl lg:text-6xl font-black text-slate-300 dark:text-slate-800 group-hover:text-cyan-600 dark:group-hover:text-cyan-900/80 transition-colors font-mono">04</div>
                        <div>
                            <h3 className="text-xl lg:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">Vision & Avenir</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm mt-2 font-medium">Impact social, performance 3 ans et roadmap.</p>
                        </div>
                        <div className="ml-auto bg-slate-100 dark:bg-slate-800 p-2.5 rounded-full group-hover:bg-cyan-600 transition-colors">
                             <ArrowRight className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:text-white transition-colors" />
                        </div>
                    </div>
                </div>
            </section>
          </div>
        );
    }
  };

  const NavItem = ({ view, label, icon: Icon }: { view: View; label: string; icon: any }) => (
    <button 
      onClick={() => setCurrentView(view)}
      className={`flex items-center gap-2 px-3.5 py-2 rounded-xl transition-all duration-200 text-xs sm:text-sm font-semibold ${
        currentView === view 
        ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/20' 
        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-cyan-300 dark:hover:bg-slate-800'
      }`}
    >
      <Icon className="w-4 h-4" />
      <span className="hidden sm:inline">{label}</span>
      <span className="sm:hidden">{label.slice(0, 4)}..</span>
    </button>
  );

  return (
    <div className="min-h-screen font-sans selection:bg-cyan-500 selection:text-white pb-12 transition-colors duration-200">
      
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-slate-200 dark:border-slate-800 glass-panel">
        <div className="container mx-auto px-4 py-3.5 flex flex-col md:flex-row justify-between items-center gap-4">
             {/* Brand */}
             <div 
               className="flex items-center gap-3 cursor-pointer group shrink-0"
               onClick={() => setCurrentView('home')}
             >
                <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-2.5 rounded-xl text-white shadow-md group-hover:shadow-cyan-500/40 transition-all">
                    <Camera className="w-5 h-5" />
                </div>
                <div>
                    <h1 className="text-base md:text-lg font-black text-slate-900 dark:text-slate-100 uppercase tracking-wider leading-none group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition">
                      Powerful Reach
                    </h1>
                    <p className="text-[10px] text-cyan-600 dark:text-cyan-400 font-bold tracking-widest mt-0.5">PROJET PHOTOS</p>
                </div>
             </div>
             
             {/* Navigation */}
             <nav className="flex flex-wrap justify-center items-center gap-1 sm:gap-2">
                 <NavItem view="home" label="Accueil" icon={Home} />
                 <NavItem view="market" label="Marché" icon={Target} />
                 <NavItem view="solution" label="Solution" icon={BarChart3} />
                 <NavItem view="model" label="Rentabilité" icon={PieChart} />
                 <NavItem view="impact" label="Impact" icon={Users} />
                 <NavItem view="creator" label="Fondateur" icon={UserCircle} />
             </nav>

             {/* Mode Jour / Nuit Toggle Button */}
             <div className="flex items-center shrink-0">
                <button
                  onClick={toggleTheme}
                  type="button"
                  aria-label={isDarkMode ? 'Passer en mode jour' : 'Passer en mode nuit'}
                  title={isDarkMode ? 'Activer le mode jour' : 'Activer le mode nuit'}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold border transition-all duration-200 bg-white hover:bg-slate-100 text-slate-800 border-slate-300 shadow-sm dark:bg-slate-800/90 dark:hover:bg-slate-700 dark:text-cyan-300 dark:border-slate-700"
                >
                  {isDarkMode ? (
                    <>
                      <Sun className="w-4 h-4 text-amber-400" />
                      <span>Mode Jour</span>
                    </>
                  ) : (
                    <>
                      <Moon className="w-4 h-4 text-cyan-600" />
                      <span>Mode Nuit</span>
                    </>
                  )}
                </button>
             </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 md:px-8 py-8">
        {renderContent()}
      </main>

      {currentView !== 'home' && (
        <footer className="border-t border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-950/50 py-10 text-center mt-12 transition-colors">
            <div className="container mx-auto px-4">
                <p className="text-lg font-light text-cyan-700 dark:text-cyan-200/80 mb-3 italic">
                  "Un projet viable qui allie rentabilité économique et impact social."
                </p>
                <h2 className="text-xl font-black tracking-[0.2em] text-slate-400 dark:text-slate-600 uppercase">Powerful Reach</h2>
            </div>
        </footer>
      )}

      <ChatBot />
    </div>
  );
};

export default App;