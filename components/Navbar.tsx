import React from 'react';
import { motion } from 'framer-motion';
import { Truck, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  currentView: 'home' | 'premium';
  onNavigate: (view: 'home' | 'premium') => void;
}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 flex flex-col"
    >
      {/* TOP BAR - NOTIFICATION ONLY */}
      <div className="bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 border-b border-white/10 relative overflow-hidden shadow-lg">
        <div className="absolute inset-0 bg-amber-500/5 animate-pulse" /> {/* Subtle amber tint animation */}
        <div className="container mx-auto px-4 py-2 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-2 text-[10px] md:text-xs font-medium text-gray-300 tracking-wide">
             
             <div className="flex items-center gap-2">
               <Truck size={12} className="text-amber-500" />
               <span>Frete Grátis para <strong className="text-white">PR, SC e RS</strong></span>
             </div>

             <div className="hidden md:block w-1 h-1 rounded-full bg-gray-600"></div>

             <div className="flex items-center gap-2">
               <ShieldCheck size={12} className="text-green-500" />
               <span>Pagamento <strong className="text-white">100% Seguro na Entrega</strong></span>
             </div>

          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;