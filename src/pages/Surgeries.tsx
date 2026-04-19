import { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, Activity, Scissors, Clock, ShieldCheck, ChevronRight, Search, Layers } from 'lucide-react';
import { SURGERIES } from '../data';

export default function Surgeries() {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredSurgeries = SURGERIES.filter(s => s.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-br from-[#0A3D62] to-[#14A098] py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
           <h1 className="text-6xl font-black mb-8">Centers of Surgical Excellence</h1>
           <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
             Our surgical units are equipped with state-of-the-art robotic systems and led by surgeons with international acclaim.
           </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-20">
         <div className="flex justify-center mb-16">
            <div className="relative w-full max-w-2xl group">
               <input 
                type="text" 
                placeholder="Search procedures (e.g. Heart Bypass, Knee Replacement)..." 
                className="w-full bg-white py-6 px-16 rounded-full shadow-2xl outline-none font-bold text-xl border-none focus:ring-4 focus:ring-[#14A098]/20 transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
               />
               <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300 group-hover:text-[#14A098] transition-colors" />
            </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {filteredSurgeries.map(surgery => (
              <motion.div 
                whileHover={{ y: -10 }}
                key={surgery.id} 
                className="bg-white rounded-[3rem] p-10 shadow-xl border border-gray-100 relative overflow-hidden flex flex-col lg:flex-row gap-10"
              >
                 <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-6">
                       <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest">{surgery.category}</span>
                    </div>
                    <h3 className="text-3xl font-black text-[#0A3D62] mb-4">{surgery.name}</h3>
                    <p className="text-gray-500 font-medium mb-8 leading-relaxed italic">{surgery.description}</p>
                    
                    <div className="grid grid-cols-2 gap-6 mb-8">
                       <div className="bg-slate-50 p-4 rounded-2xl text-center">
                          <p className="text-[10px] font-black text-gray-400 mb-1 uppercase tracking-widest">Recovery Time</p>
                          <p className="text-sm font-black text-[#0A3D62]">{surgery.recoveryTime}</p>
                       </div>
                       <div className="bg-slate-50 p-4 rounded-2xl text-center">
                          <p className="text-[10px] font-black text-gray-400 mb-1 uppercase tracking-widest">Estimated cost</p>
                          <p className="text-sm font-black text-[#14A098]">{surgery.cost}</p>
                       </div>
                    </div>
                 </div>

                 <div className="lg:w-48 space-y-4">
                    <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest border-b border-gray-50 pb-2">Risk Factors</h4>
                    <ul className="space-y-3">
                       {surgery.risks.map(risk => (
                         <li key={risk} className="flex items-center text-xs font-bold text-gray-500">
                           <ShieldCheck className="w-3 h-3 mr-2 text-red-400" /> {risk}
                         </li>
                       ))}
                    </ul>
                    <button className="w-full mt-6 bg-[#0A3D62] text-white py-4 rounded-2xl font-black text-xs hover:bg-[#14A098] transition-all flex items-center justify-center">
                       INQUIRE NOW <ChevronRight className="ml-1 w-4 h-4" />
                    </button>
                 </div>
              </motion.div>
            ))}
         </div>
      </div>
    </div>
  );
}
