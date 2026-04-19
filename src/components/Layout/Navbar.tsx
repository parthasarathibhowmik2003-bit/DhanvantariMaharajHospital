import { Link } from 'react-router-dom';
import { Heart, Activity, Phone, ShieldCheck, MapPin, Search, User, Menu, X, Bell, Languages } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../../lib/AuthContext';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const { user, profile } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-[#0A3D62] flex items-center justify-center rounded-xl">
                <Heart className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold text-[#0A3D62] tracking-tight">DhanvantariMaharaj<span className="text-[#14A098]">Hospital</span></span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="/emergency" className="text-red-600 hover:text-red-700 font-black animate-pulse transition-colors">Emergency</Link>
            <Link to="/departments" className="text-gray-600 hover:text-[#0A3D62] font-medium transition-colors">Departments</Link>
            <Link to="/doctors" className="text-gray-600 hover:text-[#0A3D62] font-medium transition-colors">Doctors</Link>
            <Link to="/surgeries" className="text-gray-600 hover:text-[#0A3D62] font-medium transition-colors">Surgeries</Link>
            <Link to="/labs" className="text-gray-600 hover:text-[#0A3D62] font-medium transition-colors">Labs</Link>
            <Link to="/pharmacy" className="text-gray-600 hover:text-[#0A3D62] font-medium transition-colors">Pharmacy</Link>
            
            <div className="h-6 w-px bg-gray-200"></div>

            <div className="flex items-center space-x-2 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
              <Languages className="w-4 h-4 text-[#14A098]" />
              <select 
                onChange={(e) => changeLanguage(e.target.value)} 
                value={i18n.language}
                className="bg-transparent text-xs font-bold text-[#0A3D62] outline-none cursor-pointer"
              >
                <option value="en">EN</option>
                <option value="hi">HI</option>
                <option value="bn">BN</option>
              </select>
            </div>

            {user ? (
              <div className="flex items-center space-x-4">
                <Link to="/dashboard" className="p-2 text-gray-400 hover:text-[#0A3D62] transition-colors">
                  <Bell className="w-5 h-5" />
                </Link>
                <Link to="/dashboard" className="flex items-center space-x-2 bg-gray-50 border border-gray-100 py-1.5 px-3 rounded-full hover:bg-gray-100 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-[#14A098] flex items-center justify-center text-white text-xs font-bold uppercase">
                    {profile?.name?.charAt(0) || user.email?.charAt(0)}
                  </div>
                  <span className="text-sm font-medium text-[#0A3D62]">{profile?.name || 'Dashboard'}</span>
                </Link>
              </div>
            ) : (
              <Link to="/auth" className="bg-[#0A3D62] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#0A3D62]/90 transition-all shadow-md shadow-blue-500/10">
                Sign In
              </Link>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[#0A3D62] p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-6 space-y-4 animate-in slide-in-from-top duration-300">
           <Link to="/emergency" className="block text-red-600 font-black" onClick={() => setIsOpen(false)}>EMERGENCY</Link>
           <Link to="/departments" className="block text-gray-600 font-medium" onClick={() => setIsOpen(false)}>Departments</Link>
           <Link to="/doctors" className="block text-gray-600 font-medium" onClick={() => setIsOpen(false)}>Doctors</Link>
           <Link to="/surgeries" className="block text-gray-600 font-medium" onClick={() => setIsOpen(false)}>Surgeries</Link>
           <Link to="/labs" className="block text-gray-600 font-medium" onClick={() => setIsOpen(false)}>Labs</Link>
           <Link to="/pharmacy" className="block text-gray-600 font-medium" onClick={() => setIsOpen(false)}>Pharmacy</Link>
           <Link to={user ? "/dashboard" : "/auth"} className="block bg-[#0A3D62] text-white py-3 rounded-xl text-center font-bold" onClick={() => setIsOpen(false)}>
            {user ? "Patient Dashboard" : "Sign In"}
           </Link>
        </div>
      )}
      
      {/* Sticky Emergency Banner */}
      <div className="bg-red-600 text-white py-1 px-4 text-center text-xs font-bold flex items-center justify-center space-x-2">
        <Activity className="w-3 h-3 animate-pulse" />
        <span>EMERGENCY HELPLINE (24/7): +91-800-444-9999</span>
        <Activity className="w-3 h-3 animate-pulse" />
      </div>
    </nav>
  );
}
