import { motion } from "motion/react";
import { Shield, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import fundo from "../assets/images/fundo.png";

const Privacy = () => {
  return (
    <div className="relative pt-32 pb-20 overflow-hidden min-h-screen">
      {/* Background Pattern */}
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

      <div className="max-w-4xl mx-auto px-6 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8 text-sm font-bold uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para Home
          </Link>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-[0.95] mb-8 text-white">
            Política de <span className="text-primary">Privacidade</span>
          </h1>

          <div className="prose prose-invert max-w-none space-y-6 text-white/60 leading-relaxed">
            <section className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Shield className="w-6 h-6 text-primary" />
                1. Coleta de Dados
              </h2>
              <p>
                A SW Leads Inteligentes valoriza a sua privacidade. Coletamos apenas as informações necessárias para qualificar sua empresa para nossos serviços de prospecção, conforme preenchido em nosso formulário de contato.
              </p>
              <p>
                Os dados coletados incluem: Nome, Empresa, E-mail Corporativo, WhatsApp, Cidade, Estado e informações sobre o perfil de cliente e metas de vendas.
              </p>
            </section>

            <section className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-4">2. Uso das Informações</h2>
              <p>
                Utilizamos seus dados exclusivamente para:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Analisar a viabilidade da parceria estratégica.</li>
                <li>Entrar em contato para apresentação da nossa solução.</li>
                <li>Customizar nossa máquina de prospecção caso o contrato seja fechado.</li>
              </ul>
            </section>

            <section className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-4">3. Proteção e Segurança</h2>
              <p>
                Implementamos medidas de segurança técnicas e organizacionais para proteger seus dados contra acesso não autorizado, perda ou alteração. Seus dados não são vendidos ou compartilhados com terceiros para fins publicitários.
              </p>
            </section>

            <section className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-4">4. Seus Direitos</h2>
              <p>
                De acordo com a LGPD, você tem o direito de solicitar o acesso, correção ou exclusão de seus dados pessoais a qualquer momento através de nossos canais de atendimento.
              </p>
            </section>

            <div className="pt-8 text-sm italic">
              Última atualização: 14 de Abril de 2026.
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;
