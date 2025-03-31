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

// Funzione per caricare specifici dati mensili on-demand
export const loadMonthData = async (year, month) => {
  try {
    // Normalizza il mese con zero iniziale se necessario
    const formattedMonth = month.toString().padStart(2, '0');
    const module = await import(`./data/month${year}-${formattedMonth}.js`);
    return module.default;
  } catch (err) {
    console.error(`Errore nel caricamento dei dati per ${year}-${month}:`, err);
    return null;
  }
}; 