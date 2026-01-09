/** biome-ignore-all lint/a11y/useButtonType: <explanation> */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
import { CheckCircle } from "lucide-react";
import { Reveal } from "./reveal";

const DiferenciaisSection = () => {
  return (
    <section className="py-32 bg-white" id="sobre">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <Reveal>
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.3em] mb-4">Nossa Essência</h3>
          <h2 className="text-5xl font-light text-gray-900 mb-8 leading-tight">
            A união perfeita entre <br /> <span className="italic font-serif">design</span> e técnica.
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6 font-light text-lg">
            Há mais de 20 anos no mercado carioca, a <strong>Hebert Planejados</strong> redefine o conceito de morar bem. Não vendemos apenas móveis; entregamos soluções que valorizam o seu patrimônio.
          </p>

          <div className="space-y-6 mt-10">
            {[
              "Acabamentos High-End (Laca, Vidro, Couro)",
              "Ferragens Austríacas Blum com Amortecimento",
              "Garantia estendida de 5 anos em contrato"
            ].map((item, i) => (
              <div key={i} className="flex items-center text-gray-800 group">
                <CheckCircle className="w-6 h-6 text-zinc-300 mr-4 group-hover:text-green-600 transition-colors" />
                <span className="font-light">{item}</span>
              </div>
            ))}
          </div>

          <button className="mt-12 px-10 py-4 border border-black text-black uppercase tracking-widest text-xs font-bold hover:bg-black hover:text-white transition-all duration-300">
            Conheça Nossa Fábrica
          </button>
        </Reveal>

        <Reveal className="relative h-[600px]">
          <div className="absolute top-0 right-0 w-5/6 h-5/6 z-10 overflow-hidden">
            {/** biome-ignore lint/performance/noImgElement: <explanation> */}
            <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop" className="w-full h-full object-cover shadow-2xl hover:scale-105 transition-transform duration-1000" alt="Office" />
          </div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 z-20 border-8 border-white shadow-2xl overflow-hidden">
            {/** biome-ignore lint/performance/noImgElement: <explanation> */}
            <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" alt="Detail" />
          </div>
          <div className="absolute -z-10 top-10 right-10 w-full h-full border border-gray-100" />
        </Reveal>
      </div>
    </section>
  );
};

export { DiferenciaisSection }