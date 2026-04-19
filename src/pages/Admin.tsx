import { useAuth } from '../lib/AuthContext';
import { Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Users, Calendar, Activity, TrendingUp, AlertCircle, 
  Settings, Database, Heart, Mail, Bell, Search,
  ChevronRight, ArrowUpRight, ArrowDownRight
} from 'lucide-react';
import { DEPARTMENTS, DOCTORS, SURGERIES, LAB_TESTS } from '../data';

export default function Admin() {
  const { user, profile, isAdmin, loading } = useAuth();

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (!user || !isAdmin) return <Navigate to="/auth" />;

  const stats = [
    { label: 'Total Patients', value: '1,250', trend: '+12%', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Active Doctors', value: DOCTORS.length.toString(), trend: '+2%', icon: Activity, color: 'text-[#14A098]', bg: 'bg-teal-50' },
    { label: 'Appointments', value: '45', trend: '+5%', icon: Calendar, color: 'text-purple-600', bg: 'bg-purple-50' },
    { label: 'Revenue', value: '₹4.5L', trend: '+18%', icon: TrendingUp, color: 'text-orange-600', bg: 'bg-orange-50' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-72 bg-[#0A3D62] text-white hidden lg:flex flex-col">
        <div className="p-8">
           <div className="flex items-center space-x-3 mb-10">
              <div className="w-10 h-10 bg-[#14A098] rounded-xl flex items-center justify-center">
                 <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">Admin<span className="text-[#14A098]">Panel</span></span>
           </div>
           
           <nav className="space-y-2">
              {[
                { label: 'Dashboard', icon: Activity, active: true },
                { label: 'Patients', icon: Users },
                { label: 'Appointments', icon: Calendar },
                { label: 'Doctors Inventory', icon: Database },
                { label: 'AI Health Monitoring', icon: Heart },
                { label: 'Settings', icon: Settings },
              ].map((item, i) => (
                <button 
                  key={i}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                    item.active ? 'bg-[#14A098] text-white shadow-lg' : 'text-slate-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              ))}
           </nav>
        </div>
        
        <div className="mt-auto p-8 border-t border-white/10">
           <div className="bg-white/5 rounded-2xl p-4">
              <div className="flex items-center space-x-3 mb-3">
                 <div className="w-8 h-8 rounded-full bg-[#14A098] flex items-center justify-center text-xs font-bold uppercase">
                    {profile?.name?.charAt(0)}
                 </div>
                 <div>
                    <div className="text-xs font-bold">{profile?.name}</div>
                    <div className="text-[10px] text-slate-400">System Administrator</div>
                 </div>
              </div>
           </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-8 lg:p-12 overflow-y-auto">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
           <div>
              <h1 className="text-4xl font-black text-[#0A3D62] tracking-tight mb-2">Hospital Command Center</h1>
              <p className="text-gray-500 font-medium">Monitoring DhanvantariMaharajHospital operations in real-time.</p>
           </div>
           
           <div className="flex items-center space-x-4">
              <button className="relative p-3 bg-white rounded-2xl border border-slate-200 text-slate-400 hover:text-[#0A3D62] transition-colors">
                 <Bell className="w-6 h-6" />
                 <span className="absolute top-2 right-2 w-3 h-3 bg-red-500 border-2 border-white rounded-full"></span>
              </button>
              <div className="h-10 w-px bg-slate-200"></div>
              <div className="bg-[#14A098]/10 text-[#14A098] px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest border border-[#14A098]/20">
                 System: Online
              </div>
           </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
           {stats.map((stat, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100"
             >
                <div className="flex justify-between items-start mb-6">
                   <div className={`p-4 rounded-2xl ${stat.bg} ${stat.color}`}>
                      <stat.icon className="w-7 h-7" />
                   </div>
                   <div className="flex items-center text-xs font-bold text-green-500 bg-green-50 px-2 py-1 rounded-lg">
                      <ArrowUpRight className="w-3 h-3 mr-1" /> {stat.trend}
                   </div>
                </div>
                <div className="text-3xl font-black text-[#0A3D62] mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm font-bold uppercase tracking-wider">{stat.label}</div>
             </motion.div>
           ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
           {/* Recent Activity */}
           <div className="lg:col-span-2 space-y-8">
              <section className="bg-white rounded-[3rem] border border-slate-100 p-10">
                 <div className="flex items-center justify-between mb-10">
                    <h2 className="text-2xl font-black text-[#0A3D62]">Recent Appointments</h2>
                    <button className="text-[#14A098] text-sm font-bold hover:underline">View All</button>
                 </div>
                 
                 <div className="space-y-6">
                    {[1, 2, 3, 4, 5].map((_, i) => (
                      <div key={i} className="flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100 group">
                         <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 font-bold">
                               {String.fromCharCode(65 + i)}
                            </div>
                            <div>
                               <div className="font-bold text-[#0A3D62]">Patient #{1024 + i}</div>
                               <div className="text-xs text-gray-400 font-medium">Appointed to Dr. {DOCTORS[i].name}</div>
                            </div>
                         </div>
                         <div className="text-right">
                            <div className="text-sm font-bold text-[#0A3D62]">Today, 10:30 AM</div>
                            <div className="text-[10px] font-black uppercase tracking-widest text-[#14A098]">General Checkup</div>
                         </div>
                      </div>
                    ))}
                 </div>
              </section>
           </div>

           {/* Quick Actions & Alerts */}
           <div className="space-y-8">
              <section className="bg-[#0A3D62] rounded-[3rem] p-10 text-white shadow-xl shadow-blue-900/20">
                 <h3 className="text-xl font-black mb-8">System Alerts</h3>
                 <div className="space-y-4">
                    <div className="bg-white/10 p-5 rounded-2xl border border-white/10 flex items-start space-x-3">
                       <AlertCircle className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                       <div>
                          <div className="text-sm font-bold">Low Lab Supplies</div>
                          <div className="text-xs text-slate-400">Inventory for Hematology reagents is below 15%</div>
                       </div>
                    </div>
                    <div className="bg-white/10 p-5 rounded-2xl border border-white/10 flex items-start space-x-3">
                       <Mail className="w-5 h-5 text-[#14A098] shrink-0 mt-0.5" />
                       <div>
                          <div className="text-sm font-bold">New ABHA Sync Request</div>
                          <div className="text-xs text-slate-400">12 new patients requesting ABHA record integration</div>
                       </div>
                    </div>
                 </div>
              </section>

              <section className="bg-white rounded-[3rem] border border-slate-100 p-10">
                 <h3 className="text-xl font-black text-[#0A3D62] mb-8">Quick Actions</h3>
                 <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: 'Register Doctor', icon: UserPlus },
                      { label: 'Export Reports', icon: FileText },
                      { label: 'Update DB', icon: Database },
                      { label: 'Emergency Msg', icon: AlertTriangle }
                    ].map((item, i) => (
                      <button key={i} className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-3xl hover:bg-[#14A098] hover:text-white transition-all group">
                         <div className="p-3 bg-white rounded-xl shadow-sm mb-3 group-hover:bg-[#14A098]/10">
                            {item.icon && <item.icon className="w-5 h-5 text-[#0A3D62] group-hover:text-white" />}
                         </div>
                         <span className="text-[10px] font-black uppercase text-center">{item.label}</span>
                      </button>
                    ))}
                 </div>
              </section>
           </div>
        </div>
      </main>
    </div>
  );
}

import { ShieldCheck, UserPlus, FileText, AlertTriangle } from 'lucide-react';
