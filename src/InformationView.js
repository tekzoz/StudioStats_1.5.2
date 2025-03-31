import React from 'react';
import { ArrowLeft, Info } from 'lucide-react';
import styled from 'styled-components';

const InfoItem = styled.div`
  display: flex;
  margin-bottom: 16px;
  align-items: center;
`;

const InfoLabel = styled.span`
  font-weight: bold;
  margin-right: 8px;
  color: #4B5563;
`;

const InfoValue = styled.span`
  color: #1F2937;
`;

const InformationView = ({ setView }) => {
  return (
    <div style={{
      backgroundColor: '#F0F9FF',
      minHeight: '100vh',
      padding: '24px',
      fontFamily: "'Helvetica Neue', Arial, sans-serif",
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <button 
          onClick={() => setView('main')} 
          style={{
            background: '#4B5563',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            padding: '10px 20px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            fontSize: '16px',
            marginBottom: '24px',
            transition: 'background-color 0.3s',
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#374151'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#4B5563'}
        >
          <ArrowLeft size={20} style={{ marginRight: '8px' }} />
          Torna alla Dashboard
        </button>
        
        <h1 style={{
          fontSize: '32px',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '32px',
          color: '#1F2937',
        }}>
          Informazioni
        </h1>

        <div style={{
          backgroundColor: 'white',
          padding: '24px',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}>
          <h2 style={{
            fontSize: '24px',
            fontWeight: 'bold',
            marginBottom: '16px',
            color: '#374151',
          }}>
            Informazioni sull'Applicazione
          </h2>
          <p style={{
            fontSize: '16px',
            lineHeight: '1.5',
            color: '#4B5563',
            marginBottom: '16px',
          }}>
            Questa applicazione è stata sviluppata per fornire statistiche e analisi dei turni per lo Studio Pumaisdue.
          </p>
          <InfoItem>
            <InfoLabel>Versione:</InfoLabel>
            <InfoValue>1.6.0</InfoValue>
          </InfoItem>
          <p style={{
            fontSize: '16px',
            lineHeight: '1.5',
            color: '#4B5563',
            marginBottom: '16px',
          }}>
            Sviluppato e creato da Marco Augusto Comba.
          </p>
          <p style={{
            fontSize: '16px',
            lineHeight: '1.5',
            color: '#4B5563',
            marginBottom: '16px',
          }}>
            Email: marco.comba.mc@gmail.com
          </p>
          <p style={{
            fontSize: '16px',
            lineHeight: '1.5',
            color: '#4B5563',
            marginBottom: '16px',
          }}>
            Supporto: Per domande, suggerimenti o supporto tecnico, contatta l'indirizzo email sopra riportato.
          </p>
          <p style={{
            fontSize: '16px',
            lineHeight: '1.5',
            color: '#4B5563',
            marginBottom: '16px',
          }}>
            Legal Information: Questo tool è proprietà intellettuale di Marco Augusto Comba. Tutti i diritti sono riservati. Il software è concesso in licenza d'uso a Pumaisdue s.r.l. esclusivamente per il periodo in cui il developer è in servizio presso la società.
          </p>
        </div>

        <div style={{
          backgroundColor: 'white',
          padding: '24px',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          marginTop: '24px',
        }}>
          <h2 style={{
            fontSize: '24px',
            fontWeight: 'bold',
            marginBottom: '16px',
            color: '#374151',
          }}>
            Come Utilizzare l'Applicazione
          </h2>
          <ul style={{
            fontSize: '16px',
            lineHeight: '1.5',
            color: '#4B5563',
            paddingLeft: '20px',
          }}>
            <li style={{ marginBottom: '8px' }}>Ultimo Mese: Visualizza le statistiche del mese più recente.</li>
            <li style={{ marginBottom: '8px' }}>Ultimo Anno: Mostra un riepilogo dell'ultimo anno di attività.</li>
            <li style={{ marginBottom: '8px' }}>Confronta Mesi: Permette di confrontare le statistiche di due mesi diversi.</li>
            <li style={{ marginBottom: '8px' }}>Confronta Anni: Offre un confronto tra due anni selezionati.</li>
            <li style={{ marginBottom: '8px' }}>Statistiche Fonici: Fornisce una panoramica dettagliata delle prestazioni dei fonici.</li>
            <li style={{ marginBottom: '8px' }}>Performance Trend: Analizza e visualizza i trend di performance nel tempo.</li>
            <li style={{ marginBottom: '8px' }}>Inserisci Dati: Consente l'inserimento di nuovi dati nel sistema.</li>
          </ul>
        </div>

        <div style={{
          backgroundColor: 'white',
          padding: '24px',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          marginTop: '24px',
        }}>
          <h2 style={{
            fontSize: '24px',
            fontWeight: 'bold',
            marginBottom: '16px',
            color: '#374151',
          }}>
            Dettagli sulle Funzionalità
          </h2>
          
          <h3 style={{
            fontSize: '20px',
            fontWeight: 'bold',
            marginTop: '16px',
            marginBottom: '12px',
            color: '#374151',
          }}>
            Statistiche Fonici
          </h3>
          <p style={{
            fontSize: '16px',
            lineHeight: '1.5',
            color: '#4B5563',
            marginBottom: '16px',
          }}>
            Questa sezione offre una visione dettagliata delle prestazioni dei fonici:
          </p>
          <ul style={{
            fontSize: '16px',
            lineHeight: '1.5',
            color: '#4B5563',
            paddingLeft: '20px',
            marginBottom: '16px',
          }}>
            <li>Classifiche di utilizzo per l'ultimo mese, quadrimestre e anno</li>
            <li>Grafici comparativi per visualizzare le prestazioni</li>
            <li>Suggerimenti per il bilanciamento dei turni tra i fonici</li>
          </ul>

          <h3 style={{
            fontSize: '20px',
            fontWeight: 'bold',
            marginTop: '16px',
            marginBottom: '12px',
            color: '#374151',
          }}>
            Performance Trend
          </h3>
          <p style={{
            fontSize: '16px',
            lineHeight: '1.5',
            color: '#4B5563',
            marginBottom: '16px',
          }}>
            Questa funzionalità analizza e visualizza i trend di performance nel tempo:
          </p>
          <ul style={{
            fontSize: '16px',
            lineHeight: '1.5',
            color: '#4B5563',
            paddingLeft: '20px',
          }}>
            <li>Grafico del trend annuale con confronto tra gli anni</li>
            <li>Analisi dettagliata dell'anno in corso</li>
            <li>Previsioni per i mesi futuri basate sui dati storici</li>
            <li>Possibilità di condividere i risultati dell'analisi</li>
          </ul>
        </div>
        
        {/* Footer */}
        <div style={{
          textAlign: 'center',
          marginTop: '30px',
          paddingTop: '20px',
          borderTop: '1px solid #e5e7eb',
          fontSize: '14px',
          color: '#6b7280',
        }}>
          <p>© StudioStats 2025 Marco Augusto Comba | Versione 1.6.0</p>
        </div>
      </div>
    </div>
  );
};

export default InformationView;