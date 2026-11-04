import React from 'react';
import { Camera, MonitorPlay, Send, ArrowRight, ArrowDown } from 'lucide-react';

const OperationsSection: React.FC = () => {
  return (
    <section className="py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-16 text-slate-900 dark:text-slate-100">
        <span className="text-cyan-600 dark:text-cyan-500">04.</span> Organisation Opérationnelle
      </h2>
      <div className="glass-panel p-8 md:p-16 rounded-2xl shadow-xl relative overflow-hidden border border-slate-200 dark:border-slate-700">
        
        {/* Decorative background glow */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-2xl bg-cyan-500/10 dark:bg-cyan-900/10 blur-3xl rounded-full -z-10"></div>

        <div className="flex flex-col md:flex-row justify-between items-center text-center space-y-16 md:space-y-0 relative z-10">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-20 right-20 h-0.5 bg-gradient-to-r from-cyan-300 via-cyan-500 to-cyan-300 dark:from-cyan-900 dark:via-cyan-500 dark:to-cyan-900 -z-10 opacity-50"></div>

          {/* Step 1 */}
          <div className="flex flex-col items-center max-w-xs group">
            <div className="bg-slate-100 text-cyan-600 dark:bg-slate-900 dark:text-cyan-400 rounded-full w-24 h-24 flex items-center justify-center mb-6 border-4 border-slate-300 dark:border-slate-700 shadow-md group-hover:border-cyan-500 group-hover:text-cyan-500 dark:group-hover:text-white transition-all duration-300">
              <Camera className="w-10 h-10" />
            </div>
            <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-3">1. Prise de Vue</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Déplacement dans l'école avec studio mobile pour une séance rapide.</p>
          </div>

          {/* Arrow Mobile */}
          <div className="md:hidden text-cyan-600 dark:text-cyan-500/50"><ArrowDown className="w-8 h-8"/></div>

          {/* Step 2 */}
          <div className="flex flex-col items-center max-w-xs group">
            <div className="bg-slate-100 text-cyan-600 dark:bg-slate-800 dark:text-cyan-400 rounded-full w-24 h-24 flex items-center justify-center mb-6 border-4 border-slate-300 dark:border-slate-600 shadow-md group-hover:border-cyan-500 group-hover:text-cyan-500 dark:group-hover:text-white transition-all duration-300">
              <MonitorPlay className="w-10 h-10" />
            </div>
            <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-3">2. Traitement (24h)</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Retouche professionnelle et impression rapide.</p>
          </div>

           {/* Arrow Mobile */}
           <div className="md:hidden text-cyan-600 dark:text-cyan-500/50"><ArrowDown className="w-8 h-8"/></div>

          {/* Step 3 */}
          <div className="flex flex-col items-center max-w-xs group">
            <div className="bg-cyan-600 text-white rounded-full w-24 h-24 flex items-center justify-center mb-6 border-4 border-cyan-700 dark:border-cyan-800 shadow-md group-hover:scale-105 group-hover:bg-cyan-500 group-hover:border-white transition-all duration-300">
              <Send className="w-10 h-10 ml-1" />
            </div>
            <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-3">3. Livraison (48h)</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Classement par élève et livraison organisée à l'établissement.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OperationsSection;