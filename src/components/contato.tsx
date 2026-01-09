/** biome-ignore-all lint/a11y/useButtonType: <explanation> */
/** biome-ignore-all lint/a11y/noLabelWithoutControl: <explanation> */
'use client';
import { Mail, Phone } from "lucide-react";
import { Reveal } from "./reveal";


/** biome-ignore-all lint/a11y/useButtonType: <explanation> */
const ContactSection = () => {

  return (
    <section className="py-24 bg-white" id="contato">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <Reveal>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.3em] mb-4">Fale Conosco</h3>
            <h2 className="text-4xl font-light text-gray-900 mb-6">Vamos realizar seu projeto?</h2>
            <p className="text-gray-600 mb-10 font-light">Preencha o formulário e um de nossos consultores entrará em contato em até 24 horas.</p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-700">
                <div className="w-12 h-12 bg-gray-100 flex items-center justify-center rounded-full"><Phone className="w-5 h-5" /></div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold">Telefone</p>
                  <p className="text-lg">(77) 99999-9999</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-700">
                <div className="w-12 h-12 bg-gray-100 flex items-center justify-center rounded-full"><Mail className="w-5 h-5" /></div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold">Email</p>
                  <p className="text-lg">contato@herbertplanejados.com.br</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="bg-gray-50 p-10 shadow-xl relative">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-2 md:col-span-1">
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Nome</label>
                  <input type="text" className="w-full bg-white border border-gray-200 px-4 py-3 focus:outline-none focus:border-black transition-colors" placeholder="Seu nome" />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Telefone</label>
                  <input type="text" className="w-full bg-white border border-gray-200 px-4 py-3 focus:outline-none focus:border-black transition-colors" placeholder="(21) 99999-9999" />
                </div>
              </div>
          
              <button className="w-full bg-black text-white py-4 font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors">
                Solicitar Orçamento
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export { ContactSection }
