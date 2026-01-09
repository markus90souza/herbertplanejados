/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
import { MessageCircle, Ruler, PenTool, Hammer } from "lucide-react";
import { Reveal } from "./reveal";

const ProcessSection = () => {
  const steps = [
    { icon: <MessageCircle className="w-8 h-8" />, title: "1. Briefing", desc: "Entendemos seus desejos, necessidades e estilo de vida em uma conversa detalhada." },
    { icon: <Ruler className="w-8 h-8" />, title: "2. Medição & Projeto", desc: "Nossos arquitetos criam o design 3D sob medida para o seu espaço." },
    { icon: <PenTool className="w-8 h-8" />, title: "3. Aprovação", desc: "Apresentação do projeto com materiais reais para sua validação final." },
    { icon: <Hammer className="w-8 h-8" />, title: "4. Instalação", desc: "Entrega pontual e montagem por equipe própria especializada." },
  ];

  return (
    <section className="py-24 bg-zinc-50 border-y border-zinc-200">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-gray-900">Como Trabalhamos</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto font-light">Um processo transparente e organizado para garantir que o resultado final supere suas expectativas.</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <Reveal key={idx} className="bg-white p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border-t-2 border-transparent hover:border-black group">
              <div className="mb-6 text-gray-400 group-hover:text-black transition-colors">{step.icon}</div>
              <h3 className="text-xl font-medium mb-3">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export { ProcessSection }