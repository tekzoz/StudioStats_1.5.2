import React, { Suspense, lazy } from 'react';

// Importazione diretta solo per MainView (caricato sempre)
import MainView from './MainView';

// Lazy loading per tutti gli altri componenti (caricati solo quando necessario)
const LastMonthView = lazy(() => import('./LastMonthView'));
const LastYearView = lazy(() => import('./LastYearView'));
const CompareMonthsView = lazy(() => import('./CompareMonthsView'));
const CompareYearsView = lazy(() => import('./CompareYearsView'));
const InformationView = lazy(() => import('./InformationView'));
const StatisticheFonici = lazy(() => import('./StatisticheFonici'));
const PerformanceTrendView = lazy(() => import('./PerformanceTrendView'));
const StatisticheAssistenti = lazy(() => import('./StatisticheAssistenti'));
const StatisticheDirettori = lazy(() => import('./StatisticheDirettori'));
const RejectionAnalyzerView = lazy(() => import('./RejectionAnalyzerView'));
const TemporarilyUnavailableView = lazy(() => import('./TemporarilyUnavailableView'));

// Componente di fallback durante il caricamento
const LoadingFallback = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#F0F9FF',
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
  }}>
    <div style={{
      textAlign: 'center',
      padding: '32px',
    }}>
      <div style={{
        width: '64px',
        height: '64px',
        border: '4px solid #E5E7EB',
        borderTopColor: '#4B5563',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
        margin: '0 auto 16px',
      }}></div>
      <p style={{
        fontSize: '18px',
        color: '#4B5563',
      }}>Caricamento...</p>
    </div>
    <style>{`
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

const App = () => {
  const [currentView, setCurrentView] = React.useState('main');

  const renderView = () => {
    switch (currentView) {
      case 'main':
        return <MainView setView={setCurrentView} />;
      case 'lastMonth':
        return <LastMonthView setView={setCurrentView} />;
      case 'lastYear':
        return <LastYearView setView={setCurrentView} />;
      case 'compareMonths':
        return <CompareMonthsView setView={setCurrentView} />;
      case 'compareYears':
        return <CompareYearsView setView={setCurrentView} />;
      case 'information':
        return <InformationView setView={setCurrentView} />;
      case 'statisticheFonici':
        return <StatisticheFonici setView={setCurrentView} />;
      case 'performanceTrend':
        return <PerformanceTrendView setView={setCurrentView} />;
      case 'statisticheAssistenti':
        return <StatisticheAssistenti setView={setCurrentView} />; // Caso aggiunto
      case 'statisticheDirettori':
        return <StatisticheDirettori setView={setCurrentView} />;  // Caso aggiunto
      case 'rejectionAnalyzer':
        return <TemporarilyUnavailableView setView={setCurrentView} />; // Reindirizzato alla pagina temporaneamente non disponibile
      default:
        return <MainView setView={setCurrentView} />;
    }
  };

  return (
    <div className="App">
      <Suspense fallback={<LoadingFallback />}>
        {renderView()}
      </Suspense>
    </div>
  );
};

export default App;
