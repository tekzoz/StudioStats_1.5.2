import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ArrowLeft, TrendingUp, TrendingDown } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getAvailableYears, getCurrentYearAndMonth } from './data';
import { getYearData } from './dataUtils';
import { useDynamicYearData } from './dataLoader';

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
  
  // Utilizziamo i nuovi hook per il caricamento lazy dei dati
  const { data: yearData1, loading: loading1 } = useDynamicYearData(selectedYear1);
  const { data: yearData2, loading: loading2 } = useDynamicYearData(selectedYear2);
  
  useEffect(() => {
    // Imposta gli anni predefiniti (i due più recenti)
    if (availableYears.length > 0) {
      setSelectedYear1(availableYears[0].value);
    }
    if (availableYears.length > 1) {
      setSelectedYear2(availableYears[1].value);
    }
    
    // Se uno degli anni selezionati è l'anno corrente, limita i dati al mese corrente
    checkAndSetLimitToMonth();
  }, [availableYears]);
  
  useEffect(() => {
    checkAndSetLimitToMonth();
  }, [selectedYear1]);
  
  useEffect(() => {
    checkAndSetLimitToMonth();
  }, [selectedYear2]);
  
  useEffect(() => {
    console.log("selectedYear1 cambiato:", selectedYear1);
  }, [selectedYear1]);

  useEffect(() => {
    console.log("selectedYear2 cambiato:", selectedYear2);
  }, [selectedYear2]);
  
  const checkAndSetLimitToMonth = () => {
    if (parseInt(selectedYear1) === currentYear || parseInt(selectedYear2) === currentYear) {
      setLimitedToMonth(currentMonth);
    } else {
      setLimitedToMonth(0);
    }
  };
  
  const getMonthName = (monthNumber) => {
    const monthNames = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
    return monthNames[monthNumber - 1];
  };
  
  const calculateTotalStats = (yearData) => {
    if (!yearData) return { totaleTurni: 0, mediaGiornaliera: 0 };
    
    let totaleTurni = 0;
    let giorniLavorati = 0;
    
    // Limite fino al mese corrente se necessario
    const monthLimit = limitedToMonth > 0 ? limitedToMonth : 12;
    
    for (let i = 0; i < monthLimit; i++) {
      const monthData = yearData[i];
      if (monthData) {
        totaleTurni += monthData.totaleTurni || 0;
        giorniLavorati += monthData.giorniLavorativi || 0;
      }
    }
    
    const mediaGiornaliera = giorniLavorati > 0 ? totaleTurni / giorniLavorati : 0;
    return { totaleTurni, mediaGiornaliera };
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

  // Calcola i dati totali per ciascun anno
  const year1Stats = yearData1 ? calculateTotalStats(yearData1) : null;
  const year2Stats = yearData2 ? calculateTotalStats(yearData2) : null;

  // Prepara i dati per il grafico
  const chartData = [];
  if (year1Stats && year2Stats) {
    chartData.push({
      name: 'Confronto',
      [`Turni ${selectedYear1}`]: year1Stats.totaleTurni,
      [`Media ${selectedYear1}`]: year1Stats.mediaGiornaliera * 200, // Scaliamo per visualizzazione
      [`Turni ${selectedYear2}`]: year2Stats.totaleTurni,
      [`Media ${selectedYear2}`]: year2Stats.mediaGiornaliera * 200 // Scaliamo per visualizzazione
    });
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
            {availableYears.map((year) => (
              <YearButton 
                key={year.value}
                $isSelected={year.value === selectedYear1}
                onClick={() => {
                  console.log(`Selezionato primo anno: ${year.value}`);
                  setSelectedYear1(year.value);
                }}
              >
                {year.label}
              </YearButton>
            ))}
            
            {loading1 ? (
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                Caricamento dati...
              </div>
            ) : year1Stats && (
              <>
                <SummaryTitle>Anno {selectedYear1}</SummaryTitle>
                <SummaryValue>Turni totali: {year1Stats.totaleTurni}</SummaryValue>
                <SummaryValue>Media giornaliera: {year1Stats.mediaGiornaliera.toFixed(1)}</SummaryValue>
                {parseInt(selectedYear1) === currentYear && (
                  <LimitedToText>Dati limitati fino a {getMonthName(currentMonth)}</LimitedToText>
                )}
              </>
            )}
          </SidePanel>
          
          {/* Pannello centrale: Grafici e comparazione */}
          <CentralPanel>
            {loading1 || loading2 ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                Caricamento dati in corso...
              </div>
            ) : (year1Stats && year2Stats) ? (
              <>
                <ChartContainer>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={chartData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis domain={[0, 6000]} label={{ value: 'Turni', angle: -90, position: 'insideLeft' }} />
                      <Tooltip formatter={(value, name) => {
                        // Riconverti i valori della media
                        if (name.startsWith('Media')) {
                          return [(value / 200).toFixed(1), name];
                        }
                        return [value, name];
                      }} />
                      <Legend />
                      <Bar dataKey={`Turni ${selectedYear1}`} fill="#8884d8" />
                      <Bar dataKey={`Media ${selectedYear1}`} fill="#82ca9d" />
                      <Bar dataKey={`Turni ${selectedYear2}`} fill="#8884d8" stackId="a" fillOpacity={0.6} />
                      <Bar dataKey={`Media ${selectedYear2}`} fill="#82ca9d" stackId="a" fillOpacity={0.6} />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
                
                <ComparisonSummary>
                  <SummaryCard>
                    <SummaryTitle>Differenza turni totali</SummaryTitle>
                    {(() => {
                      const { diff, percentage, isPositive } = calculateDifference(
                        year1Stats.totaleTurni, 
                        year2Stats.totaleTurni
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
                      const { diff, percentage, isPositive } = calculateDifference(
                        year1Stats.mediaGiornaliera, 
                        year2Stats.mediaGiornaliera
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
                
                {limitedToMonth > 0 && (
                  <LimitedToText>
                    Confronto limitato fino a {getMonthName(limitedToMonth)} per l'anno {currentYear}
                  </LimitedToText>
                )}
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
            {availableYears.map((year) => (
              <YearButton 
                key={year.value}
                $isSelected={year.value === selectedYear2}
                onClick={() => {
                  console.log(`Selezionato secondo anno: ${year.value}`);
                  setSelectedYear2(year.value);
                }}
              >
                {year.label}
              </YearButton>
            ))}
            
            {loading2 ? (
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                Caricamento dati...
              </div>
            ) : year2Stats && (
              <>
                <SummaryTitle>Anno {selectedYear2}</SummaryTitle>
                <SummaryValue>Turni totali: {year2Stats.totaleTurni}</SummaryValue>
                <SummaryValue>Media giornaliera: {year2Stats.mediaGiornaliera.toFixed(1)}</SummaryValue>
                {parseInt(selectedYear2) === currentYear && (
                  <LimitedToText>Dati limitati fino a {getMonthName(currentMonth)}</LimitedToText>
                )}
              </>
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

export default CompareYearsView;