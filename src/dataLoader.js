import { useState, useEffect } from 'react';

// Funzione per caricare dinamicamente i dati in base all'anno
export const useDynamicYearData = (year) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadYearData = async () => {
      try {
        setLoading(true);
        // Importazione dinamica basata sull'anno
        const module = await import(`./data/year${year}.js`);
        setData(module.default);
        setLoading(false);
      } catch (err) {
        console.error(`Errore nel caricamento dei dati per l'anno ${year}:`, err);
        setError(err);
        setLoading(false);
      }
    };

    if (year) {
      loadYearData();
    }
  }, [year]);

  return { data, loading, error };
};

// Hook per caricare solo i dati più recenti (ultimi due anni) all'avvio
export const useInitialData = () => {
  const [initialDataLoaded, setInitialDataLoaded] = useState(false);
  const [availableYears, setAvailableYears] = useState([]);
  const [currentYearData, setCurrentYearData] = useState(null);
  const [previousYearData, setPreviousYearData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadInitialData = async () => {
      try {
        // Carica prima la configurazione base con gli anni disponibili
        const configModule = await import('./data/dataConfig.js');
        const years = configModule.availableYears;
        setAvailableYears(years);
        
        // Carica i dati per l'anno corrente e precedente
        const currentYear = new Date().getFullYear().toString();
        const prevYear = (new Date().getFullYear() - 1).toString();
        
        // Caricamento parallelo dei dati degli ultimi due anni
        const [currentYearModule, prevYearModule] = await Promise.all([
          import(`./data/year${currentYear}.js`),
          import(`./data/year${prevYear}.js`)
        ]);
        
        setCurrentYearData(currentYearModule.default);
        setPreviousYearData(prevYearModule.default);
        setInitialDataLoaded(true);
        setLoading(false);
      } catch (err) {
        console.error('Errore nel caricamento dei dati iniziali:', err);
        setLoading(false);
      }
    };
    
    loadInitialData();
  }, []);

  return { initialDataLoaded, availableYears, currentYearData, previousYearData, loading };
};

// Verifica se un mese è nel futuro
const isFutureMonth = (year, month) => {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth() + 1;
  
  return (parseInt(year) > currentYear) || 
         (parseInt(year) === currentYear && parseInt(month) > currentMonth);
};

// Genera dati vuoti per un mese
const generateEmptyMonthData = (year, month) => {
  return {
    year: parseInt(year),
    month: parseInt(month),
    days: {},
    giorniLavorativi: 0,
    totaleTurni: 0,
    note: "Dati non disponibili"
  };
};

// Lista di mesi verificati disponibili
const verifiedMonths = [
  { year: "2024", month: "01" },
  { year: "2024", month: "02" },
  { year: "2024", month: "03" },
  { year: "2024", month: "04" },
  { year: "2024", month: "05" },
  { year: "2024", month: "06" },
  { year: "2024", month: "07" },
  { year: "2024", month: "08" },
  { year: "2024", month: "09" },
  { year: "2024", month: "10" },
  { year: "2024", month: "11" },
  { year: "2024", month: "12" },
  { year: "2025", month: "01" },
  { year: "2025", month: "02" }
];

// Verifica se il mese è nella lista dei mesi verificati
const isVerifiedMonth = (year, month) => {
  const formattedMonth = month.toString().padStart(2, '0');
  return verifiedMonths.some(m => m.year === year && m.month === formattedMonth);
};

// Aggiungo funzioni di debug per verificare i percorsi dei file

// Debug: lista i percorsi dei file di dati verificati
const listVerifiedDataFiles = () => {
  console.log("Percorsi dei file di dati verificati:");
  verifiedMonths.forEach(month => {
    const path = `./data/month${month.year}-${month.month}.js`;
    console.log(`- ${path}`);
  });
};

