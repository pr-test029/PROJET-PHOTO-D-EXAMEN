import React, { useState } from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  BarChart,
  AreaChart,
  Bar,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';
import { TrendingUp, Users, DollarSign, PiggyBank, ArrowUpRight, BarChart2, CheckCircle2 } from 'lucide-react';

type Scenario = 'conservative' | 'realistic' | 'ambitious';
type MetricView = 'combined' | 'financial' | 'social';

interface YearData {
  year: string;
  label: string;
  phase: string;
  schools: number;
  students: number;
  revenue: number;
  costs: number;
  profit: number;
  familySavings: number;
}

const scenarioData: Record<Scenario, YearData[]> = {
  conservative: [
    {
      year: 'Année 1',
      label: 'Pilote',
      phase: 'Lancement local',
      schools: 6,
      students: 1000,
      revenue: 450000,
      costs: 275000,
      profit: 175000,
      familySavings: 550000,
    },
    {
      year: 'Année 2',
      label: 'Expansion',
      phase: 'Brazzaville Nord/Sud',
      schools: 18,
      students: 3000,
      revenue: 1350000,
      costs: 795000,
      profit: 555000,
      familySavings: 1650000,
    },
    {
      year: 'Année 3',
      label: 'Croissance',
      phase: 'Grand Brazzaville',
      schools: 42,
      students: 7000,
      revenue: 3150000,
      costs: 1750000,
      profit: 1400000,
      familySavings: 3850000,
    },
  ],
  realistic: [
    {
      year: 'Année 1',
      label: 'Pilote',
      phase: 'Lancement & Fiabilisation',
      schools: 9,
      students: 1500,
      revenue: 675000,
      costs: 412500,
      profit: 262500,
      familySavings: 825000,
    },
    {
      year: 'Année 2',
      label: 'Expansion',
      phase: 'Couverture Brazzaville',
      schools: 30,
      students: 5000,
      revenue: 2250000,
      costs: 1325000,
      profit: 925000,
      familySavings: 2750000,
    },
    {
      year: 'Année 3',
      label: 'National',
      phase: 'Déploiement National',
      schools: 70,
      students: 12000,
      revenue: 5400000,
      costs: 3000000,
      profit: 2400000,
      familySavings: 6600000,
    },
  ],
  ambitious: [
    {
      year: 'Année 1',
      label: 'Pilote',
      phase: 'Adoption Rapide',
      schools: 15,
      students: 2500,
      revenue: 1125000,
      costs: 675000,
      profit: 450000,
      familySavings: 1375000,
    },
    {
      year: 'Année 2',
      label: 'Expansion',
      phase: 'Brazzaville + Pointe-Noire',
      schools: 48,
      students: 8000,
      revenue: 3600000,
      costs: 2040000,
      profit: 1560000,
      familySavings: 4400000,
    },
    {
      year: 'Année 3',
      label: 'National',
      phase: 'Réseau Éducatif Global',
      schools: 115,
      students: 20000,
      revenue: 9000000,
      costs: 4800000,
      profit: 4200000,
      familySavings: 11000000,
    },
  ],
};

const formatFCFA = (val: number): string => {
  return val.toLocaleString('fr-FR') + ' F';
};

const CustomTooltip: React.FC<any> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-900/95 dark:bg-slate-900/95 text-white p-3.5 rounded-xl border border-slate-700 shadow-xl backdrop-blur-md text-xs space-y-1.5 min-w-[200px]">
        <p className="font-bold text-cyan-400 text-sm border-b border-slate-700/80 pb-1 mb-2">
          {label}
        </p>
        {payload.map((entry: any, index: number) => {
          const isStudent = entry.dataKey === 'students';
          const formattedValue = isStudent
            ? `${entry.value.toLocaleString('fr-FR')} élèves`
            : formatFCFA(entry.value);

          return (
            <div key={`item-${index}`} className="flex justify-between items-center gap-4">
              <span className="flex items-center gap-1.5 text-slate-300">
                <span
                  className="w-2.5 h-2.5 rounded-full inline-block"
                  style={{ backgroundColor: entry.color || entry.fill || entry.stroke }}
                />
                {entry.name}:
              </span>
              <span className="font-mono font-semibold text-white tabular-nums">
                {formattedValue}
              </span>
            </div>
          );
        })}
      </div>
    );
  }
  return null;
};

