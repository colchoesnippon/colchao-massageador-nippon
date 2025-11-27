import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Zap, Smartphone, Music, 
  ShieldCheck, Mic, BatteryCharging, 
  Check, ChevronRight, Rotate3d, ArrowDown, Layers, ChevronDown, Info
} from 'lucide-react';

const PremiumPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', whatsapp: '', size: 'Casal 138x188' });
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);
  const [expandedSpec, setExpandedSpec] = useState<number | null>(null);
  
  // Gallery State
  const [activeTab, setActiveTab] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);

  // 3D Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  
  // Define transforms at top level to avoid hook errors
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!galleryRef.current) return;
    const rect = galleryRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const formElement = document.getElementById('premium-offer-form');
      const formOffset = formElement ? formElement.offsetTop : Infinity;
      
      // Show after 100px scroll, hide when reaching form
      if (scrollY > 100 && scrollY < formOffset - 600) {
        setShowFloatingCTA(true);
      } else {
        setShowFloatingCTA(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.whatsapp) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const text = `Olá! Tenho interesse na *Linha Premium 40cm*.\n\n` +
      `*Nome:* ${formData.name}\n` +
      `*WhatsApp:* ${formData.whatsapp}\n` +
      `*Medida Desejada:* ${formData.size}\n\n` +
      `Gostaria de receber a oferta exclusiva.`;
    
    const url = `https://wa.me/5543988688677?text=${encodeURIComponent(text)}`;

    // Dispara a conversão antes de abrir o link
    if (typeof (window as any).gtag_report_conversion === 'function') {
      (window as any).gtag_report_conversion();
    }
    
    window.open(url, '_blank');
  };

  const specs = [
    { title: "Altura", value: "40 cm", detail: "Imponência e conforto superior com design robusto." },
    { title: "Pillow Top", value: "Super Pillow Top Único", detail: "Camada extra de conforto que simula a sensação de dormir nas nuvens." },
    { title: "Tecnologias", value: "Completo (8 Terapias)", detail: "Magnético, Infravermelho, EVI Diamond, X-Ions, Quântica, Cromoterapia, Ozônio e Massagem." },
    { title: "Suporte", value: "440kg (Casal)", detail: "Estrutura reforçada que garante durabilidade sem deformar." },
    { title: "Massagem", value: "4 Motores Big Premium", detail: "Vibroterapia potente com 20 modos e controle individual por lado." },
    { title: "Conectividade", value: "App & Comando de Voz", detail: "Controle tudo pelo celular ou Alexa (opcional)." },
    { title: "Garantia", value: "10 Anos", detail: "Tranquilidade total com garantia estendida de fábrica." },
  ];

  const galleryImages = [
    { id: 0, title: "Visão Geral", img: "https://colchoesnippon.com.br/wp-content/uploads/2025/09/colchao-nipponflex-king-qual-preco-magnetico-massageador-evolurion-fir-casal-casal-fabrica.jpg" },
    { id: 1, title: "Perfil 40cm", img: "https://colchoesnippon.com.br/wp-content/uploads/2025/11/colchao-magnetico-massageador-nippon-flex-preco-casal-king-queen-solteiro-viuva-sob-medida-fabrica.jpg" },
    { id: 2, title: "Acabamento", img: "https://colchoesnippon.com.br/wp-content/uploads/2025/11/tecido-do-colchao-magnetico-massageador-nippon-flex-preco-casal-king-queen-solteiro-viuva-sob-medida-fabrica.jpg" },
    { id: 3, title: "Interface Smart", img: "https://colchoesnippon.com.br/wp-content/uploads/2025/11/nipponflex-NOVO-CONTROLE-MASSAGEADOR-A-NIPPON-COLCHOES-MAGNETICOS-MASSAGEADRO-ALTO-PADRAO-TERAPEUTICO.jpg" }
  ];

  const scrollToForm = () => {
    const formElement = document.getElementById('premium-offer-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-black min-h-screen text-white pt-12 md:pt-16 pb-24 relative overflow-x-hidden">
      
      {/* Header Area */}
      <section className="relative pt-12 pb-20 px-6 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-900/10 rounded-full blur-[120px] pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <div className="inline-block border border-amber-500/30 bg-amber-900/10 px-4 py-1.5 rounded-full text-amber-500 text-xs font-bold tracking-widest uppercase mb-6">
            Linha Premium
          </div>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter text-white mb-6">
            40cm
          </h1>
          <p className="text-xl md:text-3xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
            O ápice absoluto da engenharia do sono.
          </p>
        </motion.div>
      </section>

      {/* 3D Interactive Gallery */}
      <section className="container mx-auto px-4 mb-32 relative z-20">
        <div className="flex flex-col items-center">
           {/* Tabs */}
           <div className="flex flex-wrap justify-center gap-2 mb-8 bg-zinc-900/50 p-2 rounded-full border border-white/10 backdrop-blur-sm">
              {galleryImages.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeTab === item.id 
                    ? 'bg-white text-black shadow-lg' 
                    : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {item.title}
                </button>
              ))}
           </div>

           {/* 3D Card */}
           <motion.div
              ref={galleryRef}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-4xl aspect-[16/9] md:aspect-[21/9] rounded-3xl bg-zinc-900 border border-white/10 shadow-2xl shadow-amber-900/20 cursor-grab active:cursor-grabbing overflow-hidden group"
           >
              <motion.img
                key={activeTab} // Key forces re-render for animation
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                src={galleryImages[activeTab].img}
                alt={galleryImages[activeTab].title}
                className="w-full h-full object-cover pointer-events-none"
                style={{ transform: "translateZ(50px)" }} // Parallax effect
              />
              
              {/* Overlay reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" style={{ transform: "translateZ(80px)" }} />
              
              <div className="absolute bottom-6 left-6 pointer-events-none" style={{ transform: "translateZ(60px)" }}>
                 <div className="bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl text-white text-sm font-bold flex items-center gap-2">
                    <Rotate3d size={16} className="text-amber-500" />
                    Arraste para explorar
                 </div>
              </div>
           </motion.div>
        </div>
      </section>

      {/* Technical Specs Accordion */}
      <section className="container mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-8">Especificações <br/> Técnicas</h2>
            <p className="text-gray-400 text-lg mb-12">
              Cada detalhe foi pensado para proporcionar a experiência de sono mais regeneradora do mundo.
            </p>
            <div className="grid grid-cols-2 gap-4">
               <div className="bg-zinc-900 p-6 rounded-2xl border border-white/5">
                  <Layers className="text-amber-500 mb-4" size={32} />
                  <div className="text-2xl font-bold text-white">12</div>
                  <div className="text-sm text-gray-500">Camadas</div>
               </div>
               <div className="bg-zinc-900 p-6 rounded-2xl border border-white/5">
                  <ShieldCheck className="text-green-500 mb-4" size={32} />
                  <div className="text-2xl font-bold text-white">10 Anos</div>
                  <div className="text-sm text-gray-500">Garantia</div>
               </div>
            </div>
          </div>

          <div className="space-y-4">
            {specs.map((spec, index) => (
              <motion.div 
                key={index}
                initial={false}
                className="border-b border-zinc-800"
              >
                <button
                  onClick={() => setExpandedSpec(expandedSpec === index ? null : index)}
                  className="w-full py-6 flex items-center justify-between text-left group"
                >
                  <div>
                    <span className="text-gray-500 text-sm block mb-1 group-hover:text-amber-500 transition-colors">{spec.title}</span>
                    <span className="text-xl font-medium text-white">{spec.value}</span>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedSpec === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="text-gray-500 group-hover:text-white" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {expandedSpec === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 text-gray-400 leading-relaxed text-sm">
                        {spec.detail}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="premium-offer-form" className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-zinc-900/80 backdrop-blur-xl border border-amber-500/20 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden shadow-2xl shadow-amber-900/20">
           {/* Background Glow */}
           <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-600/10 rounded-full blur-[100px] pointer-events-none" />
           
           <div className="relative z-10 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Garanta a Condição Exclusiva
              </h2>
              <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
                Preencha para receber a tabela de preços oficial e o catálogo completo da Linha Premium no seu WhatsApp.
              </p>

              <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
                <div className="text-left">
                  <label className="text-xs text-gray-500 font-bold uppercase ml-4 mb-2 block">Tamanho do Colchão</label>
                  <div className="relative">
                     <ArrowDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={20} />
                     <select
                        name="size"
                        value={formData.size}
                        onChange={handleInputChange}
                        className="w-full bg-black/50 border border-zinc-700 rounded-xl px-6 py-4 text-white appearance-none focus:outline-none focus:border-amber-500 transition-colors cursor-pointer hover:bg-black/70"
                     >
                       <option value="Casal 138x188">Casal (138x188cm)</option>
                       <option value="Queen 158x198">Queen (158x198cm)</option>
                       <option value="King 193x203">King (193x203cm)</option>
                       <option value="Solteiro 88x188">Solteiro (88x188cm)</option>
                       <option value="Sob Medida">Sob Medida (Outro)</option>
                     </select>
                  </div>
                </div>

                <div className="relative">
                  <input 
                    type="text" 
                    name="name"
                    required
                    placeholder="Seu Nome Completo"
                    onChange={handleInputChange}
                    className="w-full bg-black/50 border border-zinc-700 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-amber-500 transition-colors placeholder-zinc-600"
                  />
                </div>
                
                <div className="relative">
                  <input 
                    type="tel" 
                    name="whatsapp"
                    required
                    placeholder="Seu WhatsApp"
                    onChange={handleInputChange}
                    className="w-full bg-black/50 border border-zinc-700 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-amber-500 transition-colors placeholder-zinc-600"
                  />
                </div>

                <button 
                  type="submit"
                  className="group relative w-full bg-gradient-to-r from-amber-500 to-amber-600 text-black text-xl font-bold py-5 rounded-xl mt-6 overflow-hidden shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-all hover:-translate-y-1"
                >
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[1s] bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
                  <span className="relative flex items-center justify-center gap-2">
                    Receber Oferta Premium <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                
                <p className="text-zinc-600 text-xs mt-4 flex items-center justify-center gap-2">
                   <Lock size={12} /> Seus dados estão seguros.
                </p>
              </form>
           </div>
        </div>
      </section>

      {/* Floating CTA for Mobile */}
      <AnimatePresence>
        {showFloatingCTA && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 p-4 z-[100] md:hidden"
          >
             <div className="bg-zinc-900/90 backdrop-blur-xl border border-amber-500/30 rounded-2xl p-4 shadow-2xl flex items-center justify-between gap-4">
                <div className="flex flex-col">
                   <span className="text-[10px] text-amber-500 font-bold uppercase tracking-wider">Oferta Limitada</span>
                   <span className="text-white font-bold">Linha Premium 40cm</span>
                </div>
                <button 
                  onClick={scrollToForm}
                  className="bg-amber-500 text-black px-6 py-3 rounded-xl font-bold text-sm shadow-lg shadow-amber-500/20 animate-pulse"
                >
                  Ver Preço
                </button>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Lock = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </svg>
);

export default PremiumPage;