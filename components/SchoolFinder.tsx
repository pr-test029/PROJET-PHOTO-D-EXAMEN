import React, { useState } from 'react';
import { findSchools } from '../services/geminiService';
import { MapPin, Search, Loader2 } from 'lucide-react';
import { SchoolFinderResponse, LoadingState } from '../types';
import ReactMarkdown from 'react-markdown';

const SchoolFinder: React.FC = () => {
  const [location, setLocation] = useState('');
  const [result, setResult] = useState<SchoolFinderResponse | null>(null);
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!location.trim()) return;

    setStatus(LoadingState.LOADING);
    setResult(null);

    const data = await findSchools(location);
    setResult(data);
    setStatus(LoadingState.SUCCESS);
  };

  return (
    <section className="py-8 glass-panel rounded-2xl px-6 md:px-10 my-8 border border-slate-200 dark:border-slate-700/50 shadow-md">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="flex-1 w-full">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
            <MapPin className="w-6 h-6 text-cyan-600 dark:text-cyan-400" /> Trouver des Écoles
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm">
            Utilisez notre IA connectée à Google Maps pour identifier les établissements scolaires potentiels.
          </p>
          
          <form onSubmit={handleSearch} className="flex gap-2 w-full">
            <input 
              type="text" 
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Entrez un quartier (ex: Bacongo)" 
              className="flex-1 p-3 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 placeholder-slate-400 dark:placeholder-slate-600 transition shadow-sm text-sm"
            />
            <button 
              type="submit" 
              disabled={status === LoadingState.LOADING}
              className="bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-3 rounded-xl transition flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-md shadow-cyan-600/20"
            >
              {status === LoadingState.LOADING ? <Loader2 className="w-5 h-5 animate-spin"/> : <Search className="w-5 h-5" />}
            </button>
          </form>
        </div>

        {/* Results Area */}
        {(status === LoadingState.SUCCESS || status === LoadingState.LOADING) && (
             <div className="flex-1 w-full bg-slate-50 dark:bg-slate-900/80 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 min-h-[150px] shadow-inner">
                {status === LoadingState.LOADING && (
                    <div className="flex flex-col items-center justify-center h-full text-slate-500 gap-2 py-8">
                        <Loader2 className="w-6 h-6 animate-spin text-cyan-600 dark:text-cyan-500"/>
                        <span className="text-xs font-medium">Recherche en cours...</span>
                    </div>
                )}
                
                {status === LoadingState.SUCCESS && result && (
                    <div className="text-sm text-slate-700 dark:text-slate-300">
                        <div className="prose prose-sm dark:prose-invert max-w-none mb-4 leading-relaxed">
                            <ReactMarkdown>{result.text}</ReactMarkdown>
                        </div>
                        
                        {result.groundingChunks && result.groundingChunks.length > 0 && (
                        <div className="mt-4 border-t border-slate-200 dark:border-slate-700 pt-4">
                            <h4 className="font-bold mb-2 text-xs uppercase tracking-wider text-cyan-600 dark:text-cyan-500">Sources Google Maps</h4>
                            <ul className="space-y-2">
                            {result.groundingChunks.map((chunk, idx) => {
                                if (chunk.maps) {
                                    return (
                                        <li key={idx}>
                                        <a href={chunk.maps.uri} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300 hover:underline font-semibold">
                                            <MapPin className="w-3.5 h-3.5" /> {chunk.maps.title}
                                        </a>
                                        </li>
                                    )
                                }
                                return null;
                            })}
                            </ul>
                        </div>
                        )}
                    </div>
                )}
             </div>
        )}
      </div>
    </section>
  );
};

export default SchoolFinder;