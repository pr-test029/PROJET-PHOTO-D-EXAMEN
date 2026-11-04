import React from 'react';

const RoadmapSection: React.FC = () => {
  return (
    <section className="py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-16 text-slate-900 dark:text-slate-100">
        <span className="text-cyan-600 dark:text-cyan-500">06.</span> Projection d'Évolution (Roadmap)
      </h2>
      <div className="glass-panel p-8 md:p-12 rounded-2xl shadow-xl max-w-4xl mx-auto border border-slate-200 dark:border-slate-700">
        <div className="relative border-l-2 border-slate-300 dark:border-slate-700 space-y-14 pl-10 ml-4">
          
          {/* Year 1 */}
          <div className="relative group">
            <div className="absolute w-4 h-4 bg-cyan-500 rounded-full -left-[49px] top-2 shadow-[0_0_10px_rgba(6,182,212,0.8)] ring-4 ring-white dark:ring-slate-900"></div>
            <div>
              <span className="bg-cyan-100 dark:bg-cyan-500/10 text-cyan-800 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-500/20 font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider">Année 1</span>
              <h3 className="text-xl font-bold mt-3 text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">Lancement & Fiabilisation</h3>
              <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm leading-relaxed">Couvrir un maximum d'écoles cibles et construire une réputation de service impeccable.</p>
            </div>
          </div>

          {/* Year 2 */}
          <div className="relative group">
             <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[49px] top-2 shadow-[0_0_10px_rgba(59,130,246,0.8)] ring-4 ring-white dark:ring-slate-900"></div>
            <div>
              <span className="bg-blue-100 dark:bg-blue-500/10 text-blue-800 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20 font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider">Année 2</span>
              <h3 className="text-xl font-bold mt-3 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">Expansion & Diversification</h3>
              <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm leading-relaxed">Mettre en place une petite équipe pour proposer un service efficace dans tout Brazzaville.</p>
            </div>
          </div>

          {/* Year 3 */}
          <div className="relative group">
             <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-[49px] top-2 shadow-[0_0_10px_rgba(168,85,247,0.8)] ring-4 ring-white dark:ring-slate-900"></div>
            <div>
               <span className="bg-purple-100 dark:bg-purple-500/10 text-purple-800 dark:text-purple-400 border border-purple-200 dark:border-purple-500/20 font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider">Année 3</span>
              <h3 className="text-xl font-bold mt-3 text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">Structuration & Croissance</h3>
              <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm leading-relaxed">Mettre en place une plus grande équipe pour proposer un service complet à l'échelle nationale.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;