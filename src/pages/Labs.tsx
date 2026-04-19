import { useState } from 'react';
import { motion } from 'motion/react';
import { Activity, Microscope, Clock, FileText, ChevronRight, Search, Zap, Beaker } from 'lucide-react';
import { LAB_TESTS } from '../data';

export default function Labs() {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredTests = LAB_TESTS.filter(test => test.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
         <img 
          src="https://picsum.photos/seed/lab/1920/600" 
          className="absolute inset-0 w-full h-full object-cover opacity-10" 
          referrerPolicy="no-referrer"
         />
         <div className="z-10 text-center max-w-4xl px-4">
            <h1 className="text-6xl font-black text-[#0A3D62] mb-6">Advanced Diagnostics</h1>
            <p className="text-xl text-gray-500 font-medium leading-relaxed">
              Equipped with the latest diagnostic technology for accurate and timely medical reports.
            </p>
         </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 -mt-20 mb-24 relative z-20">
         <div className="bg-white p-12 rounded-[3rem] shadow-2xl border border-gray-50">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-16">
               <div className="flex gap-4">
                  {['All Tests', 'Blood', 'Imaging', 'Advanced'].map(cat => (
                    <button key={cat} className="px-8 py-3 rounded-2xl bg-gray-50 text-gray-400 font-bold hover:bg-[#0A3D62] hover:text-white transition-all">
                      {cat}
                    </button>
                  ))}
               </div>
               <div className="relative flex-1 max-w-md">
                  <input 
                    type="text" 
                    placeholder="Search tests..." 
                    className="w-full bg-slate-50 border-none px-6 py-4 rounded-2xl font-bold outline-none ring-4 ring-transparent focus:ring-blue-500/10 transition-all"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Search className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-300" />
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
               {filteredTests.map(test => (
                 <div key={test.id} className="group p-8 rounded-[2.5rem] bg-white border border-gray-100 hover:border-[#14A098]/30 hover:shadow-2xl transition-all flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center mb-8">
                         <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-[#14A098]/10 transition-colors">
                            {test.category === 'Imaging' ? <Activity className="text-blue-600 w-7 h-7" /> : <Microscope className="text-blue-600 w-7 h-7" />}
                         </div>
                         <div className="bg-gray-50 px-3 py-1 rounded text-[10px] font-black uppercase text-gray-400 tracking-widest">{test.category}</div>
                      </div>
                      <h4 className="text-2xl font-black text-[#0A3D62] mb-4 leading-tight">{test.name}</h4>
                      <p className="text-gray-500 text-sm font-medium mb-6">{test.purpose}</p>
                      
                      <div className="space-y-3 mb-10">
                         <div className="flex items-center text-xs font-bold text-gray-400">
                            <Clock className="w-4 h-4 mr-2 text-[#14A098]" /> Report in {test.reportTime}
                         </div>
                         <div className="flex items-center text-xs font-bold text-gray-400">
                            <Zap className="w-4 h-4 mr-2 text-orange-500" /> {test.preparation}
                         </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                       <span className="text-2xl font-black text-[#0A3D62]">₹{test.cost}</span>
                       <button className="bg-[#0A3D62] text-white px-6 py-3 rounded-xl font-bold text-sm flex items-center hover:bg-[#14A098] transition-all">
                         Book Test <ChevronRight className="ml-1 w-4 h-4" />
                       </button>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </div>
    </div>
  );
}
