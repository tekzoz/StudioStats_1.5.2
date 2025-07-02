import React from 'react';
import { ArrowLeft, AlertTriangle, Clock } from 'lucide-react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #F0F9FF;
  min-height: 100vh;
  padding: 24px;
  font-family: 'Helvetica Neue', Arial, sans-serif;
`;

const Content = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
`;

const BackButton = styled.button`
  background: #4B5563;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 16px;
  margin-bottom: 24px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #374151;
  }
`;

const MainCard = styled.div`
  background-color: white;
  padding: 48px 24px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 40px;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: #1F2937;
  margin-bottom: 16px;
`;

const Subtitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #6B7280;
  margin-bottom: 24px;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #4B5563;
  margin-bottom: 32px;
`;

const ComingSoonBadge = styled.div`
  display: inline-block;
  background: linear-gradient(45deg, #FEF3C7, #F59E0B);
  color: #92400E;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 16px;
  box-shadow: 0 2px 4px rgba(245, 158, 11, 0.2);
`;

const TemporarilyUnavailableView = ({ setView }) => {
  const handleBack = () => {
    setView('main');
  };

  return (
    <Container>
      <Content>
        <BackButton onClick={handleBack}>
          <ArrowLeft size={20} style={{ marginRight: '8px' }} />
          Torna alla Dashboard
        </BackButton>

        <MainCard>
          <IconContainer>
            <AlertTriangle size={64} color="#F59E0B" />
            <Clock size={64} color="#6B7280" />
          </IconContainer>

          <ComingSoonBadge>
            🚧 PROSSIMAMENTE
          </ComingSoonBadge>

          <Title>Funzione Temporaneamente Non Disponibile</Title>
          
          <Subtitle>Rejection Analyzer</Subtitle>
          
          <Description>
            Questa funzionalità è attualmente in fase di sviluppo e sarà disponibile in una versione futura di StudioStats.
            <br /><br />
            Il Rejection Analyzer permetterà di analizzare in dettaglio i motivi di rifiuto e identificare pattern 
            nelle performance dello studio, fornendo insights preziosi per il miglioramento continuo.
            <br /><br />
            Grazie per la pazienza! Nel frattempo, puoi esplorare tutte le altre funzionalità disponibili nella dashboard.
          </Description>

          <div style={{
            backgroundColor: '#F3F4F6',
            padding: '16px',
            borderRadius: '8px',
            marginTop: '24px',
          }}>
            <p style={{
              fontSize: '14px',
              color: '#6B7280',
              margin: 0,
            }}>
              <strong>Aggiornamento previsto:</strong> Versione 1.7.0<br />
              <strong>Sviluppatore:</strong> Marco Augusto Comba
            </p>
          </div>
        </MainCard>
      </Content>
    </Container>
  );
};

export default TemporarilyUnavailableView; 