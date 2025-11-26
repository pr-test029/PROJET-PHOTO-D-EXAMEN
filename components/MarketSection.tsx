import React from 'react';
import { Users, School, Briefcase } from 'lucide-react';

const MarketSection: React.FC = () => {
  return (
    <section className="py-6">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-slate-100 flex items-center justify-center gap-3">
        <span className="text-cyan-500">01.</span> L'Opportunité de Marché
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Big Stat Card */}
        <div className="glass-panel border-l-4 border-cyan-500 p-8 rounded-xl shadow-2xl transform transition hover:scale-105 duration-300">
          <p className="text-lg text-cyan-400 font-semibold tracking-wide">Chaque année à Brazzaville</p>
          <div className="flex justify-center items-baseline my-6">
             <span className="text-6xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 drop-shadow-sm">Milliers</span>
          </div>
          <p className="text-lg text-slate-300 font-medium">d'élèves ont un besoin <span className="text-cyan-400 font-bold">obligatoire</span> de photos d'identité.</p>
        </div>

        {/* Details */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white">Un marché garanti et récurrent</h3>
          <p className="text-slate-300 leading-relaxed text-lg">
            Le besoin de photos d'examen est annuel, créant une demande constante et prévisible. 
            La période de forte demande, de novembre à décembre, permet de concentrer les efforts pour un impact maximal.
          </p>
          
          <div className="glass-panel p-6 rounded-xl shadow-lg border-t border-slate-700">
            <h4 className="font-bold text-lg text-cyan-400 mb-4 flex items-center gap-2">
                <Users className="w-5 h-5" /> Clientèle Cible :
            </h4>
            <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-200">
                    <div className="bg-cyan-900/50 p-2 rounded-lg"><School className="w-5 h-5 text-cyan-400" /></div>
                    <span>Écoles primaires, collèges et lycées</span>
                </li>
                <li className="flex items-center gap-3 text-slate-200">
                    <div className="bg-cyan-900/50 p-2 rounded-lg"><Briefcase className="w-5 h-5 text-cyan-400" /></div>
                    <span>Directeurs d'établissement et enseignants</span>
                </li>
                 <li className="flex items-center gap-3 text-slate-200">
                    <div className="bg-cyan-900/50 p-2 rounded-lg"><Users className="w-5 h-5 text-cyan-400" /></div>
                    <span>Associations de parents d'élèves</span>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketSection;