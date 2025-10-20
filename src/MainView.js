import React, { useState, useEffect, useMemo, memo } from 'react';
import styled from 'styled-components';
import {
  MonthYearIcon,
  YearIcon,
  CompareMonthsIcon,
  CompareYearsIcon,
  PerformanceTrendIcon,
  InformationIcon,
} from './Icons';
import { PlusCircle, Mic, User, Users, AlertTriangle } from 'lucide-react'; // Importa le nuove icone

const DashboardContainer = styled.div`
  background-color: #f0f9ff;
  min-height: 100vh;
  padding: 24px;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  display: flex;
  flex-direction: column;
`;

const DashboardContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
  flex-grow: 1;
`;

const DashboardTitle = styled.h1`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 16px;
  color: #1f2937;
`;

const DashboardSubtitle = styled.div`
  text-align: center;
  margin-bottom: 32px;
  color: #4b5563;
`;

const MainSubtitle = styled.p`
  font-size: 18px;
  margin-bottom: 8px;
`;

const SubSubtitle = styled.p`
  font-size: 14px;
  margin: 0;
`;

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const DashboardCard = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1 / 1;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s, opacity 0.3s, scale 0.3s;
  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  scale: ${(props) => (props.$isVisible ? 1 : 0.8)};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: scale(0.95);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const CardIcon = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
    max-width: 150px;
    max-height: 150px;
  }
`;

const CardLabel = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: #4b5563;
  text-align: center;
`;

const Footer = styled.footer`
  text-align: center;
  padding: 16px 0;
  font-size: 12px;
  color: #6b7280;
`;

const MainView = memo(({ setView }) => {
  const [visibleCards, setVisibleCards] = useState([]);

  // Memorizziamo l'array cards per evitare ricreazioni ad ogni render
  const cards = useMemo(() => [
    {
      icon: <MonthYearIcon />,
      label: 'Ultimo Mese',
      color: '#E6F3FF',
      onClick: () => setView('lastMonth'),
    },
    {
      icon: <YearIcon />,
      label: 'Ultimo Anno',
      color: '#FEF3C7',
      onClick: () => setView('lastYear'),
    },
    {
      icon: <CompareMonthsIcon />,
      label: 'Confronta mesi',
      color: '#D1FAE5',
      onClick: () => setView('compareMonths'),
    },
    {
      icon: <CompareYearsIcon />,
      label: 'Confronta Anni',
      color: '#EDE9FE',
      onClick: () => setView('compareYears'),
    },
    {
      icon: <Mic size="100%" color="red" />,
      label: 'Statistiche Fonici',
      color: '#FEE2E2',
      onClick: () => setView('statisticheFonici'),
    },
    {
      icon: <User size="100%" color="#4B5563" />,
      label: 'Statistiche Assistenti',
      color: '#E6F3FF',
      onClick: () => setView('statisticheAssistenti'),
    },
    {
      icon: <Users size="100%" color="#4B5563" />,
      label: 'Statistiche Direttori',
      color: '#FEF3C7',
      onClick: () => setView('statisticheDirettori'),
    },
    {
      icon: <PerformanceTrendIcon />,
      label: 'Performance Trend',
      color: '#D1FAE5',
      onClick: () => setView('performanceTrend'),
    },
    {
      icon: <AlertTriangle size="100%" color="#d97706" />,
      label: 'Rejection Analyzer',
      color: '#FEF3C7',
      onClick: () => setView('rejectionAnalyzer'),
    },
    {
      icon: <InformationIcon />,
      label: 'Informazioni',
      color: '#E0E7FF',
      onClick: () => setView('information'),
    },
  ], [setView]); // Dipendenza da setView che dovrebbe essere stabile

  // Fix: usiamo una dipendenza fissa invece di cards.length
  useEffect(() => {
    const totalAnimationTime = 1000;
    const cardsCount = 10; // Numero fisso di cards
    const delay = totalAnimationTime / cardsCount;

    const timer = setInterval(() => {
      setVisibleCards((prev) => {
        if (prev.length >= cardsCount) {
          clearInterval(timer);
          return prev;
        }
        const newCardIndex = prev.length;
        return [...prev, newCardIndex];
      });
    }, delay);

    return () => clearInterval(timer);
  }, []); // Array vuoto: esegue solo al mount

  return (
    <DashboardContainer>
      <DashboardContent>
        <DashboardTitle>Statistiche Studio Pumaisdue</DashboardTitle>
        <DashboardSubtitle>
          <MainSubtitle>
            Esplora le statistiche e le performance dello studio.
            <br />
            Analizza i trend e confronta i dati.
          </MainSubtitle>
          <SubSubtitle>
            Per una migliore esperienza, ruotare il telefono in orizzontale.
          </SubSubtitle>
        </DashboardSubtitle>
        <DashboardGrid>
          {cards.map((card, index) => (
            <DashboardCard
              key={index}
              color={card.color}
              onClick={card.onClick}
              $isVisible={visibleCards.includes(index)}
              role="button"
              aria-label={card.label}
            >
              <CardIcon>{card.icon}</CardIcon>
              <CardLabel>{card.label}</CardLabel>
            </DashboardCard>
          ))}
        </DashboardGrid>
      </DashboardContent>
      <Footer>&copy; StudioStats 2025 Marco Augusto Comba | Versione 1.6.1</Footer>
    </DashboardContainer>
  );
});

MainView.displayName = 'MainView';

export default MainView;
