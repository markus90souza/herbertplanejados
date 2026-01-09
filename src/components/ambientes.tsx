/** biome-ignore-all lint/performance/noImgElement: <explanation> */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
import { ArrowRight } from "lucide-react";
import { Reveal } from "./reveal";

const AmbientesSection = () => {
  const categories = [
    { name: "Cozinhas", desc: "Funcionalidade e Estilo", img: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=2070&auto=format&fit=crop", size: "col-span-1 md:col-span-2 row-span-2" },
    { name: "Dormitórios", desc: "Conforto Supremo", img: "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?q=80&w=2071&auto=format&fit=crop", size: "col-span-1 md:col-span-1 row-span-1" },
    { name: "Home Office", desc: "Produtividade", img: "https://images.unsplash.com/photo-1593642532400-2682810df593?q=80&w=2069&auto=format&fit=crop", size: "col-span-1 md:col-span-1 row-span-1" },
    { name: "Banheiros", desc: "Spa em Casa", img: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=2069&auto=format&fit=crop", size: "col-span-1 md:col-span-1 row-span-1" },
    { name: "Salas de Estar", desc: "Convivência", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop", size: "col-span-1 md:col-span-1 row-span-1" }
  ];

  return (
    <section className="py-32 bg-white" id="ambientes">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="text-center mb-20">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-[0.3em] mb-4">Portfólio Exclusivo</h3>
            <h2 className="text-5xl font-light text-gray-900 mb-6">Ambientes Planejados</h2>
            <div className="w-16 h-1 bg-black mx-auto"></div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[350px]">
          {categories.map((cat, idx) => (
            <Reveal key={idx} className={`relative group overflow-hidden cursor-pointer ${cat.size}`}>
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/50 transition-colors duration-500 z-10" />
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute bottom-8 left-8 z-20 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-3xl font-light mb-1">{cat.name}</h3>
                <p className="text-sm font-light text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 mb-4">{cat.desc}</p>
                <div className="h-px w-12 bg-white group-hover:w-full transition-all duration-700 ease-out"></div>
              </div>
              <div className="absolute top-8 right-8 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 bg-white text-black rounded-full p-3">
                <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export { AmbientesSection }