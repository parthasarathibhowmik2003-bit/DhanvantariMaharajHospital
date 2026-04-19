import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Search, Calendar, FileText, Pill, ArrowRight, Shield, 
  Stethoscope, Clock, Award, Users, Phone, Activity,
  Brain, Heart, ShieldCheck, Zap, Star
} from 'lucide-react';
import { DEPARTMENTS, DOCTORS } from '../data';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48 bg-[#fafbfc] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest bg-blue-50 text-[#0A3D62] mb-8 border border-blue-100/50">
                <ShieldCheck className="w-4 h-4 mr-2 text-[#14A098]" /> NABH & JCI Gold Standards
              </div>
              <h1 className="text-6xl lg:text-8xl font-black text-[#0A3D62] leading-[0.95] mb-8 tracking-tighter">
                Redefining <br/> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A3D62] to-[#14A098]">Possibilities.</span>
              </h1>
              <p className="text-xl text-gray-500 mb-12 max-w-xl leading-relaxed font-medium">
                DhanvantariMaharajHospital combines Indian compassion with global innovation to provide the world's most advanced multi-specialty healthcare.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/appointments" className="bg-[#0A3D62] text-white px-10 py-5 rounded-3xl text-xl font-black shadow-2xl shadow-blue-900/40 hover:scale-105 transition-transform flex items-center justify-center">
                  Book Visit <ArrowRight className="ml-3 w-6 h-6" />
                </Link>
                <Link to="/emergency" className="bg-white text-red-600 border-2 border-red-50 px-10 py-5 rounded-3xl text-xl font-black hover:border-red-600 transition-colors flex items-center justify-center">
                  Emergency 24/7
                </Link>
              </div>

              <div className="mt-16 flex items-center space-x-12">
                 <div className="flex -space-x-4">
                    {[1,2,3,4,5].map(i => <img key={i} src={`https://i.pravatar.cc/100?u=patient-${i}`} className="w-12 h-12 rounded-full border-4 border-white shadow-lg" />)}
                 </div>
                 <div>
                    <div className="flex items-center space-x-1">
                       {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />)}
                    </div>
                    <p className="text-xs font-bold text-gray-400 mt-1 uppercase tracking-widest">1M+ Trusted Patient Stories</p>
                 </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="relative z-10 aspect-[4/5] rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(10,61,98,0.3)]">
                 <img 
                   src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1000" 
                   alt="Modern Medical Tech" 
                   className="w-full h-full object-cover"
                   referrerPolicy="no-referrer"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0A3D62]/60 via-transparent to-transparent"></div>
              </div>
              
              {/* Floating Stat Card */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[3rem] shadow-2xl z-20 border border-slate-100 max-w-[280px]"
              >
                 <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-teal-50 rounded-2xl flex items-center justify-center">
                       <Zap className="text-[#14A098] w-6 h-6" />
                    </div>
                    <div>
                       <div className="text-2xl font-black text-[#0A3D62]">98%</div>
                       <div className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Clinical Success</div>
                    </div>
                 </div>
                 <p className="text-sm font-medium text-gray-500">Exceeding global benchmarks in surgical precision and outcomes.</p>
              </motion.div>

              <div className="absolute top-20 -right-12 w-32 h-32 bg-[#14A098] rounded-[2.5rem] flex flex-col items-center justify-center text-white shadow-2xl rotate-12 z-0 hidden lg:flex">
                 <Award className="w-10 h-10 mb-1" />
                 <span className="text-[10px] font-black uppercase tracking-widest">Global #1</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative backgrounds */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#14A098]/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>
      </section>

      {/* Hospital Pillars */}
      <section className="py-20 -mt-20 relative z-30 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-6">
           <Link to="/ai-checker" className="group bg-[#0A3D62] p-10 rounded-[3rem] text-white shadow-2xl transition-all hover:-translate-y-2">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:bg-[#14A098] transition-colors">
                 <Brain className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-black mb-3 italic">AI Diagnostics</h3>
              <p className="text-blue-100/60 text-sm font-medium leading-relaxed">Advanced symptom analysis powered by GenAI intelligence.</p>
           </Link>
           <Link to="/labs" className="group bg-white p-10 rounded-[3rem] text-[#0A3D62] shadow-sm border border-slate-100 transition-all hover:-translate-y-2">
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#14A098]/10 transition-colors">
                 <Activity className="w-8 h-8 text-[#0A3D62]" />
              </div>
              <h3 className="text-xl font-black mb-3">Robotic Labs</h3>
              <p className="text-gray-400 text-sm font-medium leading-relaxed">Automated testing for zero-error diagnostic reporting.</p>
           </Link>
           <Link to="/pharmacy" className="group bg-white p-10 rounded-[3rem] text-[#0A3D62] shadow-sm border border-slate-100 transition-all hover:-translate-y-2">
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#14A098]/10 transition-colors">
                 <Pill className="w-8 h-8 text-[#0A3D62]" />
              </div>
              <h3 className="text-xl font-black mb-3">Smart Pharmacy</h3>
              <p className="text-gray-400 text-sm font-medium leading-relaxed">Genuine medicines delivered in under 60 minutes.</p>
           </Link>
           <Link to="/doctors" className="group bg-white p-10 rounded-[3rem] text-[#0A3D62] shadow-sm border border-slate-100 transition-all hover:-translate-y-2">
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#14A098]/10 transition-colors">
                 <Users className="w-8 h-8 text-[#0A3D62]" />
              </div>
              <h3 className="text-xl font-black mb-3">Global Experts</h3>
              <p className="text-gray-400 text-sm font-medium leading-relaxed">Direct access to surgeons with Harvard & AIIMS backgrounds.</p>
           </Link>
        </div>
      </section>

      {/* Featured Specialties */}
      <section className="py-32 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
               <div className="max-w-xl">
                  <header className="flex items-center space-x-3 mb-6">
                     <span className="w-12 h-[2px] bg-[#14A098]"></span>
                     <span className="text-[#14A098] font-black uppercase tracking-widest text-xs">Excellence in Care</span>
                  </header>
                  <h2 className="text-5xl font-black text-[#0A3D62] tracking-tight">Center of Excellence</h2>
                  <p className="text-gray-500 text-lg font-medium mt-6">
                     We operate specialized clinics that manage complex cases through multidisciplinary teamwork and the latest medical research.
                  </p>
               </div>
               <Link to="/departments" className="bg-[#0A3D62] text-white px-8 py-4 rounded-full font-bold flex items-center group">
                  View All 21 Departments <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
               </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
               {DEPARTMENTS.slice(0, 6).map((dept, i) => (
                 <motion.div 
                   key={dept.id}
                   whileHover={{ y: -10 }}
                   className="group relative h-[450px] rounded-[3.5rem] overflow-hidden shadow-2xl"
                 >
                    <img 
                      src={dept.image} 
                      alt={dept.name} 
                      className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A3D62] via-[#0A3D62]/20 to-transparent"></div>
                    <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
                       <h3 className="text-3xl font-black mb-4">{dept.name}</h3>
                       <p className="text-blue-50 font-medium text-sm line-clamp-2 mb-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                         {dept.description}
                       </p>
                       <Link to={`/departments/${dept.slug}`} className="flex items-center text-[#14A098] font-black uppercase tracking-widest text-xs group-hover:scale-105 transition-transform origin-left">
                          Explore Services <ArrowRight className="ml-2 w-4 h-4" />
                       </Link>
                    </div>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* Featured Doctors Preview */}
      <section className="py-32 bg-slate-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
               <h2 className="text-5xl font-black text-[#0A3D62] mb-6">World-Renowned Specialists</h2>
               <p className="text-gray-400 font-bold max-w-2xl mx-auto">Our doctors are leaders in their fields, frequently cited in medical journals and recognized globally for clinical breakthroughs.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
               {DOCTORS.slice(0, 4).map((doc, i) => (
                 <Link to={`/doctors/${doc.id}`} key={doc.id} className="group bg-white p-8 rounded-[3rem] shadow-sm border border-slate-100 hover:shadow-2xl transition-all">
                    <div className="relative mb-8">
                       <img src={doc.image} alt={doc.name} className="w-full aspect-square object-cover rounded-[2.5rem]" />
                       <div className="absolute -bottom-4 right-4 bg-[#14A098] text-white p-3 rounded-2xl shadow-xl">
                          <ShieldCheck className="w-5 h-5" />
                       </div>
                    </div>
                    <h3 className="text-xl font-bold text-[#0A3D62] group-hover:text-[#14A098] transition-colors mb-1">{doc.name}</h3>
                    <p className="text-xs font-black uppercase text-[#14A098] tracking-widest mb-4">{doc.deptName}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                       <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                          <span className="text-sm font-bold">4.9</span>
                       </div>
                       <span className="text-xs font-bold text-gray-400">{doc.experience}Y+ Exp</span>
                    </div>
                 </Link>
               ))}
            </div>
            
            <div className="mt-16 text-center">
               <Link to="/doctors" className="inline-flex items-center bg-[#0A3D62] text-white px-10 py-4 rounded-3xl font-black shadow-xl hover:bg-[#14A098] transition-all">
                  Consult All 200+ Experts <ArrowRight className="ml-3 w-5 h-5" />
               </Link>
            </div>
         </div>
      </section>

      {/* Modern Medical Tech */}
      <section className="py-32 bg-[#0A3D62] relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
               <div className="order-2 lg:order-1">
                  <div className="grid grid-cols-2 gap-6">
                     <div className="space-y-6 mt-12">
                        <div className="bg-white/10 aspect-square rounded-[3rem] p-8 flex flex-col justify-end backdrop-blur-md border border-white/10">
                           <Zap className="text-[#14A098] w-10 h-10 mb-4" />
                           <h4 className="text-white font-black text-xl">Robotic Surgery</h4>
                        </div>
                        <div className="bg-white p-8 aspect-square rounded-[3rem] flex flex-col justify-end shadow-2xl">
                           <Activity className="text-red-500 w-10 h-10 mb-4" />
                           <h4 className="text-[#0A3D62] font-black text-xl">Real-time <br/> Monitoring</h4>
                        </div>
                     </div>
                     <div className="space-y-6">
                        <div className="bg-white p-8 aspect-square rounded-[3rem] flex flex-col justify-end shadow-2xl">
                           <Brain className="text-purple-600 w-10 h-10 mb-4" />
                           <h4 className="text-[#0A3D62] font-black text-xl">AI-Driven <br/> Insights</h4>
                        </div>
                        <div className="bg-[#14A098] aspect-square rounded-[3rem] p-8 flex flex-col justify-end shadow-2xl">
                           <Heart className="text-white w-10 h-10 mb-4" />
                           <h4 className="text-white font-black text-xl">Cyber-Physical <br/> Patient Care</h4>
                        </div>
                     </div>
                  </div>
               </div>
               
               <div className="order-1 lg:order-2 text-white">
                  <header className="flex items-center space-x-3 mb-6">
                     <span className="w-12 h-[2px] bg-[#14A098]"></span>
                     <span className="text-[#14A098] font-black uppercase tracking-widest text-xs">Innovation Hub</span>
                  </header>
                  <h2 className="text-5xl lg:text-7xl font-black mb-8 leading-tight">Digital-First <br/> Healthcare.</h2>
                  <p className="text-blue-100 text-xl font-medium leading-relaxed mb-12">
                     We leverage the latest in cloud infrastructure, IoT medical devices, and generative AI to create a seamless, high-confidence healing environment.
                  </p>
                  <div className="space-y-8">
                     {[
                       { title: 'Digital Health Records', desc: 'Securely synced with Government ABHA portal.' },
                       { title: 'Remote Patient Monitoring', desc: 'Continuous vitals tracking via smart wearables.' },
                       { title: 'Genomic Research', desc: 'Personalized medicine through advanced DNA sequencing.' }
                     ].map((item, i) => (
                       <div key={i} className="flex items-start space-x-6">
                          <div className="w-8 h-8 rounded-full bg-[#14A098] flex items-center justify-center shrink-0 mt-1">
                             <ArrowRight className="w-4 h-4" />
                          </div>
                          <div>
                             <h4 className="text-xl font-black">{item.title}</h4>
                             <p className="text-blue-100/60 font-medium">{item.desc}</p>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
         {/* Background blur */}
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] translate-x-1/2 -translate-y-1/2"></div>
      </section>

      {/* Trust & Accreditations */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
         <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-16 grayscale opacity-40">
            {[1,2,3,4,5].map(i => (
              <img key={i} src={`https://picsum.photos/seed/acc-${i}/200/80`} alt="Partner" className="h-10 w-auto object-contain" />
            ))}
         </div>
      </section>
    </div>
  );
}
