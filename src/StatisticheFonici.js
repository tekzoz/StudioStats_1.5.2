import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ArrowLeft } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { getFoniciTurnCountsForPeriod, getUtilizzoSaleForPeriod, getBilanciamentoFonici, getFoniciTurnCountsWithTrend, getMediaTurniAlMeseFonici } from './data';
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

const MediaTurniTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 16px;
  
  th, td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #e5e7eb;
  }
  
  th {
    background-color: #f9fafb;
    font-weight: 600;
    color: #374151;
    font-size: 14px;
  }
  
  td {
    color: #6b7280;
    font-size: 14px;
  }
  
  tr:hover {
    background-color: #f9fafb;
  }
  
  .nome-column {
    font-weight: 500;
    color: #111827;
  }
  
  .media-column {
    font-weight: 600;
    color: #2563eb;
  }
`;

const MediaTurniCard = ({ data }) => (
  <Card>
    <CardTitle>📊 Media Turni al Mese per Fonico</CardTitle>
    <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '8px' }}>
      Confronto tra media dall'inizio dell'anno e media dell'ultimo quadrimestre
    </p>
    <MediaTurniTable>
      <thead>
        <tr>
          <th>#</th>
          <th>Fonico</th>
          <th>Media Anno</th>
          <th>Media Quadrimestre</th>
          <th>Turni Totali Anno</th>
        </tr>
      </thead>
      <tbody>
        {data.map((fonico, index) => (
          <tr key={fonico.nome}>
            <td>{index + 1}</td>
            <td className="nome-column">{fonico.nome}</td>
            <td className="media-column">{fonico.mediaAnno} turni/mese</td>
            <td className="media-column">{fonico.mediaQuadrimestre} turni/mese</td>
            <td>{fonico.turniTotaliAnno} turni</td>
          </tr>
        ))}
      </tbody>
    </MediaTurniTable>
  </Card>
);

const StatisticheFonici = ({ setView }) => {
  const [foniciData, setFoniciData] = useState(null);
  const [utilizzoSale, setUtilizzoSale] = useState(null);
  const [bilanciamentoData, setBilanciamentoData] = useState(null);
  const [mediaTurniData, setMediaTurniData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ultimoMese = getFoniciTurnCountsWithTrend();
    const ultimoQuadrimestre = getFoniciTurnCountsForPeriod('quadrimestre');
    const ultimoAnno = getFoniciTurnCountsForPeriod('anno');

    const utilizzoSaleUltimoMese = getUtilizzoSaleForPeriod('mese');
    const utilizzoSaleUltimoQuadrimestre = getUtilizzoSaleForPeriod('quadrimestre');
    const utilizzoSaleUltimoAnno = getUtilizzoSaleForPeriod('anno');

    const { bilanciamento, averageTurni } = getBilanciamentoFonici();
    
    const mediaTurni = getMediaTurniAlMeseFonici();

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
    
    setMediaTurniData(mediaTurni);

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
          <Classifica title="Ultimo Mese" data={foniciData.ultimoMese} showTrend={true} />
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

        {/* Riquadro Media Turni al Mese */}
        <Grid>
          <div style={{ gridColumn: '1 / -1' }}>
            <MediaTurniCard data={mediaTurniData} />
          </div>
        </Grid>

        
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
      </Content>
    </Container>
  );
};

export default StatisticheFonici;
