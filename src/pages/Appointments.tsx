import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, User, Phone, Clipboard, CheckCircle, Search, CreditCard, ShieldCheck } from 'lucide-react';
import { useAuth } from '../lib/AuthContext';
import { DOCTORS, DEPARTMENTS } from '../data';
import { db } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function Appointments() {
  const { user, profile } = useAuth();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    doctorId: searchParams.get('doctor') || '',
    date: '',
    time: '',
    patientName: profile?.name || '',
    phone: profile?.phone || '',
    symptoms: '',
    abhaId: profile?.abhaId || '',
  });

  const [step, setStep] = useState(1);
  const [isBooking, setIsBooking] = useState(false);
  const [isAbhaVerifying, setIsAbhaVerifying] = useState(false);

  const selectedDoctor = DOCTORS.find(d => d.id === formData.doctorId);

  const handleAbhaVerify = () => {
    if (!formData.abhaId) return;
    setIsAbhaVerifying(true);
    // Simulate ABHA API check
    setTimeout(() => {
      setIsAbhaVerifying(false);
      setStep(2);
    }, 1500);
  };

  const handleBook = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      navigate('/auth?redirect=appointments');
      return;
    }
    
    setIsBooking(true);
    try {
      await addDoc(collection(db, 'appointments'), {
        ...formData,
        patientId: user.uid,
        doctorName: selectedDoctor?.name,
        deptName: selectedDoctor?.deptName,
        status: 'pending',
        createdAt: serverTimestamp(),
      });
      setStep(3);
    } catch (error) {
      console.error("Booking error:", error);
    }
    setIsBooking(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 lg:py-24 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Progress Bar */}
        <div className="flex items-center justify-between mb-16 max-w-lg mx-auto">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${step >= s ? 'bg-[#14A098] text-white shadow-lg' : 'bg-white text-gray-300 border border-gray-100'}`}>
                {step > s ? <CheckCircle className="w-6 h-6" /> : s}
              </div>
              {s < 3 && <div className={`w-20 h-1 transition-all ${step > s ? 'bg-[#14A098]' : 'bg-gray-200'}`}></div>}
            </div>
          ))}
        </div>

        {step === 1 && (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-[3rem] p-10 lg:p-16 shadow-xl border border-gray-50">
             <div className="mb-12 text-center">
                <h1 className="text-4xl font-black text-[#0A3D62] mb-4">Book Your Consultation</h1>
                <p className="text-gray-500 font-medium">Verify your identity using ABHA (Ayushman Bharat Health Account) for seamless digital health records.</p>
             </div>

             <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                   <div className="bg-blue-50/50 p-8 rounded-3xl border border-blue-100/50">
                      <div className="w-12 h-12 bg-[#0A3D62] rounded-xl flex items-center justify-center mb-6">
                        <CreditCard className="text-white w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-black text-[#0A3D62] mb-2 text-wrap">Verify via ABHA Number</h3>
                      <p className="text-sm text-gray-500 mb-6">This will automatically fetch your medical history and speed up registration.</p>
                      <input 
                        type="text" 
                        placeholder="XX-XXXX-XXXX-XXXX" 
                        value={formData.abhaId}
                        onChange={(e) => setFormData({...formData, abhaId: e.target.value})}
                        className="w-full bg-white py-4 px-6 rounded-2xl border-none focus:ring-4 focus:ring-blue-100 outline-none text-lg font-bold tracking-[0.2em] mb-4"
                      />
                      <button 
                        onClick={handleAbhaVerify}
                        disabled={!formData.abhaId || isAbhaVerifying}
                        className="w-full bg-[#14A098] text-white py-4 rounded-2xl font-black shadow-lg hover:shadow-[#14A098]/30 transition-all flex items-center justify-center"
                      >
                        {isAbhaVerifying ? <Clock className="animate-spin mr-2" /> : 'Verify & Continue'}
                      </button>
                   </div>
                </div>

                <div className="flex flex-col justify-center">
                   <div className="bg-white p-8 rounded-3xl border-2 border-dashed border-gray-100 text-center space-y-6">
                      <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto">
                         <User className="text-gray-300 w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-400">Guest Booking</h3>
                      <p className="text-sm text-gray-400">Continue without ABHA. You'll need to fill in all details manually in the next step.</p>
                      <button onClick={() => setStep(2)} className="text-[#0A3D62] font-black underline underline-offset-8">Skip Verification for Now</button>
                   </div>
                </div>
             </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-white rounded-[3rem] p-10 lg:p-16 shadow-xl border border-gray-50">
             <form onSubmit={handleBook}>
                <div className="grid md:grid-cols-2 gap-10">
                   <div className="space-y-6">
                      <h3 className="text-2xl font-black text-[#0A3D62] flex items-center"><User className="mr-3 text-[#14A098]" /> Patient Information</h3>
                      <div className="space-y-4">
                         <input type="text" placeholder="Full Name" required value={formData.patientName} onChange={e => setFormData({...formData, patientName: e.target.value})} className="w-full bg-gray-50 p-5 rounded-2xl border-none outline-none focus:ring-4 focus:ring-[#14A098]/10 text-lg font-bold" />
                         <input type="tel" placeholder="Phone Number" required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full bg-gray-50 p-5 rounded-2xl border-none outline-none focus:ring-4 focus:ring-[#14A098]/10 text-lg font-bold" />
                         <textarea placeholder="Tell us about your symptoms..." required value={formData.symptoms} onChange={e => setFormData({...formData, symptoms: e.target.value})} className="w-full bg-gray-50 p-5 rounded-2xl border-none outline-none focus:ring-4 focus:ring-[#14A098]/10 text-lg font-bold h-32 resize-none" />
                      </div>
                   </div>

                   <div className="space-y-6">
                      <h3 className="text-2xl font-black text-[#0A3D62] flex items-center"><Calendar className="mr-3 text-[#14A098]" /> Schedule Details</h3>
                      <div className="space-y-4">
                         <select required value={formData.doctorId} onChange={e => setFormData({...formData, doctorId: e.target.value})} className="w-full bg-gray-50 p-5 rounded-2xl border-none outline-none focus:ring-4 focus:ring-[#14A098]/10 text-lg font-bold">
                            <option value="">Select Specialist</option>
                            {DOCTORS.map(d => <option key={d.id} value={d.id}>{d.name} ({d.deptName})</option>)}
                         </select>
                         <input type="date" required value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} className="w-full bg-gray-50 p-5 rounded-2xl border-none outline-none focus:ring-4 focus:ring-[#14A098]/10 text-lg font-bold" />
                         <select required value={formData.time} onChange={e => setFormData({...formData, time: e.target.value})} className="w-full bg-gray-50 p-5 rounded-2xl border-none outline-none focus:ring-4 focus:ring-[#14A098]/10 text-lg font-bold">
                            <option value="">Choose Time Slot</option>
                            <option value="09:00 AM">09:00 AM</option>
                            <option value="10:00 AM">10:00 AM</option>
                            <option value="11:30 AM">11:30 AM</option>
                            <option value="02:00 PM">02:00 PM</option>
                            <option value="04:30 PM">04:30 PM</option>
                         </select>
                      </div>

                      {selectedDoctor && (
                        <div className="bg-blue-50 p-6 rounded-3xl flex items-center justify-between mt-8 border border-blue-100">
                          <div>
                            <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Consultation Fee</p>
                            <p className="text-3xl font-black text-[#0A3D62]">₹{selectedDoctor.fee}</p>
                          </div>
                          <ShieldCheck className="text-[#14A098] w-10 h-10 opacity-50" />
                        </div>
                      )}
                   </div>
                </div>

                <div className="mt-12">
                   {!user && (
                     <div className="bg-orange-50 p-4 rounded-xl text-orange-800 text-sm font-bold mb-6 text-center border border-orange-100">
                        You'll be asked to sign in to finalize your booking
                     </div>
                   )}
                   <button 
                    disabled={isBooking}
                    className="w-full bg-[#0A3D62] text-white py-6 rounded-3xl font-black text-2xl shadow-2xl shadow-blue-500/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center disabled:bg-gray-400"
                   >
                     {isBooking ? <Clock className="animate-spin mr-3" /> : 'Confirm Appointment Now'}
                   </button>
                </div>
             </form>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-[3rem] p-10 lg:p-20 shadow-xl border border-gray-50 text-center">
             <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-green-500/20 animate-bounce">
                <CheckCircle className="text-white w-12 h-12" />
             </div>
             <h1 className="text-5xl font-black text-[#0A3D62] mb-4">You're All Set!</h1>
             <p className="text-xl text-gray-500 font-medium mb-12">Your appointment has been requested. We've sent a confirmation SMS to your phone. Our patient coordinator will call you shortly.</p>
             
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={() => navigate('/dashboard')} className="bg-[#0A3D62] text-white px-10 py-4 rounded-2xl font-black text-lg shadow-xl shadow-blue-500/10">Go to Dashboard</button>
                <button onClick={() => navigate('/')} className="bg-gray-50 text-gray-500 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-colors">Return Home</button>
             </div>
          </motion.div>
        )}

      </div>
    </div>
  );
}
