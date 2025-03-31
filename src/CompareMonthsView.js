import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ArrowLeft, TrendingUp, TrendingDown, AlertCircle } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts';
import { getAvailableMonths, getCurrentYearAndMonth } from './data';
import { getMonthData } from './dataUtils';

const ViewContainer = styled.div`
  background-color: #F0F9FF;
  min-height: 100vh;
  padding: 24px;
  font-family: 'Helvetica Neue', Arial, sans-serif;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const BackButton = styled.button`
  background: #4B5563;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 16px;
  margin-bottom: 24px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #374151;
  }
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 32px;
  color: #1F2937;
`;

const ComparisonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 24px;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const SidePanel = styled.div`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-height: 600px;
  overflow-y: auto;
`;

const PanelTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 8px;
  color: #1F2937;
`;

const MonthButton = styled.button`
  background-color: ${props => {
    if (props.$isSelected) {
      return props.$panel === 1 ? '#8884d8' : '#82ca9d'; // Viola per pannello 1, verde per pannello 2
    }
    return '#E5E7EB'; // Colore default per non selezionato
  }};
  color: ${props => props.$isSelected ? 'white' : '#4B5563'};
  border: none;
  border-radius: 8px;
  padding: 12px;
  font-size: 16px;
  font-weight: ${props => props.$isSelected ? 'bold' : 'normal'};
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.2s;
  margin-bottom: 8px;
  opacity: ${props => props.$disabled ? 0.5 : 1};

  &:hover {
    background-color: ${props => {
      if (props.$isSelected) {
        return props.$panel === 1 ? '#7b77c2' : '#6ebe8a'; // Versione più scura dei colori selezionati
      }
      return props.$disabled ? '#E5E7EB' : '#D1D5DB'; // Hover per non selezionato
    }};
  }
`;

const CentralPanel = styled.div`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 24px;
  display: flex;
  flex-direction: column;
`;

const ChartContainer = styled.div`
  width: 100%;
  height: 400px;
  margin-bottom: 24px;
`;

const ComparisonSummary = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SummaryCard = styled.div`
  background-color: #F3F4F6;
  border-radius: 8px;
  padding: 16px;
`;

const SummaryTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
  color: #1F2937;
`;

const SummaryValue = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 4px;
`;

const DifferenceRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: ${props => props.$isPositive ? '#10B981' : '#EF4444'};
`;

const MonthInfo = styled.div`
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #E5E7EB;
`;

const LoadingIndicator = styled.div`
  text-align: center;
  padding: 20px;
  color: #4B5563;
`;

const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #FEE2E2;
  color: #EF4444;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 16px;
`;

const InfoMessage = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #E0F2FE;
  color: #0369A1;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 16px;
  font-size: 14px;
`;

const Footer = styled.div`
  text-align: center;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #e5e7eb;
  font-size: 14px;
  color: #6b7280;
