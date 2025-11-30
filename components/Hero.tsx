import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Truck, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black pt-12 md:pt-16 pb-20">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="text-amber-500 font-medium tracking-wider text-xs uppercase mb-4 block">Colchão Nippon</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 apple-gradient-text max-w-5xl mx-auto leading-[1.1]">
            Compre Seu Colchão e <br /> Pague na Entrega.
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed mb-10"
        >
          Colchões magnéticos com terapias avançadas, massagem inteligente e engenharia premium para transformar suas noites.
        </motion.p>

        {/* PREMIUM OFFER CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative mb-12 group w-full max-w-2xl"
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-indigo-500/20 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-1000" />
          
          {/* Badge Moved Outside Overflow Container */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-amber-600 text-black text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg shadow-amber-500/20 z-30 whitespace-nowrap">
            Oferta Exclusiva Casal
          </div>

          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl overflow-hidden">
            {/* Shine animation */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[1.5s] bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 pointer-events-none" />
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-2">
              <div className="text-center md:text-left">
                <div className="text-gray-500 text-sm font-medium line-through mb-1">De R$ 5.327,00</div>
                <div className="flex items-baseline justify-center md:justify-start gap-1">
                  <span className="text-sm font-bold text-gray-400 uppercase tracking-wide self-center mr-1">Por 12x</span>
                  <span className="text-5xl md:text-6xl font-bold text-white tracking-tighter">249</span>
                  <span className="text-xl font-bold text-gray-400 self-start mt-2">,00</span>
                </div>
                <div className="text-green-500 text-xs font-bold uppercase tracking-wide mt-2 flex items-center justify-center md:justify-start gap-1">
                   <ShieldCheck size={12} /> Sem Juros no Cartão
                </div>
              </div>

              <div className="h-px w-full md:w-px md:h-24 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>

              <div className="flex flex-col gap-4 w-full md:w-auto">
                 <div className="flex items-center gap-4 bg-black/20 p-3 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                    <div className="p-2 bg-amber-500/10 rounded-lg text-amber-500 flex-shrink-0">
                      <Truck size={20} />
                    </div>
                    <div className="text-left">
                      <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Frete Grátis</div>
                      <div className="text-sm font-bold text-white leading-tight">SP, PR, SC e RS</div>
                    </div>
                 </div>
                 <div className="flex items-center gap-4 bg-black/20 p-3 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                    <div className="p-2 bg-green-500/10 rounded-lg text-green-500 flex-shrink-0">
                      <ShieldCheck size={20} />
                    </div>
                    <div className="text-left">
                      <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Segurança Total</div>
                      <div className="text-sm font-bold text-white leading-tight">Pagamento 100% <br/> na Entrega</div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-col items-center"
        >
          <a
            href="https://wa.me/5543988688677?text=Olá! Vi a oferta de 12x 249 no site e gostaria de aproveitar."
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              if (typeof (window as any).gtag_report_conversion === 'function') {
                (window as any).gtag_report_conversion();
              }
            }}
            className="group relative bg-[#25D366] text-black font-bold px-10 py-5 rounded-full hover:bg-[#20bd5a] transition-all flex items-center gap-3 text-lg md:text-xl shadow-[0_0_30px_rgba(37,211,102,0.3)] hover:shadow-[0_0_50px_rgba(37,211,102,0.6)] hover:-translate-y-1 cursor-pointer"
          >
            Saiba Mais <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform"/>
          </a>

          <p className="text-gray-500 text-xs mt-6 opacity-60 hover:opacity-100 transition-opacity cursor-default">
            *Promoção por tempo limitado. Consulte condições.
          </p>
        </motion.div>

        {/* Mockup visual representing the mattress */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          className="mt-16 md:mt-24 w-full max-w-5xl relative"
        >
           <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl shadow-indigo-900/20 border border-white/10 bg-neutral-900">
               <img 
                src="https://colchoesnippon.com.br/wp-content/uploads/2025/11/colchoes-massageador-evolution-smart-colchao-nipponflex-king-qual-preco-magnetico-massageador-evolurion-fir-casal-casal-fabrica.jpg" 
                alt="Tecnologia do Colchão - Design Premium" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]"
               />
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;