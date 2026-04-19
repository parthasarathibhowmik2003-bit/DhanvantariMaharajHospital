import { Link } from 'react-router-dom';
import { Heart, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ShieldCheck, Award } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0b1b2b] text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-[#14A098] flex items-center justify-center rounded-xl">
                <Heart className="text-white w-8 h-8" />
              </div>
              <span className="text-3xl font-black tracking-tighter">DMHospital</span>
            </Link>
            <p className="text-gray-400 text-lg leading-relaxed">
              Pioneering the future of digital healthcare in India. 25+ years of excellence in multi-specialty patient care.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-[#14A098] hover:border-[#14A098] transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8">Quick Navigation</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><Link to="/departments" className="hover:text-[#14A098] transition-colors">Medical Specialties</Link></li>
              <li><Link to="/doctors" className="hover:text-[#14A098] transition-colors">Our Doctors</Link></li>
              <li><Link to="/surgeries" className="hover:text-[#14A098] transition-colors">Surgical Center</Link></li>
              <li><Link to="/labs" className="hover:text-[#14A098] transition-colors">Labs & Diagnostics</Link></li>
              <li><Link to="/pharmacy" className="hover:text-[#14A098] transition-colors">DM Pharmacy</Link></li>
              <li><Link to="/ai-checker" className="hover:text-[#14A098] transition-colors">AI Symptom Checker</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8">Patient Resources</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><Link to="/appointments" className="hover:text-[#14A098] transition-colors">Book an Appointment</Link></li>
              <li><Link to="/dashboard" className="hover:text-[#14A098] transition-colors">Patient Dashboard</Link></li>
              <li><Link to="/" className="hover:text-[#14A098] transition-colors">International Patients</Link></li>
              <li><Link to="/" className="hover:text-[#14A098] transition-colors">Medical Tourism</Link></li>
              <li><Link to="/" className="hover:text-[#14A098] transition-colors">Insurance Partners</Link></li>
              <li><Link to="/" className="hover:text-[#14A098] transition-colors">Health Packages</Link></li>
            </ul>
          </div>

          <div className="bg-[#14A098]/10 p-8 rounded-[2rem] border border-[#14A098]/20">
            <h4 className="text-xl font-bold mb-6 text-[#14A098]">Global HQ</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <MapPin className="text-[#14A098] w-6 h-6 shrink-0" />
                <span className="text-gray-300">Phase 3, Cyber City, Gurgaon, Haryana, 122002</span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone className="text-[#14A098] w-6 h-6 shrink-0" />
                <span className="text-gray-300">+91 (800) 444 9999</span>
              </li>
              <li className="flex items-center space-x-4">
                <Mail className="text-[#14A098] w-6 h-6 shrink-0" />
                <span className="text-gray-300">care@dmhospital.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex items-center space-x-6">
                 <div className="flex items-center space-x-2 grayscale opacity-40">
                   <ShieldCheck className="w-5 h-5" />
                   <span className="text-xs font-bold uppercase tracking-widest">ISO 9001:2015</span>
                 </div>
                 <div className="flex items-center space-x-2 grayscale opacity-40">
                   <Award className="w-5 h-5" />
                   <span className="text-xs font-bold uppercase tracking-widest">JCI ACCREDITED</span>
                 </div>
              </div>
              <div className="h-4 w-px bg-white/10 hidden md:block"></div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em]">
                 Leading Multi-Specialty Hospital in India
              </div>
           </div>
          <p className="text-gray-500 text-sm font-medium">
            © 2026 DhanvantariMaharajHospital Group. All rights reserved. 
            <Link to="/" className="ml-4 hover:text-white">Privacy Policy</Link>
            <Link to="/" className="ml-4 hover:text-white">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
