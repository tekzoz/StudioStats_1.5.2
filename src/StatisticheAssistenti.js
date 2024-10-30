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
import { getAssistentiTurnCountsForPeriod } from './dataAssistenti';

const StatisticheAssistenti = ({ setView }) => {
  const [assistentiData, setAssistentiData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ultimoMese = getAssistentiTurnCountsForPeriod('mese');
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
          <Classifica title="Ultimo Mese" data={assistentiData.ultimoMese} />
          <Classifica title="Ultimo Quadrimestre" data={assistentiData.ultimoQuadrimestre} />
          <Classifica title="Da Inizio Anno" data={assistentiData.ultimoAnno} />
        </Grid>
        <Grid>
          <div style={{ gridColumn: '1 / -1' }}>
            <Chart data={assistentiData.ultimoAnno} title="Distribuzione Turni Anno" />
          </div>
        </Grid>
      </Content>
    </Container>
  );
};

export default StatisticheAssistenti;
