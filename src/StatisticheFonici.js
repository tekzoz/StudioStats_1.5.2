import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ArrowLeft } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { getFoniciTurnCountsForPeriod, getUtilizzoSaleForPeriod, getBilanciamentoFonici } from './data';
import {
  Container,
  Content,
  Title,
  BackButton,
  Grid,
  Card,
  CardTitle,
  ClassificaList,
  ClassificaItem,
  TurniSpan,
  HighlightBox,
  Classifica,
  ChartRecharts as Chart,
  // Altri componenti se necessari
} from './Components';

const UtilizzoSaleCard = ({ data, title }) => (
  <Card>
    <CardTitle>{title}</CardTitle>
    <ClassificaList>
      {data.map((sala, index) => (
        <ClassificaItem key={sala.sala}>
          <span>{index + 1}.</span>
          <span>{sala.sala}</span>
          <TurniSpan>{sala.turni} turni</TurniSpan>
        </ClassificaItem>
      ))}
    </ClassificaList>
  </Card>
);

const BilanciamentoCard = ({ data, averageTurni }) => (
  <Card>
    <CardTitle>Bilanciamento Turni - Team Pumaisdue</CardTitle>
    <p>Media turni annuale: {averageTurni}</p>
    <ClassificaList>
      {data.map((fonico, index) => (
        <ClassificaItem key={fonico.nome}>
          <span>{index + 1}.</span>
          <span>{fonico.nome}</span>
          <TurniSpan>
            {fonico.differenza > 0
              ? `+${fonico.differenza.toFixed(0)}`
              : fonico.differenza.toFixed(0)}{' '}
            turni
          </TurniSpan>
        </ClassificaItem>
      ))}
    </ClassificaList>
  </Card>
);

const StatisticheFonici = ({ setView }) => {
  const [foniciData, setFoniciData] = useState(null);
  const [utilizzoSale, setUtilizzoSale] = useState(null);
  const [bilanciamentoData, setBilanciamentoData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ultimoMese = getFoniciTurnCountsForPeriod('mese');
    const ultimoQuadrimestre = getFoniciTurnCountsForPeriod('quadrimestre');
    const ultimoAnno = getFoniciTurnCountsForPeriod('anno');

    const utilizzoSaleUltimoMese = getUtilizzoSaleForPeriod('mese');
    const utilizzoSaleUltimoQuadrimestre = getUtilizzoSaleForPeriod('quadrimestre');
    const utilizzoSaleUltimoAnno = getUtilizzoSaleForPeriod('anno');

    const { bilanciamento, averageTurni } = getBilanciamentoFonici();

    setBilanciamentoData({
      bilanciamento,
      averageTurni,
    });

    setFoniciData({
      ultimoMese,
      ultimoQuadrimestre,
      ultimoAnno,
    });

    setUtilizzoSale({
      ultimoMese: utilizzoSaleUltimoMese,
      ultimoQuadrimestre: utilizzoSaleUltimoQuadrimestre,
      ultimoAnno: utilizzoSaleUltimoAnno,
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
          <ArrowLeft size={20} style={{ marginRight: '8px' }} />
          Torna alla Dashboard
        </BackButton>

        <Title>Statistiche Fonici e Sale</Title>

        {/* Classifica dei fonici */}
        <Grid>
          <Classifica title="Ultimo Mese" data={foniciData.ultimoMese} />
          <Classifica title="Ultimo Quadrimestre" data={foniciData.ultimoQuadrimestre} />
          <Classifica title="Da inizio Anno" data={foniciData.ultimoAnno} highlightTopN={8} // Aggiunto per evidenziare i primi 8
          />

        </Grid>

        {/* Classifica delle sale */}
        <Grid>
          <UtilizzoSaleCard title="Utilizzo Sale - Ultimo Mese" data={utilizzoSale.ultimoMese} />
          <UtilizzoSaleCard title="Utilizzo Sale - Ultimo Quadrimestre" data={utilizzoSale.ultimoQuadrimestre} />
          <UtilizzoSaleCard title="Utilizzo Sale - Da inizio Anno" data={utilizzoSale.ultimoAnno} />
        </Grid>

        {/* Grafici */}
        <Grid>
        <div style={{ gridColumn: '1 / -1' }}>
          <Chart data={foniciData.ultimoAnno} title="Distribuzione Turni Anno" />
          </div>
        </Grid>

        {/* Riquadro di Bilanciamento */}
        <Grid>
        <div style={{ gridColumn: '1 / -1' }}>
          <BilanciamentoCard
          data={bilanciamentoData.bilanciamento}
          averageTurni={bilanciamentoData.averageTurni}
    />
  </div>
</Grid>

        
      </Content>
    </Container>
  );
};

export default StatisticheFonici;
