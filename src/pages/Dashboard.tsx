import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { User, Calendar, FileText, Pill, LogOut, ChevronRight, Activity, Clock, Bell, Settings, Search, ShieldCheck } from 'lucide-react';
import { useAuth } from '../lib/AuthContext';
import { auth, db } from '../lib/firebase';
import { signOut } from 'firebase/auth';
import { collection, query, where, getDocs, orderBy, limit } from 'firebase/firestore';
import { useNavigate, Navigate } from 'react-router-dom';

export default function Dashboard() {
  const { user, profile, loading } = useAuth();
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState<any[]>([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if (user) {
      const q = query(
        collection(db, 'appointments'),
        where('patientId', '==', user.uid),
        orderBy('createdAt', 'desc'),
        limit(5)
      );
      getDocs(q).then((snap) => {
        setAppointments(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        setFetching(false);
      });
    }
  }, [user]);

  if (loading) return <div className="min-h-screen flex items-center justify-center"><Activity className="animate-spin text-[#0A3D62]" /></div>;
  if (!user) return <Navigate to="/auth" />;

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-80 bg-white border-r border-gray-100 hidden lg:flex flex-col p-10">
         <div className="mb-16">
            <Link to="/" className="flex items-center space-x-3 mb-10">
              <div className="w-10 h-10 bg-[#0A3D62] flex items-center justify-center rounded-xl">
                 <Activity className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-black text-[#0A3D62]">DMHospital</span>
            </Link>
            
            <nav className="space-y-4">
               {[
                 { label: 'Overview', icon: User, active: true },
                 { label: 'Appointments', icon: Calendar },
                 { label: 'Test Reports', icon: FileText },
                 { label: 'Prescriptions', icon: Pill },
                 { label: 'Settings', icon: Settings },
               ].map((item, idx) => (
                 <a key={idx} href="#" className={`flex items-center space-x-4 p-4 rounded-2xl font-bold transition-all ${item.active ? 'bg-[#0A3D62] text-white shadow-xl shadow-blue-500/10' : 'text-gray-400 hover:bg-gray-50 hover:text-[#0A3D62]'}`}>
                    <item.icon className="w-6 h-6" />
                    <span>{item.label}</span>
                 </a>
               ))}
            </nav>
         </div>

         <div className="mt-auto pt-10 border-t border-gray-100">
            <button onClick={() => signOut(auth)} className="flex items-center space-x-4 p-4 rounded-2xl font-bold text-red-400 hover:bg-red-50 transition-all w-full">
               <LogOut className="w-6 h-6" />
               <span>Log Out</span>
            </button>
         </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-6 lg:p-12 overflow-y-auto">
         <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div>
               <h1 className="text-4xl font-black text-[#0A3D62]">Healthy Day, {profile?.name?.split(' ')[0] || 'User'}!</h1>
               <div className="flex items-center space-x-4 mt-2">
                  <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">Patient ID: {user.uid.slice(0, 8)}</p>
                  {profile?.abhaId && (
                    <div className="bg-blue-50 text-blue-600 px-3 py-1 rounded-lg text-[10px] font-black tracking-widest uppercase border border-blue-100 flex items-center">
                       <ShieldCheck className="w-3 h-3 mr-1" /> ABHA ID: {profile.abhaId}
                    </div>
                  )}
               </div>
            </div>
            
            <div className="flex items-center space-x-4">
               {profile?.isAdmin && (
                 <Link to="/admin" className="bg-[#14A098] text-white px-6 py-4 rounded-2xl font-black text-sm shadow-xl shadow-teal-500/10 hover:bg-[#14A098]/90 transition-all flex items-center">
                    <ShieldCheck className="w-5 h-5 mr-2" /> Admin Panel
                 </Link>
               )}
               <div className="relative group">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" />
                  <input type="text" placeholder="Search my records..." className="bg-white border-none py-4 px-12 rounded-2xl font-bold outline-none ring-4 ring-transparent focus:ring-blue-100 transition-all text-sm w-72" />
               </div>
               <button className="bg-white p-4 rounded-2xl text-gray-400 relative">
                  <Bell className="w-6 h-6" />
                  <div className="absolute top-4 right-4 w-2 h-2 bg-[#14A098] rounded-full border-2 border-white"></div>
               </button>
            </div>
         </header>

         {/* Stats */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-[#14A098] text-white p-8 rounded-[2.5rem] shadow-xl shadow-[#14A098]/10">
               <Calendar className="w-10 h-10 mb-6" />
               <p className="text-xs font-black uppercase tracking-widest opacity-60 mb-2">Next Appointment</p>
               <h3 className="text-2xl font-black">12 May, 2024</h3>
               <p className="text-sm font-bold opacity-80 mt-1">with Dr. Sharma (Cardiology)</p>
            </div>
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
               <FileText className="text-[#0A3D62] w-10 h-10 mb-6" />
               <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Pending Reports</p>
               <h3 className="text-2xl font-black text-[#0A3D62]">2 New Reports</h3>
               <p className="text-sm font-bold text-[#14A098] mt-1 cursor-pointer">View Results →</p>
            </div>
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
               <Pill className="text-[#0A3D62] w-10 h-10 mb-6" />
               <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Ongoing Meds</p>
               <h3 className="text-2xl font-black text-[#0A3D62]">Metformin, Aspirin</h3>
               <p className="text-sm font-bold text-red-400 mt-1 cursor-pointer">Refill Pharmacy →</p>
            </div>
         </div>

         <div className="grid lg:grid-cols-2 gap-12">
            {/* Appointments */}
            <div className="bg-white rounded-[3rem] p-10 border border-gray-100 shadow-sm">
               <div className="flex items-center justify-between mb-10">
                  <h2 className="text-2xl font-black text-[#0A3D62]">Recent Bookings</h2>
                  <Link to="/appointments" className="text-sm font-bold text-[#14A098]">Book New +</Link>
               </div>
               
               <div className="space-y-6">
                  {fetching ? <Activity className="animate-spin" /> : appointments.length > 0 ? appointments.map((app) => (
                    <div key={app.id} className="flex items-center justify-between p-6 bg-slate-50/50 rounded-2xl hover:bg-slate-50 transition-colors">
                       <div className="flex items-center space-x-6">
                          <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center">
                             <Calendar className="text-[#0A3D62] w-6 h-6" />
                          </div>
                          <div>
                             <h4 className="font-bold text-[#0A3D62]">{app.doctorName || 'General Consultation'}</h4>
                             <p className="text-xs font-bold text-gray-400 uppercase">{app.date} • {app.time}</p>
                          </div>
                       </div>
                       <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${app.status === 'confirmed' ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'}`}>{app.status}</span>
                    </div>
                  )) : (
                    <p className="text-gray-400 font-medium text-center py-10">No recent appointments found.</p>
                  )}
               </div>
            </div>

            {/* AI Health Insights */}
            <div className="bg-[#0A3D62] rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden">
               <div className="relative z-10">
                  <div className="w-14 h-14 bg-[#14A098] rounded-2xl flex items-center justify-center mb-8">
                     <Clock className="text-white w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-black leading-tight mb-6">AI Health Check <br/> is Ready.</h3>
                  <p className="text-blue-100/70 text-lg font-medium mb-10 leading-relaxed">
                    Based on your recent reports and medical history, our AI suggests you schedule a follow-up for your Routine Blood Sugar test.
                  </p>
                  <Link to="/ai-checker" className="inline-flex items-center bg-[#14A098] text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform">
                     Analyze Symptoms <ChevronRight className="ml-2 w-5 h-5" />
                  </Link>
               </div>
               <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            </div>
         </div>
      </main>
    </div>
  );
}

import { Link } from 'react-router-dom';
