import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ComingSoon from './pages/ComingSoon';
import CommanderAI from './components/CommanderAI'; // CommanderAI আমদানি করা হলো

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
          </Routes>
        </main>
        
        {/* ফ্লোটিং এআই চ্যাট উইন্ডো */}
        <CommanderAI />
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;