import { Link } from 'react-router-dom';
import { MonitorPlay, Smartphone, Laptop, Watch, Headphones, Tv } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-dark text-white p-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary flex items-center gap-2">
          <MonitorPlay size={28} /> Write Comspares
        </Link>
        <div className="hidden md:flex gap-6">
          <Link to="/category/mobile" className="flex items-center gap-1 hover:text-primary transition"><Smartphone size={18}/> Mobile</Link>
          <Link to="/category/laptop" className="flex items-center gap-1 hover:text-primary transition"><Laptop size={18}/> Laptop</Link>
          <Link to="/coming-soon" className="flex items-center gap-1 hover:text-primary transition"><Tv size={18}/> TV</Link>
          <Link to="/coming-soon" className="flex items-center gap-1 hover:text-primary transition"><Watch size={18}/> Smartwatch</Link>
          <Link to="/coming-soon" className="flex items-center gap-1 hover:text-primary transition"><Headphones size={18}/> TWS/Audio</Link>
        </div>
      </div>
    </nav>
  );
}