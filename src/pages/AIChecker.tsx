import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Bot, User, Sparkles, BrainCircuit, Activity, Stethoscope, ChevronRight, X } from 'lucide-react';
import { analyzeSymptoms, chatHealthQuery } from '../services/gemini';
import { Link } from 'react-router-dom';

export default function AIChecker() {
  const [symptoms, setSymptoms] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<any>(null);
  
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState<{ role: 'user' | 'bot', text: string }[]>([
    { role: 'bot', text: 'Hello! I am DhanvantariAI, your expert health guide. How can I assist you today?' }
  ]);
  const [isChatting, setIsChatting] = useState(false);

  const handleSymptomCheck = async () => {
    if (!symptoms.trim()) return;
    setIsAnalyzing(true);
    const result = await analyzeSymptoms(symptoms);
    setAnalysis(result);
    setIsAnalyzing(false);
  };

  const handleChat = async () => {
    if (!chatInput.trim()) return;
    const userMsg = { role: 'user', text: chatInput } as const;
    setChatMessages([...chatMessages, userMsg]);
    setChatInput('');
    setIsChatting(true);
    
    const response = await chatHealthQuery(chatInput);
    setChatMessages(prev => [...prev, { role: 'bot', text: response || "I'm sorry, I'm having trouble responding right now." }]);
    setIsChatting(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 lg:py-20 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
        
        {/* Symptom Checker Tool */}
        <section className="space-y-8">
           <div className="bg-white rounded-[3rem] p-10 shadow-xl border border-blue-50 relative overflow-hidden">
             <div className="relative z-10">
                <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-6">
                  <BrainCircuit className="text-blue-600 w-9 h-9" />
                </div>
                <h2 className="text-3xl font-black text-[#0A3D62] mb-4 tracking-tight">AI Symptom Checker</h2>
                <p className="text-gray-500 mb-8 font-medium">Describe how you feel, and our AI will suggest the right medical department for you.</p>
                
                <textarea 
                  value={symptoms}
                  onChange={(e) => setSymptoms(e.target.value)}
                  placeholder="Example: I have a persistent headache and sensitivity to light for the last 2 days..."
                  className="w-full h-40 bg-slate-50 rounded-3xl p-6 border-none focus:ring-4 focus:ring-blue-500/20 transition-all text-lg font-medium resize-none mb-6 outline-none"
                />
                
                <button 
                  onClick={handleSymptomCheck}
                  disabled={isAnalyzing || !symptoms.trim()}
                  className="w-full bg-[#0A3D62] hover:bg-blue-600 disabled:bg-gray-300 text-white py-5 rounded-2xl font-black text-xl transition-all shadow-xl shadow-blue-500/20 flex items-center justify-center"
                >
                  {isAnalyzing ? (
                    <><Activity className="animate-spin mr-3" /> Analyzing...</>
                  ) : (
                    <><Sparkles className="mr-3" /> Analyze Symptoms</>
                  )}
                </button>
             </div>
             
             {/* Decorative */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
           </div>

           <AnimatePresence>
             {analysis && (
               <motion.div 
                 initial={{ opacity: 0, y: 30 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, scale: 0.95 }}
                 className="bg-[#0A3D62] rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden"
               >
                 <button onClick={() => setAnalysis(null)} className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors">
                   <X className="w-6 h-6" />
                 </button>
                 
                 <div className="flex items-center space-x-4 mb-8">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                       <Stethoscope className="text-white w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-black">Analysis Result</h3>
                 </div>
                 
                 <div className="space-y-6">
                    <div>
                      <span className="text-blue-200 text-xs font-black uppercase tracking-widest">Recommended Department</span>
                      <p className="text-4xl font-black text-[#14A098] mt-1">{analysis.department}</p>
                    </div>
                    <div>
                      <span className="text-blue-200 text-xs font-black uppercase tracking-widest">AI Reasoning</span>
                      <p className="text-blue-50 font-medium leading-relaxed mt-2">{analysis.reason}</p>
                    </div>
                    
                    <div className="pt-8 flex gap-4">
                      <Link to={`/doctors?dept=${analysis.department}`} className="flex-1 bg-[#14A098] text-white p-4 rounded-xl font-bold flex items-center justify-center hover:scale-105 transition-transform">
                        Find Specialists <ChevronRight className="ml-2 w-5 h-5" />
                      </Link>
                      <Link to="/appointments" className="flex-1 bg-white text-[#0A3D62] p-4 rounded-xl font-bold flex items-center justify-center hover:scale-105 transition-transform">
                        Book Visit
                      </Link>
                    </div>
                 </div>
               </motion.div>
             )}
           </AnimatePresence>
        </section>

        {/* Chatbot Interface */}
        <section className="flex flex-col bg-white rounded-[3rem] shadow-xl overflow-hidden border border-gray-100 h-[800px]">
           <div className="p-8 bg-[#0A3D62] text-white flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center relative">
                 <Bot className="w-7 h-7" />
                 <div className="absolute top-1 right-1 w-3 h-3 bg-green-500 border-2 border-[#0A3D62] rounded-full"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold">DhanvantariAI Health Guide</h3>
                <p className="text-xs text-blue-200/70 font-semibold uppercase tracking-tighter">Enterprise Health Intelligence</p>
              </div>
           </div>

           <div className="flex-1 overflow-y-auto p-8 space-y-6 bg-slate-50/50">
              {chatMessages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                   <div className={`max-w-[80%] p-5 rounded-[2rem] text-sm font-medium leading-relaxed shadow-sm ${msg.role === 'user' ? 'bg-[#14A098] text-white rounded-tr-none' : 'bg-white text-slate-800 rounded-tl-none border border-slate-100'}`}>
                      {msg.text}
                   </div>
                </div>
              ))}
              {isChatting && (
                <div className="flex justify-start">
                  <div className="bg-white p-4 rounded-full flex space-x-1 shadow-sm px-6">
                    <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  </div>
                </div>
              )}
           </div>

           <div className="p-6 bg-white border-t border-gray-100 flex items-center space-x-4">
              <input 
                type="text" 
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleChat()}
                placeholder="Ask AuraBot anything..." 
                className="flex-1 bg-slate-50 border-none rounded-full px-8 py-4 text-sm font-semibold focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
              />
              <button 
                onClick={handleChat}
                disabled={isChatting || !chatInput.trim()}
                className="w-12 h-12 bg-[#0A3D62] text-white rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-lg"
              >
                <Send className="w-5 h-5" />
              </button>
           </div>
        </section>

      </div>
    </div>
  );
}
