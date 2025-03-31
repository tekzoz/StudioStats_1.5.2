import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ArrowLeft, TrendingUp, TrendingDown } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts';
import { getAvailableYears, getCurrentYearAndMonth, getYearData } from './data';

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
`;

const SidePanel = styled.div`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const PanelTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 8px;
  color: #1F2937;
`;

const YearButton = styled.button`
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
  cursor: pointer;
  transition: all 0.2s;
  margin-bottom: 8px;

  &:hover {
    background-color: ${props => {
      if (props.$isSelected) {
        return props.$panel === 1 ? '#7b77c2' : '#6ebe8a'; // Versione più scura dei colori selezionati
      }
      return '#D1D5DB'; // Hover per non selezionato
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

const LimitedToText = styled.p`
  font-size: 14px;
  color: #6B7280;
  font-style: italic;
  text-align: center;
  margin-top: 8px;
`;

const CompareYearsView = ({ setView }) => {
  const { currentYear, currentMonth } = getCurrentYearAndMonth();
  const availableYears = getAvailableYears();
  const [selectedYear1, setSelectedYear1] = useState(null);
  const [selectedYear2, setSelectedYear2] = useState(null);
  const [limitedToMonth, setLimitedToMonth] = useState(0);
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [yearData1, setYearData1] = useState(null);
  const [yearData2, setYearData2] = useState(null);
  
  // Aggiungo stato per tenere traccia degli anni con più e meno turni
  const [maxTurniYear, setMaxTurniYear] = useState(null);
  const [minTurniYear, setMinTurniYear] = useState(null);
  
  // Funzione per gestire la selezione degli anni
  const handleYearSelect = (panel, yearValue) => {
    console.log(`Tentativo di selezionare ${yearValue} per il pannello ${panel}`);
    
    if (panel === 1) {
      console.log(`Impostando selectedYear1 a ${yearValue}`);
      setSelectedYear1(yearValue);
    } else if (panel === 2) {
      console.log(`Impostando selectedYear2 a ${yearValue}`);
      setSelectedYear2(yearValue);
    }
  };
  
  // Funzione per verificare se limitare i dati al mese corrente
  const checkAndSetLimitToMonth = () => {
    if ((selectedYear1 && parseInt(selectedYear1) === currentYear) || 
        (selectedYear2 && parseInt(selectedYear2) === currentYear)) {
      setLimitedToMonth(currentMonth);
    } else {
      setLimitedToMonth(0);
    }
  };
  
  // Carica i dati per l'anno 1
  useEffect(() => {
    if (selectedYear1) {
      setLoading1(true);
      console.log(`Chiamata a getYearData per anno ${selectedYear1}`);
      try {
        // getYearData restituisce un oggetto con totaleTurni e mediaMensile, non un array
        const data = getYearData(selectedYear1, limitedToMonth > 0 ? limitedToMonth : 12);
        console.log(`Dati ottenuti per anno ${selectedYear1}:`, data);
        
        // Verifichiamo che i dati siano validi (un oggetto con totaleTurni)
        if (data && typeof data === 'object' && 'totaleTurni' in data) {
          setYearData1(data);
        } else {
          console.error(`Dati non validi per anno ${selectedYear1}:`, data);
        }
      } catch (error) {
        console.error(`Errore in getYearData per anno ${selectedYear1}:`, error);
      } finally {
        setLoading1(false);
      }
    }
  }, [selectedYear1, limitedToMonth]);
  
  // Carica i dati per l'anno 2
  useEffect(() => {
    if (selectedYear2) {
      setLoading2(true);
      console.log(`Chiamata a getYearData per anno ${selectedYear2}`);
      try {
        // getYearData restituisce un oggetto con totaleTurni e mediaMensile, non un array
        const data = getYearData(selectedYear2, limitedToMonth > 0 ? limitedToMonth : 12);
        console.log(`Dati ottenuti per anno ${selectedYear2}:`, data);
        
        // Verifichiamo che i dati siano validi (un oggetto con totaleTurni)
        if (data && typeof data === 'object' && 'totaleTurni' in data) {
          setYearData2(data);
        } else {
          console.error(`Dati non validi per anno ${selectedYear2}:`, data);
        }
      } catch (error) {
        console.error(`Errore in getYearData per anno ${selectedYear2}:`, error);
      } finally {
        setLoading2(false);
      }
    }
  }, [selectedYear2, limitedToMonth]);
  
  // Funzione per trovare l'anno con più turni e quello con meno turni
  const findGlobalMaxMinYears = () => {
    console.log("Esecuzione findGlobalMaxMinYears");
    
    // Otteniamo tutti i dati di tutti gli anni disponibili
    const yearStats = [];
    
    for (const year of availableYears) {
      console.log(`Verifico anno: ${year.value}`);
      try {
        // getYearData restituisce direttamente le statistiche (oggetto con totaleTurni)
        const stats = getYearData(year.value);
        console.log(`Dati trovati per anno ${year.value}:`, stats ? "Presenti" : "Assenti");
        
        if (stats && typeof stats === 'object' && 'totaleTurni' in stats) {
          console.log(`Stats per anno ${year.value}:`, stats);
          yearStats.push({
            year: year.value,
            turni: stats.totaleTurni
          });
        }
      } catch (error) {
        console.error(`Errore nell'elaborazione dei dati per l'anno ${year.value}:`, error);
      }
    }
    
    console.log("Anni elaborati:", yearStats.length, yearStats);
    
    if (yearStats.length > 0) {
      // Troviamo l'anno con più turni
      const maxYear = yearStats.reduce((max, current) => {
        return current.turni > max.turni ? current : max;
      }, yearStats[0]);
      
      // Troviamo l'anno con meno turni
      const minYear = yearStats.reduce((min, current) => {
        return current.turni < min.turni ? current : min;
      }, yearStats[0]);
      
      console.log("maxYear:", maxYear, "minYear:", minYear);
      
      setMaxTurniYear(maxYear);
      setMinTurniYear(minYear);
    }
  };
  
  // Inizializzazione - Eseguita solo una volta all'avvio
  useEffect(() => {
    // Imposta gli anni predefiniti (i due più recenti)
    if (availableYears.length > 0) {
      setSelectedYear1(availableYears[0].value);
    }
    if (availableYears.length > 1) {
      setSelectedYear2(availableYears[1].value);
    }
    
    // Carica i dati per statistiche globali
    findGlobalMaxMinYears();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // La dipendenza vuota assicura che venga eseguito solo una volta
  
  // Controlla se limitare al mese corrente quando cambiano gli anni selezionati
  useEffect(() => {
    checkAndSetLimitToMonth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedYear1, selectedYear2]); // Rimuovo currentYear e currentMonth dalle dipendenze
  
  // Log per debug - questi non causano loop perché non modificano lo stato
  useEffect(() => {
    console.log("selectedYear1 cambiato:", selectedYear1);
  }, [selectedYear1]);

  useEffect(() => {
    console.log("selectedYear2 cambiato:", selectedYear2);
  }, [selectedYear2]);
  
  const getMonthName = (monthNumber) => {
    const monthNames = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
    return monthNames[monthNumber - 1];
  };
  
  const calculateTotalStats = (yearData) => {
    if (!yearData || typeof yearData !== 'object') {
      return { totaleTurni: 0, mediaGiornaliera: 0 };
    }
    
    // Se yearData è già l'oggetto con le statistiche (come restituito da getYearData)
    if ('totaleTurni' in yearData && 'mediaMensile' in yearData) {
      return {
        totaleTurni: yearData.totaleTurni,
        mediaGiornaliera: yearData.mediaMensile // Usiamo mediaMensile come approssimazione
      };
    }
    
    // Implementazione di fallback (non dovrebbe essere necessaria)
    return { 
      totaleTurni: yearData.totaleTurni || 0, 
      mediaGiornaliera: yearData.mediaMensile || 0 
    };
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

  // Calcola i dati totali per ciascun anno
  const year1Stats = yearData1 ? calculateTotalStats(yearData1) : null;
  const year2Stats = yearData2 ? calculateTotalStats(yearData2) : null;

  // Modifico prepara i dati per il grafico (solo turni totali, no media giornaliera)
  const chartData = [];
  if (year1Stats && year2Stats) {
    // Dati già elaborati correttamente da calculateTotalStats
    chartData.push({
      name: 'Confronto',
      [`Turni ${selectedYear1}`]: year1Stats.totaleTurni,
      [`Turni ${selectedYear2}`]: year2Stats.totaleTurni
    });
    
    console.log("Dati per il grafico:", chartData);
  }

  return (
    <ViewContainer>
      <Content>
        <BackButton onClick={() => setView('main')}>
          <ArrowLeft size={20} style={{ marginRight: '8px' }} />
          Torna alla Dashboard
        </BackButton>
        
        <Title>Confronta Anni</Title>
        
        <ComparisonContainer>
          {/* Pannello sinistro: Selezione primo anno */}
          <SidePanel>
            <PanelTitle>Seleziona il primo anno</PanelTitle>
            {availableYears.map(year => (
              <YearButton
                key={year.value}
                $isSelected={year.value === selectedYear1}
                $panel={1}
                onClick={() => handleYearSelect(1, year.value)}
              >
                {year.value}
              </YearButton>
            ))}
            
            {loading1 ? (
              <div>Caricamento dati...</div>
            ) : year1Stats && (
              <div>
                <SummaryTitle>{selectedYear1}</SummaryTitle>
                <SummaryValue>Turni totali: {year1Stats.totaleTurni}</SummaryValue>
                <SummaryValue>Media giornaliera: {year1Stats.mediaGiornaliera.toFixed(1)}</SummaryValue>
              </div>
            )}
          </SidePanel>
          
          {/* Pannello centrale: Grafici e comparazione */}
          <CentralPanel>
            {loading1 || loading2 ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>Caricamento dati...</div>
            ) : year1Stats && year2Stats ? (
              <>
                <ChartContainer>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={chartData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis label={{ value: 'Turni', angle: -90, position: 'insideLeft' }} />
                      <Tooltip />
                      <Legend />
                      <Bar 
                        dataKey={`Turni ${selectedYear1}`} 
                        fill="#8884d8" 
                        name={`Anno ${selectedYear1}`}
                      >
                        <LabelList dataKey={`Turni ${selectedYear1}`} position="center" fill="#ffffff" fontSize={14} fontWeight="bold" />
                      </Bar>
                      <Bar 
                        dataKey={`Turni ${selectedYear2}`} 
                        fill="#82ca9d" 
                        name={`Anno ${selectedYear2}`}
                      >
                        <LabelList dataKey={`Turni ${selectedYear2}`} position="center" fill="#ffffff" fontSize={14} fontWeight="bold" />
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
                
                {limitedToMonth > 0 && (
                  <LimitedToText>
                    * I dati dell'anno {currentYear} sono limitati fino al mese di {getMonthName(limitedToMonth)}.
                  </LimitedToText>
                )}
                
                {/* Riquadro differenza turni totali allargato */}
                <ComparisonSummary style={{ gridTemplateColumns: '1fr' }}>
                  <SummaryCard>
                    <SummaryTitle>Differenza turni totali</SummaryTitle>
                    {(() => {
                      const { diff, percentage, isPositive } = calculateDifference(
                        year1Stats.totaleTurni,
                        year2Stats.totaleTurni
                      );
                      
                      // Preparo una descrizione più dettagliata
                      const anno1 = selectedYear1;
                      const anno2 = selectedYear2;
                      
                      const descrizione = isPositive 
                        ? `Nell'anno ${anno1} ci sono stati ${diff} turni in più dell'anno ${anno2}.`
                        : `Nell'anno ${anno1} ci sono stati ${Math.abs(diff)} turni in meno dell'anno ${anno2}.`;
                      
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
                
                {/* Nuovi riquadri per gli anni con più/meno turni */}
                <div style={{ marginTop: '24px' }}>
                  <SummaryTitle style={{ textAlign: 'center', marginBottom: '16px' }}>Statistiche Globali</SummaryTitle>
                  <ComparisonSummary>
                    <SummaryCard style={{ backgroundColor: '#f0f7ff' }}>
                      <SummaryTitle>Anno con più turni</SummaryTitle>
                      {maxTurniYear ? (
                        <>
                          <SummaryValue>{maxTurniYear.year}</SummaryValue>
                          <DifferenceRow $isPositive={true}>
                            <TrendingUp size={16} />
                            <span>{maxTurniYear.turni} turni totali</span>
                          </DifferenceRow>
                        </>
                      ) : (
                        <div>Caricamento in corso...</div>
                      )}
                    </SummaryCard>
                    
                    <SummaryCard style={{ backgroundColor: '#fff0f0' }}>
                      <SummaryTitle>Anno con meno turni</SummaryTitle>
                      {minTurniYear ? (
                        <>
                          <SummaryValue>{minTurniYear.year}</SummaryValue>
                          <DifferenceRow $isPositive={false}>
                            <TrendingDown size={16} />
                            <span>{minTurniYear.turni} turni totali</span>
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
                Seleziona due anni per visualizzare il confronto
              </div>
            )}
          </CentralPanel>
          
          {/* Pannello destro: Selezione secondo anno */}
          <SidePanel>
            <PanelTitle>Seleziona il secondo anno</PanelTitle>
            {availableYears.map(year => (
              <YearButton
                key={year.value}
                $isSelected={year.value === selectedYear2}
                $panel={2}
                onClick={() => handleYearSelect(2, year.value)}
              >
                {year.value}
              </YearButton>
            ))}
            
            {loading2 ? (
              <div>Caricamento dati...</div>
            ) : year2Stats && (
              <div>
                <SummaryTitle>{selectedYear2}</SummaryTitle>
                <SummaryValue>Turni totali: {year2Stats.totaleTurni}</SummaryValue>
                <SummaryValue>Media giornaliera: {year2Stats.mediaGiornaliera.toFixed(1)}</SummaryValue>
              </div>
            )}
          </SidePanel>
        </ComparisonContainer>
      </Content>
    </ViewContainer>
  );
};

export default CompareYearsView;