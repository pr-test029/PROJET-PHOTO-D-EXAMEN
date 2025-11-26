import React from 'react';
import { User, Phone, Mail, MapPin, Building2, MessageSquare } from 'lucide-react';

const CreatorSection: React.FC = () => {
  return (
    <section className="py-6 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-100 flex items-center justify-center gap-3">
          Le Fondateur
        </h2>
        <p className="text-slate-400 mt-2">L'esprit derrière la vision POWERFUL REACH.</p>
      </div>

      <div className="glass-panel rounded-2xl border border-slate-700 shadow-2xl relative">
        {/* Background Accent Banner */}
        <div className="w-full h-40 bg-gradient-to-r from-cyan-900 via-slate-800 to-cyan-900 opacity-50 rounded-t-2xl"></div>
        
        {/* Profile Avatar - Positioned relatively to ensure full visibility */}
        <div className="relative -mt-20 flex justify-center z-10">
            <div className="w-40 h-40 rounded-full bg-slate-900 border-4 border-cyan-500 flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.4)]">
                <User className="w-20 h-20 text-cyan-400" />
            </div>
        </div>

        <div className="px-8 pb-8 pt-6 md:px-12">
            <div className="text-center mb-10">
                <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight">NDAMBA GOSSAKI <br/><span className="text-cyan-400">Paul Roger</span></h3>
                <div className="inline-flex items-center gap-2 mt-4 px-4 py-1.5 bg-cyan-950/50 border border-cyan-800/50 rounded-full">
                    <Building2 className="w-4 h-4 text-cyan-400" />
                    <span className="text-cyan-100 font-medium text-sm">Fondateur de l'Agence POWERFUL REACH</span>
                </div>
                <p className="text-slate-400 mt-6 max-w-2xl mx-auto leading-relaxed italic">
                    "Jeune entrepreneur passionné, déterminé à apporter des solutions concrètes aux défis éducatifs et sociaux du Congo à travers l'innovation et l'action locale."
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
                {/* Contact Card - Founder */}
                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500/30 transition-colors group">
                    <h4 className="text-cyan-400 font-bold uppercase tracking-wider text-xs mb-4 flex items-center gap-2">
                        <User className="w-4 h-4" /> Contact Personnel
                    </h4>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <div className="bg-green-500/10 p-2 rounded-lg"><Phone className="w-5 h-5 text-green-400" /></div>
                            <div>
                                <p className="text-xs text-slate-500 uppercase">Téléphone & WhatsApp</p>
                                <a href="https://wa.me/242067696157" className="text-white font-mono hover:text-cyan-400 transition">+242 06 769 61 57</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="bg-slate-700/50 p-2 rounded-lg"><Mail className="w-5 h-5 text-slate-300" /></div>
                            <div>
                                <p className="text-xs text-slate-500 uppercase">Email Personnel</p>
                                <a href="mailto:paulndamba2@gmail.com" className="text-white font-mono hover:text-cyan-400 transition text-sm">paulndamba2@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>

                 {/* Contact Card - Agency */}
                 <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500/30 transition-colors group">
                    <h4 className="text-cyan-400 font-bold uppercase tracking-wider text-xs mb-4 flex items-center gap-2">
                        <Building2 className="w-4 h-4" /> Contact Agence
                    </h4>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <div className="bg-green-500/10 p-2 rounded-lg"><MessageSquare className="w-5 h-5 text-green-400" /></div>
                            <div>
                                <p className="text-xs text-slate-500 uppercase">Service Client (WhatsApp)</p>
                                <a href="https://wa.me/242050133271" className="text-white font-mono hover:text-cyan-400 transition">+242 05 013 32 71</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="bg-slate-700/50 p-2 rounded-lg"><Mail className="w-5 h-5 text-slate-300" /></div>
                            <div>
                                <p className="text-xs text-slate-500 uppercase">Email Professionnel</p>
                                <a href="mailto:powerfulreach29@gmail.com" className="text-white font-mono hover:text-cyan-400 transition text-sm">powerfulreach29@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Location */}
            <div className="mt-6 bg-slate-900/50 p-4 rounded-xl border border-slate-800 flex items-center justify-center gap-3 text-slate-300">
                <MapPin className="w-5 h-5 text-red-500" />
                <span>Siège Social : <strong className="text-white">Brazzaville, République du Congo</strong></span>
            </div>

        </div>
      </div>
    </section>
  );
};

export default CreatorSection;