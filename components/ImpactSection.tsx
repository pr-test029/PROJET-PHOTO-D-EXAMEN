import React from 'react';
import { HeartHandshake, Clock, Lightbulb, TrendingUp, Globe } from 'lucide-react';

const ImpactSection: React.FC = () => {
  const impacts = [
    {
      icon: <HeartHandshake className="w-8 h-8 text-cyan-400" />,
      title: "Accessibilité Sociale",
      desc: "Rendre un service obligatoire abordable pour les familles modestes."
    },
    {
      icon: <Clock className="w-8 h-8 text-cyan-400" />,
      title: "Gain de Temps",
      desc: "Simplifier l'organisation et réduire le stress pour les écoles et les parents."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-cyan-400" />,
      title: "Inspiration",
      desc: "Prouver qu'on peut créer un business utile et rentable avec peu de moyens."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-cyan-400" />,
      title: "Création d'Opportunités",
      desc: "À terme, employer des jeunes pour étendre le service et l'impact."
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-400" />,
      title: "Contribution Locale",
      desc: "Devenir un partenaire fiable et attendu de la communauté éducative."
    }
  ];

  return (
    <section className="py-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-slate-100">
        <span className="text-cyan-500">05.</span> Vision RICHE : Notre Impact
      </h2>
      <p className="text-center max-w-3xl mx-auto mb-12 text-slate-400 text-lg">
        Pour <span className="font-bold text-white">POWERFUL-REACH</span>, ce projet est un outil de changement positif, aligné avec la vision d'être un <span className="text-cyan-400 italic">R</span>éalisateur <span className="text-cyan-400 italic">I</span>nspirant d'un <span className="text-cyan-400 italic">C</span>hangement <span className="text-cyan-400 italic">H</span>armonieux pour son <span className="text-cyan-400 italic">E</span>nvironnement.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {impacts.map((item, index) => (
          <div key={index} className="glass-panel p-6 rounded-xl border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all duration-300 group">
            <div className="mb-4 p-3 bg-slate-900 rounded-lg w-fit group-hover:scale-110 transition-transform">{item.icon}</div>
            <h3 className="font-bold text-lg mb-2 text-slate-100 group-hover:text-cyan-400 transition-colors">{item.title}</h3>
            <p className="text-slate-400 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImpactSection;