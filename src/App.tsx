import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './lib/AuthContext';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import AIChecker from './pages/AIChecker';
import Appointments from './pages/Appointments';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import Departments from './pages/Departments';
import Pharmacy from './pages/Pharmacy';
import Labs from './pages/Labs';
import Surgeries from './pages/Surgeries';
import Admin from './pages/Admin';
import Emergency from './pages/Emergency';
import DoctorProfile from './pages/DoctorProfile';

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="flex flex-col min-h-screen font-sans selection:bg-[#14A098] selection:text-white">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/doctors" element={<Doctors />} />
              <Route path="/doctors/:id" element={<DoctorProfile />} />
              <Route path="/departments" element={<Departments />} />
              <Route path="/departments/:slug" element={<Departments />} />
              <Route path="/ai-checker" element={<AIChecker />} />
              <Route path="/appointments" element={<Appointments />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/labs" element={<Labs />} />
              <Route path="/pharmacy" element={<Pharmacy />} />
              <Route path="/surgeries" element={<Surgeries />} />
              <Route path="/emergency" element={<Emergency />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}
