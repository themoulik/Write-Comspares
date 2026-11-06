import { Mail, User, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-300 py-12 mt-16 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h3 className="text-lg font-bold text-white mb-3">About Moulik Das</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            I am currently pursuing a BCA(H) degree at Techno College Hooghly under MAKAUT, with a strong passion for web development, software engineering, cloud computing, and AI-powered applications. I enjoy building practical projects, experimenting with emerging technologies, and sharpening my problem-solving skills through hands-on development.
          </p>
        </div>
        
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
            <Github size={18} className="text-blue-500"/>
            <span>github.com/themoulik</span>
          </a>
        </div>
        <p className="text-xs text-slate-600 text-center">© {new Date().getFullYear()} Write Comspares. All rights reserved.</p>
      </div>
    </footer>
  );
}