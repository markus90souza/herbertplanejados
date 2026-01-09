/* --- CONFIGURAÇÃO GEMINI API --- */
const apiKey = ""; // A chave é fornecida pelo ambiente

async function AIGemini(prompt: any, systemInstruction = "") {
  try {
    let delay = 1000;
    for (let i = 0; i < 5; i++) {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          systemInstruction: systemInstruction ? { parts: [{ text: systemInstruction }] } : undefined
        })
      });

      if (response.ok) {
        const data = await response.json();
        return data.candidates?.[0]?.content?.parts?.[0]?.text;
      }

      if (response.status === 429 || response.status >= 500) {
        await new Promise(resolve => setTimeout(resolve, delay));
        delay *= 2;
      } else {
        break;
      }
    }
    throw new Error("Falha ao conectar com a IA após várias tentativas.");
  } catch (error) {
    console.error("Erro Gemini:", error);
    return null;
  }
}


export { AIGemini }
