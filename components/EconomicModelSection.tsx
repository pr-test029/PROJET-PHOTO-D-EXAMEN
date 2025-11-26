import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const pieData = [
  { name: 'Bénéfice Net (200F)', value: 200 },
  { name: 'Coût de Revient (300F)', value: 300 },
];

const COLORS = ['#06B6D4', '#334155']; // Cyan 500, Slate 700

const EconomicModelSection: React.FC = () => {
  const [studentCount, setStudentCount] = useState<number>(1000);
  const averageProfit = 175;
  const totalProfit = studentCount * averageProfit;

  return (
    <section className="py-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-slate-100">
        <span className="text-cyan-500">03.</span> Un Modèle Économique Solide
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Breakdown Chart */}
        <div className="lg:col-span-2 glass-panel p-6 rounded-xl shadow-lg border-t-4 border-cyan-500">
          <h3 className="text-xl font-bold text-center text-white mb-2">Répartition du Prix</h3>
          <p className="text-center text-sm text-slate-400 mb-4">(Exemple: Collège/Lycée - 500F)</p>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#1E293B', borderColor: '#475569', color: '#F8FAFC' }} />
                <Legend verticalAlign="bottom" height={36} iconType="circle"/>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Calculator */}
        <div className="lg:col-span-3 glass-panel p-8 rounded-xl shadow-lg border border-slate-700 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
          
          <h3 className="text-xl font-bold text-cyan-400 mb-4">Simulateur de Rentabilité</h3>
          <p className="mb-8 text-slate-300">
            Ajustez le nombre d'élèves pour estimer les gains potentiels sur une période.
            <br/><span className="text-sm italic text-slate-500">Objectif initial : 1000 élèves.</span>
          </p>

          <div className="mb-10">
            <div className="flex justify-between items-center mb-4">
                <label htmlFor="student-slider" className="font-semibold text-slate-200">Nombre d'élèves</label>
                <span className="text-2xl font-bold text-cyan-400 font-mono">{studentCount}</span>
            </div>
            <input
              id="student-slider"
              type="range"
              min="100"
              max="10000"
              step="50"
              value={studentCount}
              onChange={(e) => setStudentCount(Number(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500 hover:accent-cyan-400"
            />
          </div>

          <div className="text-center bg-slate-800/50 p-8 rounded-xl border border-cyan-900/50 backdrop-blur-sm">
            <p className="text-sm text-cyan-500 font-bold uppercase tracking-widest mb-2">Bénéfice Net Estimé</p>
            <p className="text-5xl md:text-6xl font-black text-white my-4 tracking-tighter drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]">
              {totalProfit.toLocaleString('fr-FR')} <span className="text-2xl text-slate-500">F CFA</span>
            </p>
            <p className="text-xs text-slate-500 font-mono">
              (Marge moyenne pondérée ~ 175F / élève)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EconomicModelSection;