const PerformanceOverviewSection: React.FC = () => {
  const [scenario, setScenario] = useState<Scenario>('realistic');
  const [metricView, setMetricView] = useState<MetricView>('combined');

  const data = scenarioData[scenario];

  // Aggregates
  const totalStudents = data.reduce((acc, curr) => acc + curr.students, 0);
  const totalRevenue = data.reduce((acc, curr) => acc + curr.revenue, 0);
  const totalProfit = data.reduce((acc, curr) => acc + curr.profit, 0);
  const totalFamilySavings = data.reduce((acc, curr) => acc + curr.familySavings, 0);
  const growthMultiplier = (data[2].students / data[0].students).toFixed(1);

  return (
    <section className="py-10 space-y-8 animate-fade-in">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 dark:bg-cyan-950/60 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
          <TrendingUp className="w-3.5 h-3.5" /> Performance Overview
        </div>
        <h2 className="text-2xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Projection d'Impact & Croissance sur 3 Ans
        </h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">
          Modélisation quantitative de l'expansion du projet Powerful Reach : volume d'élèves accompagnés,
          recettes générées, viabilité financière et économies réelles reversées aux ménages.
        </p>
      </div>

      {/* Scenario & View Control Toolbar */}
      <div className="glass-panel p-4 md:p-6 rounded-2xl flex flex-col lg:flex-row lg:items-center justify-between gap-4 border border-slate-200 dark:border-slate-800">
        {/* Scenarios */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 whitespace-nowrap">
            Scénario :
          </span>
          <div className="inline-flex p-1 bg-slate-100 dark:bg-slate-900/80 rounded-xl border border-slate-200 dark:border-slate-800">
            <button
              onClick={() => setScenario('conservative')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                scenario === 'conservative'
                  ? 'bg-white dark:bg-cyan-600 text-cyan-700 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Prudent (1k → 7k)
            </button>
            <button
              onClick={() => setScenario('realistic')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                scenario === 'realistic'
                  ? 'bg-white dark:bg-cyan-600 text-cyan-700 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Réaliste (1.5k → 12k)
            </button>
            <button
              onClick={() => setScenario('ambitious')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                scenario === 'ambitious'
                  ? 'bg-white dark:bg-cyan-600 text-cyan-700 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Ambitieux (2.5k → 20k)
            </button>
          </div>
        </div>

        {/* View Mode Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 whitespace-nowrap">
            Visualisation :
          </span>
          <div className="inline-flex p-1 bg-slate-100 dark:bg-slate-900/80 rounded-xl border border-slate-200 dark:border-slate-800">
            <button
              onClick={() => setMetricView('combined')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                metricView === 'combined'
                  ? 'bg-cyan-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Vue Combinée
            </button>
            <button
              onClick={() => setMetricView('financial')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                metricView === 'financial'
                  ? 'bg-cyan-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Financier (CA / Marge)
            </button>
            <button
              onClick={() => setMetricView('social')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                metricView === 'social'
                  ? 'bg-cyan-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Économies Familles
            </button>
          </div>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Metric 1 */}
        <div className="glass-panel p-5 rounded-2xl border-t-4 border-cyan-500 hover:translate-y-[-2px] transition-transform duration-200">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Élèves Accompagnés
            </span>
            <div className="p-2 rounded-lg bg-cyan-100 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white font-mono tabular-nums">
            {totalStudents.toLocaleString('fr-FR')}
          </div>
          <div className="mt-2 text-xs text-cyan-600 dark:text-cyan-400 font-medium flex items-center gap-1">
            <ArrowUpRight className="w-3.5 h-3.5" />
            <span>Croissance x{growthMultiplier} sur 3 ans</span>
          </div>
        </div>

        {/* Metric 2 */}
        <div className="glass-panel p-5 rounded-2xl border-t-4 border-blue-500 hover:translate-y-[-2px] transition-transform duration-200">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Chiffre d'Affaires Cumulé
            </span>
            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
              <DollarSign className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white font-mono tabular-nums">
            {totalRevenue.toLocaleString('fr-FR')}{' '}
            <span className="text-sm font-normal text-slate-500">FCFA</span>
          </div>
          <div className="mt-2 text-xs text-blue-600 dark:text-blue-400 font-medium flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Tarif moyen 450 FCFA</span>
          </div>
        </div>

        {/* Metric 3 */}
        <div className="glass-panel p-5 rounded-2xl border-t-4 border-emerald-500 hover:translate-y-[-2px] transition-transform duration-200">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Bénéfice Net Projeté
            </span>
            <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400">
              <BarChart2 className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white font-mono tabular-nums">
            {totalProfit.toLocaleString('fr-FR')}{' '}
            <span className="text-sm font-normal text-slate-500">FCFA</span>
          </div>
          <div className="mt-2 text-xs text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1">
            <ArrowUpRight className="w-3.5 h-3.5" />
            <span>Marge nette ~38% à 44%</span>
          </div>
        </div>

        {/* Metric 4 */}
        <div className="glass-panel p-5 rounded-2xl border-t-4 border-amber-500 hover:translate-y-[-2px] transition-transform duration-200">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Économies Familles
            </span>
            <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400">
              <PiggyBank className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white font-mono tabular-nums">
            {totalFamilySavings.toLocaleString('fr-FR')}{' '}
            <span className="text-sm font-normal text-slate-500">FCFA</span>
          </div>
          <div className="mt-2 text-xs text-amber-600 dark:text-amber-400 font-medium flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>50% moins cher que le marché</span>
          </div>
        </div>
      </div>

      {/* Main Chart Card */}
      <div className="glass-panel p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white">
              {metricView === 'combined' && "Croissance Conjointe : Élèves & Chiffre d'Affaires"}
              {metricView === 'financial' && "Ventilation Financière : Chiffre d'Affaires, Coûts & Bénéfice"}
              {metricView === 'social' && "Impact Social Direct : Pouvoir d'Achat Préservé pour les Familles"}
            </h3>
            <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mt-1">
              {metricView === 'combined' && "Double lecture : Barres (élèves atteints) et Lignes (finances en FCFA)."}
              {metricView === 'financial' && "Comparaison annuelle des entrées, charges de fournitures/logistique et résultat net."}
              {metricView === 'social' && "Économies cumulées générées par le service photo sur-site à moitié prix."}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs px-2.5 py-1 rounded-md bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 font-medium">
              3 Années d'Exploitation
            </span>
          </div>
        </div>

        <div className="h-[380px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            {metricView === 'combined' ? (
              <ComposedChart data={data} margin={{ top: 20, right: 30, left: 10, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(148, 163, 184, 0.2)" />
                <XAxis
                  dataKey="year"
                  stroke="#94a3b8"
                  tick={{ fill: '#94a3b8', fontSize: 13, fontWeight: 500 }}
                  tickLine={false}
                />
                <YAxis
                  yAxisId="left"
                  stroke="#06b6d4"
                  tick={{ fill: '#06b6d4', fontSize: 12 }}
                  tickFormatter={(val) => `${val.toLocaleString('fr-FR')}`}
                  label={{
                    value: 'Élèves',
                    angle: -90,
                    position: 'insideLeft',
                    fill: '#06b6d4',
                    fontSize: 12,
                    offset: 10,
                  }}
                />
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  stroke="#3b82f6"
                  tick={{ fill: '#3b82f6', fontSize: 12 }}
                  tickFormatter={(val) => `${(val / 1000).toFixed(0)}k F`}
                  label={{
                    value: 'FCFA',
                    angle: 90,
                    position: 'insideRight',
                    fill: '#3b82f6',
                    fontSize: 12,
                    offset: 10,
                  }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend
                  wrapperStyle={{ paddingTop: 16 }}
                  formatter={(value) => (
                    <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                      {value}
                    </span>
                  )}
                />
                <Bar
                  yAxisId="left"
                  dataKey="students"
                  name="Élèves Accompagnés"
                  fill="#06b6d4"
                  radius={[6, 6, 0, 0]}
                  barSize={55}
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="revenue"
                  name="Chiffre d'Affaires (FCFA)"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  dot={{ r: 5, fill: '#3b82f6', strokeWidth: 2, stroke: '#fff' }}
                  activeDot={{ r: 8 }}
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="profit"
                  name="Bénéfice Net (FCFA)"
                  stroke="#10b981"
                  strokeWidth={3}
                  dot={{ r: 5, fill: '#10b981', strokeWidth: 2, stroke: '#fff' }}
                  activeDot={{ r: 8 }}
                />
              </ComposedChart>
            ) : metricView === 'financial' ? (
              <BarChart data={data} margin={{ top: 20, right: 30, left: 10, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(148, 163, 184, 0.2)" />
                <XAxis
                  dataKey="year"
                  stroke="#94a3b8"
                  tick={{ fill: '#94a3b8', fontSize: 13, fontWeight: 500 }}
                  tickLine={false}
                />
                <YAxis
                  stroke="#94a3b8"
                  tick={{ fill: '#94a3b8', fontSize: 12 }}
                  tickFormatter={(val) => `${(val / 1000).toFixed(0)}k F`}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend
                  wrapperStyle={{ paddingTop: 16 }}
                  formatter={(value) => (
                    <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                      {value}
                    </span>
                  )}
                />
                <Bar
                  dataKey="revenue"
                  name="Chiffre d'Affaires"
                  fill="#06b6d4"
                  radius={[4, 4, 0, 0]}
                  barSize={32}
                />
                <Bar
                  dataKey="costs"
                  name="Coûts Opérationnels"
                  fill="#64748b"
                  radius={[4, 4, 0, 0]}
                  barSize={32}
                />
                <Bar
                  dataKey="profit"
                  name="Bénéfice Net"
                  fill="#10b981"
                  radius={[4, 4, 0, 0]}
                  barSize={32}
                />
              </BarChart>
            ) : (
              <AreaChart data={data} margin={{ top: 20, right: 30, left: 10, bottom: 20 }}>
                <defs>
                  <linearGradient id="colorSavings" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#f59e0b" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(148, 163, 184, 0.2)" />
                <XAxis
                  dataKey="year"
                  stroke="#94a3b8"
                  tick={{ fill: '#94a3b8', fontSize: 13, fontWeight: 500 }}
                  tickLine={false}
                />
                <YAxis
                  stroke="#94a3b8"
                  tick={{ fill: '#94a3b8', fontSize: 12 }}
                  tickFormatter={(val) => `${(val / 1000).toFixed(0)}k F`}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend
                  wrapperStyle={{ paddingTop: 16 }}
                  formatter={(value) => (
                    <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                      {value}
                    </span>
                  )}
                />
                <Area
                  type="monotone"
                  dataKey="familySavings"
                  name="Économies directes pour les familles (FCFA)"
                  stroke="#f59e0b"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorSavings)"
                />
              </AreaChart>
            )}
          </ResponsiveContainer>
        </div>
      </div>

      {/* Structured Projection Table */}
      <div className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-lg">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
          Matrice d'Évolution Budgétaire & Sociale
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs md:text-sm">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider text-[11px]">
                <th className="py-3 px-4">Étape / Année</th>
                <th className="py-3 px-4">Phase Stratégique</th>
                <th className="py-3 px-4 text-right">Écoles</th>
                <th className="py-3 px-4 text-right">Élèves</th>
                <th className="py-3 px-4 text-right">CA Brut</th>
                <th className="py-3 px-4 text-right">Charges</th>
                <th className="py-3 px-4 text-right">Bénéfice Net</th>
                <th className="py-3 px-4 text-right text-amber-600 dark:text-amber-400">Économies Familles</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 font-medium text-slate-700 dark:text-slate-300">
              {data.map((row) => (
                <tr key={row.year} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors">
                  <td className="py-3 px-4 font-bold text-slate-900 dark:text-white">
                    {row.year} <span className="text-slate-400 text-xs font-normal">({row.label})</span>
                  </td>
                  <td className="py-3 px-4 text-slate-600 dark:text-slate-400">{row.phase}</td>
                  <td className="py-3 px-4 text-right font-mono tabular-nums">{row.schools}</td>
                  <td className="py-3 px-4 text-right font-mono tabular-nums font-bold text-cyan-600 dark:text-cyan-400">
                    {row.students.toLocaleString('fr-FR')}
                  </td>
                  <td className="py-3 px-4 text-right font-mono tabular-nums">
                    {row.revenue.toLocaleString('fr-FR')} F
                  </td>
                  <td className="py-3 px-4 text-right font-mono tabular-nums text-slate-500">
                    {row.costs.toLocaleString('fr-FR')} F
                  </td>
                  <td className="py-3 px-4 text-right font-mono tabular-nums font-bold text-emerald-600 dark:text-emerald-400">
                    {row.profit.toLocaleString('fr-FR')} F
                  </td>
                  <td className="py-3 px-4 text-right font-mono tabular-nums font-bold text-amber-600 dark:text-amber-400">
                    {row.familySavings.toLocaleString('fr-FR')} F
                  </td>
                </tr>
              ))}
              {/* Total row */}
              <tr className="bg-slate-100/60 dark:bg-slate-900/60 font-bold border-t-2 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white">
                <td className="py-3.5 px-4" colSpan={2}>
                  Total Cumulé (3 ans)
                </td>
                <td className="py-3.5 px-4 text-right font-mono tabular-nums">
                  {data[data.length - 1].schools} actives
                </td>
                <td className="py-3.5 px-4 text-right font-mono tabular-nums text-cyan-600 dark:text-cyan-400">
                  {totalStudents.toLocaleString('fr-FR')}
                </td>
                <td className="py-3.5 px-4 text-right font-mono tabular-nums">
                  {totalRevenue.toLocaleString('fr-FR')} F
                </td>
                <td className="py-3.5 px-4 text-right font-mono tabular-nums text-slate-500">
                  {(totalRevenue - totalProfit).toLocaleString('fr-FR')} F
                </td>
                <td className="py-3.5 px-4 text-right font-mono tabular-nums text-emerald-600 dark:text-emerald-400">
                  {totalProfit.toLocaleString('fr-FR')} F
                </td>
                <td className="py-3.5 px-4 text-right font-mono tabular-nums text-amber-600 dark:text-amber-400">
                  {totalFamilySavings.toLocaleString('fr-FR')} F
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default PerformanceOverviewSection;
