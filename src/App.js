import React from 'react';
import MainView from './MainView';
import LastMonthView from './LastMonthView';
import LastYearView from './LastYearView';
import CompareMonthsView from './CompareMonthsView';
import CompareYearsView from './CompareYearsView';
import InformationView from './InformationView';
import StatisticheFonici from './StatisticheFonici';
import PerformanceTrendView from './PerformanceTrendView';
import StatisticheAssistenti from './StatisticheAssistenti'; // Importazione aggiunta
import StatisticheDirettori from './StatisticheDirettori';   // Importazione aggiunta
import RejectionAnalyzerView from './RejectionAnalyzerView'; // Importazione aggiunta
import TemporarilyUnavailableView from './TemporarilyUnavailableView'; // Nuova importazione

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
      {renderView()}
    </div>
  );
};

export default App;
