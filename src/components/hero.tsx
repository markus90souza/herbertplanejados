/** biome-ignore-all lint/correctness/useExhaustiveDependencies: <explanation> */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
/** biome-ignore-all lint/a11y/useButtonType: <explanation> */
/** biome-ignore-all lint/performance/noImgElement: <explanation> */
/** biome-ignore-all lint/a11y/noStaticElementInteractions: <explanation> */

'use client';
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const SLIDE_DURATION = 6000;

  const slides = [
    {
      id: 1,
      title: "Design que Inspira",
      subtitle: "Móveis Planejados",
      description: "Transforme cada canto da sua casa em uma expressão de arte e funcionalidade com nossos projetos exclusivos.",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Cozinhas Modernas",
      subtitle: "Sofisticação & Prática",
      description: "O coração da casa merece o melhor. Acabamentos premium e ergonomia pensada para o seu dia a dia.",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Conforto no Dormitório",
      subtitle: "Seu Refúgio Particular",
      description: "Ambientes acolhedores projetados para o descanso perfeito, unindo texturas suaves e iluminação ideal.",
      image: "https://images.unsplash.com/photo-1616594039964-40891a909d99?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> |  number ;
    if (!isPaused) {
      const startTime = Date.now() - (progress / 100) * SLIDE_DURATION;
      interval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const newProgress = (elapsed / SLIDE_DURATION) * 100;

        if (newProgress >= 100) {
          setCurrentSlide(prev => (prev + 1) % slides.length);
          setProgress(0);
        } else {
          setProgress(newProgress);
        }
      }, 16);
    }
    return () => clearInterval(interval);
  }, [currentSlide, isPaused, progress]);

  return (
    <div
      className="relative h-screen w-full overflow-hidden bg-zinc-900 text-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/30 to-transparent z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className={`w-full h-full object-cover transition-transform duration-10000 ease-out ${index === currentSlide ? 'scale-110' : 'scale-100'}`}
          />

          <div className="absolute inset-0 z-20 flex items-center justify-start container mx-auto px-6 md:px-12">
            <div className={`max-w-3xl text-left transition-all duration-1000 transform ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="overflow-hidden mb-6">
                <span className="inline-block py-1 px-4 border border-white/30 rounded-full text-xs tracking-[0.3em] uppercase backdrop-blur-sm">
                  {slide.subtitle}
                </span>
              </div>
              <h1 className="text-5xl md:text-8xl font-light mb-6 leading-tight tracking-tight drop-shadow-lg">
                {slide.title.split(' ').map((word, i) => (
                  <span key={i} className="block">{word}</span>
                ))}
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-10 font-light max-w-xl leading-relaxed drop-shadow-md">
                {slide.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="group bg-white text-black px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-neutral-200 transition-all flex items-center gap-3">
                  Ver Projetos
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  //onClick={() => document.getElementById('contato').scrollIntoView({ behavior: 'smooth' })}
                  className="group bg-transparent border border-white/40 text-white px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-3"
                >
                  Falar com IA ✨
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-0 left-0 w-full z-30 border-t border-white/10 bg-black/30 backdrop-blur-md">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-4 w-full md:w-1/3">
            <span className="text-3xl font-light font-mono">{String(currentSlide + 1).padStart(2, '0')}</span>
            <div className="h-0.5 w-full bg-white/20 relative rounded-full overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full bg-white transition-all duration-100 ease-linear rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-sm text-white/50 font-mono">{String(slides.length).padStart(2, '0')}</span>
          </div>
          <div className="hidden md:flex gap-4">
            <button 
              onClick={() => setCurrentSlide((c) => (c - 1 + slides.length) % slides.length)}
              className="p-3 hover:bg-white/10 rounded-full transition-colors border border-white/20">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button onClick={() => setIsPaused(!isPaused)} 
            className="p-3 hover:bg-white/10 rounded-full transition-colors border border-white/20">
              {isPaused ? <Play className="w-5 h-5" /> : <Pause className="w-5 h-5" />}
            </button>
            <button onClick={() => setCurrentSlide((c) => (c + 1) % slides.length)} 
            className="p-3 hover:bg-white/10 rounded-full transition-colors border border-white/20">
              <ArrowRight className="w-5 h-5" />
              </button>
          </div>
        </div>
      </div>
    </div>
  );

};

export { HeroSlider }