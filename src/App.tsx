import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useForm } from "react-hook-form";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import logo from "./assets/images/logo.png";
import relatorio from "./assets/images/relatorio.png";
import fundo from "./assets/images/fundo.png";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";


import {
  CheckCircle2,
  ChevronRight,
  Target,
  Zap,
  BarChart3,
  ShieldCheck,
  Users,
  ArrowRight,
  TrendingUp,
  Search,
  AlertCircle,
  Power,
  PieChart,
  MapPin,
  Globe
} from "lucide-react";

// --- Types ---

interface FormData {
  name: string;
  city: string;
  company: string;
  state: string;
  email: string;
  whatsapp: string;
  icp: string;
  targetVolume: string;
  currentVolume: string;
  capacity: string;
}

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center w-full">
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} alt="SW Leads Logo" className="w-10 h-10 object-contain" />
        <span className="text-xl font-bold tracking-tight text-white">Leads <span className="text-primary">Inteligentes</span></span>
      </Link>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
        <a href="/#dor" className="hover:text-primary transition-colors">O Problema</a>
        <a href="/#solucao" className="hover:text-primary transition-colors">Solução</a>
        <a href="/#diferencial" className="hover:text-primary transition-colors">Diferencial</a>
        <a href="/#formulario" className="bg-primary/10 text-primary px-4 py-2 rounded-full border border-primary/20 hover:bg-primary/20 transition-all">
          Quero Leads
        </a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-32 pb-20 overflow-hidden min-h-[80vh] flex items-center">
    <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 blur-[120px] rounded-full"></div>
      <img
        src={fundo}
        alt="Background effect"
        className="absolute top-0 right-[-10%] md:right-0 w-[80%] h-full object-cover opacity-60 mix-blend-screen mask-image-gradient"
        style={{
          maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)'
        }}
      />
    </div>

    <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-6">
            Prospecção Automática B2B
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.95] mb-8 text-white">
            Pare de caçar leads. <br />
            <span className="text-primary">Comece a colher reuniões.</span>
          </h1>
          <p className="text-xl text-white/60 leading-relaxed mb-10 max-w-2xl">
            Ative sua máquina de prospecção automática e receba interessados reais direto no seu WhatsApp. Sem desperdício de tempo, sem "caça ao tesouro". Seu sucesso é o nosso modelo de negócio.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 items-center">
            <a
              href="#formulario"
              className="w-full sm:w-auto px-8 py-4 bg-primary text-on-primary font-bold rounded-xl flex items-center justify-center gap-2 hover:scale-105 transition-transform shadow-lg shadow-primary/20"
            >
              QUERO MINHA MÁQUINA DE PROSPECÇÃO
              <ChevronRight className="w-5 h-5" />
            </a>
            <div className="flex items-center gap-3 text-white/40 text-sm italic">
              <ShieldCheck className="w-5 h-5 text-primary" />
              Modelo Pay-per-Performance
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const PainSection = () => (
  <section id="dor" className="py-24 bg-white/[0.02]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Por que seu time comercial ainda vive no "escuro"?
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <Search className="w-8 h-8 text-primary" />,
            title: "O Vendedor \"Garimpeiro\"",
            desc: "Seu melhor vendedor gasta 80% do dia tentando falar com quem não quer comprar."
          },
          {
            icon: <AlertCircle className="w-8 h-8 text-primary" />,
            title: "O Lead \"Frio\"",
            desc: "Você gasta com anúncios e recebe pessoas que \"clicaram por engano\"."
          },
          {
            icon: <TrendingUp className="w-8 h-8 text-primary" />,
            title: "A Inconstância",
            desc: "Um mês você tem 100 leads, no outro tem 10. Como planejar o crescimento assim?"
          }
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-primary/30 transition-colors group"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
            <p className="text-white/50 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const SolutionSection = () => {
  const [isOn, setIsOn] = useState(true);

  return (
    <section id="solucao" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">A Ferramenta</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-8">
              O controle total da sua demanda em um clique.
            </h2>

            <div className="space-y-8">
              {[
                {
                  icon: <PieChart className="w-6 h-6" />,
                  title: "Interface Intuitiva",
                  desc: "Um painel onde você visualiza a \"saúde\" da sua prospecção em tempo real."
                },
                {
                  icon: <Power className="w-6 h-6" />,
                  title: "Botão On/Off",
                  desc: "Sua equipe está sobrecarregada? Desative a campanha. Precisa de mais tração? Ative em segundos."
                },
                {
                  icon: <BarChart3 className="w-6 h-6" />,
                  title: "Métricas de Valor",
                  desc: "Esqueça métricas de vaidade. Veja: Volume de Disparos vs. Interessados Reais vs. Meta Batida."
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-white/50">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full"></div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative bg-[#1a1c20] rounded-3xl border border-white/10 shadow-2xl p-6 md:p-8"
            >
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h3 className="text-white font-bold">Dashboard de Prospecção</h3>
                  <p className="text-white/40 text-xs">Status: <span className={isOn ? "text-green-400" : "text-red-400"}>{isOn ? "Ativo" : "Pausado"}</span></p>
                </div>
                <button
                  onClick={() => setIsOn(!isOn)}
                  className={`w-14 h-8 rounded-full p-1 transition-colors duration-300 ${isOn ? "bg-primary" : "bg-white/10"}`}
                >
                  <motion.div
                    animate={{ x: isOn ? 24 : 0 }}
                    className="w-6 h-6 bg-white rounded-full shadow-md"
                  />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                  <p className="text-white/40 text-xs mb-1">Disparos</p>
                  <p className="text-2xl font-bold text-white">12.480</p>
                </div>
                <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                  <p className="text-white/40 text-xs mb-1">Interessados</p>
                  <p className="text-2xl font-bold text-primary">142</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <p className="text-white/60 text-sm">Progresso da Meta</p>
                  <p className="text-white font-bold">71%</p>
                </div>
                <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "71%" }}
                    className="h-full bg-primary"
                  />
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/5">
                <div className="flex items-center gap-3 text-white/60 text-sm">
                  <Users className="w-4 h-4 text-primary" />
                  <span>12 reuniões agendadas hoje</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const DifferentialSection = () => (
  <section id="diferencial" className="py-24 bg-primary text-on-primary relative overflow-hidden">
    <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
      <Target className="w-full h-full scale-150 rotate-12" />
    </div>

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="max-w-4xl">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
          Risco Zero: Você só paga quando a meta é batida.
        </h2>
        <p className="text-xl md:text-2xl leading-relaxed font-medium opacity-90">
          "Na SW Leads Inteligentes, invertemos o jogo. Nós definimos juntos o seu volume de interessados. O cronômetro só para quando entregamos o resultado. Se não batermos a meta, você não paga pela ferramenta. É simples, justo e focado em resultado."
        </p>
      </div>
    </div>
  </section>
);

const PartnershipSection = () => (
  <section className="py-24">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-square bg-white/5 rounded-3xl flex items-center justify-center border border-white/10">
                <MapPin className="w-12 h-12 text-primary/40" />
              </div>
              <div className="aspect-square bg-primary/20 rounded-3xl flex items-center justify-center border border-primary/30">
                <Target className="w-12 h-12 text-primary" />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-square bg-white/5 rounded-3xl flex items-center justify-center border border-white/10">
                <Users className="w-12 h-12 text-primary/40" />
              </div>
              <div className="aspect-square bg-white/5 rounded-3xl flex items-center justify-center border border-white/10">
                <Globe className="w-12 h-12 text-primary/40" />
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Parceria Estratégica</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-8">
            Nós cuidamos dos filtros, você cuida das vendas.
          </h2>
          <p className="text-xl text-white/50 leading-relaxed mb-8">
            Para que nossa máquina seja cirúrgica, precisamos da sua expertise. Nós não apenas "disparamos mensagens"; nós calibramos nossos filtros com base nas informações que você nos fornece. É um trabalho a quatro mãos para identificar o seu mercado alvo com precisão militar.
          </p>
          <div className="flex items-center gap-4 text-white font-bold">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            Filtros baseados em dados reais do seu negócio
          </div>
        </div>
      </div>
    </div>
  </section>
);

const QualificationForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setError(null);
    try {
      const token = import.meta.env.VITE_SW_TOKEN;
      if (!token) {
        throw new Error("O Token VITE_SW_TOKEN não foi encontrado. Você precisa parar (Ctrl+C) e rodar o 'npm run dev' novamente para o Vite ler o .env");
      }

      const apiUrl = import.meta.env.DEV 
        ? "/api/webhook/lp" 
        : "https://sw-leads-dashboard-production.up.railway.app/api/webhook/lp";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-sw-token": token
        },
        body: JSON.stringify({
          nome: data.name,
          empresa: data.company,
          email: data.email,
          whatsapp: data.whatsapp,
          cidade: data.city,
          estado: data.state,
          icp: data.icp,
          metaVolume: Number(data.targetVolume) || 0,
          volumeAtual: Number(data.currentVolume) || 0,
          capacidadeAtendimento: Number(data.capacity) || 0
        })
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar formulário");
      }

      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setError("Ocorreu um erro ao enviar seus dados. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="formulario" className="py-24 bg-white/[0.02]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Diga-nos quem você quer alcançar
          </h2>
          <p className="text-white/50 text-lg">
            Preencha os dados abaixo para qualificarmos sua empresa para nossa máquina de prospecção.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-12 space-y-8"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/80 ml-1">Nome Completo</label>
                  <input
                    {...register("name", { required: true })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder="Seu nome"
                  />
                  {errors.name && <span className="text-red-400 text-xs">Campo obrigatório</span>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/80 ml-1">Empresa</label>
                  <input
                    {...register("company", { required: true })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder="Nome da sua empresa"
                  />
                  {errors.company && <span className="text-red-400 text-xs">Campo obrigatório</span>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/80 ml-1">Cidade</label>
                  <input
                    {...register("city", { required: true })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder="Sua cidade"
                  />
                  {errors.city && <span className="text-red-400 text-xs">Campo obrigatório</span>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/80 ml-1">Estado (UF)</label>
                  <input
                    {...register("state", { required: true })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder="Ex: SP"
                  />
                  {errors.state && <span className="text-red-400 text-xs">Campo obrigatório</span>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/80 ml-1">E-mail Corporativo</label>
                  <input
                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder="email@empresa.com.br"
                  />
                  {errors.email && <span className="text-red-400 text-xs">E-mail inválido</span>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/80 ml-1">WhatsApp</label>
                  <input
                    {...register("whatsapp", { required: true })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder="(00) 00000-0000"
                  />
                  {errors.whatsapp && <span className="text-red-400 text-xs">Campo obrigatório</span>}
                </div>
              </div>

              <div className="space-y-6 pt-6 border-t border-white/10">
                <h3 className="text-lg font-bold text-primary">Perguntas de Negócio</h3>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/80 ml-1">Perfil do Cliente Ideal (ICP)</label>
                  <textarea
                    {...register("icp", { required: true })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all min-h-[100px]"
                    placeholder="Quem é o decisor que você quer na mesa? (Ex: Diretores de RH de empresas com +100 funcionários)"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white/80 ml-1">Meta de Volume (Interessados)/mês</label>
                    <input
                      {...register("targetVolume", { required: true })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      placeholder="Quantos novos negócios você aguenta?"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white/80 ml-1">Volume atual de prospecção</label>
                    <input
                      {...register("currentVolume", { required: true })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      placeholder="Como está seu desempenho hoje?"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/80 ml-1">Capacidade de Atendimento</label>
                  <input
                    {...register("capacity", { required: true })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder="Quantos leads seu time consegue atender por dia?"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-5 bg-primary text-on-primary font-bold rounded-2xl text-lg flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform shadow-xl shadow-primary/20 disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed"
              >
                {loading ? "ENVIANDO..." : "ATIVAR MINHA MÁQUINA DE PROSPECÇÃO"}
                {!loading && <Zap className="w-6 h-6 fill-current" />}
              </button>
              {error && <p className="text-red-400 text-center mt-4">{error}</p>}
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/5 border border-primary/30 rounded-[2rem] p-12 text-center space-y-6"
            >
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-white">Solicitação Recebida!</h3>
              <p className="text-white/60 text-lg max-w-md mx-auto">
                Nossa equipe de inteligência está analisando seu perfil. Entraremos em contato via WhatsApp em breve.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-primary font-bold hover:underline"
              >
                Enviar outra resposta
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

const GrandFinale = () => (
  <section className="py-24 bg-background relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] -mr-32 -mt-32"></div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-8">
              Mais que Leads, entregamos <span className="text-primary">Inteligência de Mercado.</span>
            </h2>
            <p className="text-xl text-white/50 leading-relaxed mb-10">
              Após o ciclo de prospecção, você não recebe apenas uma lista. Você recebe um Relatório de Inteligência SW. É uma consultoria de mercado gratuita inclusa em cada meta batida.
            </p>

            <div className="space-y-6">
              {[
                "Qual perfil de cliente respondeu mais rápido.",
                "Quais cidades ou nichos demonstraram real interesse.",
                "Onde está o seu \"oceano azul\"."
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-white/80 font-medium">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-[#0c0e12] rounded-2xl border border-white/10 overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 group">
              <div className="relative">
                <img
                  src={relatorio}
                  alt="Relatório de Inteligência"
                  className="w-full h-auto object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e12] via-transparent to-transparent pointer-events-none"></div>

                <div className="absolute top-6 left-6 flex items-center justify-between right-6">
                  <div className="flex items-center gap-2">
                    <PieChart className="w-5 h-5 text-primary" />
                    <span className="text-xs font-bold text-white/80 uppercase tracking-widest shadow-sm">Relatório de Inteligência</span>
                  </div>
                  <div className="px-2 py-1 bg-primary/20 text-primary text-[10px] font-bold rounded border border-primary/30 backdrop-blur-sm">CONFIDENCIAL</div>
                </div>
              </div>

              <div className="p-6 pt-2 text-center bg-[#0c0e12]">
                <div className="px-4 py-2 bg-primary text-on-primary text-xs font-bold rounded-lg shadow-lg shadow-primary/20 inline-block hover:scale-105 transition-transform cursor-pointer">
                  VER INSIGHTS ESTRATÉGICOS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 border-t border-white/5 bg-background relative z-10">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <img src={logo} alt="SW Leads Logo" className="w-8 h-8 object-contain opacity-60" />
          <span className="font-bold text-white">Leads <span className="text-primary">Inteligentes</span></span>
        </div>

        <div className="flex gap-8 text-sm text-white/40">
          <Link to="/privacidade" className="hover:text-white transition-colors">Privacidade</Link>
          <Link to="/termos" className="hover:text-white transition-colors">Termos</Link>
          <a href="#" className="hover:text-white transition-colors">Contato</a>
        </div>

        <p className="text-sm text-white/20">
          © 2026 SW Leads Inteligentes. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

const Home = () => (
  <main>
    <Hero />
    <PainSection />
    <SolutionSection />
    <DifferentialSection />
    <PartnershipSection />
    <QualificationForm />
    <GrandFinale />
  </main>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-background text-on-background font-body selection:bg-primary selection:text-on-primary flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacidade" element={<Privacy />} />
            <Route path="/termos" element={<Terms />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
