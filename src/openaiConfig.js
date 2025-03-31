// File di configurazione per OpenAI
// IMPORTANTE: In un'applicazione di produzione, la chiave API dovrebbe essere gestita in modo sicuro
// idealmente attraverso un backend o variabili d'ambiente

// URL base dell'API OpenAI
export const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

// Utilizzo della variabile d'ambiente se disponibile
export const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY || 'INSERISCI_LA_TUA_CHIAVE_API_QUI';

// Modello da utilizzare (GPT-3.5-turbo è più ampiamente disponibile)
export const OPENAI_MODEL = 'gpt-3.5-turbo';

// Configurazione di base per la chiamata API
export const getOpenAIRequestConfig = (prompt) => ({
  model: OPENAI_MODEL,
  messages: [
    {
      role: 'system',
      content: 'Sei un esperto analista di dati per uno studio di doppiaggio. Fornisci analisi dettagliate, professionali e orientate all\'azione in italiano.'
    },
    {
      role: 'user',
      content: prompt
    }
  ],
  temperature: 0.7,
  max_tokens: 2000,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0
}); 