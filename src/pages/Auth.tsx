import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Lock, User, Phone, LogIn, Heart, ShieldCheck, ArrowRight } from 'lucide-react';
import { auth, db } from '../lib/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [abhaId, setAbhaId] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirect = searchParams.get('redirect') || '/dashboard';

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        const cred = await createUserWithEmailAndPassword(auth, email, password);
        await setDoc(doc(db, 'users', cred.user.uid), {
          uid: cred.user.uid,
          name,
          email,
          abhaId,
          createdAt: new Date().toISOString(),
          isAdmin: false
        });
      }
      navigate(redirect);
    } catch (err: any) {
      setError(err.message);
    }
    setLoading(false);
  };

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const cred = await signInWithPopup(auth, provider);
      await setDoc(doc(db, 'users', cred.user.uid), {
        uid: cred.user.uid,
        name: cred.user.displayName,
        email: cred.user.email,
        createdAt: new Date().toISOString(),
        isAdmin: false
      }, { merge: true });
      navigate(redirect);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100">
        
        <div className="p-12 lg:p-20 order-2 lg:order-1">
          <div className="mb-12">
            <Link to="/" className="flex items-center space-x-2 mb-8">
              <div className="w-10 h-10 bg-[#0A3D62] flex items-center justify-center rounded-xl">
                <Heart className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold text-[#0A3D62] tracking-tight">DhanvantariMaharajHospital</span>
            </Link>
            <h2 className="text-4xl font-black text-[#0A3D62] mb-2">{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
            <p className="text-gray-400 font-medium">{isLogin ? 'Access your medical dashboard securely.' : 'Join DhanvantariMaharajHospital for personalized healthcare experience.'}</p>
          </div>

          <form onSubmit={handleAuth} className="space-y-6">
            {!isLogin && (
              <div className="relative group">
                <User className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#14A098] transition-colors" />
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  required 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-50 border-none px-16 py-5 rounded-2xl font-bold outline-none focus:ring-4 focus:ring-[#14A098]/10 transition-all"
                />
              </div>
            )}
            {!isLogin && (
              <div className="relative group">
                <ShieldCheck className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#14A098] transition-colors" />
                <input 
                  type="text" 
                  placeholder="ABHA ID (National Health ID)" 
                  value={abhaId}
                  onChange={(e) => setAbhaId(e.target.value)}
                  className="w-full bg-slate-50 border-none px-16 py-5 rounded-2xl font-bold outline-none focus:ring-4 focus:ring-[#14A098]/10 transition-all"
                />
              </div>
            )}
            <div className="relative group">
              <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#14A098] transition-colors" />
              <input 
                type="email" 
                placeholder="Email Address" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-50 border-none px-16 py-5 rounded-2xl font-bold outline-none focus:ring-4 focus:ring-[#14A098]/10 transition-all"
              />
            </div>
            <div className="relative group">
              <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#14A098] transition-colors" />
              <input 
                type="password" 
                placeholder="Password" 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-50 border-none px-16 py-5 rounded-2xl font-bold outline-none focus:ring-4 focus:ring-[#14A098]/10 transition-all"
              />
            </div>

            {error && <p className="text-red-500 text-sm font-bold bg-red-50 p-4 rounded-xl border border-red-100">{error}</p>}

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-[#0A3D62] text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-blue-500/10 hover:bg-[#0A3D62]/90 transition-all flex items-center justify-center"
            >
              {loading ? 'Processing...' : (isLogin ? 'Sign In' : 'Create Account')}
            </button>
          </form>

          <div className="mt-8 relative flex items-center justify-center">
             <div className="w-full h-[1px] bg-gray-100 absolute"></div>
             <span className="bg-white px-4 text-gray-300 text-xs font-bold uppercase tracking-widest relative z-10">or continue with</span>
          </div>

          <button onClick={handleGoogleSignIn} className="w-full mt-8 border-2 border-gray-100 py-4 rounded-2xl font-bold flex items-center justify-center hover:bg-gray-50 transition-all flex items-center space-x-3">
             <img src="https://www.google.com/favicon.ico" className="w-5 h-5" /> 
             <span>Google Services</span>
          </button>

          <p className="mt-10 text-center text-gray-400 font-bold">
            {isLogin ? "Don't have an account?" : "Already have an account?"} 
            <button onClick={() => setIsLogin(!isLogin)} className="text-[#14A098] ml-2 underline underline-offset-4 decoration-2">
              {isLogin ? 'Register Now' : 'Login Instead'}
            </button>
          </p>
        </div>

        <div className="hidden lg:block relative overflow-hidden bg-[#0A3D62] text-white p-20 flex flex-col justify-end">
           <img src="https://picsum.photos/seed/hospital-login/1000/1200" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay" />
           <div className="relative z-10 space-y-8">
              <div className="w-20 h-20 bg-[#14A098] rounded-3xl flex items-center justify-center shadow-2xl">
                 <ShieldCheck className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-5xl font-black leading-tight">Secured Hospital <br/> Data Portal.</h3>
              <p className="text-blue-100/70 text-xl font-medium max-w-sm">
                Access your reports, prescriptions, and medical records from any device, anywhere in the world.
              </p>
              <div className="flex items-center space-x-4">
                 <div className="flex -space-x-3">
                    {[1,2,3,4].map(i => <img key={i} src={`https://i.pravatar.cc/100?u=${i}`} className="w-10 h-10 rounded-full border-2 border-[#0A3D62]" />)}
                 </div>
                 <span className="text-sm font-bold text-blue-200">1.2M+ Secured Patients</span>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

import { Link } from 'react-router-dom';
