import { motion } from "motion/react";
import { FileText, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import fundo from "../assets/images/fundo.png";

const Terms = () => {
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
            Termos de <span className="text-primary">Uso</span>
          </h1>

          <div className="prose prose-invert max-w-none space-y-6 text-white/60 leading-relaxed">
            <section className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <FileText className="w-6 h-6 text-primary" />
                1. Aceite dos Termos
              </h2>
              <p>
                Ao acessar o site da SW Leads Inteligentes e preencher nosso formulário, você concorda em cumprir estes termos de uso, todas as leis e regulamentos aplicáveis. Se você não concordar com algum destes termos, está proibido de usar ou acessar este site.
              </p>
            </section>

            <section className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-4">2. Licença de Uso</h2>
              <p>
                É concedida permissão para visualizar temporariamente o conteúdo do site para fins informativos e de qualificação comercial. Esta é uma concessão de licença, não uma transferência de título.
              </p>
              <p>
                Você não deve modificar, copiar o design ou código, ou usar o conteúdo para qualquer fim comercial sem autorização prévia.
              </p>
            </section>

            <section className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-4">3. Precisão das Informações</h2>
              <p>
                A SW Leads Inteligentes se esforça para manter as informações do site precisas e atualizadas. No entanto, reservamo-nos o direito de alterar descrições de serviços e modelos de negócio sem aviso prévio para melhor atender nossos parceiros.
              </p>
            </section>

            <section className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-4">4. Limitações</h2>
              <p>
                Em nenhum caso a SW Leads Inteligentes ou seus fornecedores serão responsáveis por quaisquer danos decorrentes do uso ou da incapacidade de usar os materiais em seu site, mesmo que tenhamos sido notificados da possibilidade de tais danos.
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

export default Terms;
