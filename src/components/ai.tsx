/** biome-ignore-all lint/a11y/useButtonType: <explanation> */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
/** biome-ignore-all lint/correctness/useExhaustiveDependencies: <explanation> */
import { AIGemini } from "@/lib/gemini";
import {  Sparkles, X, Loader2, Send } from "lucide-react";
import { useState, useRef, useEffect } from "react";

/** biome-ignore-all lint/a11y/useButtonType: <explanation> */
const AIConsultant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { role: 'ai', text: 'Olá! Sou seu assistente de design ✨. Como posso ajudar a transformar seu ambiente hoje?' }
  ]);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input;
    setInput("");
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    const systemPrompt = "Você é um arquiteto sênior e consultor de design da Rio Arq Design, uma empresa de móveis planejados de alto padrão no Rio de Janeiro. Ajude o usuário com ideias de decoração, escolha de materiais (Laca, MDF, Vidro, Ferragens Blum) e otimização de espaço. Seja elegante, profissional e criativo. Sempre mencione a qualidade da Rio Arq.";

    const response = await AIGemini(userMsg, systemPrompt);

    setLoading(false);
    if (response) {
      setMessages(prev => [...prev, { role: 'ai', text: response }]);
    } else {
      setMessages(prev => [...prev, { role: 'ai', text: "Desculpe, tive um pequeno problema técnico. Poderia repetir?" }]);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-6 z-50 bg-black text-white p-4 rounded-full shadow-2xl hover:bg-zinc-800 transition-all duration-300 flex items-center justify-center border border-white/20"
      >
        <Sparkles className="w-6 h-6 text-yellow-400" />
      </button>

      {isOpen && (
        <div className="fixed bottom-40 right-6 z-50 w-[350px] md:w-[400px] bg-white shadow-2xl rounded-2xl flex flex-col overflow-hidden border border-gray-100 animate-in slide-in-from-bottom-5">
          <div className="bg-black text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-yellow-400" />
              <span className="font-bold text-sm tracking-widest uppercase">Consultoria ✨</span>
            </div>
            <button onClick={() => setIsOpen(false)}><X className="w-5 h-5" /></button>
          </div>

          <div className="h-100 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${m.role === 'user' ? 'bg-black text-white rounded-br-none' : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-bl-none'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 flex gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span className="text-xs text-gray-400">Criando conceitos...</span>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <div className="p-4 border-t border-gray-100 bg-white flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ex: Ideias para cozinha pequena..."
              className="flex-1 bg-gray-100 border-none rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-black outline-none transition-all"
            />
            <button
              onClick={handleSend}
              disabled={loading}
              className="bg-black text-white p-2 rounded-full hover:scale-105 transition-transform disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export { AIConsultant }