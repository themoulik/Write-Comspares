import { useParams, Link } from 'react-router-dom';
import { productsData } from '../data/mockData';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, Cpu, ArrowLeft, GitCompare } from 'lucide-react';

export default function Products() {
  const { type } = useParams();
  const data = productsData[type] || [];

  return (
    <div className="min-h-screen bg-slate-950 text-white py-10 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-between items-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition">
            <ArrowLeft size={18} /> Back to Home
          </Link>
          <h1 className="text-3xl font-extrabold capitalize bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            {type} Comparisons
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.map((item, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              key={item.id} 
              className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-xl hover:border-blue-500/50 transition-all flex flex-col justify-between group"
            >
              <div className="relative h-60 overflow-hidden bg-slate-900">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-blue-400 border border-blue-500/30 flex items-center gap-1">
                  <ShieldCheck size={14} /> AI Verified
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-2xl font-bold mb-2 text-white">{item.name}</h2>
                <p className="text-sm text-slate-400 mb-6 flex items-center gap-2">
                  <Cpu size={16} className="text-blue-400 flex-shrink-0" /> {item.specs}
                </p>
                
                <div className="flex justify-between items-center mb-6 pt-4 border-t border-slate-800">
                  <span className="flex items-center text-amber-400 font-bold gap-1 bg-amber-400/10 px-3 py-1.5 rounded-xl border border-amber-400/20">
                    <Star size={16} fill="currentColor"/> {item.rating} / 5.0
                  </span>
                  <span className="bg-blue-500/10 text-blue-400 px-3.5 py-1.5 rounded-xl text-sm font-semibold border border-blue-500/20">
                    {item.value}
                  </span>
                </div>

                <div className="flex gap-3">
                  <button 
                    onClick={() => alert(`Comparing ${item.name}... AI comparison feature activated!`)}
                    className="flex-1 py-3 bg-blue-600 hover:bg-blue-500 font-semibold rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 cursor-pointer"
                  >
                    <GitCompare size={18} /> Compare Specs
                  </button>
                  <button 
                    onClick={() => alert(`AI Insight: ${item.name} offers great performance and top-tier build quality for its price category.`)}
                    className="px-4 py-3 bg-slate-800 hover:bg-slate-700 font-semibold rounded-xl transition border border-slate-700 text-sm cursor-pointer"
                  >
                    AI Insights
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}