import { loadMonthData, useDynamicYearData } from './dataLoader';
import { getMonthData as originalGetMonthData, getYearData as originalGetYearData } from './data';

/**
 * Versione ottimizzata di getMonthData che carica i dati on-demand
 * @param {string|number} yearOrYearMonth Può essere una stringa nel formato 'YYYY-MM' o un numero che rappresenta l'anno
 * @param {number} [month] Se fornito, yearOrYearMonth è l'anno e month è il mese
 * @returns {Promise<Object|null>} Promise che restituisce i dati del mese o null
 */
export const getMonthData = async (yearOrYearMonth, month) => {
  try {
    // Supporto retrocompatibilità
    if (process.env.REACT_APP_USE_LEGACY_DATA === 'true') {
      return new Promise((resolve) => {
        try {
          // Caso 1: yearOrYearMonth è una stringa nel formato 'YYYY-MM'
          if (typeof yearOrYearMonth === 'string' && yearOrYearMonth.includes('-')) {
            resolve(originalGetMonthData(yearOrYearMonth));
            return;
          }
          
          // Caso 2: yearOrYearMonth è l'anno e month è il mese
          if (typeof yearOrYearMonth !== 'undefined' && typeof month !== 'undefined') {
            // Creiamo una stringa nel formato 'YYYY-MM'
            const yearMonth = `${yearOrYearMonth}-${String(month).padStart(2, '0')}`;
            resolve(originalGetMonthData(yearMonth));
            return;
          }
          
          // Non abbiamo potuto gestire i parametri forniti
          console.error('Formato parametri non valido per getMonthData:', { yearOrYearMonth, month });
          resolve(null);
        } catch (error) {
          console.error('Errore in getMonthData:', error);
          resolve(null);
        }
      });
    }

    // Nuova implementazione con caricamento dinamico
    let year, monthNum;
    
    // Caso 1: yearOrYearMonth è una stringa nel formato 'YYYY-MM'
    if (typeof yearOrYearMonth === 'string' && yearOrYearMonth.includes('-')) {
      const parts = yearOrYearMonth.split('-');
      year = parts[0];
      monthNum = parts[1];
    }
    // Caso 2: yearOrYearMonth è l'anno e month è il mese
    else if (typeof yearOrYearMonth !== 'undefined' && typeof month !== 'undefined') {
      year = yearOrYearMonth.toString();
      monthNum = month.toString().padStart(2, '0');
    }
    else {
      throw new Error('Formato parametri non valido per getMonthData');
    }
    
    // Carica i dati mensili on-demand
    return await loadMonthData(year, monthNum);
  } catch (error) {
    console.error('Errore in getMonthData:', error);
    return null;
  }
};

/**
 * Versione ottimizzata di getYearData che carica solo i dati necessari
 * @param {number|string} year L'anno di cui ottenere i dati
 * @param {number} [limitMonth=12] Il mese limite fino a cui considerare i dati
 * @returns {Promise<Object|null>} Promise che restituisce i dati dell'anno o null
 */
export const getYearData = async (year, limitMonth = 12) => {
  try {
    // Supporto retrocompatibilità
    if (process.env.REACT_APP_USE_LEGACY_DATA === 'true') {
      return new Promise((resolve) => {
        try {
          const yearString = year.toString();
          const data = originalGetYearData(yearString, limitMonth);
          resolve(data);
        } catch (error) {
          console.error('Errore in getYearData:', error);
          resolve(null);
        }
      });
    }
    
    // Nuova implementazione con loading dinamico
    const yearString = year.toString();
    
    // Importazione dinamica del file dell'anno
    const yearModule = await import(`./data/year${yearString}.js`);
    const yearData = yearModule.default;
    
    // Limita i dati al mese specificato se necessario
    if (limitMonth < 12) {
      // Assumendo che i dati siano strutturati come un array di 12 elementi (uno per mese)
      return yearData.slice(0, limitMonth);
    }
    
    return yearData;
  } catch (error) {
    console.error(`Errore in getYearData per l'anno ${year}:`, error);
    return null;
  }
}; 