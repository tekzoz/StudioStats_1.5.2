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
import { getDirettoriTurnCountsForPeriod, getDirettoriTurnCountsWithTrend } from './dataDirettori';

const StatisticheDirettori = ({ setView }) => {
  const [direttoriData, setDirettoriData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ultimoMese = getDirettoriTurnCountsWithTrend();
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
          <Classifica title="Ultimo Mese" data={direttoriData.ultimoMese} showTrend={true} />
          <Classifica title="Ultimo Quadrimestre" data={direttoriData.ultimoQuadrimestre} />
          <Classifica title="Da Inizio Anno" data={direttoriData.ultimoAnno} />
        </Grid>
        <Grid>
          <div style={{ gridColumn: '1 / -1' }}>
            <Chart data={direttoriData.ultimoAnno} title="Distribuzione Turni Anno" />
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

export default StatisticheDirettori;
