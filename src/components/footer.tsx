/** biome-ignore-all lint/a11y/useValidAnchor: <explanation> */
/** biome-ignore-all lint/a11y/useButtonType: <explanation> */
/** biome-ignore-all lint/a11y/useButtonType: <explanation> */

import { Facebook, Instagram, MapPin, Phone, Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-white pt-24 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 border-2 border-white flex items-center justify-center font-bold text-xl">H</div>
            <span className="text-2xl font-light tracking-[0.2em]">HERBERT<span className="font-bold">PLANEJADOS</span></span>
          </div>
          <p className="text-zinc-400 text-sm leading-relaxed mb-8 font-light">
            Especialistas em transformar sonhos em realidade através da marcenaria de alto padrão. Atendemos toda Bahia com excelência.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"><Facebook className="w-5 h-5" /></a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-8">Navegação</h4>
          <ul className="space-y-4 text-zinc-400 text-sm font-light">
            <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#ambientes" className="hover:text-white transition-colors">Projetos</a></li>
            <li><a href="#sobre" className="hover:text-white transition-colors">A Empresa</a></li>
            <li><a href="#contato" className="hover:text-white transition-colors">Contato</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-8">Localização</h4>
          <ul className="space-y-6 text-zinc-400 text-sm font-light">
            <li className="flex items-start gap-4">
              <MapPin className="w-5 h-5 mt-1 shrink-0 text-white" />
              <span>Agrovila 11, Rua H 101<br />Serra do Ramalho, Bahia - BA</span>
            </li>
            <li className="flex items-center gap-4">
              <Phone className="w-5 h-5 shrink-0 text-white" />
              <span>(77) 99999-9999</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-8">Newsletter</h4>
          <p className="text-zinc-400 text-sm mb-6 font-light">Cadastre-se para receber tendências de decoração.</p>
          <div className="flex flex-col gap-3">
            <input type="email" placeholder="Seu melhor e-mail" className="bg-transparent border border-white/20 px-4 py-3 text-white text-sm focus:outline-none focus:border-white transition-colors" />
            <button className="bg-white text-black px-4 py-3 text-sm font-bold uppercase hover:bg-zinc-200 transition-colors">
              Inscrever-se
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
        <p>&copy; 2024 Rio Arquitetura e Móveis. Todos os direitos reservados.</p>
        <p className="font-mono flex items-center gap-1">Powered by Gemini AI <Sparkles className="w-3 h-3 text-yellow-400" /></p>
      </div>
    </footer>
  );
};

export { Footer}