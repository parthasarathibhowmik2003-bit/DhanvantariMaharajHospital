import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Phone, MapPin, Activity, Navigation, AlertTriangle, ShieldCheck, Clock, Siren } from 'lucide-react';

export default function Emergency() {
  const [tracking, setTracking] = useState(false);
  const [eta, setEta] = useState(12);

  const startTracking = () => {
    setTracking(true);
    const interval = setInterval(() => {
      setEta((prev) => (prev > 1 ? prev - 1 : 1));
    }, 60000);
    return () => clearInterval(interval);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-red-600 text-white py-16 lg:py-24 px-4 overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center space-y-8"
          >
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
               <Siren className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tight">Emergency? Call Now.</h1>
            <p className="text-xl lg:text-2xl font-medium text-red-100 max-w-2xl">
              Our trauma center and ambulance services are available 24/7. Average response time in city limits is 15 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 w-full max-w-lg">
              <a href="tel:+918004449999" className="flex-1 bg-white text-red-600 p-6 rounded-3xl text-2xl font-black flex items-center justify-center shadow-2xl hover:scale-105 transition-transform">
                <Phone className="mr-4 w-8 h-8" /> +91-800-444-9999
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Animated background lines */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="absolute h-[1px] bg-white w-full rotate-12" style={{ top: `${i * 10}%` }}></div>
          ))}
        </div>
      </section>

      {/* Ambulance Tracking Simulation */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Left: Request Form */}
             <div className="bg-white rounded-[3rem] p-10 lg:p-16 shadow-xl border border-red-50">
                <h2 className="text-3xl font-black text-[#0A3D62] mb-8 flex items-center">
                   <Navigation className="mr-4 text-red-600" /> Dispatch Ambulance
                </h2>
                
                <div className="space-y-6">
                   <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-gray-400">Current Location</label>
                      <div className="relative">
                         <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 text-red-600" />
                         <input type="text" placeholder="Fetching GPS location..." className="w-full bg-slate-50 border-none p-6 pl-16 rounded-2xl font-bold" />
                      </div>
                   </div>
                   
                   <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                         <label className="text-xs font-black uppercase tracking-widest text-gray-400">Emergency Type</label>
                         <select className="w-full bg-slate-50 border-none p-6 rounded-2xl font-bold appearance-none outline-none">
                            <option>Cardiac Arrest</option>
                            <option>Road Accident</option>
                            <option>Severe Trauma</option>
                            <option>Pregnancy</option>
                            <option>Others</option>
                         </select>
                      </div>
                      <div className="space-y-2">
                         <label className="text-xs font-black uppercase tracking-widest text-gray-400">Ambulance Type</label>
                         <select className="w-full bg-slate-50 border-none p-6 rounded-2xl font-bold appearance-none outline-none">
                            <option>Basic Life Support</option>
                            <option>Advanced Cardiac Care</option>
                            <option>Neonatal Support</option>
                         </select>
                      </div>
                   </div>

                   <button 
                     onClick={startTracking}
                     className="w-full bg-red-600 text-white p-6 rounded-3xl font-black text-xl shadow-xl shadow-red-500/20 hover:bg-red-700 transition-all"
                   >
                     {tracking ? 'Dispatching...' : 'Request Dispatch Now'}
                   </button>
                </div>
             </div>

             {/* Right: Tracking UI */}
             <div className="relative">
                {!tracking ? (
                  <div className="h-full bg-slate-200 rounded-[3rem] flex flex-col items-center justify-center p-10 text-center border-4 border-dashed border-slate-300">
                     <AlertTriangle className="w-16 h-16 text-slate-400 mb-6" />
                     <h3 className="text-2xl font-black text-slate-500">No Active Request</h3>
                     <p className="text-slate-400 font-medium max-w-xs mt-2">Submit the form or call the emergency number to track an ambulance in real-time.</p>
                  </div>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full bg-white rounded-[3rem] shadow-2xl p-10 border border-red-50 overflow-hidden relative"
                  >
                     <div className="flex items-center justify-between mb-12">
                        <div>
                           <div className="text-xs font-black uppercase tracking-widest text-[#14A098] mb-1">Ambulance #DM-2044 is En Route</div>
                           <h3 className="text-3xl font-black text-[#0A3D62]">ETA: {eta} Minutes</h3>
                        </div>
                        <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center">
                           <Activity className="text-red-600 w-8 h-8 animate-pulse" />
                        </div>
                     </div>

                     {/* Mock Map Background */}
                     <div className="aspect-square bg-slate-100 rounded-[2rem] mb-8 relative overflow-hidden flex items-center justify-center">
                        <img src="https://picsum.photos/seed/map/800/800" className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale" />
                        <div className="absolute inset-0 bg-blue-500/10"></div>
                        
                        {/* Pulse animation for location */}
                        <div className="relative z-10">
                           <div className="w-4 h-4 bg-red-600 rounded-full animate-ping absolute top-0 left-0"></div>
                           <div className="w-4 h-4 bg-red-600 rounded-full relative"></div>
                        </div>
                        
                        {/* Mock Navigation Path */}
                        <div className="absolute bottom-1/4 left-1/4 right-1/2 h-1 bg-red-600/30 rounded-full"></div>
                     </div>

                     <div className="grid grid-cols-2 gap-4">
                        <div className="bg-slate-50 p-6 rounded-2xl">
                           <div className="flex items-center space-x-3 mb-2">
                              <ShieldCheck className="w-5 h-5 text-[#14A098]" />
                              <span className="text-xs font-black uppercase text-gray-400">Paramedic</span>
                           </div>
                           <div className="font-bold text-[#0A3D62]">Rahul S.</div>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-2xl">
                           <div className="flex items-center space-x-3 mb-2">
                              <Clock className="w-5 h-5 text-[#14A098]" />
                              <span className="text-xs font-black uppercase text-gray-400">Distance</span>
                           </div>
                           <div className="font-bold text-[#0A3D62]">4.2 KM Away</div>
                        </div>
                     </div>
                  </motion.div>
                )}
             </div>

          </div>
        </div>
      </section>

      {/* Trauma Centers */}
      <section className="py-20 bg-white border-t border-slate-100">
         <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-black text-[#0A3D62] text-center mb-16 underline decoration-[#14A098] underline-offset-8">Level-1 Trauma Centers</h2>
            <div className="grid md:grid-cols-3 gap-8">
               {[
                 { name: 'DMH North Center', loc: 'Preet Vihar, Delhi', zone: 'North Zone' },
                 { name: 'DMH Main Trauma', loc: 'South Ext, Delhi', zone: 'West Zone' },
                 { name: 'DMH Allied Unit', loc: 'Gurugram, HR', zone: 'South Zone' }
               ].map((site, i) => (
                 <div key={i} className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:shadow-xl transition-all group">
                    <div className="text-xs font-black text-red-600 uppercase tracking-widest mb-4 group-hover:animate-bounce">{site.zone}</div>
                    <h4 className="text-2xl font-black text-[#0A3D62] mb-2">{site.name}</h4>
                    <p className="text-gray-500 font-medium">{site.loc}</p>
                    <hr className="my-8 border-slate-200" />
                    <button className="w-full py-4 rounded-xl border-2 border-[#0A3D62] font-bold text-[#0A3D62] hover:bg-[#0A3D62] hover:text-white transition-all">Direct Contact</button>
                 </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
}
