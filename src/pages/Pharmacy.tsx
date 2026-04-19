import { useState } from 'react';
import { motion } from 'motion/react';
import { Pill, Search, ShoppingBag, ShieldAlert, ChevronRight, Filter, Info } from 'lucide-react';
import { PHARMACY_MEDS } from '../data';

export default function Pharmacy() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredMeds = PHARMACY_MEDS.filter(med => 
    med.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    med.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-[#14A098] py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
           <h1 className="text-5xl font-black mb-6">DhanvantariMaharajHospital E-Pharmacy</h1>
           <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
             Safe, authentic, and fast delivery of medicines directly from our hospital pharmacy to your home.
           </p>
           
           <div className="mt-12 max-w-4xl mx-auto relative">
              <input 
                type="text" 
                placeholder="Search medicines, categories, or salt names..." 
                className="w-full bg-white text-gray-900 py-6 px-16 rounded-full shadow-2xl outline-none font-bold text-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6" />
           </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-4 gap-8">
           <aside className="space-y-6">
              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100">
                 <h3 className="font-black text-[#0A3D62] mb-6 flex items-center"><Filter className="mr-2 w-5 h-5" /> Categories</h3>
                 <div className="space-y-4">
                    {['Common Medicines', 'Diabetes', 'Cardiac Care', 'Antibiotics', 'Vitamins & Supplements'].map(cat => (
                      <label key={cat} className="flex items-center space-x-3 cursor-pointer group">
                        <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-[#14A098] focus:ring-[#14A098]" />
                        <span className="text-gray-500 font-bold group-hover:text-[#0A3D62] transition-colors">{cat}</span>
                      </label>
                    ))}
                 </div>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-[2rem] border border-orange-100">
                <ShieldAlert className="text-orange-600 w-10 h-10 mb-4" />
                <h4 className="font-bold text-orange-900 mb-2 leading-tight">Prescription Required</h4>
                <p className="text-xs text-orange-800 font-medium">Certain medicines require a valid prescription from a registered doctor.</p>
              </div>
           </aside>

           <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                 {filteredMeds.map(med => (
                   <motion.div layout key={med.id} className="bg-white rounded-[2rem] p-8 border border-gray-100 hover:shadow-2xl hover:border-[#14A098]/20 transition-all flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start mb-4">
                           <div className="w-12 h-12 bg-[#14A098]/5 rounded-xl flex items-center justify-center">
                              <Pill className="text-[#14A098] w-6 h-6" />
                           </div>
                           <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest bg-gray-50 px-2 py-1 rounded">{med.category}</span>
                        </div>
                        <h4 className="text-xl font-black text-[#0A3D62] mb-2">{med.name}</h4>
                        <p className="text-xs font-bold text-gray-400 mb-4">{med.dosage}</p>
                        <p className="text-sm text-gray-600 mb-6 leading-relaxed line-clamp-2">{med.use}</p>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-6">
                           <p className="text-2xl font-black text-[#0A3D62]">₹{med.price}</p>
                           {med.prescriptionRequired && (
                             <div className="flex items-center text-orange-600" title="Prescription Required">
                               <FileText className="w-4 h-4 mr-1" />
                               <span className="text-[10px] font-bold uppercase tracking-widest">Rx</span>
                             </div>
                           )}
                        </div>
                        <button className="w-full bg-[#0A3D62] text-white py-3 rounded-xl font-bold flex items-center justify-center hover:bg-[#14A098] transition-all">
                          Add to Cart <ShoppingBag className="ml-2 w-4 h-4" />
                        </button>
                      </div>
                   </motion.div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

function FileText(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10 9H8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
    </svg>
  )
}
