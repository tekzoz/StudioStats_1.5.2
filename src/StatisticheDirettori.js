// StatisticheDirettori.js

import React, { useState, useEffect } from 'react';
import {
  Container,
  Content,
  Title,
  BackButton,
  Grid,
  Classifica,
  ChartRecharts as Chart, // Importa il componente Chart
} from './Components';
import { getDirettoriTurnCountsForPeriod } from './dataDirettori';

const StatisticheDirettori = ({ setView }) => {
  const [direttoriData, setDirettoriData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ultimoMese = getDirettoriTurnCountsForPeriod('mese');
    const ultimoQuadrimestre = getDirettoriTurnCountsForPeriod('quadrimestre');
    const ultimoAnno = getDirettoriTurnCountsForPeriod('anno');

    setDirettoriData({
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
        <Title>Statistiche Direttori</Title>
        <Grid>
          <Classifica title="Ultimo Mese" data={direttoriData.ultimoMese} />
          <Classifica title="Ultimo Quadrimestre" data={direttoriData.ultimoQuadrimestre} />
          <Classifica title="Da Inizio Anno" data={direttoriData.ultimoAnno} />
        </Grid>
        <Grid>
          <div style={{ gridColumn: '1 / -1' }}>
            <Chart data={direttoriData.ultimoAnno} title="Distribuzione Turni Anno" />
          </div>
        </Grid>
      </Content>
    </Container>
  );
};

export default StatisticheDirettori;