`;

const CompareMonthsView = ({ setView }) => {
  const { currentYear, currentMonth } = getCurrentYearAndMonth();
  
  // Ottieni tutti i mesi disponibili dall'API originale
  const allMonths = getAvailableMonths();
  console.log("Mesi restituiti da getAvailableMonths():", allMonths);
  
  // Usa direttamente tutti i mesi disponibili senza filtraggio
  const [availableMonthsState, setAvailableMonthsState] = useState(allMonths);
  const [selectedMonth1, setSelectedMonth1] = useState(null);
  const [selectedMonth2, setSelectedMonth2] = useState(null);
  const [monthData1, setMonthData1] = useState(null);
  const [monthData2, setMonthData2] = useState(null);
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [error1, setError1] = useState(null);
  const [error2, setError2] = useState(null);
  
  // Aggiungo uno stato per tenere traccia dei mesi per cui si è verificato un errore
  const [failedMonths, setFailedMonths] = useState([]);
  
  // Aggiungo uno stato per tracciare il mese con più turni e quello con meno turni
  const [maxTurniMonth, setMaxTurniMonth] = useState(null);
  const [minTurniMonth, setMinTurniMonth] = useState(null);
  
  // Filtra i mesi per verificare quali sono effettivamente disponibili
  const isFutureMonth = (yearMonth) => {
    if (!yearMonth) return false;
    
    const [year, month] = yearMonth.split('-').map(Number);
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth() + 1;
    
    const isFuture = (year > currentYear) || (year === currentYear && month > currentMonth);
    if (isFuture) {
      console.log(`Mese ${yearMonth} identificato come mese futuro`);
    }
    return isFuture;
  };
  
  // Verifica se un mese ha già fallito il caricamento
  const isFailedMonth = (monthValue) => {
    const isFailed = failedMonths.includes(monthValue);
    if (isFailed) {
      console.log(`Mese ${monthValue} presente nella lista dei mesi falliti`);
    }
    return isFailed;
  };
  
  useEffect(() => {
    // Imposta i mesi predefiniti (gli ultimi due mesi disponibili)
    if (allMonths.length > 0) {
      const defaultMonth1 = allMonths[0].value;
      console.log(`Impostazione mese 1 predefinito: ${defaultMonth1}`);
      setSelectedMonth1(defaultMonth1);
    }
    if (allMonths.length > 1) {
      const defaultMonth2 = allMonths[1].value;
      console.log(`Impostazione mese 2 predefinito: ${defaultMonth2}`);
      setSelectedMonth2(defaultMonth2);
    }
  }, []);  // Solo all'inizializzazione
  
  useEffect(() => {
    if (selectedMonth1) {
      // Evita di ricaricare un mese che ha già fallito
      if (isFailedMonth(selectedMonth1)) {
        console.log(`Mese ${selectedMonth1} già fallito in precedenza, non riprovo il caricamento`);
        setError1(`File dati mancante per ${formatMonthLabel(selectedMonth1)}`);
        return;
      }
      
      // Debug: log prima di caricare i dati
      console.log("Tentativo di caricamento dati per mese 1:", selectedMonth1);
      setLoading1(true);
      setError1(null);
      
      // Verifichiamo se è un mese futuro
      if (isFutureMonth(selectedMonth1)) {
        setError1(`I dati per il mese ${formatMonthLabel(selectedMonth1)} non sono ancora disponibili`);
        setMonthData1(null);
        setLoading1(false);
        return;
      }
      
      try {
        // Verifichiamo che selectedMonth1 sia una stringa valida nel formato "YYYY-MM"
        if (typeof selectedMonth1 === 'string' && selectedMonth1.includes('-')) {
          // Ora getMonthData restituisce una Promise
          getMonthData(selectedMonth1)
            .then(data => {
            if (data) {
                // Verifichiamo che siano effettivamente presenti i dati
                if (data.totaleTurni === 0 && data.giorniLavorativi === 0) {
                  console.log(`Dati vuoti ricevuti per ${selectedMonth1}`);
                  setError1(`Nessun dato disponibile per il mese: ${formatMonthLabel(selectedMonth1)}`);
                  setMonthData1(null);
                  // Aggiungi il mese alla lista dei falliti
                  setFailedMonths(prev => [...prev, selectedMonth1]);
                } else {
                  // Debug: log dei dati ricevuti
                  console.log("Dati ricevuti per mese 1:", data);
              setMonthData1(data);
                }
              } else {
                console.log(`Nessun dato trovato per mese 1: ${selectedMonth1}`);
                setError1(`Nessun dato trovato per il mese: ${formatMonthLabel(selectedMonth1)}`);
                // Aggiungi il mese alla lista dei falliti
                setFailedMonths(prev => [...prev, selectedMonth1]);
              }
            })
            .catch(error => {
              // Debug: log dell'errore completo
              console.log("Errore dettagliato per mese 1:", error);
              
              // Gestisci errore specifico del modulo mancante
              if (error && error.message) {
                if (error.message.includes('Cannot find module') || 
                    error.message.includes('FILE_NOT_FOUND') || 
                    error.message.includes('NO_DATA')) {
                  setError1(`Dati non disponibili per ${formatMonthLabel(selectedMonth1)}`);
                  // Aggiungi il mese alla lista dei falliti
                  setFailedMonths(prev => [...prev, selectedMonth1]);
                } else if (error.message.includes('NETWORK_ERROR')) {
                  setError1(`Errore di connessione durante il caricamento dei dati. Verifica la connessione di rete e riprova.`);
                } else {
                  setError1(`Errore nel recupero dei dati per il mese ${formatMonthLabel(selectedMonth1)}`);
                }
            } else {
                setError1(`Errore nel recupero dei dati per il mese ${formatMonthLabel(selectedMonth1)}`);
            }
            })
            .finally(() => {
              setLoading1(false);
          });
        } else {
          setError1(`Formato mese non valido: ${selectedMonth1}`);
          setLoading1(false);
        }
      } catch (error) {
        console.log("Errore try/catch per mese 1:", error);
        setError1(`Errore nel recupero dei dati per il mese ${formatMonthLabel(selectedMonth1)}`);
        setLoading1(false);
      }
    }
  }, [selectedMonth1, failedMonths]);
  
  useEffect(() => {
    if (selectedMonth2) {
      // Evita di ricaricare un mese che ha già fallito
      if (isFailedMonth(selectedMonth2)) {
        console.log(`Mese ${selectedMonth2} già fallito in precedenza, non riprovo il caricamento`);
        setError2(`File dati mancante per ${formatMonthLabel(selectedMonth2)}`);
        return;
      }
      
      setLoading2(true);
      setError2(null);
      
      // Verifichiamo se è un mese futuro
      if (isFutureMonth(selectedMonth2)) {
        setError2(`I dati per il mese ${formatMonthLabel(selectedMonth2)} non sono ancora disponibili`);
        setMonthData2(null);
        setLoading2(false);
        return;
      }
      
      try {
        // Verifichiamo che selectedMonth2 sia una stringa valida nel formato "YYYY-MM"
        if (typeof selectedMonth2 === 'string' && selectedMonth2.includes('-')) {
          // Ora getMonthData restituisce una Promise
          getMonthData(selectedMonth2)
            .then(data => {
            if (data) {
                // Verifichiamo che siano effettivamente presenti i dati
                if (data.totaleTurni === 0 && data.giorniLavorativi === 0) {
                  console.log(`Dati vuoti ricevuti per ${selectedMonth2}`);
                  setError2(`Nessun dato disponibile per il mese: ${formatMonthLabel(selectedMonth2)}`);
                  setMonthData2(null);
                  // Aggiungi il mese alla lista dei falliti
                  setFailedMonths(prev => [...prev, selectedMonth2]);
                } else {
              setMonthData2(data);
                }
              } else {
                console.log(`Nessun dato trovato per mese 2: ${selectedMonth2}`);
                setError2(`Nessun dato trovato per il mese: ${formatMonthLabel(selectedMonth2)}`);
                // Aggiungi il mese alla lista dei falliti
                setFailedMonths(prev => [...prev, selectedMonth2]);
              }
            })
            .catch(error => {
              // Gestisci errore specifico del modulo mancante
              if (error && error.message) {
                if (error.message.includes('Cannot find module') || 
                    error.message.includes('FILE_NOT_FOUND') || 
                    error.message.includes('NO_DATA')) {
                  setError2(`Dati non disponibili per ${formatMonthLabel(selectedMonth2)}`);
                  // Aggiungi il mese alla lista dei falliti
                  setFailedMonths(prev => [...prev, selectedMonth2]);
                } else if (error.message.includes('NETWORK_ERROR')) {
                  setError2(`Errore di connessione durante il caricamento dei dati. Verifica la connessione di rete e riprova.`);
                } else {
                  setError2(`Errore nel recupero dei dati per il mese ${formatMonthLabel(selectedMonth2)}`);
                }
            } else {
                setError2(`Errore nel recupero dei dati per il mese ${formatMonthLabel(selectedMonth2)}`);
            }
            })
            .finally(() => {
              setLoading2(false);
          });
        } else {
          setError2(`Formato mese non valido: ${selectedMonth2}`);
          setLoading2(false);
        }
      } catch (error) {
        setError2(`Errore nel recupero dei dati per il mese ${formatMonthLabel(selectedMonth2)}`);
        setLoading2(false);
      }
    }
  }, [selectedMonth2, failedMonths]);
  
  const getMonthName = (monthNumber) => {
    const monthNames = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
    return monthNames[monthNumber - 1];
  };
  
  const formatMonthLabel = (monthValue) => {
    if (!monthValue) return '';
    const [year, month] = monthValue.split('-').map(Number);
    return `${getMonthName(month)} ${year}`;
  };
  
  const calculateDifference = (value1, value2, showDecimals = false) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
      return { diff: 'N/A', percentage: 'N/A', isPositive: true };
    }
    const diff = value1 - value2;
    const percentage = value2 !== 0 ? ((diff / value2) * 100).toFixed(1) : 'N/A';
    return {
      diff: showDecimals ? diff.toFixed(1) : diff.toFixed(0),
      percentage: percentage !== 'N/A' ? `${percentage}%` : 'N/A',
      isPositive: diff >= 0
    };
  };

  // Modifica alla funzione prepareComparisonData per mostrare solo turni totali
  const prepareComparisonData = () => {
    if (!monthData1 || !monthData2) return [];
    
    // Creazione dati di confronto per il grafico, solo turni totali
    const data = [
      {
        name: 'Turni Totali',
        [`Turni ${formatMonthLabel(selectedMonth1)}`]: monthData1.totaleTurni || 0,
        [`Turni ${formatMonthLabel(selectedMonth2)}`]: monthData2.totaleTurni || 0,
      }
    ];
    
    return data;
  };

  // Calcola il dominio dell'asse Y in base ai dati
  const calculateYDomain = () => {
    if (!monthData1 || !monthData2) return [0, 600]; // Default fallback
    
    const maxTurni = Math.max(monthData1.totaleTurni || 0, monthData2.totaleTurni || 0);
    // Arrotonda il massimo al centinaio successivo e aggiungi un po' di spazio
    const roundedMax = Math.ceil(maxTurni / 100) * 100 + 100;
    return [0, roundedMax];
  };

  const comparisonData = prepareComparisonData();
  const yDomain = calculateYDomain();

  // Correggo la funzione di selezione dei mesi
  const handleMonthSelect = (panel, monthValue) => {
    console.log(`Tentativo di selezionare ${monthValue} per il pannello ${panel}`);
    
    // Verifica se il mese è un mese futuro (manteniamo questa verifica)
    if (isFutureMonth(monthValue)) {
      console.log(`Mese ${monthValue} è un mese futuro, non può essere selezionato`);
      return;
    }
    
    if (panel === 1) {
      console.log(`Impostando selectedMonth1 a ${monthValue}`);
      setSelectedMonth1(monthValue);
    } else if (panel === 2) {
      console.log(`Impostando selectedMonth2 a ${monthValue}`);
      setSelectedMonth2(monthValue);
    }
  };

  // Funzione per trovare il mese con più turni e il mese con meno turni
  const findGlobalMaxMinMonths = () => {
    // Otteniamo tutti i dati di tutti i mesi disponibili
    const promises = availableMonthsState.map(month => {
      return getMonthData(month.value)
        .then(data => {
          if (data && data.totaleTurni) {
            return {
              month: month.value,
              label: month.label,
              turni: data.totaleTurni
            };
          }
          return null;
        })
        .catch(() => null); // Ignoriamo i mesi che falliscono
    });

    Promise.all(promises)
      .then(results => {
        // Filtriamo i risultati nulli
        const validResults = results.filter(result => result !== null);
        
        if (validResults.length > 0) {
          // Troviamo il mese con più turni
          const maxMonth = validResults.reduce((max, current) => {
            return current.turni > max.turni ? current : max;
          }, validResults[0]);
          
          // Troviamo il mese con meno turni
          const minMonth = validResults.reduce((min, current) => {
            return current.turni < min.turni ? current : min;
          }, validResults[0]);
          
          setMaxTurniMonth(maxMonth);
          setMinTurniMonth(minMonth);
        }
      });
  };

  // Chiamiamo la funzione quando il componente viene montato
  useEffect(() => {
    findGlobalMaxMinMonths();
  }, []); // Solo all'avvio del componente

  return (
    <ViewContainer>
      <Content>
        <BackButton onClick={() => setView('main')}>
          <ArrowLeft size={20} style={{ marginRight: '8px' }} />
          Torna alla Dashboard
        </BackButton>
        
        <Title>Confronta Mesi</Title>
        
        <InfoMessage>
          <AlertCircle size={16} />
          <span>I mesi futuri o senza dati disponibili sono disabilitati. Seleziona solo i mesi disponibili.</span>
        </InfoMessage>
        
        <ComparisonContainer>
          {/* Pannello sinistro: Selezione primo mese */}
          <SidePanel>
            <PanelTitle>Seleziona il primo mese</PanelTitle>
            {error1 && (
              <ErrorMessage>
                <AlertCircle size={16} />
                <span>{error1}</span>
              </ErrorMessage>
            )}
            {availableMonthsState.map(month => {
              const isDisabled = isFutureMonth(month.value) || isFailedMonth(month.value);
              return (
              <MonthButton
                key={month.value}
                $isSelected={month.value === selectedMonth1}
                  $disabled={isDisabled}
                  $panel={1}
                  onClick={() => handleMonthSelect(1, month.value)}
              >
                {month.label}
              </MonthButton>
              );
            })}
            
            {loading1 ? (
              <LoadingIndicator>Caricamento dati...</LoadingIndicator>
            ) : monthData1 && (
              <MonthInfo>
                <SummaryTitle>{formatMonthLabel(selectedMonth1)}</SummaryTitle>
                <SummaryValue>Turni totali: {monthData1.totaleTurni || 0}</SummaryValue>
                <SummaryValue>Giorni lavorativi: {monthData1.giorniLavorativi || 0}</SummaryValue>
                <SummaryValue>Media giornaliera: {monthData1.giorniLavorativi ? (monthData1.totaleTurni / monthData1.giorniLavorativi).toFixed(1) : 'N/A'}</SummaryValue>
              </MonthInfo>
            )}
          </SidePanel>
          
          {/* Pannello centrale: Grafici e comparazione */}
          <CentralPanel>
            {loading1 || loading2 ? (
              <LoadingIndicator>Caricamento dati per il confronto...</LoadingIndicator>
            ) : error1 || error2 ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                Seleziona due mesi validi per visualizzare il confronto
              </div>
            ) : comparisonData.length > 0 ? (
              <>
                <ChartContainer>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={comparisonData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis 
                        domain={yDomain} 
                        label={{ value: 'Turni', angle: -90, position: 'insideLeft' }} 
                      />
                      <Tooltip />
                      <Legend />
                      <Bar 
                        dataKey={`Turni ${formatMonthLabel(selectedMonth1)}`} 
                        fill="#8884d8" 
                        name={formatMonthLabel(selectedMonth1)}
                      >
                        <LabelList dataKey={`Turni ${formatMonthLabel(selectedMonth1)}`} position="center" fill="#ffffff" fontSize={14} fontWeight="bold" />
                      </Bar>
                      <Bar 
                        dataKey={`Turni ${formatMonthLabel(selectedMonth2)}`} 
                        fill="#82ca9d" 
                        name={formatMonthLabel(selectedMonth2)}
                      >
                        <LabelList dataKey={`Turni ${formatMonthLabel(selectedMonth2)}`} position="center" fill="#ffffff" fontSize={14} fontWeight="bold" />
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
                
                <ComparisonSummary style={{ gridTemplateColumns: '1fr' }}>
                  <SummaryCard>
                    <SummaryTitle>Differenza turni totali</SummaryTitle>
                    {(() => {
                      const { diff, percentage, isPositive } = calculateDifference(
                        monthData1.totaleTurni || 0,
                        monthData2.totaleTurni || 0
                      );
                      
                      // Preparo una descrizione più dettagliata
                      const mese1 = formatMonthLabel(selectedMonth1);
                      const mese2 = formatMonthLabel(selectedMonth2);
                      const turniMese1 = monthData1.totaleTurni || 0;
                      const turniMese2 = monthData2.totaleTurni || 0;
                      
                      const descrizione = isPositive 
                        ? `Nel mese ${mese1} ci sono stati ${diff} turni in più del mese ${mese2}.`
                        : `Nel mese ${mese1} ci sono stati ${Math.abs(diff)} turni in meno del mese ${mese2}.`;
                      
                      return (
                        <>
                          <SummaryValue>{diff}</SummaryValue>
                          <DifferenceRow $isPositive={isPositive}>
                            {isPositive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                            <span>{percentage}</span>
                          </DifferenceRow>
                          <div style={{ 
                            marginTop: '12px', 
                            padding: '10px', 
                            backgroundColor: isPositive ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)', 
                            borderRadius: '6px',
                            fontSize: '16px' 
                          }}>
                            {descrizione}
                          </div>
                        </>
                      );
                    })()}
                  </SummaryCard>
                </ComparisonSummary>
                
                {/* Nuovi riquadri per il mese con più/meno turni */}
                <div style={{ marginTop: '24px' }}>
                  <SummaryTitle style={{ textAlign: 'center', marginBottom: '16px' }}>Statistiche Globali</SummaryTitle>
                  <ComparisonSummary>
                    <SummaryCard style={{ backgroundColor: '#f0f7ff' }}>
                      <SummaryTitle>Mese con più turni</SummaryTitle>
                      {maxTurniMonth ? (
                        <>
                          <SummaryValue>{formatMonthLabel(maxTurniMonth.month)}</SummaryValue>
                          <DifferenceRow $isPositive={true}>
                            <TrendingUp size={16} />
                            <span>{maxTurniMonth.turni} turni totali</span>
                          </DifferenceRow>
                        </>
                      ) : (
                        <div>Caricamento in corso...</div>
                      )}
                    </SummaryCard>
                    
                    <SummaryCard style={{ backgroundColor: '#fff0f0' }}>
                      <SummaryTitle>Mese con meno turni</SummaryTitle>
                      {minTurniMonth ? (
                        <>
                          <SummaryValue>{formatMonthLabel(minTurniMonth.month)}</SummaryValue>
                          <DifferenceRow $isPositive={false}>
                            <TrendingDown size={16} />
                            <span>{minTurniMonth.turni} turni totali</span>
                          </DifferenceRow>
                        </>
                      ) : (
                        <div>Caricamento in corso...</div>
                      )}
                  </SummaryCard>
                </ComparisonSummary>
                </div>
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                Seleziona due mesi per visualizzare il confronto
              </div>
            )}
          </CentralPanel>
          
          {/* Pannello destro: Selezione secondo mese */}
          <SidePanel>
            <PanelTitle>Seleziona il secondo mese</PanelTitle>
            {error2 && (
              <ErrorMessage>
                <AlertCircle size={16} />
                <span>{error2}</span>
              </ErrorMessage>
            )}
            {availableMonthsState.map(month => {
              const isDisabled = isFutureMonth(month.value) || isFailedMonth(month.value);
              return (
              <MonthButton
                key={month.value}
                $isSelected={month.value === selectedMonth2}
                  $disabled={isDisabled}
                  $panel={2}
                  onClick={() => handleMonthSelect(2, month.value)}
              >
                {month.label}
              </MonthButton>
              );
            })}
            
            {loading2 ? (
              <LoadingIndicator>Caricamento dati...</LoadingIndicator>
            ) : monthData2 && (
              <MonthInfo>
                <SummaryTitle>{formatMonthLabel(selectedMonth2)}</SummaryTitle>
                <SummaryValue>Turni totali: {monthData2.totaleTurni || 0}</SummaryValue>
                <SummaryValue>Giorni lavorativi: {monthData2.giorniLavorativi || 0}</SummaryValue>
                <SummaryValue>Media giornaliera: {monthData2.giorniLavorativi ? (monthData2.totaleTurni / monthData2.giorniLavorativi).toFixed(1) : 'N/A'}</SummaryValue>
              </MonthInfo>
            )}
          </SidePanel>
        </ComparisonContainer>
        
        <Footer>
          <p>© StudioStats 2025 Marco Augusto Comba | Versione 1.6.0</p>
        </Footer>
      </Content>
    </ViewContainer>
  );
};

export default CompareMonthsView;