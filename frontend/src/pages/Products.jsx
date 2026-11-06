import { useParams, Link } from 'react-router-dom';
import { productsData } from '../data/mockData';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, Cpu, ArrowLeft, GitCompare, Search, Filter, Share2, MessageSquare, Check } from 'lucide-react';
import { useState } from 'react';

export default function Products() {
  const { type } = useParams();
  const rawData = productsData[type] || [];

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [copiedId, setCopiedId] = useState(null);
  const [activeReviewId, setActiveReviewId] = useState(null);

  // Get unique brands for filter
  const brands = ['All', ...new Set(rawData.map(item => item.brand))];

  // Filter products based on search and brand
  const filteredData = rawData.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = selectedBrand === 'All' || item.brand === selectedBrand;
    return matchesSearch && matchesBrand;
  });

  const handleShare = async (item) => {
    const shareData = {
      title: 'Write Comspares',
      text: `Check out ${item.name} - ${item.specs} on Write Comspares!`,
      url: window.location.href,
    };

    try {
      // Check if native mobile/browser share is supported
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback to clipboard
        await navigator.clipboard.writeText(window.location.href);
        setCopiedId(item.id);
        setTimeout(() => setCopiedId(null), 2000);
      }
    } catch (err) {
      // Fallback if clipboard fails
      navigator.clipboard.writeText(window.location.href);
      setCopiedId(item.id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white py-10 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-between items-center mb-6">
          <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition">
            <ArrowLeft size={18} /> Back to Home
          </Link>
          <h1 className="text-3xl font-extrabold capitalize bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            {type} Comparisons
          </h1>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 mb-8 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3.5 top-3 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder={`Search ${type}s...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition"
            />
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
            <Filter size={18} className="text-slate-400 ml-2" />
            <span className="text-sm text-slate-400">Brand:</span>
            {brands.map((brand, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedBrand(brand)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition cursor-pointer ${
                  selectedBrand === brand 
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30' 
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {brand}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredData.length === 0 ? (
            <div className="col-span-full text-center py-20 text-slate-500">
              No devices found matching your criteria.
            </div>
          ) : (
            filteredData.map((item, index) => (
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
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-slate-300 border border-slate-700">
                    ₹{item.price.toLocaleString('en-IN')}
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

                  <div className="flex gap-2 mb-4">
                    <button 
                      onClick={() => alert(`Comparing specs for ${item.name}...`)}
                      className="flex-1 py-2.5 bg-blue-600 hover:bg-blue-500 font-semibold rounded-xl transition flex items-center justify-center gap-2 text-sm shadow-lg shadow-blue-600/20 cursor-pointer"
                    >
                      <GitCompare size={16} /> Compare Specs
                    </button>
                    
                    <button 
                      onClick={() => handleShare(item)}
                      title="Share Product"
                      className="px-3 py-2.5 bg-slate-800 hover:bg-slate-700 font-semibold rounded-xl transition border border-slate-700 flex items-center justify-center cursor-pointer text-slate-300 relative"
                    >
                      {copiedId === item.id ? <Check size={18} className="text-emerald-400" /> : <Share2 size={18} />}
                    </button>

                    <button 
                      onClick={() => setActiveReviewId(activeReviewId === item.id ? null : item.id)}
                      title="User Reviews"
                      className={`px-3 py-2.5 font-semibold rounded-xl transition border flex items-center justify-center cursor-pointer ${
                        activeReviewId === item.id ? 'bg-blue-500/20 border-blue-500 text-blue-400' : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      <MessageSquare size={18} />
                    </button>
                  </div>

                  {/* Mock User Reviews Section */}
                  {activeReviewId === item.id && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-4 pt-4 border-t border-slate-800 space-y-3 bg-slate-950 p-4 rounded-xl"
                    >
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">User Reviews</h4>
                      {item.reviews.map((rev, rIdx) => (
                        <div key={rIdx} className="text-xs bg-slate-900 p-2.5 rounded-lg border border-slate-800/60">
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-semibold text-slate-200">{rev.name}</span>
                            <span className="flex items-center text-amber-400 gap-0.5">
                              <Star size={12} fill="currentColor"/> {rev.rating}
                            </span>
                          </div>
                          <p className="text-slate-400">{rev.comment}</p>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}