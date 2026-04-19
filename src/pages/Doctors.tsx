import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Stethoscope, Calendar, User, Clock, MapPin, Search, ChevronRight, Star } from 'lucide-react';
import { DOCTORS, DEPARTMENTS } from '../data';
import { Link } from 'react-router-dom';

export default function Doctors() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');
  const [filteredDoctors, setFilteredDoctors] = useState(DOCTORS);

  useEffect(() => {
    const filtered = DOCTORS.filter(doc => {
      const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           doc.deptName.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDept = selectedDept === 'All' || doc.deptName === selectedDept;
      return matchesSearch && matchesDept;
    });
    setFilteredDoctors(filtered);
  }, [searchTerm, selectedDept]);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <section className="bg-[#0A3D62] pt-20 pb-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-black mb-6">Our Exceptional Doctors</h1>
          <p className="text-xl text-blue-100/80 max-w-2xl mx-auto leading-relaxed">
            Consult with world-renowned specialists with decades of clinical experience and millions of shared patient stories.
          </p>
          
          <div className="mt-12 max-w-4xl mx-auto relative group">
            <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
              <Search className="text-gray-400 group-hover:text-[#14A098] transition-colors" />
            </div>
            <input 
              type="text" 
              placeholder="Search by specialty, doctor name, and qualification..." 
              className="w-full bg-white text-gray-900 py-6 px-16 rounded-full shadow-2xl focus:ring-4 focus:ring-[#14A098]/30 transition-all outline-none font-medium text-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Filters & Grid */}
      <div className="max-w-7xl mx-auto px-4 -mt-10 mb-12">
        <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100">
           <div className="flex flex-wrap gap-2 mb-10 overflow-x-auto pb-2 no-scrollbar">
              <button 
                onClick={() => setSelectedDept('All')}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${selectedDept === 'All' ? 'bg-[#0A3D62] text-white shadow-lg' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
              >
                All Doctors
              </button>
              {DEPARTMENTS.map(dept => (
                <button 
                  key={dept.id}
                  onClick={() => setSelectedDept(dept.name)}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap ${selectedDept === dept.name ? 'bg-[#0A3D62] text-white shadow-lg' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
                >
                  {dept.name}
                </button>
              ))}
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDoctors.map(doctor => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  key={doctor.id} 
                  className="group bg-white rounded-3xl border border-gray-100 p-6 hover:shadow-2xl hover:border-[#14A098]/30 transition-all duration-300"
                >
                   <div className="flex items-start space-x-6 mb-6">
                      <div className="relative">
                        <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-300">
                          <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-green-500 border-4 border-white w-6 h-6 rounded-full" title="Online now"></div>
                      </div>
                      <div>
                        <div className="flex items-center text-[#14A098] bg-[#14A098]/5 self-start px-2 py-0.5 rounded-md mb-2">
                           <Star className="w-3 h-3 fill-current mr-1" />
                           <span className="text-[10px] font-black uppercase tracking-tighter">Highly Rated</span>
                        </div>
                        <Link to={`/doctors/${doctor.id}`}>
                           <h3 className="text-xl font-bold text-[#0A3D62] leading-tight mb-1 hover:text-[#14A098] transition-colors">{doctor.name}</h3>
                        </Link>
                        <p className="text-sm font-bold text-gray-400">{doctor.qualification}</p>
                        <p className="inline-block mt-2 px-2 py-0.5 bg-[#0A3D62]/5 text-[#0A3D62] text-[10px] font-bold rounded uppercase tracking-widest">{doctor.deptName}</p>
                      </div>
                   </div>

                   <p className="text-gray-500 text-sm line-clamp-2 mb-6 h-10">
                     {doctor.bio}
                   </p>

                   <div className="grid grid-cols-2 gap-4 mb-6">
                     <div className="flex items-center space-x-2">
                       <Clock className="w-4 h-4 text-gray-400" />
                       <span className="text-xs font-bold text-gray-600">{doctor.experience} Yrs Exp.</span>
                     </div>
                     <div className="flex items-center space-x-2">
                       <Stethoscope className="w-4 h-4 text-gray-400" />
                       <span className="text-xs font-bold text-gray-600">₹{doctor.fee} Fee</span>
                     </div>
                   </div>

                   <div className="bg-gray-50 rounded-2xl p-4 mb-6 flex justify-between items-center group-hover:bg-[#14A098]/5 transition-colors">
                      <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Availability</p>
                        <p className="text-xs font-bold text-[#0A3D62]">{doctor.availability}</p>
                      </div>
                      <MapPin className="text-[#14A098] w-5 h-5 opacity-40" />
                   </div>

                   <Link to={`/appointments?doctor=${doctor.id}`} className="w-full bg-[#0A3D62] text-white py-3 rounded-xl font-bold flex items-center justify-center group-hover:bg-[#14A098] transition-all shadow-lg shadow-blue-500/10">
                    Book Now <ChevronRight className="ml-2 w-4 h-4" />
                   </Link>
                </motion.div>
              ))}
           </div>
           
           {filteredDoctors.length === 0 && (
             <div className="py-20 text-center">
               <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                 <Search className="w-8 h-8 text-gray-300" />
               </div>
               <h3 className="text-2xl font-bold text-[#0A3D62]">No doctors found</h3>
               <p className="text-gray-500 mt-2">Try adjusting your filters or search keywords.</p>
             </div>
           )}
        </div>
      </div>
    </div>
  );
}
