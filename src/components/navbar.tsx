/** biome-ignore-all lint/a11y/useValidAnchor: <explanation> */
/** biome-ignore-all lint/correctness/useExhaustiveDependencies: <explanation> */
/** biome-ignore-all lint/a11y/useButtonType: <explanation> */
/** biome-ignore-all lint/a11y/useValidAnchor: <explanation> */
'use client';
import { Menu, MessageCircle, X } from "lucide-react";
import {  useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setScrolled]);

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 text-black shadow-md py-4 backdrop-blur-md' : 'bg-transparent text-white py-8'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className={`w-10 h-10 border-2 flex items-center justify-center font-serif font-bold text-xl transition-colors duration-300 ${scrolled ? 'border-black group-hover:bg-black group-hover:text-white' : 'border-white group-hover:bg-white group-hover:text-black'}`}>H</div>
            <span className="text-2xl font-light tracking-[0.2em]">HERBERT<span className="font-bold">PLANEJADOS</span></span>
          </div>

          <div className="hidden md:flex items-center gap-10 text-xs font-bold tracking-widest uppercase">
            <a href="#" className="hover:text-gray-400 transition-colors relative">Home</a>
            <a href="#ambientes" className="hover:text-gray-400 transition-colors relative">Ambientes</a>
            <a href="#sobre" className="hover:text-gray-400 transition-colors relative">Sobre</a>
            <a href="#contato" className={`px-6 py-3 border ${scrolled ? 'border-black text-black hover:bg-black hover:text-white' : 'border-white text-white hover:bg-white hover:text-black'} transition-all duration-300 flex items-center gap-2`}>
              Orçamento 
            </a>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        <div className={`absolute top-full left-0 w-full bg-white text-black overflow-hidden transition-all duration-500 ease-in-out ${menuOpen ? 'max-h-screen py-10 opacity-100 shadow-xl' : 'max-h-0 py-0 opacity-0'}`}>
          <div className="flex flex-col items-center gap-6 text-sm font-bold uppercase tracking-widest">
            <a href="#" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#ambientes" onClick={() => setMenuOpen(false)}>Ambientes</a>
            <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a>
            <a href="#contato" onClick={() => setMenuOpen(false)} className="bg-black text-white px-8 py-3 mt-4">Solicitar Orçamento</a>
          </div>
        </div>
      </nav>

      {/*<AIConsultant />*/}

      <a href="#" className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group">
        <MessageCircle className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-500 whitespace-nowrap font-bold text-sm">Fale no WhatsApp</span>
      </a>
    </>
  );
};

export { Navbar}
