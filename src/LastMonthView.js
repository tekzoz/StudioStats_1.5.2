import React from 'react';
import { ArrowLeft, Calendar, Clock, Gauge } from 'lucide-react';
import { getLatestMonthData, getPreviousMonthData, getAnnualAverageData, getSameMonthPreviousYear, getSameMonthBestPreviousYear, getCorrectAnnualAverage, getBestMonthByDailyAverage } from './data';
import PerformanceGauge from './PerformanceGauge';

const TripleStatCard = ({ icon, label, currentData, previousData, bestData, backgroundColor }) => {
  // Determina quale sia il mese migliore tra precedente e storico
  const bestValue = bestData ? parseFloat(bestData.value) : 0;
  const previousValue = parseFloat(previousData.value);
  const isBestMonth = bestValue > previousValue;
  
  return (
    <div style={{
      backgroundColor: backgroundColor,
      borderRadius: '12px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '24px',
      textAlign: 'center',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px', justifyContent: 'center' }}>
        {React.cloneElement(icon, { size: 24, color: '#4B5563' })}
        <span style={{ marginLeft: '12px', fontSize: '18px', fontWeight: '500', color: '#4B5563' }}>{label}</span>
      </div>
      
      {/* Mese corrente */}
      <div style={{ marginBottom: '16px' }}>
        <div style={{ fontSize: '16px', fontWeight: '500', color: '#4B5563', marginBottom: '4px' }}>
          Media Turni di Doppiaggio Giornaliera {currentData.monthName} {currentData.year} (Lun-Ven)
        </div>
        <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#1F2937' }}>
          {currentData.value}
        </div>
      </div>
      
      {/* Mese precedente */}
      <div style={{ marginBottom: '16px' }}>
        <div style={{ fontSize: '16px', fontWeight: '500', color: '#4B5563', marginBottom: '4px' }}>
          Media Turni di Doppiaggio Giornaliera {previousData.monthName} {previousData.year}{!isBestMonth ? ' (migliore mese)' : ''} (Lun-Ven)
        </div>
        <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#1F2937' }}>
          {previousData.value}
        </div>
        <div style={{ 
          fontSize: '14px', 
          color: previousData.comparison && parseFloat(previousData.comparison.value) > 0 ? 'green' : 'red',
          marginTop: '4px'
        }}>
          ({previousData.comparison?.percentage}) rispetto a {currentData.monthName} {currentData.year}
        </div>
      </div>
      
      {/* Mese migliore storico */}
      {bestData && (
        <div>
          <div style={{ fontSize: '16px', fontWeight: '500', color: '#4B5563', marginBottom: '4px' }}>
            Media Turni di Doppiaggio Giornaliera {bestData.monthName} {bestData.year}{isBestMonth ? ' (migliore mese)' : ''} (Lun-Ven)
          </div>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#1F2937' }}>
            {bestData.value}
          </div>
          <div style={{ 
            fontSize: '14px', 
            color: bestData.comparison && parseFloat(bestData.comparison.value) > 0 ? 'green' : 'red',
            marginTop: '4px'
          }}>
            ({bestData.comparison?.percentage}) rispetto a {currentData.monthName} {currentData.year}
          </div>
        </div>
      )}
    </div>
  );
};

const StatCard = ({ icon, label, value, comparison, backgroundColor, component, showUnit = false }) => (
  <div style={{
    backgroundColor: backgroundColor,
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '24px',
    textAlign: 'center',
  }}>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px', justifyContent: 'center' }}>
      {React.cloneElement(icon, { size: 24, color: '#4B5563' })}
      <span style={{ marginLeft: '12px', fontSize: '18px', fontWeight: '500', color: '#4B5563' }}>{label}</span>
    </div>
    {component ? (
      component
    ) : (
      <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#1F2937', marginBottom: '8px' }}>{value}</div>
    )}
    {comparison && (
      <div style={{ marginTop: '8px', fontSize: '14px' }}>
        <div style={{ color: comparison.prevMonth.value === 'N/A' ? 'gray' : (parseFloat(comparison.prevMonth.value) > 0 ? 'green' : 'red') }}>
          {comparison.prevMonth.value}{showUnit ? ' turni' : ''} ({comparison.prevMonth.percentage}) rispetto a {comparison.prevMonthName} {comparison.prevMonthYear}{showUnit && comparison.prevMonthValue ? ` (${comparison.prevMonthValue})` : ''}
        </div>
        <div style={{ color: comparison.annual.value === 'N/A' ? 'gray' : (parseFloat(comparison.annual.value) > 0 ? 'green' : 'red') }}>
          {comparison.annual.value}{showUnit ? ' turni' : ''} ({comparison.annual.percentage}) rispetto alla media annuale {comparison.year}{showUnit && comparison.annualValue ? ` (${comparison.annualValue})` : ''}
        </div>
        {comparison.sameMonthPrevYear && (
          <div style={{ color: comparison.sameMonthPrevYear.value === 'N/A' ? 'gray' : (parseFloat(comparison.sameMonthPrevYear.value) > 0 ? 'green' : 'red') }}>
            {comparison.sameMonthPrevYear.value}{showUnit ? ' turni' : ''} ({comparison.sameMonthPrevYear.percentage}) rispetto a {comparison.monthName} {comparison.sameMonthPrevYear.year}{showUnit && comparison.sameMonthPrevYearValue ? ` (${comparison.sameMonthPrevYearValue})` : ''}
          </div>
        )}
        {comparison.sameMonthBestYear && (
          <div style={{ color: comparison.sameMonthBestYear.value === 'N/A' ? 'gray' : (parseFloat(comparison.sameMonthBestYear.value) > 0 ? 'green' : 'red') }}>
            {comparison.sameMonthBestYear.value}{showUnit ? ' turni' : ''} ({comparison.sameMonthBestYear.percentage}) rispetto a {comparison.monthName} {comparison.sameMonthBestYear.year} (anno migliore){showUnit && comparison.sameMonthBestYearValue ? ` (${comparison.sameMonthBestYearValue})` : ''}
          </div>
        )}
      </div>
    )}
  </div>
);

const calculateComparison = (current, previous) => {
  if (typeof current !== 'number' || typeof previous !== 'number') {
    return { value: 'N/A', percentage: 'N/A' };
  }
  const diff = current - previous;
  const percentage = ((diff / previous) * 100).toFixed(1);
  return {
    value: diff > 0 ? `+${diff.toFixed(1)}` : diff.toFixed(1),
    percentage: diff > 0 ? `+${percentage}%` : `${percentage}%`
  };
};

const calculateInverseComparison = (base, target) => {
  if (typeof base !== 'number' || typeof target !== 'number') {
    return { value: 'N/A', percentage: 'N/A' };
  }
  const diff = base - target;
  const percentage = ((diff / target) * 100).toFixed(1);
  return {
    value: diff > 0 ? `+${diff.toFixed(1)}` : diff.toFixed(1),
    percentage: diff > 0 ? `+${percentage}%` : `${percentage}%`
  };
};

const roundToHalf = (num) => {
  return Math.round(num * 2) / 2;
};

const LastMonthView = ({ setView }) => {
  const latestMonthData = getLatestMonthData();
  const previousMonthData = getPreviousMonthData();
  const annualAverageData = getCorrectAnnualAverage(); // Usa la media corretta
  const sameMonthPrevYearData = getSameMonthPreviousYear();
  const sameMonthBestYearData = getSameMonthBestPreviousYear();
  const bestMonthData = getBestMonthByDailyAverage();

  // Calcolo dinamico basato sui dati effettivi invece della data di sistema
  const monthNames = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
  
  // Ora otteniamo direttamente mese e anno dai dati effettivi
  const displayMonth = monthNames[latestMonthData.month - 1];
  const displayYear = latestMonthData.year;
  const previousMonthName = monthNames[previousMonthData.month - 1];
  const previousMonthYear = previousMonthData.year;

  const comparisonDataTurni = {
    prevMonth: calculateComparison(latestMonthData.totaleTurni, previousMonthData.totaleTurni),
    annual: calculateComparison(latestMonthData.totaleTurni, annualAverageData.mediaAnnuale),
    sameMonthPrevYear: sameMonthPrevYearData ? calculateComparison(latestMonthData.totaleTurni, sameMonthPrevYearData.totaleTurni) : null,
    sameMonthBestYear: sameMonthBestYearData ? calculateComparison(latestMonthData.totaleTurni, sameMonthBestYearData.totaleTurni) : null,
    prevMonthName: previousMonthName,
    prevMonthYear: previousMonthYear,
    monthName: displayMonth,
    year: displayYear,
    // Aggiungo i valori effettivi dei turni
    prevMonthValue: previousMonthData.totaleTurni,
    annualValue: Math.round(annualAverageData.mediaAnnuale),
    sameMonthPrevYearValue: sameMonthPrevYearData ? sameMonthPrevYearData.totaleTurni : null,
    sameMonthBestYearValue: sameMonthBestYearData ? sameMonthBestYearData.totaleTurni : null
  };
  
  // Aggiunge gli anni ai confronti
  if (comparisonDataTurni.sameMonthPrevYear) {
    comparisonDataTurni.sameMonthPrevYear.year = sameMonthPrevYearData.year;
  }
  if (comparisonDataTurni.sameMonthBestYear) {
    comparisonDataTurni.sameMonthBestYear.year = sameMonthBestYearData.year;
  }

  const comparisonDataMedia = {
    prevMonth: calculateComparison(roundToHalf(latestMonthData.mediaGiornaliera), roundToHalf(previousMonthData.mediaGiornaliera)),
    annual: calculateComparison(roundToHalf(latestMonthData.mediaGiornaliera), roundToHalf(annualAverageData.mediaAnnuale / annualAverageData.monthsCount)), // Media corretta
    sameMonthPrevYear: sameMonthPrevYearData ? calculateComparison(roundToHalf(latestMonthData.mediaGiornaliera), roundToHalf(sameMonthPrevYearData.mediaGiornaliera)) : null,
    sameMonthBestYear: sameMonthBestYearData ? calculateComparison(roundToHalf(latestMonthData.mediaGiornaliera), roundToHalf(sameMonthBestYearData.mediaGiornaliera)) : null,
    prevMonthName: previousMonthName,
    prevMonthYear: previousMonthYear,
    monthName: displayMonth,
    year: displayYear
  };
  
  // Aggiunge gli anni ai confronti per la media
  if (comparisonDataMedia.sameMonthPrevYear) {
    comparisonDataMedia.sameMonthPrevYear.year = sameMonthPrevYearData.year;
  }
  if (comparisonDataMedia.sameMonthBestYear) {
    comparisonDataMedia.sameMonthBestYear.year = sameMonthBestYearData.year;
  }

  // Preparazione dati per il nuovo componente TripleStatCard della media giornaliera
  const currentAverage = roundToHalf(latestMonthData.mediaGiornaliera);
  const previousAverage = roundToHalf(previousMonthData.mediaGiornaliera);
  const bestAverage = bestMonthData ? roundToHalf(bestMonthData.mediaGiornaliera) : null;
  
  const averageData = {
    current: {
      value: currentAverage.toFixed(1),
      monthName: displayMonth,
      year: displayYear
    },
    previous: {
      value: previousAverage.toFixed(1),
      monthName: previousMonthName,
      year: previousMonthYear,
      comparison: calculateInverseComparison(previousAverage, currentAverage)
    },
    best: bestMonthData ? {
      value: bestAverage.toFixed(1),
      monthName: monthNames[bestMonthData.month - 1],
      year: bestMonthData.year,
      comparison: calculateInverseComparison(bestAverage, currentAverage)
    } : null
  };

  // Calcolo la percentuale di utilizzo delle sale
  // Assumo che ogni turno sia di 3 ore, con 10 sale disponibili e 3 fasce orarie (9 ore al giorno)
  const maxTurniGiornalieri = 10 * 3; // 10 sale * 3 fasce orarie = 30 turni massimi giornalieri
  const percentualeUtilizzo = (latestMonthData.mediaGiornaliera / maxTurniGiornalieri) * 100;
  
  // Arrotondo la percentuale al numero intero più vicino
  const percentualeUtilizzoArrotondata = Math.round(percentualeUtilizzo);
  
  // Confronto con il mese precedente e la media annuale
  const utilizzoMesePrecedente = (previousMonthData.mediaGiornaliera / maxTurniGiornalieri) * 100;
  // CORRETTO: calcolo la media giornaliera annuale corretta
  const mediaGiornalieraAnnuale = annualAverageData.mediaAnnuale / annualAverageData.monthsCount;
  const utilizzoMediaAnnuale = (mediaGiornalieraAnnuale / maxTurniGiornalieri) * 100;
  
  const comparisonDataUtilizzo = {
    prevMonth: calculateComparison(percentualeUtilizzoArrotondata, Math.round(utilizzoMesePrecedente)),
    annual: calculateComparison(percentualeUtilizzoArrotondata, Math.round(utilizzoMediaAnnuale)),
    prevMonthName: previousMonthName,
    prevMonthYear: previousMonthYear,
    year: displayYear
  };

  const stats = [
    { 
      icon: <Calendar />, 
      label: 'Totale Turni di Doppiaggio', 
      value: latestMonthData.totaleTurni,
      comparison: comparisonDataTurni,
      backgroundColor: '#E6F3FF',
      showUnit: true
    },
    { 
      icon: <Gauge />, 
      label: 'Utilizzo delle Sale di Doppiaggio', 
      component: (
        <div style={{ textAlign: 'center' }}>
          <PerformanceGauge value={percentualeUtilizzoArrotondata} maxValue={100} />
          <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '36px', fontWeight: 'bold', color: '#1F2937' }}>
            {percentualeUtilizzoArrotondata}%
          </div>
          <div style={{ textAlign: 'center', fontSize: '14px', color: '#6B7280', marginTop: '4px' }}>
            Media di {roundToHalf(latestMonthData.mediaGiornaliera).toFixed(1)} turni su {maxTurniGiornalieri} possibili
          </div>
        </div>
      ),
      comparison: comparisonDataUtilizzo,
      backgroundColor: '#F0E6FF'
    },
  ];

  return (
    <div style={{
      backgroundColor: '#F0F9FF',
      minHeight: '100vh',
      padding: '24px',
      fontFamily: "'Helvetica Neue', Arial, sans-serif",
    }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <button 
          onClick={() => setView('main')} 
          style={{
            background: '#4B5563',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            padding: '10px 20px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            fontSize: '16px',
            marginBottom: '24px',
            transition: 'background-color 0.3s',
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#374151'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#4B5563'}
        >
          <ArrowLeft size={20} style={{ marginRight: '8px' }} />
          Torna alla Dashboard
        </button>
        
        <h1 style={{
          fontSize: '32px',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '8px',
          color: '#1F2937',
        }}>
          Statistiche Ultimo Mese
        </h1>
        <h2 style={{
          fontSize: '28px',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '32px',
          color: '#4B5563',
          textTransform: 'uppercase',
        }}>
          {displayMonth} {displayYear}
        </h2>
        
        <div>
          <StatCard {...stats[0]} />
          <TripleStatCard 
            icon={<Clock />}
            label="Media Turni di Doppiaggio Giornaliera"
            currentData={averageData.current}
            previousData={averageData.previous}
            bestData={averageData.best}
            backgroundColor="#FFF0E6"
          />
          <StatCard {...stats[1]} />
        </div>
        
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
      </div>
    </div>
  );
};

export default LastMonthView;