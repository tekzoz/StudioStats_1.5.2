import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ArrowLeft, TrendingUp, TrendingDown } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
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
  background-color: ${props => props.$isSelected ? '#3B82F6' : '#E5E7EB'};
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
    background-color: ${props => props.$isSelected ? '#2563EB' : '#D1D5DB'};
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

const MonthInfo = styled.div`
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #E5E7EB;
`;

const CompareMonthsView = ({ setView }) => {
  const { currentYear, currentMonth } = getCurrentYearAndMonth();
  const availableMonths = getAvailableMonths();
  const [selectedMonth1, setSelectedMonth1] = useState(null);
  const [selectedMonth2, setSelectedMonth2] = useState(null);
  const [monthData1, setMonthData1] = useState(null);
  const [monthData2, setMonthData2] = useState(null);
  
  useEffect(() => {
    // Imposta i mesi predefiniti (gli ultimi due mesi)
    if (availableMonths.length > 0) {
      setSelectedMonth1(availableMonths[0].value);
    }
    if (availableMonths.length > 1) {
      setSelectedMonth2(availableMonths[1].value);
    }
  }, [availableMonths]);
  
  useEffect(() => {
    if (selectedMonth1) {
      try {
        // Verifichiamo che selectedMonth1 sia una stringa valida nel formato "YYYY-MM"
        if (typeof selectedMonth1 === 'string' && selectedMonth1.includes('-')) {
          // Ora getMonthData restituisce una Promise
          getMonthData(selectedMonth1).then(data => {
            if (data) {
              setMonthData1(data);
            } else {
              console.error(`Nessun dato trovato per il mese: ${selectedMonth1}`);
            }
          }).catch(error => {
            console.error(`Errore nel recupero dei dati per il mese ${selectedMonth1}:`, error);
          });
        } else {
          console.error(`Formato mese non valido: ${selectedMonth1}, tipo: ${typeof selectedMonth1}`);
        }
      } catch (error) {
        console.error(`Errore nel recupero dei dati per il mese ${selectedMonth1}:`, error);
      }
    }
  }, [selectedMonth1]);
  
  useEffect(() => {
    if (selectedMonth2) {
      try {
        // Verifichiamo che selectedMonth2 sia una stringa valida nel formato "YYYY-MM"
        if (typeof selectedMonth2 === 'string' && selectedMonth2.includes('-')) {
          // Ora getMonthData restituisce una Promise
          getMonthData(selectedMonth2).then(data => {
            if (data) {
              setMonthData2(data);
            } else {
              console.error(`Nessun dato trovato per il mese: ${selectedMonth2}`);
            }
          }).catch(error => {
            console.error(`Errore nel recupero dei dati per il mese ${selectedMonth2}:`, error);
          });
        } else {
          console.error(`Formato mese non valido: ${selectedMonth2}, tipo: ${typeof selectedMonth2}`);
        }
      } catch (error) {
        console.error(`Errore nel recupero dei dati per il mese ${selectedMonth2}:`, error);
      }
    }
  }, [selectedMonth2]);
  
  useEffect(() => {
    console.log("selectedMonth1 cambiato:", selectedMonth1);
  }, [selectedMonth1]);
  
  useEffect(() => {
    console.log("selectedMonth2 cambiato:", selectedMonth2);
  }, [selectedMonth2]);
  
  const getMonthName = (monthNumber) => {
    const monthNames = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
    return monthNames[monthNumber - 1];
  };
  
  const formatMonthLabel = (monthValue) => {
    if (!monthValue) return '';
    const [year, month] = monthValue.split('-').map(Number);
    return `${getMonthName(month)} ${year}`;
  };
  
  const calculateDifference = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
      return { diff: 'N/A', percentage: 'N/A', isPositive: true };
    }
    const diff = value1 - value2;
    const percentage = value2 !== 0 ? ((diff / value2) * 100).toFixed(1) : 'N/A';
    return {
      diff: diff.toFixed(0),
      percentage: percentage !== 'N/A' ? `${percentage}%` : 'N/A',
      isPositive: diff >= 0
    };
  };

  // Prepara i dati per il grafico di confronto
  const prepareComparisonData = () => {
    if (!monthData1 || !monthData2) return [];
    
    // Creiamo i dati giornalieri per l'istogramma
    const dataByDay = [];
    
    // Numero di giorni nel mese (prendiamo il massimo tra i due)
    const days1 = monthData1.giorniLavorativi || 0;
    const days2 = monthData2.giorniLavorativi || 0;
    
    // Media giornaliera
    const dailyAvg1 = days1 > 0 ? monthData1.totaleTurni / days1 : 0;
    const dailyAvg2 = days2 > 0 ? monthData2.totaleTurni / days2 : 0;
    
    // Aggiungiamo i dati per il grafico di confronto
    dataByDay.push({
      name: 'Totale',
      [`Turni ${formatMonthLabel(selectedMonth1)}`]: monthData1.totaleTurni || 0,
      [`Turni ${formatMonthLabel(selectedMonth2)}`]: monthData2.totaleTurni || 0
    });
    
    dataByDay.push({
      name: 'Media Giornaliera',
      [`Turni ${formatMonthLabel(selectedMonth1)}`]: dailyAvg1 || 0,
      [`Turni ${formatMonthLabel(selectedMonth2)}`]: dailyAvg2 || 0
    });
    
    return dataByDay;
  };

  const comparisonData = prepareComparisonData();

  return (
    <ViewContainer>
      <Content>
        <BackButton onClick={() => setView('main')}>
          <ArrowLeft size={20} style={{ marginRight: '8px' }} />
          Torna alla Dashboard
        </BackButton>
        
        <Title>Confronta Mesi</Title>
        
        <ComparisonContainer>
          {/* Pannello sinistro: Selezione primo mese */}
          <SidePanel>
            <PanelTitle>Seleziona il primo mese</PanelTitle>
            {availableMonths.map(month => (
              <MonthButton
                key={month.value}
                $isSelected={month.value === selectedMonth1}
                onClick={() => {
                  console.log(`Selezionato primo mese: ${month.value}`);
                  setSelectedMonth1(month.value);
                }}
              >
                {month.label}
              </MonthButton>
            ))}
            
            {monthData1 && (
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
            {comparisonData.length > 0 ? (
              <>
                <ChartContainer>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={comparisonData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis domain={[0, 600]} label={{ value: 'Turni', angle: -90, position: 'insideLeft' }} />
                      <Tooltip />
                      <Legend />
                      <Bar 
                        dataKey={`Turni ${formatMonthLabel(selectedMonth1)}`} 
                        fill="#8884d8" 
                        name={formatMonthLabel(selectedMonth1)}
                      />
                      <Bar 
                        dataKey={`Turni ${formatMonthLabel(selectedMonth2)}`} 
                        fill="#82ca9d" 
                        name={formatMonthLabel(selectedMonth2)}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
                
                <ComparisonSummary>
                  <SummaryCard>
                    <SummaryTitle>Differenza turni totali</SummaryTitle>
                    {(() => {
                      const { diff, percentage, isPositive } = calculateDifference(
                        monthData1.totaleTurni || 0,
                        monthData2.totaleTurni || 0
                      );
                      return (
                        <>
                          <SummaryValue>{diff}</SummaryValue>
                          <DifferenceRow $isPositive={isPositive}>
                            {isPositive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                            <span>{percentage}</span>
                          </DifferenceRow>
                        </>
                      );
                    })()}
                  </SummaryCard>
                  
                  <SummaryCard>
                    <SummaryTitle>Differenza media giornaliera</SummaryTitle>
                    {(() => {
                      const avgDaily1 = monthData1.giorniLavorativi ? 
                        (monthData1.totaleTurni / monthData1.giorniLavorativi) : 0;
                      const avgDaily2 = monthData2.giorniLavorativi ? 
                        (monthData2.totaleTurni / monthData2.giorniLavorativi) : 0;
                      
                      const { diff, percentage, isPositive } = calculateDifference(
                        avgDaily1,
                        avgDaily2
                      );
                      return (
                        <>
                          <SummaryValue>{diff}</SummaryValue>
                          <DifferenceRow $isPositive={isPositive}>
                            {isPositive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                            <span>{percentage}</span>
                          </DifferenceRow>
                        </>
                      );
                    })()}
                  </SummaryCard>
                </ComparisonSummary>
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
            {availableMonths.map(month => (
              <MonthButton
                key={month.value}
                $isSelected={month.value === selectedMonth2}
                onClick={() => {
                  console.log(`Selezionato secondo mese: ${month.value}`);
                  setSelectedMonth2(month.value);
                }}
              >
                {month.label}
              </MonthButton>
            ))}
            
            {monthData2 && (
              <MonthInfo>
                <SummaryTitle>{formatMonthLabel(selectedMonth2)}</SummaryTitle>
                <SummaryValue>Turni totali: {monthData2.totaleTurni || 0}</SummaryValue>
                <SummaryValue>Giorni lavorativi: {monthData2.giorniLavorativi || 0}</SummaryValue>
                <SummaryValue>Media giornaliera: {monthData2.giorniLavorativi ? (monthData2.totaleTurni / monthData2.giorniLavorativi).toFixed(1) : 'N/A'}</SummaryValue>
              </MonthInfo>
            )}
          </SidePanel>
        </ComparisonContainer>
        
        {/* Footer */}
        <div style={{
          textAlign: 'center',
          marginTop: '30px',
          paddingTop: '20px',
          borderTop: '1px solid #e5e7eb',
          fontSize: '14px',
          color: '#6b7280',
        }}>
          <p>© StudioStats 2025 Marco Augusto Comba | Versione 1.6.0</p>
        </div>
      </Content>
    </ViewContainer>
  );
};

export default CompareMonthsView;