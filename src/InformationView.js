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
            StudioStats è una piattaforma avanzata di analisi e gestione delle statistiche per lo Studio Pumaisdue, sviluppata per ottimizzare la gestione dei turni e fornire insight dettagliati sulle performance operative.
          </p>
          <InfoItem>
            <InfoLabel>Versione:</InfoLabel>
            <InfoValue>1.6.1</InfoValue>
          </InfoItem>
          <InfoItem>
            <InfoLabel>Ultima Modifica:</InfoLabel>
            <InfoValue>Gennaio 2025</InfoValue>
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
            <li style={{ marginBottom: '8px' }}><strong>Ultimo Mese:</strong> Visualizza le statistiche del mese più recente con indicatori di trend.</li>
            <li style={{ marginBottom: '8px' }}><strong>Ultimo Anno:</strong> Mostra un riepilogo dell'ultimo anno di attività con grafici comparativi.</li>
            <li style={{ marginBottom: '8px' }}><strong>Confronta Mesi:</strong> Permette di confrontare le statistiche di due mesi diversi con analisi dettagliate.</li>
            <li style={{ marginBottom: '8px' }}><strong>Confronta Anni:</strong> Offre un confronto tra due anni selezionati con metriche avanzate.</li>
            <li style={{ marginBottom: '8px' }}><strong>Statistiche Fonici:</strong> Fornisce una panoramica dettagliata delle prestazioni dei fonici con trend mensili.</li>
            <li style={{ marginBottom: '8px' }}><strong>Statistiche Direttori:</strong> Analisi specifica per le performance dei direttori di doppiaggio.</li>
            <li style={{ marginBottom: '8px' }}><strong>Statistiche Assistenti:</strong> Monitoraggio dedicato alle prestazioni degli assistenti alla regia.</li>
            <li style={{ marginBottom: '8px' }}><strong>Performance Trend:</strong> Analizza e visualizza i trend di performance nel tempo con report AI.</li>
            <li style={{ marginBottom: '8px' }}><strong>Analisi Rifiuti:</strong> Strumento per analizzare e comprendere i pattern dei rifiuti di registrazione.</li>
            <li style={{ marginBottom: '8px' }}><strong>Inserisci Dati:</strong> Consente l'inserimento di nuovi dati nel sistema con validazione automatica.</li>
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
            Funzionalità Avanzate (v1.6.1)
          </h2>
          
          <h3 style={{
            fontSize: '20px',
            fontWeight: 'bold',
            marginTop: '16px',
            marginBottom: '12px',
            color: '#374151',
          }}>
            🔥 Indicatori di Trend in Tempo Reale
          </h3>
          <p style={{
            fontSize: '16px',
            lineHeight: '1.5',
            color: '#4B5563',
            marginBottom: '16px',
          }}>
            <strong>NOVITÀ:</strong> Tutte le pagine statistiche ora mostrano frecce di trend che indicano la variazione rispetto al mese precedente:
          </p>
          <ul style={{
            fontSize: '16px',
            lineHeight: '1.5',
            color: '#4B5563',
            paddingLeft: '20px',
            marginBottom: '16px',
          }}>
            <li><span style={{color: '#10B981'}}>🔺 Freccia Verde</span>: Aumento turni rispetto al mese precedente</li>
            <li><span style={{color: '#EF4444'}}>🔻 Freccia Rossa</span>: Diminuzione turni rispetto al mese precedente</li>
            <li>Nessuna freccia: Performance stabile (variazione minima)</li>
            <li>Disponibile per Fonici, Direttori e Assistenti</li>
          </ul>

          <h3 style={{
            fontSize: '20px',
            fontWeight: 'bold',
            marginTop: '16px',
            marginBottom: '12px',
            color: '#374151',
          }}>
            📊 Statistiche per Categoria Professionale
          </h3>
          
          <h4 style={{
            fontSize: '18px',
            fontWeight: '600',
            marginTop: '12px',
            marginBottom: '8px',
            color: '#4B5563',
          }}>
            Statistiche Fonici
          </h4>
          <ul style={{
            fontSize: '16px',
            lineHeight: '1.5',
            color: '#4B5563',
            paddingLeft: '20px',
            marginBottom: '12px',
          }}>
            <li>Classifiche ultimo mese, quadrimestre e anno con trend</li>
            <li>Distribuzione per sale di registrazione</li>
            <li>Grafici comparativi e suggerimenti di bilanciamento</li>
            <li>Analisi della frequenza di utilizzo per ottimizzare le assegnazioni</li>
          </ul>

          <h4 style={{
            fontSize: '18px',
            fontWeight: '600',
            marginTop: '12px',
            marginBottom: '8px',
            color: '#4B5563',
          }}>
            Statistiche Direttori
          </h4>
          <ul style={{
            fontSize: '16px',
            lineHeight: '1.5',
            color: '#4B5563',
            paddingLeft: '20px',
            marginBottom: '12px',
          }}>
            <li>Panoramica dedicata delle performance dei direttori di doppiaggio</li>
            <li>Classifiche mensili, quadrimestrali e annuali</li>
            <li>Indicatori di trend per monitorare variazioni mensili</li>
            <li>Analisi dei carichi di lavoro per equa distribuzione</li>
          </ul>

          <h4 style={{
            fontSize: '18px',
            fontWeight: '600',
            marginTop: '12px',
            marginBottom: '8px',
            color: '#4B5563',
          }}>
            Statistiche Assistenti
          </h4>
          <ul style={{
            fontSize: '16px',
            lineHeight: '1.5',
            color: '#4B5563',
            paddingLeft: '20px',
            marginBottom: '16px',
          }}>
            <li>Monitoraggio specifico per assistenti alla regia</li>
            <li>Dashboard dedicata con metriche personalizzate</li>
            <li>Trend analysis per ottimizzare le collaborazioni</li>
            <li>Supporto decisionale per la gestione del team</li>
          </ul>

          <h3 style={{
            fontSize: '20px',
            fontWeight: 'bold',
            marginTop: '16px',
            marginBottom: '12px',
            color: '#374151',
          }}>
            🤖 Report AI Potenziato
          </h3>
          <p style={{
            fontSize: '16px',
            lineHeight: '1.5',
            color: '#4B5563',
            marginBottom: '16px',
          }}>
            <strong>AGGIORNAMENTO:</strong> Il sistema di analisi AI è stato significativamente migliorato:
          </p>
          <ul style={{
            fontSize: '16px',
            lineHeight: '1.5',
            color: '#4B5563',
            paddingLeft: '20px',
            marginBottom: '16px',
          }}>
            <li>Utilizza esclusivamente dati storici reali (non più valori ipotetici)</li>
            <li>Analisi basata su medie storiche calcolate da anni precedenti</li>
            <li>Previsioni più accurate per i mesi futuri</li>
            <li>Confronti intelligenti con dati storici completi</li>
            <li>Report dettagliati con insight operativi pratici</li>
          </ul>

          <h3 style={{
            fontSize: '20px',
            fontWeight: 'bold',
            marginTop: '16px',
            marginBottom: '12px',
            color: '#374151',
          }}>
            📈 Analisi Comparative Avanzate
          </h3>
          <ul style={{
            fontSize: '16px',
            lineHeight: '1.5',
            color: '#4B5563',
            paddingLeft: '20px',
            marginBottom: '16px',
          }}>
            <li>Confronti mese-mese con differenze percentuali</li>
            <li>Confronti anno-anno con analisi evolutive</li>
            <li>Grafici interattivi per visualizzazioni dinamiche</li>
            <li>Esportazione dati per reporting esterno</li>
          </ul>

          <h3 style={{
            fontSize: '20px',
            fontWeight: 'bold',
            marginTop: '16px',
            marginBottom: '12px',
            color: '#374151',
          }}>
            ⚙️ Funzionalità di Sistema
          </h3>
          <ul style={{
            fontSize: '16px',
            lineHeight: '1.5',
            color: '#4B5563',
            paddingLeft: '20px',
          }}>
            <li>Interfaccia responsive ottimizzata per tutti i dispositivi</li>
            <li>Architettura modulare per facile manutenzione</li>
            <li>Sistema di validazione dati integrato</li>
            <li>Backup automatico delle configurazioni</li>
            <li>Performance ottimizzate per gestione dataset estesi</li>
          </ul>
        </div>

        <div style={{
          backgroundColor: '#F3F4F6',
          padding: '20px',
          borderRadius: '8px',
          marginTop: '24px',
          border: '1px solid #E5E7EB',
        }}>
          <h3 style={{
            fontSize: '18px',
            fontWeight: 'bold',
            marginBottom: '12px',
            color: '#374151',
            display: 'flex',
            alignItems: 'center',
          }}>
            <Info size={20} style={{ marginRight: '8px', color: '#3B82F6' }} />
            Note Tecniche
          </h3>
          <p style={{
            fontSize: '14px',
            lineHeight: '1.5',
            color: '#6B7280',
            marginBottom: '8px',
          }}>
            • Tecnologie: React, Styled Components, Recharts, Lucide Icons
          </p>
          <p style={{
            fontSize: '14px',
            lineHeight: '1.5',
            color: '#6B7280',
            marginBottom: '8px',
          }}>
            • Deploy: Vercel con database compatibile per performance ottimali
          </p>
          <p style={{
            fontSize: '14px',
            lineHeight: '1.5',
            color: '#6B7280',
          }}>
            • Aggiornamenti: Sistema di versionamento automatico per tracciabilità
          </p>
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
          <p>© StudioStats 2025 Marco Augusto Comba | Versione 1.6.1</p>
          <p style={{ marginTop: '8px', fontSize: '12px' }}>
            Ultimo aggiornamento: Gennaio 2025 - Funzionalità Trend Analysis implementata
          </p>
        </div>
      </div>
    </div>
  );
};

export default InformationView;