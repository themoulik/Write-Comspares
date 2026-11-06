import { Mail, LifeBuoy, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Support() {
  return (
    <div className="min-h-screen bg-slate-950 text-white py-16 px-4 flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-2xl max-w-lg w-full text-center"
      >
        <div className="w-16 h-16 bg-blue-600/20 text-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-blue-500/30">
          <LifeBuoy size={32} />
        </div>
        <h1 className="text-2xl font-bold mb-2">Need Help or Assistance?</h1>
        <p className="text-slate-400 text-sm mb-8">
          Have questions regarding device specifications, insurance, or website collaborations? Reach out directly via email.
        </p>

        <div className="bg-slate-950 border border-slate-800 p-4 rounded-2xl flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Mail className="text-blue-500" size={20} />
            <span className="text-sm font-medium text-slate-200">themoulikofficial@gmail.com</span>
          </div>
          <a 
            href="mailto:themoulikofficial@gmail.com" 
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-xs font-semibold rounded-xl transition shadow-lg shadow-blue-600/30 flex items-center gap-1.5"
          >
            <Send size={14} /> Send Email
          </a>
        </div>

        <p className="text-xs text-slate-500">We typically reply within 24 business hours.</p>
      </motion.div>
    </div>
  );
}