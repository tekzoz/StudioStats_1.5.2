import React, { useState, useEffect } from 'react';
import {
  Container,
  Content,
  Title,
  BackButton,
  Grid,
  Classifica,
  ChartRecharts as Chart,
} from './Components';
import { getAssistentiTurnCountsForPeriod, getAssistentiTurnCountsWithTrend } from './dataAssistenti';

const StatisticheAssistenti = ({ setView }) => {
  const [assistentiData, setAssistentiData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ultimoMese = getAssistentiTurnCountsWithTrend();
    const ultimoQuadrimestre = getAssistentiTurnCountsForPeriod('quadrimestre');
    const ultimoAnno = getAssistentiTurnCountsForPeriod('anno');

    setAssistentiData({
      ultimoMese,
      ultimoQuadrimestre,
      ultimoAnno,
    });

    setLoading(false);
  }, []);

  if (loading) {
    return <div>Caricamento...</div>;
  }

  return (
    <Container>
      <Content>
        <BackButton onClick={() => setView('main')}>
          Torna alla Dashboard
        </BackButton>
        <Title>Statistiche Assistenti</Title>
        <Grid>
          <Classifica title="Ultimo Mese" data={assistentiData.ultimoMese} showTrend={true} />
          <Classifica title="Ultimo Quadrimestre" data={assistentiData.ultimoQuadrimestre} />
          <Classifica title="Da Inizio Anno" data={assistentiData.ultimoAnno} />
        </Grid>
        <Grid>
          <div style={{ gridColumn: '1 / -1' }}>
            <Chart data={assistentiData.ultimoAnno} title="Distribuzione Turni Anno" />
          </div>
        </Grid>
      </Content>
      
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
    </Container>
  );
};

export default StatisticheAssistenti;
