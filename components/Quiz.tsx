import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowLeft, CheckCircle, FileText, ArrowRight, Truck, Wallet, CreditCard } from 'lucide-react';
import { QuizData } from '../types';

const questions = [
  {
    id: 'size',
    text: 'Qual o tamanho ideal?',
    options: [
      'Solteiro (088x188cm)', 
      'Casal Padrão (138x188cm)', 
      'Queen Size (158x198cm)', 
      'King Size (193x203cm)', 
      'Sob Medida'
    ]
  },
  {
    id: 'baseType',
    text: 'Qual a configuração desejada?',
    options: [
      'Somente o Colchão', 
      'Colchão + Base Box', 
      'Colchão + Base Baú'
    ]
  },
  {
    id: 'comfortProfile',
    text: 'Qual seu perfil de conforto?',
    options: ['Macio (Nuvens)', 'Intermediário (Equilibrado)', 'Firme (Ortopédico)']
  },
  {
    id: 'needs',
    text: 'Qual sua principal necessidade?',
    options: ['Dores na Coluna', 'Insônia / Ansiedade', 'Má Circulação', 'Renovação do Colchão']
  }
];

const Quiz: React.FC = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<QuizData>>({});
  const [isFormStep, setIsFormStep] = useState(false);

  const handleOptionClick = (option: string) => {
    const currentQuestionId = questions[step].id as keyof QuizData;
    setAnswers(prev => ({ ...prev, [currentQuestionId]: option }));
    
    if (step < questions.length - 1) {
      setTimeout(() => setStep(step + 1), 300);
    } else {
      setTimeout(() => setIsFormStep(true), 300);
    }
  };

  const handleBack = () => {
    if (isFormStep) {
      setIsFormStep(false);
      return;
    }
    if (step > 0) setStep(step - 1);
  };

  const sendToWhatsApp = () => {
    const text = `Olá! Fiz o diagnóstico no site e este é o meu perfil ideal:\n\n` +
      `*📋 Resultado do Diagnóstico:*\n` +
      `*Medida:* ${answers.size}\n` +
      `*Configuração:* ${answers.baseType}\n` +
      `*Conforto:* ${answers.comfortProfile}\n` +
      `*Necessidade:* ${answers.needs}\n\n` +
      `Gostaria de saber os valores e condições.`;
    
    const url = `https://wa.me/5543988688677?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="quiz" className="py-24 bg-zinc-900 relative overflow-hidden">
       {/* Decorative gradient blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* NEW HEADER SECTION: HEAD & SUBHEAD */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-amber-900/30 border border-amber-500/30 text-amber-500 font-bold text-xs tracking-wider mb-6 uppercase">
              <FileText size={12} /> Diagnóstico & Orçamento
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
              Descubra o modelo ideal e <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                desbloqueie preços de fábrica.
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Responda 4 perguntas rápidas para personalizarmos sua experiência.
              Ao finalizar, enviaremos a <strong className="text-white">tabela completa</strong> e uma <strong className="text-white">condição exclusiva</strong> no seu WhatsApp.
            </p>
          </motion.div>
        </div>

        {/* Quiz Card */}
        <div className="max-w-3xl mx-auto mb-16 bg-black/60 backdrop-blur-xl rounded-[2.5rem] border border-white/10 p-8 md:p-12 shadow-2xl relative overflow-hidden">
          
          {/* Subtle shine effect on card */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent opacity-50" />

          {/* Navigation Header */}
          <div className="flex items-center justify-between mb-8">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
              {isFormStep ? 'Resumo Final' : `Diagnóstico — Passo ${step + 1}/${questions.length}`}
            </span>
            {(step > 0 || isFormStep) && (
              <button onClick={handleBack} className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 text-sm">
                <ArrowLeft size={16} /> Voltar
              </button>
            )}
          </div>

          <div className="min-h-[350px] flex flex-col justify-center">
            <AnimatePresence mode='wait'>
              {!isFormStep ? (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-10 leading-tight">
                    {questions[step].text}
                  </h3>

                  <div className="grid grid-cols-1 gap-3">
                    {questions[step].options.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleOptionClick(opt)}
                        className="group text-left p-5 rounded-xl bg-zinc-800/50 hover:bg-zinc-700/80 border border-white/5 hover:border-amber-500/30 transition-all duration-300 flex items-center justify-between"
                      >
                        <span className="text-lg text-gray-200 font-medium group-hover:text-white">{opt}</span>
                        <ChevronRight className="text-gray-600 group-hover:text-amber-500 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                      </button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  key="form"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="w-full"
                >
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 text-green-500 mb-4 ring-1 ring-green-500/30">
                      <CheckCircle size={32} />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">Perfil Identificado!</h3>
                    <p className="text-gray-400 max-w-md mx-auto">
                      Com base nas suas respostas, selecionamos a condição ideal para você.
                    </p>
                  </div>

                  {/* Summary Card */}
                  <div className="bg-white/5 rounded-2xl p-6 mb-8 border border-white/10 max-w-md mx-auto">
                    <h4 className="text-amber-500 text-xs font-bold uppercase tracking-wider mb-4 border-b border-white/10 pb-2">Resumo da sua escolha</h4>
                    <ul className="space-y-3">
                      <SummaryItem label="Tamanho" value={answers.size || '-'} />
                      <SummaryItem label="Configuração" value={answers.baseType || '-'} />
                      <SummaryItem label="Conforto" value={answers.comfortProfile || '-'} />
                      <SummaryItem label="Necessidade" value={answers.needs || '-'} />
                    </ul>
                  </div>

                  <div className="max-w-md mx-auto">
                    <button 
                      onClick={sendToWhatsApp}
                      className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-black text-lg font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-[1.02] shadow-lg shadow-green-900/20 flex items-center justify-center gap-2 group"
                    >
                      Ver Preço no WhatsApp <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* HIGHLIGHTS SECTION BELOW QUIZ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
           {/* Highlight 1 */}
           <div className="bg-zinc-800/30 border border-white/5 rounded-2xl p-6 flex flex-col items-center text-center hover:bg-zinc-800/50 transition-colors">
              <div className="bg-amber-500/10 p-4 rounded-full text-amber-500 mb-4">
                 <Truck size={24} />
              </div>
              <h4 className="text-white font-bold mb-1">FRETE GRÁTIS</h4>
              <p className="text-gray-400 text-sm">SP, PR, SC E RS</p>
           </div>
           
           {/* Highlight 2 */}
           <div className="bg-zinc-800/30 border border-white/5 rounded-2xl p-6 flex flex-col items-center text-center hover:bg-zinc-800/50 transition-colors">
              <div className="bg-green-500/10 p-4 rounded-full text-green-500 mb-4">
                 <Wallet size={24} />
              </div>
              <h4 className="text-white font-bold mb-1">PAGUE NA ENTREGA</h4>
              <p className="text-gray-400 text-sm">CONSULTAR CIDADES</p>
           </div>
           
           {/* Highlight 3 */}
           <div className="bg-zinc-800/30 border border-white/5 rounded-2xl p-6 flex flex-col items-center text-center hover:bg-zinc-800/50 transition-colors">
              <div className="bg-blue-500/10 p-4 rounded-full text-blue-500 mb-4">
                 <CreditCard size={24} />
              </div>
              <h4 className="text-white font-bold mb-1">12X SEM JUROS</h4>
              <p className="text-gray-400 text-sm">CARTÃO DE CRÉDITO</p>
           </div>
        </div>

      </div>
    </section>
  );
};

const SummaryItem: React.FC<{ label: string, value: string }> = ({ label, value }) => (
  <li className="flex justify-between items-center text-sm">
    <span className="text-gray-400">{label}:</span>
    <span className="text-white font-medium text-right">{value}</span>
  </li>
);

export default Quiz;