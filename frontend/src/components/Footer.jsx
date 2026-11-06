import { Mail, User } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-300 py-12 mt-16 border-t border-slate-800">
      <div className="container mx-auto px-4">
        {/* About Section */}
        <div className="max-w-3xl mx-auto bg-slate-900/60 border border-slate-800 p-6 md:p-8 rounded-2xl mb-10 text-left shadow-xl">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <User className="text-blue-500" size={22} /> About Moulik Das
          </h3>
          
          <p className="text-slate-300 text-sm leading-relaxed mb-4">
            I am currently pursuing a BCA(H) degree at Techno College Hooghly under MAKAUT, with a strong passion for web development, software engineering, cloud computing, and AI-powered applications.
          </p>

          <p className="text-slate-300 text-sm leading-relaxed mb-4">
            My technical foundation includes React, JSX, Node.js, Python, C++, SQL/MySQL, Supabase, Git, and GitHub. I am also continuously expanding my knowledge in AWS, Linux, networking, cybersecurity, and AI integration to build robust, modern digital solutions.
          </p>

          <p className="text-slate-300 text-sm leading-relaxed mb-6">
            I enjoy building practical projects, experimenting with emerging technologies, and sharpening my problem-solving skills through hands-on development. I maintain an active GitHub portfolio to showcase my work and track my professional growth.
          </p>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800/80 mb-6">
            <h4 className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">Core Skills & Tech Stack</h4>
            <ul className="text-xs text-slate-400 space-y-1.5">
              <li><strong className="text-slate-300">• Frontend Development:</strong> React, JSX, Tailwind CSS</li>
              <li><strong className="text-slate-300">• Backend Tools:</strong> Node.js, PHP, Supabase</li>
              <li><strong className="text-slate-300">• Programming Languages:</strong> Python, C++, JavaScript (largely used for game development)</li>
              <li><strong className="text-slate-300">• Database & Tools:</strong> SQL, MySQL, Git, GitHub</li>
              <li><strong className="text-slate-300">• Emerging Areas:</strong> AI Integration, AWS, Cloud Computing, Linux, Networking, Cybersecurity</li>
            </ul>
          </div>

          <p className="text-xs text-slate-400 italic">
            I am currently open to Internships, Entry-Level Opportunities, and Freelance Projects where I can contribute, learn from real-world challenges, and grow as a technology professional.
          </p>
        </div>
        
        {/* Contact Links */}
        <div className="flex justify-center items-center gap-6 mb-6 flex-wrap">
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <User size={18} className="text-blue-500"/> 
            <span>Moulik Das</span>
          </div>
          <a href="mailto:themoulikofficial@gmail.com" className="flex items-center gap-2 text-sm hover:text-blue-400 transition text-slate-300">
            <Mail size={18} className="text-blue-500"/> 
            <span>themoulikofficial@gmail.com</span>
          </a>
          <a href="https://github.com/themoulik" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm hover:text-blue-400 transition text-slate-300">
            <svg className="w-[18px] h-[18px] text-blue-500 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <span>github.com/themoulik</span>
          </a>
        </div>
        <p className="text-xs text-slate-600 text-center">© {new Date().getFullYear()} Write Comspares. All rights reserved.</p>
      </div>
    </footer>
  );
}