import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Smartphone, Laptop, Tv, Watch, Headphones, Monitor, Sparkles, ArrowRight } from 'lucide-react';

export default function Home() {
  const categories = [
    { name: "Mobile", icon: <Smartphone size={24} />, path: "/category/mobile", active: true },
    { name: "Laptop", icon: <Laptop size={24} />, path: "/category/laptop", active: true },
    { name: "TV", icon: <Tv size={24} />, path: "/coming-soon", active: false },
    { name: "Monitor", icon: <Monitor size={24} />, path: "/coming-soon", active: false },
    { name: "Smartwatch", icon: <Watch size={24} />, path: "/coming-soon", active: false },
    { name: "TWS & Audio", icon: <Headphones size={24} />, path: "/coming-soon", active: false },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 text-center bg-gradient-to-b from-slate-900 to-slate-950 border-b border-slate-800">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-sm mb-6"
          >
            <Sparkles size={16} /> AI-Powered Device Intelligence
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
          >
            Find the Best Value with <span className="text-blue-500">Write Comspares</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg mb-8"
          >
            Compare smartphones, laptops, and more using advanced AI ratings and precise specifications.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center gap-4 flex-wrap"
          >
            <Link to="/category/mobile" className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-semibold transition flex items-center gap-2 shadow-lg shadow-blue-600/30">
              Explore Mobiles <ArrowRight size={18} />
            </Link>
            <Link to="/category/laptop" className="px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-xl font-semibold transition border border-slate-700">
              Explore Laptops
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Browse Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat, idx) => (
            <Link 
              key={idx} 
              to={cat.path}
              className={`p-6 rounded-2xl border transition-all flex flex-col items-center text-center gap-3 relative overflow-hidden group ${
                cat.active 
                  ? 'bg-slate-900 border-blue-500/50 hover:border-blue-500 shadow-lg shadow-blue-500/10' 
                  : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className={`p-4 rounded-xl ${cat.active ? 'bg-blue-500/10 text-blue-400' : 'bg-slate-800 text-slate-400'}`}>
                {cat.icon}
              </div>
              <span className="font-semibold">{cat.name}</span>
              {!cat.active && (
                <span className="absolute top-2 right-2 text-[10px] bg-slate-800 text-amber-400 px-2 py-0.5 rounded-full border border-slate-700">
                  Coming Soon
                </span>
              )}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}