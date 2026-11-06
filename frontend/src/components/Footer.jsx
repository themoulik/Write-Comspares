import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ComingSoon from './pages/ComingSoon';
import Insurance from './pages/Insurance';
import Support from './pages/Support';
import CommanderAI from './components/CommanderAI';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-slate-950 text-white relative">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:type" element={<Products />} />
            <Route path="/coming-soon" element={<ComingSoon />} />
            <Route path="/insurance" element={<Insurance />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </main>
        
        <CommanderAI />
        <Footer />
      </div>
    </Router>
  );
}

export default App;