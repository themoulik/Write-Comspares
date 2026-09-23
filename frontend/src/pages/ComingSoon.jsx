import { motion } from 'framer-motion';
import { Hammer } from 'lucide-react';

export default function ComingSoon() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-4">
      <motion.div 
        animate={{ rotate: [0, 15, -15, 0] }} 
        transition={{ repeat: Infinity, duration: 2 }}
        className="text-primary mb-4"
      >
        <Hammer size={64} />
      </motion.div>
      <h1 className="text-4xl font-bold text-dark mb-2">Currently Working!</h1>
      <p className="text-gray-600">Our AI is gathering the best data for this category. Check back soon.</p>
    </div>
  );
}