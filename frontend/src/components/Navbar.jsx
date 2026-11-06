import { Link } from 'react-router-dom';
import { MonitorPlay, Smartphone, Laptop, ShieldCheck, LifeBuoy } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-slate-950/90 backdrop-blur-md text-white p-4 sticky top-0 z-50 border-b border-slate-800 shadow-xl">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-500 flex items-center gap-2">
          <MonitorPlay size={28} /> Write Comspares
        </Link>
        <div className="hidden md:flex gap-6 items-center">
          <Link to="/category/mobile" className="flex items-center gap-1 hover:text-blue-400 transition text-sm font-medium"><Smartphone size={16}/> Mobile</Link>
          <Link to="/category/laptop" className="flex items-center gap-1 hover:text-blue-400 transition text-sm font-medium"><Laptop size={16}/> Laptop</Link>
          <Link to="/insurance" className="flex items-center gap-1 hover:text-blue-400 transition text-sm font-medium"><ShieldCheck size={16}/> Insurance</Link>
          <Link to="/support" className="flex items-center gap-1 hover:text-blue-400 transition text-sm font-medium"><LifeBuoy size={16}/> Support</Link>
        </div>
      </div>
    </nav>
  );
}