import { Mail, User } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark text-gray-300 py-10 mt-12 border-t border-slate-800 bg-slate-950">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-white mb-3">Write Comspares</h2>
        <p className="mb-6 max-w-lg mx-auto text-sm text-slate-400">
          Your ultimate AI-powered destination for comparing electronic devices, finding verified ratings, and best value options. Created with passion by Moulik Das.
        </p>
        
        <div className="flex justify-center items-center gap-6 mb-6 flex-wrap">
          <div className="flex items-center gap-2 text-sm">
            <User size={18} className="text-blue-500"/> 
            <span>Moulik Das</span>
          </div>
          <a href="mailto:themoulikofficial@gmail.com" className="flex items-center gap-2 text-sm hover:text-blue-400 transition">
            <Mail size={18} className="text-blue-500"/> 
            <span>themoulikofficial@gmail.com</span>
          </a>
          <a href="https://github.com/themoulik" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm hover:text-blue-400 transition">
            <svg className="w-[18px] h-[18px] text-blue-500 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <span>github.com/themoulik</span>
          </a>
        </div>
        <p className="text-xs text-slate-600">© {new Date().getFullYear()} Write Comspares. All rights reserved.</p>
      </div>
    </footer>
  );
}