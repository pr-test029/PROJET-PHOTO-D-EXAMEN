import React, { useState } from 'react';
import MarketSection from './components/MarketSection';
import ValuePropSection from './components/ValuePropSection';
import EconomicModelSection from './components/EconomicModelSection';
import OperationsSection from './components/OperationsSection';
import ImpactSection from './components/ImpactSection';
import RoadmapSection from './components/RoadmapSection';
import ChatBot from './components/ChatBot';
import SchoolFinder from './components/SchoolFinder';
import CreatorSection from './components/CreatorSection';
import { Camera, Home, BarChart3, Target, PieChart, Users, ArrowRight, Star, Zap, ShieldCheck, UserCircle } from 'lucide-react';

type View = 'home' | 'market' | 'solution' | 'model' | 'impact' | 'creator';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');

  const renderContent = () => {
    switch (currentView) {
      case 'market':
        return (
          <div className="space-y-8 animate-fade-in">
             <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-cyan-400">Analyse du Marché</h2>
                <p className="text-slate-400">Comprendre le besoin et localiser la demande.</p>
             </div>
             <MarketSection />
             <SchoolFinder />
          </div>
        );
      case 'solution':
         return (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-cyan-400">Notre Solution</h2>
                <p className="text-slate-400">Une offre imbattable et une logistique simplifiée.</p>
             </div>
             <ValuePropSection />
             <OperationsSection />
          </div>
         );
      case 'model':
         return (
          <div className="space-y-8 animate-fade-in">
             <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-cyan-400">Modèle Économique</h2>
                <p className="text-slate-400">Transparence des coûts et rentabilité assurée.</p>
             </div>
             <EconomicModelSection />
          </div>
         );
      case 'impact':
          return (
            <div className="space-y-8 animate-fade-in">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-cyan-400">Impact & Avenir</h2>
                <p className="text-slate-400">Vision RICHE et projection sur 3 ans.</p>
             </div>
             <ImpactSection />
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
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/20 blur-[100px] rounded-full -z-10 pointer-events-none"></div>
                
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-950/50 border border-cyan-800 text-cyan-400 text-sm font-medium mb-8 backdrop-blur-sm">
                    <Star className="w-4 h-4 fill-cyan-400" /> <span>Projet Pilote Brazzaville</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-8 leading-tight">
                    La Photo Scolaire <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Réinventée.</span>
                </h1>
                
                <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
                    <strong className="text-white font-semibold">POWERFUL REACH</strong> transforme une obligation administrative coûteuse en une opportunité sociale et économique majeure pour les écoles congolaises.
                </p>
                
                <div className="flex justify-center flex-col sm:flex-row gap-4">
                    <button 
                        onClick={() => setCurrentView('market')}
                        className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl transition-all shadow-[0_0_30px_rgba(8,145,178,0.4)] hover:shadow-[0_0_40px_rgba(8,145,178,0.6)] flex items-center justify-center gap-3 group transform hover:-translate-y-1"
                    >
                        Explorer l'Opportunité
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button 
                        onClick={() => setCurrentView('creator')}
                        className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl transition-all border border-slate-600 hover:border-cyan-500/50 flex items-center justify-center gap-3 group"
                    >
                        Contacter le Fondateur
                    </button>
                </div>
            </section>

            {/* The Core Value Cards */}
            <section className="grid md:grid-cols-3 gap-6 lg:gap-8 px-4">
                <div className="glass-panel p-8 rounded-2xl border-t-4 border-cyan-500 hover:-translate-y-2 transition-transform duration-300 hover:bg-slate-800/60">
                    <div className="bg-cyan-950/50 p-4 rounded-xl w-fit mb-6 border border-cyan-500/20">
                        <Zap className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Service Rapide</h3>
                    <p className="text-slate-400 leading-relaxed">
                        Un studio mobile qui se déplace directement dans les écoles. Prise de vue, traitement professionnel et livraison en 48h chrono.
                    </p>
                </div>
                <div className="glass-panel p-8 rounded-2xl border-t-4 border-blue-500 hover:-translate-y-2 transition-transform duration-300 hover:bg-slate-800/60">
                    <div className="bg-blue-950/50 p-4 rounded-xl w-fit mb-6 border border-blue-500/20">
                        <ShieldCheck className="w-8 h-8 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Prix Accessible</h3>
                    <p className="text-slate-400 leading-relaxed">
                        Des tarifs divisés par deux (300-500 FCFA) par rapport au marché pour soulager les familles tout en assurant une marge confortable.
                    </p>
                </div>
                <div className="glass-panel p-8 rounded-2xl border-t-4 border-purple-500 hover:-translate-y-2 transition-transform duration-300 hover:bg-slate-800/60">
                    <div className="bg-purple-950/50 p-4 rounded-xl w-fit mb-6 border border-purple-500/20">
                        <Users className="w-8 h-8 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">Impact Social</h3>
                    <p className="text-slate-400 leading-relaxed">
                        Plus qu'un simple business : une vision RICHE pour inspirer la jeunesse, créer de l'emploi local et faciliter l'accès à l'éducation.
                    </p>
                </div>
            </section>

            {/* Navigation Grid Teaser */}
            <section className="py-12 px-4">
                <div className="flex flex-col items-center mb-12">
                     <span className="text-cyan-500 font-bold tracking-widest text-sm uppercase mb-2">Plan du Projet</span>
                     <h2 className="text-3xl md:text-4xl font-bold text-center text-white">Découvrez le projet en détail</h2>
                </div>
               
                <div className="grid md:grid-cols-2 gap-6">
                    <div onClick={() => setCurrentView('market')} className="group cursor-pointer glass-panel p-8 rounded-2xl flex items-center gap-6 hover:bg-slate-800 transition-all border border-slate-700 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-900/20">
                        <div className="text-5xl lg:text-6xl font-black text-slate-800 group-hover:text-cyan-900/80 transition-colors">01</div>
                        <div>
                            <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">L'Opportunité de Marché</h3>
                            <p className="text-slate-400 text-sm mt-2 font-medium">Analyse de la demande massive et récurrente.</p>
                        </div>
                        <div className="ml-auto bg-slate-800 p-2 rounded-full group-hover:bg-cyan-500 transition-colors">
                             <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                        </div>
                    </div>

                    <div onClick={() => setCurrentView('solution')} className="group cursor-pointer glass-panel p-8 rounded-2xl flex items-center gap-6 hover:bg-slate-800 transition-all border border-slate-700 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-900/20">
                        <div className="text-5xl lg:text-6xl font-black text-slate-800 group-hover:text-cyan-900/80 transition-colors">02</div>
                        <div>
                            <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">Notre Solution</h3>
                            <p className="text-slate-400 text-sm mt-2 font-medium">Comparaison des prix et logistique optimisée.</p>
                        </div>
                        <div className="ml-auto bg-slate-800 p-2 rounded-full group-hover:bg-cyan-500 transition-colors">
                             <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                        </div>
                    </div>

                    <div onClick={() => setCurrentView('model')} className="group cursor-pointer glass-panel p-8 rounded-2xl flex items-center gap-6 hover:bg-slate-800 transition-all border border-slate-700 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-900/20">
                        <div className="text-5xl lg:text-6xl font-black text-slate-800 group-hover:text-cyan-900/80 transition-colors">03</div>
                        <div>
                            <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">Rentabilité</h3>
                            <p className="text-slate-400 text-sm mt-2 font-medium">Simulateur de bénéfices et structure des coûts.</p>
                        </div>
                        <div className="ml-auto bg-slate-800 p-2 rounded-full group-hover:bg-cyan-500 transition-colors">
                             <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                        </div>
                    </div>

                    <div onClick={() => setCurrentView('impact')} className="group cursor-pointer glass-panel p-8 rounded-2xl flex items-center gap-6 hover:bg-slate-800 transition-all border border-slate-700 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-900/20">
                        <div className="text-5xl lg:text-6xl font-black text-slate-800 group-hover:text-cyan-900/80 transition-colors">04</div>
                        <div>
                            <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">Vision & Avenir</h3>
                            <p className="text-slate-400 text-sm mt-2 font-medium">Impact social et roadmap sur 3 ans.</p>
                        </div>
                        <div className="ml-auto bg-slate-800 p-2 rounded-full group-hover:bg-cyan-500 transition-colors">
                             <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
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
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
        currentView === view 
        ? 'bg-cyan-500/20 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)]' 
        : 'text-slate-400 hover:text-cyan-300 hover:bg-slate-800'
      }`}
    >
      <Icon className="w-4 h-4" />
      <span className="hidden sm:inline">{label}</span>
      <span className="sm:hidden">{label.slice(0, 4)}..</span>
    </button>
  );

  return (
    <div className="min-h-screen font-sans selection:bg-cyan-500 selection:text-white pb-12">
      
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-slate-800 glass-panel">
        <div className="container mx-auto px-4 py-4 flex flex-col xl:flex-row justify-between items-center gap-4">
             <div 
               className="flex items-center gap-3 cursor-pointer group"
               onClick={() => setCurrentView('home')}
             >
                <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-2.5 rounded-lg text-white shadow-lg group-hover:shadow-cyan-500/50 transition-all">
                    <Camera className="w-6 h-6" />
                </div>
                <div>
                    <h1 className="text-lg md:text-xl font-black text-slate-100 uppercase tracking-wider leading-none group-hover:text-cyan-400 transition">Powerful Reach</h1>
                    <p className="text-xs text-cyan-500 font-semibold tracking-widest">PROJET PHOTOS</p>
                </div>
             </div>
             
             <nav className="flex flex-wrap justify-center gap-1 sm:gap-2 text-xs sm:text-sm font-semibold">
                 <NavItem view="home" label="Accueil" icon={Home} />
                 <NavItem view="market" label="Marché" icon={Target} />
                 <NavItem view="solution" label="Solution" icon={BarChart3} />
                 <NavItem view="model" label="Rentabilité" icon={PieChart} />
                 <NavItem view="impact" label="Impact" icon={Users} />
                 <NavItem view="creator" label="Fondateur" icon={UserCircle} />
             </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 md:px-8 py-8">
        {renderContent()}
      </main>

      {currentView !== 'home' && (
        <footer className="border-t border-slate-800 bg-slate-950/50 py-12 text-center mt-12">
            <div className="container mx-auto px-4">
                <p className="text-xl font-light text-cyan-200/80 mb-6 italic">
                "Un projet viable qui allie rentabilité économique et impact social."
                </p>
                <h2 className="text-2xl font-black tracking-[0.2em] text-slate-700 uppercase">Powerful Reach</h2>
            </div>
        </footer>
      )}

      <ChatBot />
    </div>
  );
};

export default App;