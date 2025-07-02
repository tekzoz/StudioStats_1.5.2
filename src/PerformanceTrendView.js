import React, { useState, useEffect, useMemo, useCallback } from 'react';
import styled from 'styled-components';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Share2, RefreshCw, Copy, ExternalLink } from 'lucide-react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import { 
  getYearlyData, 
  getCurrentYearAndMonth,
  getAvailableYears
} from './data';
import { 
  GEMINI_API_URL, 
  GEMINI_API_KEY, 
  getGeminiRequestConfig 
} from './geminiConfig';

// Styled components (invariati)

const ViewContainer = styled.div`
  background-color: #F0F9FF;
  min-height: 100vh;
  padding: 24px;
  font-family: 'Helvetica Neue', Arial, sans-serif;
`;

const ViewContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const BackRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const BackButton = styled.button`
  background-color: #E0E7FF;
  color: #4B5563;
  border: none;
  border-radius: 8px;
  padding: 10px 16px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #C7D2FE;
  }
`;

const ShareButton = styled.button`
  background-color: #3B82F6;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 16px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #2563EB;
  }
`;

const ViewTitle = styled.h1`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 32px;
  color: #1F2937;
`;

const ChartContainer = styled.div`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 24px;
  margin-bottom: 24px;
`;

const AnalysisSection = styled.div`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 24px;
  margin-bottom: 24px;
`;

const AnalysisTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
  color: #1F2937;
`;

const AnalysisText = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: #4B5563;
  white-space: pre-wrap;
`;

const BlurredText = styled.div`
  filter: blur(5px);
  position: relative;
  overflow: hidden;
`;

const OverlayText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-45deg);
  font-size: 24px;
  font-weight: bold;
  color: red;
  white-space: nowrap;
  pointer-events: none;
  z-index: 10;
  filter: none;
  text-shadow: 1px 1px 2px white, -1px -1px 2px white, 1px -1px 2px white, -1px 1px 2px white;
`;

const LegendContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  margin-bottom: 10px;
`;

const LegendColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 8px;
  background-color: ${props => props.color};
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
`;

const Button = styled.button`
  background-color: #3B82F6;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 10px 16px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 16px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #2563EB;
  }

  &:disabled {
    background-color: #93C5FD;
    cursor: not-allowed;
  }
`;

const LoadingSpinner = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255,255,255,.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s ease-in-out infinite;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;

const MarkdownContent = styled.div`
  font-size: 16px;
  line-height: 1.6;
  color: #4B5563;

  h1 {
    font-size: 24px;
    font-weight: 700;
    margin-top: 24px;
    margin-bottom: 16px;
    color: #1F2937;
  }

  h2 {
    font-size: 20px;
    font-weight: 600;
    margin-top: 20px;
    margin-bottom: 12px;
    color: #1F2937;
  }

  h3 {
    font-size: 18px;
    font-weight: 600;
    margin-top: 16px;
    margin-bottom: 8px;
    color: #1F2937;
  }

  p {
    margin-bottom: 16px;
  }

  ul, ol {
    margin-bottom: 16px;
    padding-left: 24px;
  }

  li {
    margin-bottom: 8px;
  }

  strong {
    font-weight: 600;
    color: #1F2937;
  }

  em {
    font-style: italic;
  }

  a {
    color: #3B82F6;
    text-decoration: underline;
  }

  blockquote {
    border-left: 4px solid #E5E7EB;
    padding-left: 16px;
    margin-left: 0;
    margin-right: 0;
    font-style: italic;
    color: #6B7280;
  }

  code {
    font-family: monospace;
    background-color: #F3F4F6;
    padding: 2px 4px;
    border-radius: 4px;
    font-size: 14px;
  }

  hr {
    border: 0;
    height: 1px;
    background-color: #E5E7EB;
    margin: 24px 0;
  }
`;

// Helper functions
const getMonthName = (monthNumber) => {
  const monthNames = [
    'Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno',
    'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'
  ];
  return monthNames[monthNumber - 1];
};

const formatNumber = (num) => new Intl.NumberFormat('it-IT').format(Math.round(num));

const generateColorPalette = (numColors) => {
  const hueStep = 360 / numColors;
  return Array.from({ length: numColors }, (_, i) => 
    `hsl(${i * hueStep}, 70%, 50%)`
  );
};

// Nuova funzione per l'API Gemini
const fetchGeminiAnalysis = async (prompt) => {
  // Se non è stata configurata la chiave API, mostra un errore
  if (GEMINI_API_KEY === 'LA_TUA_CHIAVE_API') {
    return `# ⚠️ Configurazione API Gemini richiesta

Per utilizzare questa funzionalità, è necessario configurare una chiave API Gemini valida.

## Istruzioni per la configurazione:

