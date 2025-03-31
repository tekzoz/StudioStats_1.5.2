export const GEMINI_API_KEY = 'AIzaSyAEBOnhBrvmm-9yCzyjWbTexOUO_4aK5S4';
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