// Debug: stampa i dettagli di un modulo importato
const logModuleInfo = (modulePath, module) => {
  console.log(`Modulo importato: ${modulePath}`);
  console.log(`- Tipo: ${typeof module}`);
  console.log(`- Contiene default? ${module && typeof module.default !== 'undefined'}`);
  if (module && module.default) {
    console.log(`- Tipo di default: ${typeof module.default}`);
    if (typeof module.default === 'object') {
      console.log(`- Proprietà di default: ${Object.keys(module.default).join(', ')}`);
    }
  }
};

// Funzione per caricare specifici dati mensili on-demand
export const loadMonthData = async (year, month) => {
  console.log(`[loadMonthData] Richiesto anno=${year}, mese=${month}`);
  
  // Debug: lista i file dati verificati all'inizio
  listVerifiedDataFiles();
  
  // CONTROLLO SICUREZZA: blocca esplicitamente marzo 2025
  if (year === "2025" && month === "03" || year === "2025" && month === "3" || 
      year === 2025 && month === 3 || year === 2025 && month === "03" || year === 2025 && month === "3") {
    console.warn(`[loadMonthData] BLOCCATO: Il mese Marzo 2025 è stato esplicitamente bloccato. Restituisco dati vuoti.`);
    return generateEmptyMonthData(year, month);
  }
  
  try {
    // Verifica se è un mese futuro
    if (isFutureMonth(year, month)) {
      console.warn(`[loadMonthData] Tentativo di caricare dati per un mese futuro: ${year}-${month}, ritorno dati vuoti`);
      return generateEmptyMonthData(year, month);
    }
    
    // Verifica se il mese è nella lista dei mesi verificati
    if (!isVerifiedMonth(year, month)) {
      console.warn(`[loadMonthData] Mese ${year}-${month} non presente nella lista dei mesi verificati, ritorno dati vuoti`);
      return generateEmptyMonthData(year, month);
    }
    
    // Normalizza il mese con zero iniziale se necessario
    const formattedMonth = month.toString().padStart(2, '0');
    const modulePath = `./data/month${year}-${formattedMonth}.js`;
    console.log(`[loadMonthData] Percorso file da caricare: ${modulePath}`);
    
    try {
      // Tenta di caricare il modulo
      console.log(`[loadMonthData] Tentativo di importazione modulo...`);
      
      // Importa il modulo
      const module = await import(modulePath);
      
      // Debug: log delle informazioni sul modulo
      logModuleInfo(modulePath, module);
      
      if (!module || !module.default) {
        console.error(`[loadMonthData] Modulo importato ma non contiene dati default per ${year}-${formattedMonth}`);
        return generateEmptyMonthData(year, month);
      }
      
      console.log(`[loadMonthData] Modulo importato con successo per ${year}-${formattedMonth}`);
      return module.default;
    } catch (importError) {
      console.log(`[loadMonthData] Errore durante importazione: ${importError.name} - ${importError.message}`);
      console.log(`[loadMonthData] Stack trace: ${importError.stack}`);
      
      // Gestione specifica degli errori di importazione
      if (importError.message && importError.message.includes('Cannot find module')) {
        console.warn(`[loadMonthData] File dati mancante per ${year}-${formattedMonth}: ${importError.message}`);
        throw new Error(`FILE_NOT_FOUND:${year}-${formattedMonth}`);
      } else if (importError.name === 'ChunkLoadError') {
        console.error(`[loadMonthData] Errore di connessione durante il caricamento dei dati per ${year}-${formattedMonth}: ${importError.message}`);
        throw new Error(`NETWORK_ERROR:${year}-${formattedMonth}`);
      } else {
        console.error(`[loadMonthData] Errore sconosciuto durante il caricamento: ${importError.name} - ${importError.message}`);
        throw importError;
      }
    }
  } catch (err) {
    // Gestione degli errori generali
    console.error(`[loadMonthData] Errore nel caricamento dei dati per ${year}-${month}:`, err);
    throw err; // Rilanciamo l'errore per gestirlo nel componente
  }
}; 