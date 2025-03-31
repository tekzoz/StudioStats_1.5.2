import { loadMonthData, useDynamicYearData } from './dataLoader';
import { getMonthData as originalGetMonthData, getYearData as originalGetYearData } from './data';

/**
 * Versione ottimizzata di getMonthData che utilizza direttamente la funzione dal file data.js
 * @param {string|number} yearOrYearMonth Può essere una stringa nel formato 'YYYY-MM' o un numero che rappresenta l'anno
 * @param {number} [month] Se fornito, yearOrYearMonth è l'anno e month è il mese
 * @returns {Promise<Object|null>} Promise che restituisce i dati del mese o null
 */
export const getMonthData = async (yearOrYearMonth, month) => {
  console.log(`getMonthData chiamata con parametri:`, { yearOrYearMonth, month });
  
  try {
    // Determina il formato corretto per chiamare originalGetMonthData
    let yearMonthStr;
    
    // Caso 1: yearOrYearMonth è una stringa nel formato 'YYYY-MM'
    if (typeof yearOrYearMonth === 'string' && yearOrYearMonth.includes('-')) {
      yearMonthStr = yearOrYearMonth;
      console.log(`Analisi parametro stringa: yearMonthStr=${yearMonthStr}`);
    }
    // Caso 2: yearOrYearMonth è l'anno e month è il mese
    else if (typeof yearOrYearMonth !== 'undefined' && typeof month !== 'undefined') {
      const yearStr = yearOrYearMonth.toString();
      const monthStr = month.toString().padStart(2, '0');
      yearMonthStr = `${yearStr}-${monthStr}`;
      console.log(`Analisi parametri separati: yearMonthStr=${yearMonthStr}`);
    }
    else {
      const errMsg = 'Formato parametri non valido per getMonthData';
      console.error(errMsg, { yearOrYearMonth, month });
      throw new Error(errMsg);
    }
    
    // Utilizzare direttamente la funzione originalGetMonthData da data.js
    console.log(`Utilizzo originalGetMonthData con: ${yearMonthStr}`);
    const data = originalGetMonthData(yearMonthStr);
    
    if (!data) {
      console.warn(`Nessun dato trovato per ${yearMonthStr}`);
      throw new Error(`NO_DATA:${yearMonthStr}`);
    }
    
    console.log(`Dati ottenuti per ${yearMonthStr}:`, data);
    
    // Restituisci i dati come Promise risolta
    return Promise.resolve(data);
  } catch (error) {
    console.error('Errore in getMonthData:', error);
    throw error; // Rilanciamo l'errore per gestirlo nel componente
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
    console.log(`getYearData chiamata con anno=${year}, limitMonth=${limitMonth}`);
    
    // Normalizza l'anno in formato string
    const yearString = year.toString();
    
    // Utilizza la funzione originalGetYearData direttamente da data.js
    console.log(`Utilizzando originalGetYearData per anno=${yearString}`);
    const data = originalGetYearData(yearString, limitMonth);
    
    if (!data) {
      console.warn(`Nessun dato trovato per l'anno ${yearString}`);
      return null;
    }
    
    console.log(`Dati ottenuti per l'anno ${yearString}:`, 
      data ? `Array di ${data.length} elementi` : null);
    
    // Restituisci i dati come Promise risolta
    return Promise.resolve(data);
  } catch (error) {
    console.error(`Errore in getYearData per l'anno ${year}:`, error);
    return null;
  }
}; 