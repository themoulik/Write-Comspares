import { ShieldCheck, Smartphone, Laptop, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Insurance() {
  const providers = [
    {
      name: "OneAssure / Servify",
      desc: "Provides comprehensive accidental and liquid damage protection plans for smartphones, laptops, and smart wearables with doorstep pickup.",
      coverage: "Screen Damage, Liquid Spill, Mechanical Breakdown"
    },
    {
      name: "AppleCare+ / Brand Care",
      desc: "Official manufacturer-backed extended warranty and accidental damage protection covering unlimited repairs for handling damages.",
      coverage: "Genuine Parts, Priority Support, Battery Replacement"
    },
    {
      name: "Bajaj Finserv Gadget Care",
      desc: "Pocket-safe insurance policies covering financial loss due to theft, burglary, and accidental breakdown of electronic devices.",
      coverage: "Theft Protection, Fire Damage, Worldwide Cover"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-sm mb-4">
            <ShieldCheck size={18} /> Device Protection Hub
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Electronic Device Insurance</h1>
          <p className="text-slate-400 max-w-xl mx-auto">
            Secure your expensive smartphones, laptops, and gadgets against accidental damage, liquid spills, and theft with top verified insurance partners.
          </p>
        </motion.div>

        <div className="space-y-6">
          {providers.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-lg hover:border-blue-500/50 transition"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-blue-400">{item.name}</h3>
                <span className="bg-emerald-500/10 text-emerald-400 text-xs px-3 py-1 rounded-full border border-emerald-500/20">Verified Partner</span>
              </div>
              <p className="text-slate-300 text-sm mb-4">{item.desc}</p>
              <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-950 p-3 rounded-xl border border-slate-800">
                <CheckCircle size={14} className="text-blue-500" />
                <span><strong className="text-slate-300">Key Coverage:</strong> {item.coverage}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}