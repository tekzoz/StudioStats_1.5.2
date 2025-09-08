// IMPORTANTE: Mai hardcodare chiavi API nel codice sorgente!
// La chiave API deve essere sempre gestita tramite variabili d'ambiente
export const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY || 'AIzaSyDrAMa3wyG_9BanK8E7t-8DAWiVGWSLYGA';
export const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

export const getGeminiRequestConfig = (prompt) => {
  return {
    contents: [
      {
        parts: [
          {
            text: prompt
          }
        ]
      }
    ],
    generationConfig: {
      temperature: 0.9,
      topK: 40,
      topP: 0.95,
      maxOutputTokens: 4096
    }
  };
};