1. Ottieni una chiave API da [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Apri il file \`src/geminiConfig.js\`
3. Sostituisci \`LA_TUA_CHIAVE_API\` con la tua chiave API
4. Salva il file e riavvia l'applicazione`;
  }

  try {
    // Crea la configurazione completa della richiesta
    const requestConfig = getGeminiRequestConfig(prompt);
    
    // Effettua la chiamata API
    const response = await axios.post(
      `${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, 
      requestConfig
    );
    
    // Estrai e restituisci il testo generato
    return response.data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error('Errore nella chiamata API Gemini:', error);
    
    // Gestisci gli errori comuni
    if (error.response) {
      // Errori di autenticazione
      if (error.response.status === 401) {
        return "# ⚠️ Errore di autenticazione\n\nLa chiave API Gemini non è valida. Verifica la tua chiave in `src/geminiConfig.js`.";
      }
      
      // Errori di quota o limiti
      if (error.response.status === 429) {
        return "# ⚠️ Limite di richieste superato\n\nHai superato il limite di richieste per la tua chiave API Gemini. Riprova più tardi.";
      }
      
      // Altri errori
      return `# ⚠️ Errore nella chiamata API\n\nSi è verificato un errore (${error.response.status}) durante la chiamata all'API Gemini. Dettagli: ${error.response.data.error?.message || 'Errore sconosciuto'}`;
    }
    
    // Errori di rete o di altro tipo
    return "# ⚠️ Errore di connessione\n\nNon è stato possibile contattare l'API Gemini. Controlla la tua connessione internet e riprova.";
  }
};

