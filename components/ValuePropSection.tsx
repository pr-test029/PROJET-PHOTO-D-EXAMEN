import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Primaire',
    'Notre Prix': 300,
    'Concurrents': 1000,
  },
  {
    name: 'Collège & Lycée',
    'Notre Prix': 500,
    'Concurrents': 1000,
  },
];

const ValuePropSection: React.FC = () => {
  return (
    <section className="py-8 my-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-slate-100">
        <span className="text-cyan-500">02.</span> Notre Proposition de Valeur
      </h2>
      <p className="text-center max-w-3xl mx-auto mb-10 text-slate-300 text-lg">
        Face à une concurrence chère et peu pratique, nous offrons un service sur-site qui divise les coûts par deux et simplifie radicalement le processus.
      </p>
      
      <div className="glass-panel p-6 md:p-8 rounded-2xl shadow-2xl max-w-4xl mx-auto border border-slate-700">
        <h3 className="text-xl font-bold text-center text-cyan-400 mb-8 tracking-wider">COMPARAISON DES PRIX (F CFA)</h3>
        <div className="h-[350px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" />
              <XAxis dataKey="name" stroke="#94A3B8" tick={{fill: '#E2E8F0', fontSize: 14}} tickLine={false} />
              <YAxis stroke="#94A3B8" tick={{fill: '#E2E8F0', fontSize: 12}} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1E293B', borderColor: '#06B6D4', color: '#F8FAFC' }}
                itemStyle={{ color: '#F8FAFC' }}
                cursor={{fill: 'rgba(255,255,255,0.05)'}}
              />
              <Legend wrapperStyle={{ paddingTop: '20px' }} />
              <Bar dataKey="Notre Prix" fill="#06B6D4" radius={[4, 4, 0, 0]} barSize={60} activeBar={{fill: '#22d3ee'}} />
              <Bar dataKey="Concurrents" fill="#475569" radius={[4, 4, 0, 0]} barSize={60} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default ValuePropSection;