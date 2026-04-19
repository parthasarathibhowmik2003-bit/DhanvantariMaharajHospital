import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { DOCTORS } from '../data';
import { 
  Star, Award, Calendar, Clock, MapPin, 
  MessageSquare, Share2, ShieldCheck, Heart,
  ArrowLeft, GraduationCap, Briefcase, FileText
} from 'lucide-react';

export default function DoctorProfile() {
  const { id } = useParams();
  const doctor = DOCTORS.find(d => d.id === id);

  if (!doctor) return <Navigate to="/doctors" />;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Background Header */}
      <div className="h-48 lg:h-80 bg-[#0A3D62] relative overflow-hidden">
         <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
         </div>
         <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
            <Link to="/doctors" className="bg-white/10 hover:bg-white/20 p-3 rounded-xl backdrop-blur-md text-white transition-all">
               <ArrowLeft className="w-6 h-6" />
            </Link>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-24 lg:-mt-32 relative z-10 pb-20">
         <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Left Column: Image & Basic Info */}
            <div className="lg:col-span-1">
               <motion.div 
                 initial={{ opacity: 0, y: 30 }}
                 animate={{ opacity: 1, y: 0 }}
                 className="bg-white rounded-[3rem] p-8 shadow-xl border border-blue-50"
               >
                  <div className="relative mb-8">
                     <img 
                       src={doctor.image} 
                       alt={doctor.name} 
                       className="w-full aspect-square object-cover rounded-[2.5rem] shadow-lg"
                     />
                     <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#14A098] text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-xl">
                        Expert Verified
                     </div>
                  </div>

                  <div className="text-center space-y-4">
                     <h1 className="text-3xl font-black text-[#0A3D62]">{doctor.name}</h1>
                     <div className="flex flex-col items-center">
                        <span className="text-[#14A098] font-bold text-lg uppercase tracking-tight">{doctor.deptName} Specialist</span>
                        <div className="flex items-center space-x-2 mt-2">
                           <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                           <span className="font-bold text-[#0A3D62]">4.9 / 5.0</span>
                           <span className="text-gray-400 text-sm">(450+ Reviews)</span>
                        </div>
                     </div>
                     
                     <div className="h-[1px] bg-slate-100 w-full my-6"></div>
                     
                     <div className="grid grid-cols-2 gap-4">
                        <div className="bg-slate-50 p-4 rounded-2xl">
                           <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Fee</div>
                           <div className="text-xl font-black text-[#0A3D62]">₹{doctor.fee}</div>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-2xl">
                           <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Experience</div>
                           <div className="text-xl font-black text-[#0A3D62]">{doctor.experience}Y+</div>
                        </div>
                     </div>

                     <button className="w-full bg-[#0A3D62] text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-blue-500/10 hover:bg-blue-600 transition-all">
                        Request Teleconsult
                     </button>
                  </div>
               </motion.div>

               <div className="mt-8 bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100">
                  <h4 className="text-xl font-black text-[#0A3D62] mb-6 flex items-center underline decoration-[#14A098] decoration-4 underline-offset-4">
                     <Clock className="mr-3 w-5 h-5 text-[#14A098]" /> Practice Hours
                  </h4>
                  <div className="space-y-4">
                     {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day, i) => (
                       <div key={i} className="flex justify-between items-center text-sm font-bold">
                          <span className="text-gray-500">{day}</span>
                          <span className="text-[#0A3D62]">{doctor.availability}</span>
                       </div>
                     ))}
                  </div>
               </div>
            </div>

            {/* Right Column: Detailed Bio & Booking */}
            <div className="lg:col-span-2 space-y-10">
               <motion.section 
                 initial={{ opacity: 0, x: 30 }}
                 animate={{ opacity: 1, x: 0 }}
                 className="bg-white rounded-[3rem] p-10 lg:p-16 shadow-xl border border-slate-100"
               >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                     <h2 className="text-3xl font-black text-[#0A3D62] tracking-tight">Professional Profile</h2>
                     <div className="flex items-center space-x-3">
                        <button className="p-3 bg-slate-50 rounded-xl text-gray-400 hover:text-[#0A3D62] transition-colors"><MessageSquare /></button>
                        <button className="p-3 bg-slate-50 rounded-xl text-gray-400 hover:text-[#0A3D62] transition-colors"><Share2 /></button>
                        <button className="p-3 bg-slate-50 rounded-xl text-gray-400 hover:text-red-500 transition-colors"><Heart /></button>
                     </div>
                  </div>

                  <div className="prose prose-slate max-w-none">
                     <p className="text-lg text-gray-600 leading-loose font-medium mb-12">
                        {doctor.bio} {doctor.name} is a renowned figure at DhanvantariMaharajHospital, significantly contributing to the field of {doctor.deptName} with over {doctor.experience} years of clinical excellence. Known for a patient-centric approach and precision in complex medical interventions.
                     </p>

                     <div className="grid md:grid-cols-2 gap-10">
                        <div className="space-y-6">
                           <h4 className="text-xl font-black text-[#0A3D62] flex items-center">
                              <GraduationCap className="mr-3 w-6 h-6 text-[#14A098]" /> Qualifications
                           </h4>
                           <ul className="space-y-3">
                              <li className="flex items-start space-x-3 text-gray-500 font-bold">
                                 <ChevronRight className="w-5 h-5 text-blue-500 shrink-0" />
                                 <span>{doctor.qualification}</span>
                              </li>
                              <li className="flex items-start space-x-3 text-gray-500 font-bold">
                                 <ChevronRight className="w-5 h-5 text-blue-500 shrink-0" />
                                 <span>Post Doctoral Research in Applied Healthcare</span>
                              </li>
                           </ul>
                        </div>
                        <div className="space-y-6">
                           <h4 className="text-xl font-black text-[#0A3D62] flex items-center">
                              <Award className="mr-3 w-6 h-6 text-[#14A098]" /> Honors & Awards
                           </h4>
                           <div className="flex flex-wrap gap-2">
                              {doctor.awards.map((award, i) => (
                                <span key={i} className="bg-[#14A098]/10 text-[#14A098] px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest border border-[#14A098]/20">
                                   {award}
                                </span>
                              ))}
                           </div>
                        </div>
                     </div>
                  </div>
               </motion.section>

               <section className="bg-[#0A3D62] rounded-[3rem] p-10 lg:p-16 text-white shadow-2xl relative overflow-hidden">
                  <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                     <div className="max-w-md">
                        <h3 className="text-4xl font-black mb-6 leading-tight">Instant Hospital <br/> Booking</h3>
                        <p className="text-blue-100/70 text-lg font-medium leading-relaxed mb-8">
                           Reserve your slot with {doctor.name} instantly. All appointments are digitally confirmed via SMS and ABHA Portal.
                        </p>
                        <div className="flex items-center space-x-6 text-sm font-bold text-blue-200">
                           <div className="flex items-center"><ShieldCheck className="mr-2 w-4 h-4" /> Priority Access</div>
                           <div className="flex items-center"><Clock className="mr-2 w-4 h-4" /> 15m Turnaround</div>
                        </div>
                     </div>
                     
                     <div className="w-full md:w-80 bg-white/10 rounded-[2.5rem] p-8 backdrop-blur-md border border-white/10 space-y-6">
                        <div className="space-y-2">
                           <label className="text-[10px] font-black uppercase tracking-widest text-blue-200">Next Slot</label>
                           <div className="bg-white/10 p-4 rounded-xl font-bold flex items-center justify-between">
                              <span>Tomorrow, 10 AM</span>
                              <Calendar className="w-4 h-4 text-[#14A098]" />
                           </div>
                        </div>
                        <Link to="/appointments" className="block w-full bg-[#14A098] text-center p-5 rounded-2xl font-black text-xl hover:scale-105 transition-transform shadow-xl">
                           Confirm Booking
                        </Link>
                     </div>
                  </div>
                  <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
               </section>

               <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                     <div className="p-4 bg-teal-50 text-[#14A098] rounded-2xl mb-4"><ShieldCheck /></div>
                     <span className="text-xs font-black uppercase text-gray-400 mb-2">Hospital Rank</span>
                     <span className="text-xl font-black text-[#0A3D62]">Elite Circle</span>
                  </div>
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                     <div className="p-4 bg-purple-50 text-purple-600 rounded-2xl mb-4"><Users /></div>
                     <span className="text-xs font-black uppercase text-gray-400 mb-2">Patients</span>
                     <span className="text-xl font-black text-[#0A3D62]">15,000+</span>
                  </div>
                  <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                     <div className="p-4 bg-orange-50 text-orange-600 rounded-2xl mb-4"><Heart /></div>
                     <span className="text-xs font-black uppercase text-gray-400 mb-2">Success Rate</span>
                     <span className="text-xl font-black text-[#0A3D62]">98%</span>
                  </div>
               </div>
            </div>

         </div>
      </div>
    </div>
  );
}

import { ChevronRight, Users } from 'lucide-react';
