import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { DEPARTMENTS, DOCTORS } from '../data';
import { ChevronRight, ArrowRight, Shield, Stethoscope, Clock, MapPin, Award } from 'lucide-react';

export default function Departments() {
  const { slug } = useParams();
  const selectedDept = DEPARTMENTS.find(d => d.slug === slug);
  const deptDoctors = selectedDept ? DOCTORS.filter(d => d.deptId === selectedDept.id) : [];

  if (slug && !selectedDept) return <div className="p-20 text-center font-bold">Department not found</div>;

  return (
    <div className="min-h-screen bg-slate-50">
      {!slug ? (
        <section className="py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
             <div className="mb-20">
                <span className="text-[#14A098] font-black uppercase tracking-widest text-sm">Medical Center</span>
                <h1 className="text-6xl font-black text-[#0A3D62] mt-2 mb-8 uppercase tracking-tighter">Our Departments</h1>
                <p className="text-xl text-gray-500 max-w-2xl font-medium leading-relaxed">
                   Providing comprehensive care through 20+ specialized medical units equipped with world-class facilities.
                </p>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
               {DEPARTMENTS.map((dept) => (
                 <motion.div whileHover={{ y: -10 }} key={dept.id} className="group bg-slate-50 rounded-[3rem] p-10 hover:bg-[#0A3D62] transition-all duration-500">
                    <h3 className="text-3xl font-black text-[#0A3D62] group-hover:text-white mb-6 transition-colors">{dept.name}</h3>
                    <p className="text-gray-500 group-hover:text-blue-100/70 font-medium mb-10 transition-colors">{dept.shortDesc}</p>
                    <Link to={`/departments/${dept.slug}`} className="inline-flex items-center text-[#14A098] font-black text-xs tracking-widest group-hover:text-[#14A098]">
                      EXPLORE DEPARTMENT <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </Link>
                 </motion.div>
               ))}
             </div>
          </div>
        </section>
      ) : (
        <div className="animate-in fade-in duration-700">
           {/* Detail Page */}
           <section className="relative h-[600px] flex items-center text-white">
              <img src={selectedDept?.image} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A3D62] via-[#0A3D62]/80 to-transparent"></div>
              <div className="max-w-7xl mx-auto px-4 z-10 w-full">
                 <div className="max-w-2xl">
                    <Link to="/departments" className="inline-flex items-center text-blue-200 font-bold mb-8 hover:text-white transition-colors">
                       <ChevronRight className="rotate-180 mr-2" /> Back to All Departments
                    </Link>
                    <h1 className="text-7xl font-black mb-10 uppercase tracking-tighter leading-none">{selectedDept?.name}</h1>
                    <p className="text-2xl text-blue-100/90 font-medium leading-relaxed">
                       {selectedDept?.description}
                    </p>
                 </div>
              </div>
           </section>

           <section className="max-w-7xl mx-auto px-4 py-24">
              <div className="grid lg:grid-cols-3 gap-16">
                 <div className="lg:col-span-2 space-y-16">
                    <div>
                       <h3 className="text-4xl font-black text-[#0A3D62] mb-12 flex items-center">
                          <span className="w-12 h-1 bg-[#14A098] mr-6"></span> Services Offered
                       </h3>
                       <div className="grid md:grid-cols-2 gap-6">
                          {selectedDept?.services.map(s => (
                            <div key={s} className="bg-white p-8 rounded-3xl border border-gray-100 flex items-center space-x-6 hover:shadow-xl transition-all">
                               <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                                  <Shield className="text-blue-600 w-6 h-6" />
                               </div>
                               <span className="text-lg font-black text-[#0A3D62]">{s}</span>
                            </div>
                          ))}
                       </div>
                    </div>

                    <div>
                       <h3 className="text-4xl font-black text-[#0A3D62] mb-12 flex items-center">
                          <span className="w-12 h-1 bg-[#14A098] mr-6"></span> Meet Our Specialists
                       </h3>
                       <div className="grid md:grid-cols-2 gap-8">
                          {deptDoctors.map(doctor => (
                            <div key={doctor.id} className="bg-white p-8 rounded-[2.5rem] border border-gray-100 flex items-center space-x-8">
                               <img src={doctor.image} className="w-24 h-24 rounded-2xl object-cover shadow-lg" />
                               <div>
                                  <h4 className="text-xl font-black text-[#0A3D62] mb-1">{doctor.name}</h4>
                                  <p className="text-xs font-bold text-gray-400 mb-4">{doctor.qualification}</p>
                                  <Link to={`/doctors`} className="text-[#14A098] font-bold text-xs flex items-center underline underline-offset-4">
                                     View Profile <ChevronRight className="w-3 h-3 ml-1" />
                                  </Link>
                               </div>
                            </div>
                          ))}
                       </div>
                    </div>
                 </div>

                 <aside className="space-y-10">
                    <div className="bg-[#0A3D62] text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
                       <h4 className="text-2xl font-black mb-8 relative z-10">Equipment & Tech</h4>
                       <ul className="space-y-6 relative z-10">
                          {selectedDept?.equipment.map(e => (
                            <li key={e} className="flex items-center space-x-4">
                               <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                                  <Clock className="w-4 h-4" />
                                </div>
                               <span className="font-bold">{e}</span>
                            </li>
                          ))}
                       </ul>
                       <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                    </div>

                    <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm text-center">
                       <Award className="w-16 h-16 text-[#14A098] mx-auto mb-8" />
                       <h4 className="text-2xl font-black text-[#0A3D62] mb-4">Centres of Excellence</h4>
                       <p className="text-gray-400 font-medium leading-relaxed">Recognized for surgical innovation and patient outcome benchmarks.</p>
                       <Link to="/appointments" className="block mt-10 bg-[#0A3D62] text-white py-5 rounded-2xl font-black">Plan Your Visit</Link>
                    </div>
                 </aside>
              </div>
           </section>
        </div>
      )}
    </div>
  );
}
