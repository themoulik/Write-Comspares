import { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CommanderAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'ai', text: 'Hello! I am CommanderAI. Ask me anything about mobile or laptop comparisons!' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input;
    setMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
    setInput('');

    // Mock AI intelligent response for showcase
    setTimeout(() => {
      let aiReply = "That's a great question! Based on my AI analysis, both devices offer stellar performance, but it depends on your budget.";
      
      const lowerMsg = userMsg.toLowerCase();
      if (lowerMsg.includes('samsung') || lowerMsg.includes('iphone')) {
        aiReply = "Both flagship phones have top-tier cameras and processors. The iPhone excels in video recording, while the Samsung offers versatile zoom and S-Pen features.";
      } else if (lowerMsg.includes('macbook') || lowerMsg.includes('laptop')) {
        aiReply = "MacBook Air M3 is unbeatable for battery life and silent operation, whereas Windows gaming laptops offer high refresh rates and dedicated GPUs.";
      } else if (lowerMsg.includes('hello') || lowerMsg.includes('hi')) {
        aiReply = "Hello Moulik! How can CommanderAI help you compare gadgets today?";
      }

      setMessages(prev => [...prev, { sender: 'ai', text: aiReply }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Toggle Button */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center border border-blue-400/30 cursor-pointer shadow-blue-600/40"
        >
          <Bot size={26} />
        </motion.button>
      )}

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="bg-slate-900 border border-slate-800 w-80 md:w-96 h-[450px] rounded-2xl shadow-2xl flex flex-col overflow-hidden text-white"
          >
            {/* Header */}
            <div className="bg-slate-800 p-4 flex justify-between items-center border-b border-slate-700">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-blue-500/20 text-blue-400 rounded-xl">
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-sm">CommanderAI</h3>
                  <span className="text-xs text-emerald-400 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Online Showcase
                  </span>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-700 transition cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-grow p-4 overflow-y-auto space-y-3 bg-slate-950/50">
              {messages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`flex gap-2 items-start ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`p-1.5 rounded-full text-xs ${msg.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-blue-400 border border-slate-700'}`}>
                    {msg.sender === 'user' ? <User size= {14} /> : <Bot size={14} />}
                  </div>
                  <div className={`max-w-[75%] p-3 rounded-2xl text-sm ${msg.sender === 'user' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-slate-800 text-slate-200 border border-slate-700/60 rounded-tl-none'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form onSubmit={handleSend} className="p-3 bg-slate-900 border-t border-slate-800 flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask CommanderAI anything..." 
                className="flex-grow bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition"
              />
              <button 
                type="submit"
                className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2.5 rounded-xl transition flex items-center justify-center shadow-lg shadow-blue-600/20 cursor-pointer"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}