// Funzione fallback per generare un'analisi simulata quando l'API è in rate limit
const generateSimulatedAnalysis = (yearToAnalyze, currentMonth, totalTurni, averageMonthlyTurni) => {
  const month = currentMonth > 1 ? currentMonth - 1 : 12;
  const currentDate = new Date();
  const formatDate = (date) => {
    return date.toLocaleDateString('it-IT', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };
  
  return `# REPORT STRATEGICO SULL'ANDAMENTO DEI TURNI DI DOPPIAGGIO
## Data generazione: ${formatDate(currentDate)}

> ⚠️ **Nota**: Questa è un'analisi simulata generata localmente perché l'API Gemini non è attualmente disponibile a causa di limiti di utilizzo.

## Riepilogo Esecutivo
L'analisi dei dati di performance fino a ${getMonthName(month)} ${yearToAnalyze} mostra una tendenza complessivamente positiva rispetto agli anni precedenti. La produttività, misurata in turni di lavoro (${totalTurni} turni totali), evidenzia un andamento stagionale con picchi nel periodo primaverile e autunnale.

## Confronto con Gli Anni Precedenti
Il totale dei turni completati finora (${totalTurni}) con una media mensile di ${averageMonthlyTurni.toFixed(2)} turni rappresenta un buon risultato rispetto agli anni precedenti.

## Tendenze Stagionali
L'analisi trimestrale rivela un pattern coerente con gli anni precedenti, con le seguenti caratteristiche:
- Primo trimestre: Performance in linea con le aspettative
- Secondo trimestre: Picco di produttività 
- Terzo trimestre: Stabilizzazione dei valori

## Previsioni per il Resto dell'Anno
Basandoci sui pattern osservati, ci aspettiamo che la produttività totale dell'anno si attesti intorno ai ${Math.round(totalTurni * 12 / month)} turni, assumendo che il trend attuale continui.

## Raccomandazioni
Per ottimizzare ulteriormente la performance, suggeriamo di:
1. Pianificare un incremento strategico della capacità produttiva nei mesi tipicamente più deboli
2. Valutare l'efficienza operativa dei turni nei periodi di picco
3. Considerare l'espansione delle risorse nei periodi di maggiore domanda

## Nota Tecnica
Per utilizzare l'analisi AI reale:
1. Attendi che i limiti di richieste Gemini si azzerino (solitamente dopo alcune ore)
2. Considera l'aggiornamento del tuo piano Gemini per limiti più elevati
3. Implementa strategie di caching per ridurre le chiamate API necessarie

---

*Questa analisi simulata è stata generata localmente. Per analisi più accurate e dettagliate, utilizza la funzionalità AI quando sarà nuovamente disponibile.*`;
};

// Funzione per salvare l'analisi in localStorage
const saveAnalysisToCache = (yearToAnalyze, month, analysis) => {
  try {
    const cacheKey = `aiAnalysis_${yearToAnalyze}_${month}`;
    const cacheData = {
      timestamp: Date.now(),
      analysis: analysis
    };
    localStorage.setItem(cacheKey, JSON.stringify(cacheData));
  } catch (error) {
    console.error("Errore nel salvataggio dell'analisi in cache:", error);
    // Se il salvataggio fallisce, continuiamo senza errori
  }
};

// Funzione per recuperare l'analisi dalla cache
const getAnalysisFromCache = (yearToAnalyze, month) => {
  try {
    const cacheKey = `aiAnalysis_${yearToAnalyze}_${month}`;
    const cachedData = localStorage.getItem(cacheKey);
    
    if (!cachedData) return null;
    
    const parsedData = JSON.parse(cachedData);
    const now = Date.now();
    const cachedTime = parsedData.timestamp;
    
    // Consideriamo valida la cache per 24 ore (86400000 ms)
    if (now - cachedTime > 86400000) {
      // Cache scaduta, la eliminiamo
      localStorage.removeItem(cacheKey);
      return null;
    }
    
    return parsedData.analysis;
  } catch (error) {
    console.error("Errore nel recupero dell'analisi dalla cache:", error);
    return null;
  }
};

const PerformanceTrendView = ({ setView }) => {
  const [allYearsData, setAllYearsData] = useState({});
  const [yearAnalysis, setYearAnalysis] = useState('');
  const [prediction, setPrediction] = useState('');
  const [aiAnalysis, setAiAnalysis] = useState('');
  const [isGeneratingAnalysis, setIsGeneratingAnalysis] = useState(false);

  const availableYears = useMemo(() => getAvailableYears().map(y => parseInt(y.value)), []);
  const colorPalette = useMemo(() => generateColorPalette(availableYears.length), [availableYears]);
  const { currentYear, currentMonth } = getCurrentYearAndMonth();

  const generateYearAnalysis = useCallback((year, currentMonth, yearData, allYearsData) => {
    const month = currentMonth > 1 ? currentMonth - 1 : 12;
    const yearToAnalyze = month === 12 ? year - 1 : year;
    const currentYearData = yearData[yearToAnalyze] || {};
    
    const totalTurni = Object.values(currentYearData)
      .slice(0, month)
      .reduce((sum, monthData) => sum + (monthData?.totaleTurni || 0), 0);
    
    const monthsWithData = Object.values(currentYearData)
      .slice(0, month)
      .filter(monthData => monthData && monthData.totaleTurni > 0).length;
    
    const averageMonthlyTurni = monthsWithData > 0 ? totalTurni / monthsWithData : 0;
  
    const previousYearsData = Object.entries(allYearsData)
      .filter(([y]) => parseInt(y) < yearToAnalyze && parseInt(y) >= 2021)
      .map(([year, data]) => {
        const yearTotal = Object.values(data)
          .slice(0, month)
          .reduce((sum, monthData) => sum + (monthData?.totaleTurni || 0), 0);
        return { year: parseInt(year), totalTurni: yearTotal };
      });
  
    const avgPreviousYears = previousYearsData.reduce((sum, y) => sum + y.totalTurni, 0) / previousYearsData.length;
    
    let analysis = `Considerazioni sull'anno in corso ${yearToAnalyze} (fino a ${getMonthName(month)}):\n\n`;
    analysis += `Nel periodo analizzato, sono stati effettuati un totale di ${formatNumber(totalTurni)} turni, `;
    analysis += `con una media mensile di ${formatNumber(averageMonthlyTurni)} turni. `;
    
    const percentageDiff = ((totalTurni - avgPreviousYears) / avgPreviousYears) * 100;
    analysis += `Questo rappresenta un ${percentageDiff > 0 ? 'aumento' : 'diminuzione'} del ${formatNumber(Math.abs(percentageDiff))}% `;
    analysis += `rispetto alla media di tutti gli anni precedenti nello stesso periodo. `;

    analysis += `\n\nAnalisi stagionale:\n`;
    const monthlyTurni = Object.values(currentYearData)
      .slice(0, month)
      .map(m => m ? m.totaleTurni : undefined);
    const quarterlyData = [
      monthlyTurni.slice(0, 3).filter(m => m !== undefined),
      monthlyTurni.slice(3, 6).filter(m => m !== undefined),
      monthlyTurni.slice(6, 9).filter(m => m !== undefined),
      monthlyTurni.slice(9, 12).filter(m => m !== undefined)
    ];

    const quarterlyAverages = quarterlyData.map(q => q.length > 0 ? q.reduce((a, b) => a + b, 0) / q.length : null);
    
    const quarters = ['primo', 'secondo', 'terzo', 'quarto'];
    quarterlyAverages.forEach((avg, index) => {
      if (avg !== null) {
        const percentDiff = ((avg - avgPreviousYears / 12) / (avgPreviousYears / 12)) * 100;
        analysis += `Il ${quarters[index]} trimestre mostra una media di ${formatNumber(avg)} turni al mese, `;
        analysis += `${percentDiff > 0 ? 'superiore' : 'inferiore'} del ${formatNumber(Math.abs(percentDiff))}% rispetto alla media degli anni passati.\n`;
      }
    });

    const allYearsTotals = Object.entries(allYearsData)
      .map(([year, data]) => ({
        year: parseInt(year),
        totalTurni: Object.values(data)
          .slice(0, month)
          .reduce((sum, monthData) => sum + (monthData?.totaleTurni || 0), 0)
      }))
      .sort((a, b) => b.totalTurni - a.totalTurni);

    const currentYearRank = allYearsTotals.findIndex(y => y.year === yearToAnalyze) + 1;
    const totalYears = allYearsTotals.length;

    analysis += `\nConclusione:\n`;
    analysis += `Con le informazioni attuali possiamo determinare che la produttività dell'anno in corso è `;
    analysis += `${percentageDiff > 0 ? 'superiore' : 'inferiore'} alla media degli anni passati del ${formatNumber(Math.abs(percentageDiff))}%. `;
    analysis += `Si posiziona al ${currentYearRank}° posto su ${totalYears} nella classifica generale. `;
    analysis += `Questo posizionamento tiene conto di tutti gli anni disponibili nei dati, `;
    analysis += `mentre il confronto con la media considera solo il periodo analizzato fino ad ora (${getMonthName(month)}). `;
    
    if (month < 12) {
      analysis += `C'è ancora tempo per migliorare la performance complessiva dell'anno.`;
    }

    return analysis;
  }, []);

  const makePrediction = useCallback((year, month, allYearsData) => {
    let analysis = '';
    const futurePredictions = [];
    let totalEffectiveTurni = 0;
    let totalPredictedTurni = 0;
  
    for (let i = 0; i < 12; i++) {
      const monthData = allYearsData[year][i];
      if (i < month - 1) {
        totalEffectiveTurni += monthData ? monthData.totaleTurni : 0;
      } else {
        let totalTurni = 0;
        let yearsCount = 0;
        availableYears.forEach(y => {
          if (y !== 2020 && y !== year) {
            const yearData = allYearsData[y];
            if (yearData && yearData[i] && yearData[i].totaleTurni > 0) {
              totalTurni += yearData[i].totaleTurni;
              yearsCount++;
            }
          }
        });
        if (yearsCount > 0) {
          const averageTurni = Math.round(totalTurni / yearsCount);
          totalPredictedTurni += averageTurni;
          futurePredictions.push(`• ${getMonthName(i + 1)}: ${formatNumber(averageTurni)} turni`);
        }
      }
    }
  
    const totalComplessivo = totalEffectiveTurni + totalPredictedTurni;
  
    const productivityRanking = availableYears
      .map(y => {
        if (y === year) {
          return { year: y, totalTurni: totalComplessivo };
        } else {
          const yearTotalTurni = Object.values(allYearsData[y]).reduce((sum, month) => sum + (month ? month.totaleTurni : 0), 0);
          return { year: y, totalTurni: yearTotalTurni };
        }
      })
      .sort((a, b) => b.totalTurni - a.totalTurni);
  
    analysis += `Turni effettivi (fino a ${getMonthName(month - 1)}): ${formatNumber(totalEffectiveTurni)}\n`;
    analysis += `Turni previsti (da ${getMonthName(month)} a Dicembre): ${formatNumber(totalPredictedTurni)}\n`;
    analysis += `Totale complessivo stimato per l'anno ${year}: ${formatNumber(totalComplessivo)}\n\n`;
  
    analysis += `Previsione per i mesi rimanenti (in base alla media degli anni precedenti):\n${futurePredictions.join('\n')}\n\n`;
  
    analysis += `Classifica di produttività (totale turni per anno):\n`;
    productivityRanking.forEach((item, index) => {
      analysis += `${index + 1}. ${item.year}: ${formatNumber(item.totalTurni)} turni`;
      if (item.year === year) {
        analysis += ` (proiezione)`;
      }
      analysis += '\n';
    });
  
    const currentYearRank = productivityRanking.findIndex(item => item.year === year) + 1;
    analysis += `\nL'anno ${year} si posiziona attualmente al ${currentYearRank}° posto nella classifica di produttività.`;
    
    if (currentYearRank === 1) {
      analysis += ` Questo suggerisce un anno particolarmente produttivo, potenzialmente superando i risultati degli anni precedenti.`;
    } else if (currentYearRank <= 3) {
      analysis += ` Questa è una performance solida, indicando un anno di buona produttività.`;
    } else {
      analysis += ` C'è potenziale per migliorare la produttività nei mesi rimanenti per salire nella classifica.`;
    }
  
    return analysis;
  }, [availableYears]);

  const formatChartData = useCallback(() => {
    const chartData = [];
    
    const calculateAverageForMonth = (month) => {
      const relevantYears = availableYears.filter(year => year !== 2020 && year !== currentYear);
      const sum = relevantYears.reduce((acc, year) => {
        const yearData = allYearsData[year];
        return acc + (yearData && yearData[month] ? yearData[month].totaleTurni : 0);
      }, 0);
      return Math.round(sum / relevantYears.length);
    };
  
    for (let month = 0; month < 12; month++) {
      const monthData = { month: getMonthName(month + 1) };
      availableYears.forEach(year => {
        const yearData = allYearsData[year];
        if (year === currentYear) {
          if (month < currentMonth - 1) {
            monthData[year] = yearData && yearData[month] ? Math.round(yearData[month].totaleTurni) : 0;
            monthData[`${year}IsPrediction`] = false;
          } else {
            monthData[year] = calculateAverageForMonth(month);
            monthData[`${year}IsPrediction`] = true;
          }
        } else {
          monthData[year] = yearData && yearData[month] ? Math.round(yearData[month].totaleTurni) : 0;
        }
      });
      chartData.push(monthData);
    }
    return chartData;
  }, [allYearsData, availableYears, currentYear, currentMonth]);

  const generateAIAnalysis = async (forceUpdate = false) => {
    setIsGeneratingAnalysis(true);
    
    try {
      // Prepara i dati per l'API Gemini
      const year = currentYear;
      const month = currentMonth > 1 ? currentMonth - 1 : 12;
      const yearToAnalyze = month === 12 ? year - 1 : year;
      const currentYearData = allYearsData[yearToAnalyze] || {};
      
      // Controlla se esiste un'analisi in cache (solo se non è richiesto un aggiornamento forzato)
      if (!forceUpdate) {
        const cachedAnalysis = getAnalysisFromCache(yearToAnalyze, month);
        if (cachedAnalysis) {
          setAiAnalysis(cachedAnalysis);
          setIsGeneratingAnalysis(false);
          return;
        }
      }
      
      // Se non c'è cache o è richiesto un aggiornamento forzato, procedi con l'analisi
      
      // Calcola statistiche chiave per i dati correnti
      const totalTurni = Object.values(currentYearData)
        .slice(0, month)
        .reduce((sum, monthData) => sum + (monthData?.totaleTurni || 0), 0);
      
      const monthsWithData = Object.values(currentYearData)
        .slice(0, month)
        .filter(monthData => monthData && monthData.totaleTurni > 0).length;
      
      const averageMonthlyTurni = monthsWithData > 0 ? totalTurni / monthsWithData : 0;
    
      // Raccoglie dati degli anni precedenti per calcolare le medie storiche per ogni mese
      const previousYearsData = Object.entries(allYearsData)
        .filter(([y]) => parseInt(y) < yearToAnalyze && parseInt(y) >= 2021);
      
      // Calcola le medie storiche per tutti i 12 mesi dell'anno
      const historicalMonthlyAverages = {};
      const allMonthsHistoricalData = {};
      
      for (let monthIndex = 0; monthIndex < 12; monthIndex++) {
        const monthNumber = monthIndex + 1;
        let totalTurniForMonth = 0;
        let yearsWithDataForMonth = 0;
        
        previousYearsData.forEach(([year, data]) => {
          if (data[monthIndex] && data[monthIndex].totaleTurni) {
            totalTurniForMonth += data[monthIndex].totaleTurni;
            yearsWithDataForMonth++;
          }
        });
        
        const averageForMonth = yearsWithDataForMonth > 0 
          ? totalTurniForMonth / yearsWithDataForMonth 
          : 0;
          
        historicalMonthlyAverages[monthNumber] = averageForMonth;
        allMonthsHistoricalData[monthNumber] = {
          monthName: getMonthName(monthNumber),
          mediaStorica: Math.round(averageForMonth),
          anniConDati: yearsWithDataForMonth
        };
      }
      
      // Calcola dati mensili per l'anno in analisi con confronto vs media storica
      const currentYearMonthlyWithComparison = [];
      for (let i = 0; i < month; i++) {
        const monthData = currentYearData[i];
        const monthNumber = i + 1;
        const currentMonthTurni = monthData?.totaleTurni || 0;
        const historicalAverage = historicalMonthlyAverages[monthNumber] || 0;
        
        if (currentMonthTurni > 0) {
          const percentageChange = historicalAverage > 0 
            ? ((currentMonthTurni - historicalAverage) / historicalAverage * 100)
            : 0;
          
          let performanceDescription = '';
          if (percentageChange > 15) {
            performanceDescription = 'Significativamente superiore alla media storica';
          } else if (percentageChange > 5) {
            performanceDescription = 'Superiore alla media storica';
          } else if (percentageChange > -5) {
            performanceDescription = 'In linea con la media storica';
          } else if (percentageChange > -15) {
            performanceDescription = 'Inferiore alla media storica';
          } else {
            performanceDescription = 'Significativamente inferiore alla media storica';
          }
          
          currentYearMonthlyWithComparison.push({
            month: monthNumber,
            monthName: getMonthName(monthNumber),
            turniAttuali: currentMonthTurni,
            mediaStorica: Math.round(historicalAverage),
            variazione: Math.round(percentageChange * 100) / 100,
            performance: performanceDescription
          });
        }
      }
      
      // Prepara dati storici riassuntivi per contesto
      const historicalSummary = [];
      
      // Aggiungi gli anni precedenti (anni completi)
      previousYearsData.forEach(([year, data]) => {
        const yearTotal = Object.values(data)
          .reduce((sum, monthData) => sum + (monthData?.totaleTurni || 0), 0);
        historicalSummary.push({ 
          year: parseInt(year), 
          totalTurni: yearTotal,
          note: "(anno completo)"
        });
      });
      
      // Aggiungi l'anno corrente (limitato al mese attuale)
      const currentYearTotal = Object.values(currentYearData)
        .slice(0, month)
        .reduce((sum, monthData) => sum + (monthData?.totaleTurni || 0), 0);
      historicalSummary.push({
        year: yearToAnalyze,
        totalTurni: currentYearTotal,
        note: `(fino a ${getMonthName(month)})`
      });
      
      // Ordina per anno
      historicalSummary.sort((a, b) => a.year - b.year);
      
      // Prepara il prompt per l'API
      const currentDate = new Date();
      const formatDate = (date) => {
        return date.toLocaleDateString('it-IT', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        });
      };
      
      const prompt = `
        Sei un esperto analista di dati del settore audiovisivo con specifiche competenze nel doppiaggio. La tua analisi è richiesta dal board dello Studio Pumaisdue, un prestigioso studio di doppiaggio italiano. Esamina attentamente i seguenti dati sui turni di lavoro e produci un report strategico dettagliato.
        
        IMPORTANTE: Il report deve iniziare OBBLIGATORIAMENTE con il titolo esatto:
        # REPORT STRATEGICO SULL'ANDAMENTO DEI TURNI DI DOPPIAGGIO
        ## Data generazione: ${formatDate(currentDate)}
        
        ===DATI DI BASE===
        Anno in analisi: ${yearToAnalyze}
        Mese attuale: ${getMonthName(month)}
        Turni totali completati fino a ${getMonthName(month)}: ${totalTurni}
        Media mensile dei turni: ${averageMonthlyTurni.toFixed(2)}
        
        ===CONFRONTO MENSILE DETTAGLIATO (${yearToAnalyze} vs Media Storica)===
        I seguenti dati mostrano il confronto preciso tra i turni dell'anno corrente e le medie storiche calcolate:
        ${JSON.stringify(currentYearMonthlyWithComparison, null, 2)}
        
        ===DATI STORICI RIASSUNTIVI===
        Totali annuali di tutti gli anni disponibili (per contesto nelle previsioni):
        NOTA: Gli anni precedenti mostrano i totali completi (12 mesi), l'anno corrente mostra solo i dati fino al mese analizzato.
        ${JSON.stringify(historicalSummary, null, 2)}
        
        ===MEDIE STORICHE MENSILI (TUTTI I 12 MESI)===
        Le seguenti sono le medie storiche reali calcolate per ogni mese dell'anno basate sui dati degli anni precedenti:
        ${JSON.stringify(allMonthsHistoricalData, null, 2)}
        
        ===ISTRUZIONI SPECIFICHE===
        IMPORTANTE: 
        1. Usa ESCLUSIVAMENTE i dati del confronto mensile dettagliato sopra riportato per le tue valutazioni di performance dei mesi già trascorsi.
        2. Per le PREVISIONI dei mesi futuri, usa ESCLUSIVAMENTE le medie storiche mensili fornite nella sezione "MEDIE STORICHE MENSILI". NON inventare o ipotizzare valori.
        3. Ogni mese ha già il calcolo preciso della variazione percentuale e la classificazione della performance rispetto alla media storica.
        
        La tua analisi deve essere COMPLETA e APPROFONDITA, includendo:
        
        1. **RIEPILOGO ESECUTIVO**: 
           - Panoramica concisa basata sui confronti mensili già calcolati
           - Sintesi dei punti chiave per il management
           - Riassunto delle performance mese per mese come riportato nei dati
        
        2. **ANALISI COMPARATIVA**: 
           - Utilizza le variazioni percentuali già calcolate per ogni mese
           - Analizza i trend di crescita/diminuzione basandoti sui dati forniti
           - Posizionamento dell'anno corrente rispetto alla storia dello studio
           - Pattern comuni identificabili nei diversi mesi
        
        3. **ANALISI STAGIONALE**:
           - Pattern trimestrali e mensili basati sui confronti forniti
           - Identificazione di periodi di alta/bassa produttività
           - Confronto della stagionalità evidenziata dai dati
        
        4. **PREVISIONI FUTURE**:
           - Per i mesi rimanenti dell'anno, usa ESCLUSIVAMENTE i valori delle medie storiche mensili fornite sopra
           - NON utilizzare valori ipotetici o inventati come "Luglio: 350, Agosto: 300" ecc.
           - Calcola la stima della produttività annuale totale sommando i turni effettivi già realizzati alle medie storiche reali per i mesi mancanti
           - Specifica chiaramente che le previsioni sono basate sulle medie storiche reali degli anni precedenti
           - Per il posizionamento rispetto alla storia dello studio, USA ESCLUSIVAMENTE i dati storici riassuntivi forniti che mostrano i totali completi degli anni precedenti
           - IMPORTANTE: I totali annuali degli anni precedenti nei dati storici riassuntivi sono COMPLETI (12 mesi), quindi usali per confronti accurati
           - Considerazioni sui fattori che potrebbero influenzare le previsioni
        
        5. **RACCOMANDAZIONI STRATEGICHE**:
           - Strategie basate sui pattern identificati
           - Suggerimenti per ottimizzare le risorse nei diversi periodi, specificando quando togliere o aggiungere risorse lavorative al team
           - Indicazioni su quando aumentare o diminuire collaboratori esterni
        
        Formatta il tuo report in Markdown con una struttura chiara e professionale. Usa titoli (##), sottotitoli (###), elenchi puntati e, dove appropriato, enfasi (**testo**) per evidenziare concetti chiave. Il linguaggio deve essere professionale ma accessibile, orientato all'azione e specifico per il settore del doppiaggio.
        
        Lo studio utilizzerà questo report per decisioni strategiche importanti, quindi sii preciso, obiettivo e basati SOLO sui dati di confronto forniti.
      `;
      
      try {
        // Chiama l'API Gemini
        const response = await fetchGeminiAnalysis(prompt);
        
        // Verifica se c'è stato un errore di rate limit
        if (response.includes("Limite di richieste superato")) {
          // Se c'è un errore di rate limit, genera un'analisi simulata
          const simulatedAnalysis = generateSimulatedAnalysis(yearToAnalyze, currentMonth, totalTurni, averageMonthlyTurni);
          setAiAnalysis(simulatedAnalysis);
          // Non salviamo in cache le analisi simulate
        } else {
          // Altrimenti usa la risposta dell'API
          setAiAnalysis(response);
          // Salva in cache solo le risposte reali dell'API
          saveAnalysisToCache(yearToAnalyze, month, response);
        }
      } catch (error) {
        console.error("Errore nella chiamata API:", error);
        // In caso di errore, genera comunque un'analisi simulata
        const simulatedAnalysis = generateSimulatedAnalysis(yearToAnalyze, currentMonth, totalTurni, averageMonthlyTurni);
        setAiAnalysis(simulatedAnalysis);
      }
    } catch (error) {
      console.error("Errore nella preparazione dei dati:", error);
      // Definiamo valori di default in caso di errore nella preparazione dei dati
      const defaultYearToAnalyze = currentYear;
      const defaultTotalTurni = 0;
      const defaultAverageMonthlyTurni = 0;
      const simulatedAnalysis = generateSimulatedAnalysis(defaultYearToAnalyze, currentMonth, defaultTotalTurni, defaultAverageMonthlyTurni);
      setAiAnalysis(simulatedAnalysis);
    } finally {
      setIsGeneratingAnalysis(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const allData = {};
      
      for (const year of availableYears) {
        allData[year] = await getYearlyData(year);
      }
      
      setAllYearsData(allData);
      
      const analysis = generateYearAnalysis(currentYear, currentMonth, allData, allData);
      setYearAnalysis(analysis);
      
      const futurePrediction = makePrediction(currentYear, currentMonth, allData);
      setPrediction(futurePrediction);
    };
    
    fetchData();
  }, [availableYears, currentYear, currentMonth, generateYearAnalysis, makePrediction]);

  const chartData = useMemo(() => formatChartData(), [formatChartData]);

  const renderAnalysisWithBlur = (text) => {
    const lines = text.split('\n');
    return lines.map((line, index) => {
      if (line.startsWith('Considerazioni') || line.trim() === '' || line.startsWith('Analisi') || line.startsWith('Conclusione')) {
        return <div key={index}>{line}</div>;
      } else {
        return (
          <div style={{ position: 'relative' }} key={index}>
            <BlurredText>{line}</BlurredText>
            <OverlayText>In fase di sviluppo</OverlayText>
          </div>
        );
      }
    });
  };

  const handleShare = () => {
    const shareText = `Performance Trend ${currentYear}\n\n${yearAnalysis}\n\n${prediction}`;
    if (navigator.share) {
      navigator.share({
        title: 'Performance Trend',
        text: shareText,
      }).catch(console.error);
    } else {
      alert("La condivisione non è supportata su questo browser. Copia e incolla il testo seguente:\n\n" + shareText);
    }
  };

  // Funzione per copiare il report negli appunti
  const copyReportToClipboard = () => {
    try {
      // Recupera solo il testo senza formattazione Markdown
      const plainText = aiAnalysis.replace(/#{1,6}\s(.*)/g, '$1\n')  // Rimuove i simboli # per i titoli
                               .replace(/\*\*(.*?)\*\*/g, '$1')      // Rimuove i ** per il grassetto
                               .replace(/\_(.*?)\_/g, '$1')          // Rimuove _ per il corsivo
                               .replace(/\[(.*?)\]\((.*?)\)/g, '$1 ($2)'); // Converte i link in formato testo
      
      navigator.clipboard.writeText(plainText)
        .then(() => {
          alert('Report copiato negli appunti!');
        })
        .catch(err => {
          console.error('Errore durante la copia negli appunti:', err);
          alert('Impossibile copiare il report. Controlla le autorizzazioni del browser.');
        });
    } catch (error) {
      console.error('Errore nella formattazione del testo:', error);
    }
  };
  
  // Funzione per condividere il report sui social
  const shareReportOnSocial = () => {
    // Crea un titolo per la condivisione
    const title = `Analisi Performance Studio Pumaisdue - ${currentYear}`;
    
    // Testo breve per la condivisione
    const summary = `Analisi delle performance dello Studio Pumaisdue per l'anno ${currentYear}. Dati aggiornati al ${getMonthName(currentMonth)}.`;
    
    // Usa l'API Web Share se disponibile
    if (navigator.share) {
      navigator.share({
        title: title,
        text: summary,
        // Nota: non includiamo una URL perché questo è un'app locale
      })
      .then(() => console.log('Condivisione completata'))
      .catch((error) => console.error('Errore durante la condivisione:', error));
    } else {
      // Fallback per browser che non supportano Web Share API
      const socialText = `${title}\n\n${summary}\n\nDati analizzati con StudioStats.`;
      
      // Apre una finestra di dialogo per copiare il testo
      const result = window.confirm(
        'La condivisione diretta non è supportata in questo browser. ' +
        'Vuoi copiare il testo per condividerlo manualmente?'
      );
      
      if (result) {
        navigator.clipboard.writeText(socialText)
          .then(() => alert('Testo copiato negli appunti! Ora puoi incollarlo sul social che preferisci.'))
          .catch(err => console.error('Errore durante la copia:', err));
      }
    }
  };

  return (
    <ViewContainer>
      <ViewContent>
        <BackRow>
          <BackButton onClick={() => setView('main')}>
            ← Torna alla dashboard
          </BackButton>
          <ShareButton onClick={handleShare}>
            <Share2 size={18} /> Condividi
          </ShareButton>
        </BackRow>
        <ViewTitle>Performance Trend</ViewTitle>
        <ChartContainer>
          <AnalysisTitle>Trend annuale</AnalysisTitle>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              {availableYears.map((year, index) => {
                const isCurrentYear = year === currentYear;
                if (isCurrentYear) {
                  return (
                    <React.Fragment key={year}>
                      <Line
                        type="monotone"
                        dataKey={(dataPoint) => dataPoint[`${year}IsPrediction`] ? undefined : dataPoint[year]}
                        stroke={colorPalette[index]}
                        strokeWidth={3}
                        dot={false}
                        connectNulls={true}
                      />
                      <Line
                        type="monotone"
                        dataKey={(dataPoint) => {
                          if (dataPoint[`${year}IsPrediction`]) {
                            return dataPoint[year];
                          }
                          const lastRealMonth = chartData.findIndex(d => d[`${year}IsPrediction`]) - 1;
                          return dataPoint === chartData[lastRealMonth] ? dataPoint[year] : undefined;
                        }}
                        stroke={colorPalette[index]}
                        strokeWidth={3}
                        strokeDasharray="5 5"
                        dot={false}
                        connectNulls={true}
                      />
                    </React.Fragment>
                  );
                } else {
                  return (
                    <Line
                      key={year}
                      type="monotone"
                      dataKey={year.toString()}
                      stroke={colorPalette[index]}
                      strokeWidth={1}
                      dot={false}
                    />
                  );
                }
              })}
            </LineChart>
          </ResponsiveContainer>
          <LegendContainer>
            {availableYears.map((year, index) => (
              <LegendItem key={year}>
                <LegendColor color={colorPalette[index]} />
                <span>{year === currentYear ? `${year} (linea continua: dati reali, tratteggiata: previsione)` : year}</span>
              </LegendItem>
            ))}
          </LegendContainer>
        </ChartContainer>
        <AnalysisSection>
          <AnalysisTitle>Considerazioni sull'anno in corso (AI)</AnalysisTitle>
          
          {aiAnalysis ? (
            <div>
              <MarkdownContent>
                <ReactMarkdown>
                  {aiAnalysis}
                </ReactMarkdown>
              </MarkdownContent>
              
              <div style={{ display: 'flex', gap: '12px', marginTop: '16px', flexWrap: 'wrap' }}>
                <Button 
                  onClick={() => generateAIAnalysis(true)} 
                  disabled={isGeneratingAnalysis}
                >
                  {isGeneratingAnalysis ? (
                    <>
                      <LoadingSpinner /> Rigenerazione in corso...
                    </>
                  ) : (
                    <>
                      <RefreshCw size={18} /> Forza aggiornamento
                    </>
                  )}
                </Button>
                
                <Button 
                  onClick={copyReportToClipboard}
                  disabled={isGeneratingAnalysis}
                  style={{ backgroundColor: '#4CAF50' }}
                >
                  <Copy size={18} /> Copia report
                </Button>
                
                <Button 
                  onClick={shareReportOnSocial}
                  disabled={isGeneratingAnalysis}
                  style={{ backgroundColor: '#2196F3' }}
                >
                  <ExternalLink size={18} /> Condividi report
                </Button>
              </div>
            </div>
          ) : (
            <div>
              <p>Genera un'analisi dettagliata sull'anno in corso utilizzando l'intelligenza artificiale.</p>
              <p>Questa funzionalità utilizza l'API Gemini per analizzare i dati e fornire insight approfonditi.</p>
              
              <Button 
                onClick={() => generateAIAnalysis(false)} 
                disabled={isGeneratingAnalysis}
              >
                {isGeneratingAnalysis ? (
                  <>
                    <LoadingSpinner /> Generazione in corso...
                  </>
                ) : (
                  <>
                    <RefreshCw size={18} /> Genera analisi AI
                  </>
                )}
              </Button>
            </div>
          )}
        </AnalysisSection>
        <AnalysisSection>
          <AnalysisTitle>Previsione per i prossimi mesi</AnalysisTitle>
          <AnalysisText>{prediction}</AnalysisText>
        </AnalysisSection>
        <ButtonContainer>
          <Button onClick={() => setView('main')}>Torna alla Dashboard</Button>
          <Button onClick={handleShare}>
            <Share2 size={20} />
            Condividi
          </Button>
        </ButtonContainer>
      </ViewContent>
      
      {/* Footer */}
      <div style={{
        textAlign: 'center',
        marginTop: '30px',
        paddingTop: '20px',
        borderTop: '1px solid #e5e7eb',
        fontSize: '14px',
        color: '#6b7280',
      }}>
        <p>© StudioStats 2025 Marco Augusto Comba | Versione 1.6.1</p>
      </div>
    </ViewContainer>
  );
};

export default PerformanceTrendView;