import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Hammer, Truck, Wallet, ArrowRight } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "Atendimento Exclusivo",
    description: "Tire suas dúvidas e personalize seu pedido diretamente com nossos especialistas pelo WhatsApp. Sem robôs, atendimento 100% humano.",
    icon: <MessageCircle size={28} />,
    highlight: "Consultoria Gratuita"
  },
  {
    id: 2,
    title: "Produção Sob Demanda",
    description: "Seu colchão entra em produção na nossa fábrica com rigoroso controle de qualidade. Tecnologia fresca e feita especificamente para você.",
    icon: <Hammer size={28} />,
    highlight: "Direto da Fábrica"
  },
  {
    id: 3,
    title: "Envio Especializado",
    description: "Despachamos via transportadora parceira com rastreamento. O produto vai embalado com proteção tripla para chegar intacto na sua casa.",
    icon: <Truck size={28} />,
    highlight: "Entrega Segura"
  },
  {
    id: 4,
    title: "Pagamento na Entrega",
    description: "Para PR, SC, RS e SP (consulte disponibilidade da cidade), você só paga quando o produto chegar na sua casa. Conferiu, gostou, pagou.",
    icon: <Wallet size={28} />,
    highlight: "Risco Zero"
  }
];

const PurchaseSteps: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden border-t border-white/5">
      {/* Background Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-amber-900/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-amber-500 font-bold tracking-wider text-xs uppercase mb-4 block">Transparência Total</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Como funciona sua compra?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Um processo simples, seguro e transparente. Do primeiro contato até a primeira noite de sono.
            </p>
          </motion.div>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-amber-500/30 to-transparent -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="group relative"
              >
                {/* Step Number Badge */}
                <div className="absolute -top-4 -left-4 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-zinc-900 border border-amber-500/50 text-amber-500 flex items-center justify-center font-bold text-sm z-20 shadow-lg shadow-black">
                  {step.id}
                </div>

                {/* Card */}
                <div className="bg-zinc-900/80 backdrop-blur-sm border border-white/5 p-8 rounded-3xl h-full hover:bg-zinc-800/80 hover:border-amber-500/20 transition-all duration-300 flex flex-col items-center text-center group-hover:transform group-hover:-translate-y-2">
                  
                  <div className="w-16 h-16 rounded-2xl bg-zinc-950 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:text-amber-500 group-hover:border-amber-500/30 transition-all duration-300 shadow-lg">
                    {step.icon}
                  </div>

                  <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-4 border border-white/5">
                    {step.highlight}
                  </span>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Arrow for mobile flow */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden absolute -bottom-10 left-1/2 -translate-x-1/2 text-gray-600">
                      <ArrowRight className="rotate-90" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
            <a
              href="https://wa.me/5543988688677?text=Olá! Gostaria de tirar dúvidas sobre o processo de compra."
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                if (typeof (window as any).gtag_report_conversion === 'function') {
                  (window as any).gtag_report_conversion();
                }
              }}
              className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 font-medium transition-colors border-b border-amber-500/30 hover:border-amber-500 pb-1 cursor-pointer bg-transparent"
            >
              Ficou com alguma dúvida? Fale conosco <ArrowRight size={16} />
            </a>
        </div>
      </div>
    </section>
  );
};

export default PurchaseSteps;