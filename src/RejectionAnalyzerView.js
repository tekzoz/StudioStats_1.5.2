import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// Importo Recharts per i grafici
import { 
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, Legend, ResponsiveContainer 
} from 'recharts';
// Importo icone
import { 
  FaProjectDiagram, FaExclamationTriangle, 
  FaExclamationCircle, FaChartLine, 
  FaArrowUp, FaArrowDown, FaInfoCircle 
} from 'react-icons/fa';

// Dati di esempio (in produzione verrebbero caricati da un file JSON)
const sampleData = {
  "qc_report_data": {
    "updated_on": "2025-03-31",
    "description": "Cumulative QC audio data - Jan-Mar 2025",
    "notes": "Tutti i dati si riferiscono a errori audio esclusivamente di progetti Deluxe; aggiornamento manuale."
  },
  "months": [
    {
      "year": 2025,
      "month": 1,
      "projects_analyzed": 10,
      "total_rejections": 40,
      "rejections_severity_3": 12,
      "top_error_types": [
        { "type": "Missing Dialogue", "occurrences": 10 },
        { "type": "Dialogue sync – long", "occurrences": 8 },
        { "type": "Extraneous efforts", "occurrences": 6 },
        { "type": "True peak out of spec", "occurrences": 3 },
        { "type": "Pop, tick, click", "occurrences": 3 }
      ],
      "top_projects_by_errors": [
        {
          "project_name": "Morphle and the Magic Pets",
          "episodes_counted": 2,
          "total_errors": 14,
          "severity_3_errors": 5
        },
        {
          "project_name": "EARTH ABIDES",
          "episodes_counted": 2,
          "total_errors": 10,
          "severity_3_errors": 4
        },
        {
          "project_name": "Reacher",
          "episodes_counted": 1,
          "total_errors": 5,
          "severity_3_errors": 2
        }
      ]
    },
    {
      "year": 2025,
      "month": 2,
      "projects_analyzed": 15,
      "total_rejections": 52,
      "rejections_severity_3": 14,
      "top_error_types": [
        { "type": "Missing Dialogue", "occurrences": 12 },
        { "type": "Dialogue sync – long", "occurrences": 9 },
        { "type": "Extraneous efforts", "occurrences": 7 },
        { "type": "Missing walla", "occurrences": 5 },
        { "type": "Pop, tick, click", "occurrences": 3 }
      ],
      "top_projects_by_errors": [
        {
          "project_name": "EARTH ABIDES",
          "episodes_counted": 2,
          "total_errors": 18,
          "severity_3_errors": 7
        },
        {
          "project_name": "Cometierra",
          "episodes_counted": 2,
          "total_errors": 12,
          "severity_3_errors": 4
        },
        {
          "project_name": "Reacher",
          "episodes_counted": 1,
          "total_errors": 5,
          "severity_3_errors": 3
        }
      ]
    },
    {
      "year": 2025,
      "month": 3,
      "projects_analyzed": 12,
      "total_rejections": 50,
      "rejections_severity_3": 15,
      "top_error_types": [
        { "type": "Missing Dialogue", "occurrences": 10 },
        { "type": "Dialogue sync – long", "occurrences": 8 },
        { "type": "True peak out of spec", "occurrences": 3 },
        { "type": "Extraneous efforts", "occurrences": 3 },
        { "type": "Pop, tick, click", "occurrences": 2 }
      ],
      "top_projects_by_errors": [
        {
          "project_name": "Another Simple Favor",
          "episodes_counted": 1,
          "total_errors": 8,
          "severity_3_errors": 2
        },
        {
          "project_name": "Primos",
          "episodes_counted": 2,
          "total_errors": 12,
          "severity_3_errors": 3
        }
      ]
    }
  ]
};

// Stili generali
const Container = styled.div`
  background-color: #f0f9ff;
  min-height: 100vh;
  padding: 24px;
  font-family: 'Helvetica Neue', Arial, sans-serif;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: #1f2937;
`;

const UpdateInfo = styled.div`
  margin-top: 8px;
  font-size: 14px;
  color: #6b7280;
`;

const BackButton = styled.button`
  background-color: #e0e7ff;
  color: #4b5563;
  border: none;
  border-radius: 8px;
  padding: 10px 16px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #c7d2fe;
  }
`;

const Section = styled.div`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 24px;
  margin-bottom: 24px;
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 16px;
`;

const Description = styled.p`
  font-size: 16px;
  color: #4b5563;
  margin-bottom: 20px;
`;

const KPIContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  margin-bottom: 20px;
`;

const KPIBox = styled.div`
  background-color: ${props => props.bgColor || '#eef2ff'};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const KPILabel = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #4b5563;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 6px;
`;

const KPIValue = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: #1f2937;
`;

const ComparisonSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  background-color: #f9fafb;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
`;

const ComparisonItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ComparisonLabel = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: #4b5563;
`;

const ComparisonValue = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${props => props.isPositive ? '#16a34a' : '#dc2626'};
  display: flex;
  align-items: center;
  gap: 4px;
`;

const ErrorListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #e5e7eb;
  
  &:last-child {
    border-bottom: none;
  }
`;

const ErrorType = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  color: #4b5563;
`;

const ErrorCount = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #1f2937;
`;

const TwoColumnGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 24px;
  margin-bottom: 20px;
`;

const ChartContainer = styled.div`
  height: 300px;
  margin-bottom: 20px;
`;

const Footer = styled.div`
  font-size: 14px;
  color: #6b7280;
  text-align: center;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #e5e7eb;
`;

// Componente principale
const RejectionAnalyzerView = ({ setView }) => {
  const [reportData, setReportData] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(null);
  const [previousMonth, setPreviousMonth] = useState(null);
  const [chartData, setChartData] = useState([]);
  const [annualSummary, setAnnualSummary] = useState(null);

  // Caricamento e elaborazione dei dati
  useEffect(() => {
    // Inizia con i dati di esempio come fallback sicuro
    const loadData = (data) => {
      setReportData(data);
      
      if (data && data.months && data.months.length > 0) {
        // Ottieni i dati dell'ultimo mese
        const lastMonthIndex = data.months.length - 1;
        const current = data.months[lastMonthIndex];
        setCurrentMonth(current);
        
        // Ottieni i dati del mese precedente se disponibile
        if (lastMonthIndex > 0) {
          setPreviousMonth(data.months[lastMonthIndex - 1]);
        }
        
        // Prepara i dati per il grafico
        const chartDataArray = data.months.map(month => {
          const errorsPerProject = Math.round(month.total_rejections / month.projects_analyzed);
          const severity3PerProject = +(month.rejections_severity_3 / month.projects_analyzed).toFixed(2);
          const severity3Percentage = +((month.rejections_severity_3 / month.total_rejections) * 100).toFixed(1);
          const qualityIndex = +(10 - (severity3PerProject * 2)).toFixed(1);
          
          return {
            name: `${month.month}/${month.year}`,
            projects: month.projects_analyzed,
            errors: month.total_rejections,
            severity3: month.rejections_severity_3,
            errorsPerProject,
            severity3PerProject,
            severity3Percentage,
            qualityIndex: qualityIndex < 0 ? 0 : qualityIndex > 10 ? 10 : qualityIndex
          };
        });
        setChartData(chartDataArray);
        
        // Calcola il riepilogo annuale
        const summary = {
          totalProjects: data.months.reduce((acc, month) => acc + month.projects_analyzed, 0),
          totalErrors: data.months.reduce((acc, month) => acc + month.total_rejections, 0),
          totalSeverity3: data.months.reduce((acc, month) => acc + month.rejections_severity_3, 0),
          // Aggregazione degli errori per tipo
          errorTypes: aggregateErrorTypes(data.months)
        };
        setAnnualSummary(summary);
      }
    };

    // Prova a caricare i dati dal file JSON, ma usa sampleData come fallback
    try {
      // Usa direttamente i dati di esempio senza tentare il fetch
      loadData(sampleData);
      
      /* Per abilitare il caricamento da file esterno in futuro, decommentare questo blocco
      fetch('/data/qc_report_data.json')
        .then(response => {
          if (!response.ok) {
            throw new Error('File non trovato');
          }
          return response.json();
        })
        .then(data => {
          loadData(data);
        })
        .catch(error => {
          console.warn('Utilizzo dati di esempio:', error.message);
          loadData(sampleData);
        });
      */
    } catch (error) {
      console.error('Errore nel processamento dei dati:', error);
      loadData(sampleData);
    }
  }, []);

  // Funzione per aggregare i tipi di errore
  const aggregateErrorTypes = (months) => {
    const errorTypesMap = {};
    
    months.forEach(month => {
      month.top_error_types.forEach(error => {
        if (errorTypesMap[error.type]) {
          errorTypesMap[error.type] += error.occurrences;
        } else {
          errorTypesMap[error.type] = error.occurrences;
        }
      });
    });
    
    // Converti in array e ordina
    return Object.entries(errorTypesMap)
      .map(([type, occurrences]) => ({ type, occurrences }))
      .sort((a, b) => b.occurrences - a.occurrences)
      .slice(0, 5); // Prendi solo i primi 5
  };

  // Funzione per ottenere il nome del mese in italiano
  const getMonthName = (monthNumber) => {
    const monthNames = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 
                        'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
    return monthNames[monthNumber - 1];
  };

  // Calcola la differenza percentuale
  const calculatePercentageDifference = (current, previous) => {
    if (!previous) return 0;
    return Math.round(((current - previous) / previous) * 100);
  };

  const handleBack = () => {
    setView('main');
  };

  if (!currentMonth) {
    return (
      <Container>
        <Content>
          <Header>
            <Title>Analizzatore di Rejection</Title>
            <BackButton onClick={handleBack}>
              ← Torna alla dashboard
            </BackButton>
          </Header>
          <Section>
            <SectionTitle>Caricamento dati in corso...</SectionTitle>
          </Section>
        </Content>
      </Container>
    );
  }

  const errorsPerProject = Math.round(currentMonth.total_rejections / currentMonth.projects_analyzed);
  
  // Calcola differenze col mese precedente
  const projectsDiff = previousMonth ? currentMonth.projects_analyzed - previousMonth.projects_analyzed : 0;
  const errorsDiff = previousMonth ? currentMonth.total_rejections - previousMonth.total_rejections : 0;
  const severity3Diff = previousMonth ? currentMonth.rejections_severity_3 - previousMonth.rejections_severity_3 : 0;

  // Calcola differenze percentuali
  const projectsDiffPercent = calculatePercentageDifference(currentMonth.projects_analyzed, previousMonth?.projects_analyzed);
  const errorsDiffPercent = calculatePercentageDifference(currentMonth.total_rejections, previousMonth?.total_rejections);
  const severity3DiffPercent = calculatePercentageDifference(currentMonth.rejections_severity_3, previousMonth?.rejections_severity_3);

  return (
    <Container>
      <Content>
        <Header>
          <div>
            <Title>Report Mensile QC Audio – {getMonthName(currentMonth.month)} {currentMonth.year}</Title>
            <UpdateInfo>
              Aggiornato al {reportData.qc_report_data.updated_on}
            </UpdateInfo>
            <Description>
              {reportData.qc_report_data.notes}
            </Description>
          </div>
          <BackButton onClick={handleBack}>
            ← Torna alla dashboard
          </BackButton>
        </Header>

        {/* KPI Section */}
        <Section>
          <SectionTitle>Informazioni Principali</SectionTitle>
          <KPIContainer>
            <KPIBox bgColor="#dbeafe">
              <KPILabel><FaProjectDiagram /> Progetti Analizzati</KPILabel>
              <KPIValue>{currentMonth.projects_analyzed}</KPIValue>
            </KPIBox>
            <KPIBox bgColor="#dcfce7">
              <KPILabel><FaExclamationTriangle /> Errori Totali</KPILabel>
              <KPIValue>{currentMonth.total_rejections}</KPIValue>
            </KPIBox>
            <KPIBox bgColor="#fee2e2">
              <KPILabel><FaExclamationCircle /> Errori Gravità 3</KPILabel>
              <KPIValue>{currentMonth.rejections_severity_3}</KPIValue>
            </KPIBox>
            <KPIBox bgColor="#f3e8ff">
              <KPILabel><FaChartLine /> Errori/Progetto</KPILabel>
              <KPIValue>{errorsPerProject}</KPIValue>
            </KPIBox>
          </KPIContainer>
          
          {/* Comparison with Previous Month */}
          {previousMonth && (
            <>
              <SectionTitle>Confronto con {getMonthName(previousMonth.month)}</SectionTitle>
              <ComparisonSection>
                <ComparisonItem>
                  <ComparisonLabel>Progetti:</ComparisonLabel>
                  <ComparisonValue isPositive={projectsDiff >= 0}>
                    {projectsDiff >= 0 ? <FaArrowUp /> : <FaArrowDown />}
                    {projectsDiff >= 0 ? '+' : ''}{projectsDiff} ({projectsDiffPercent}%)
                  </ComparisonValue>
                </ComparisonItem>
                <ComparisonItem>
                  <ComparisonLabel>Errori Totali:</ComparisonLabel>
                  <ComparisonValue isPositive={errorsDiff < 0}>
                    {errorsDiff >= 0 ? <FaArrowUp /> : <FaArrowDown />}
                    {errorsDiff >= 0 ? '+' : ''}{errorsDiff} ({errorsDiffPercent}%)
                  </ComparisonValue>
                </ComparisonItem>
                <ComparisonItem>
                  <ComparisonLabel>Errori Gravità 3:</ComparisonLabel>
                  <ComparisonValue isPositive={severity3Diff < 0}>
                    {severity3Diff >= 0 ? <FaArrowUp /> : <FaArrowDown />}
                    {severity3Diff >= 0 ? '+' : ''}{severity3Diff} ({severity3DiffPercent}%)
                  </ComparisonValue>
                </ComparisonItem>
              </ComparisonSection>
            </>
          )}
        </Section>

        {/* Nuovo grafico per il coefficiente di qualità */}
        <Section>
          <SectionTitle>Indice di Qualità Audio</SectionTitle>
          <Description>
            Questo grafico rappresenta indici qualitativi slegati dal volume di progetti. I valori mostrano: errori di severità 3 per progetto, 
            percentuale di errori gravi sul totale, e indice di qualità (scala 0-10, dove 10 è la massima qualità).
          </Description>
          <ChartContainer>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis yAxisId="left" orientation="left" />
                <YAxis yAxisId="right" orientation="right" domain={[0, 10]} />
                <Tooltip formatter={(value, name) => {
                  if (name === "qualityIndex") return [value + "/10", "Indice Qualità"];
                  if (name === "severity3PerProject") return [value, "Errori Sev.3/Progetto"];
                  if (name === "severity3Percentage") return [value + "%", "% Errori Sev.3"];
                  return [value, name];
                }} />
                <Legend />
                <Bar 
                  yAxisId="right"
                  dataKey="qualityIndex" 
                  name="Indice Qualità" 
                  fill="#22c55e"
                  barSize={35}
                />
                <Bar 
                  yAxisId="left"
                  dataKey="severity3Percentage" 
                  name="% Errori Sev.3" 
                  fill="#f97316"
                  barSize={15}
                />
                <Bar 
                  yAxisId="left"
                  dataKey="severity3PerProject" 
                  name="Errori Sev.3/Progetto" 
                  fill="#ef4444"
                  barSize={15}
                />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </Section>

        {/* Trend Chart */}
        <Section>
          <SectionTitle>Andamento Mensile</SectionTitle>
          <ChartContainer>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={chartData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="projects" 
                  stroke="#3b82f6" 
                  name="Progetti"
                  strokeWidth={2}
                />
                <Line 
                  type="monotone" 
                  dataKey="errors" 
                  stroke="#22c55e" 
                  name="Errori Totali"
                  strokeWidth={2}
                />
                <Line 
                  type="monotone" 
                  dataKey="severity3" 
                  stroke="#ef4444" 
                  name="Errori Gravità 3"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </Section>

        {/* Error Types and Projects */}
        <TwoColumnGrid>
          {/* Top Error Types */}
          <Section>
            <SectionTitle>Top 5 Errori Audio ({getMonthName(currentMonth.month)} {currentMonth.year})</SectionTitle>
            {currentMonth.top_error_types.map((error, index) => (
              <ErrorListItem key={`error-${index}`}>
                <ErrorType>
                  {index + 1}. {error.type}
                </ErrorType>
                <ErrorCount>{error.occurrences}</ErrorCount>
              </ErrorListItem>
            ))}
          </Section>

          {/* Progetti con più errori (sostituisce "Errori Gravità 3 più Comuni") */}
          <Section>
            <SectionTitle>Progetti con più errori ({getMonthName(currentMonth.month)} {currentMonth.year})</SectionTitle>
            {currentMonth.top_projects_by_errors.map((project, index) => (
              <ErrorListItem key={`project-${index}`}>
                <ErrorType>
                  {index + 1}. {project.project_name} ({project.episodes_counted} {project.episodes_counted === 1 ? 'episodio' : 'episodi'})
                </ErrorType>
                <ErrorCount>{project.total_errors} <span style={{ fontSize: '14px', color: '#dc2626' }}>({project.severity_3_errors} grav. 3)</span></ErrorCount>
              </ErrorListItem>
            ))}
          </Section>
        </TwoColumnGrid>

        {/* Projects with Most Errors - Detailed Bar Chart */}
        <Section>
          <SectionTitle>Analisi Dettagliata Progetti ({getMonthName(currentMonth.month)} {currentMonth.year})</SectionTitle>
          <ChartContainer>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={currentMonth.top_projects_by_errors}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis 
                  type="category" 
                  dataKey="project_name" 
                  tick={{ fontSize: 14 }}
                />
                <Tooltip />
                <Legend />
                <Bar 
                  dataKey="total_errors" 
                  name="Errori Totali" 
                  fill="#3b82f6" 
                />
                <Bar 
                  dataKey="severity_3_errors" 
                  name="Errori Gravità 3" 
                  fill="#ef4444" 
                />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </Section>

        {/* Annual Summary */}
        {annualSummary && (
          <Section>
            <SectionTitle>Riassunto Annuale ({currentMonth.year})</SectionTitle>
            <TwoColumnGrid>
              <div>
                <KPIContainer>
                  <KPIBox bgColor="#f3f4f6">
                    <KPILabel>Progetti Totali {currentMonth.year}</KPILabel>
                    <KPIValue>{annualSummary.totalProjects}</KPIValue>
                  </KPIBox>
                  <KPIBox bgColor="#f3f4f6">
                    <KPILabel>Errori Totali {currentMonth.year}</KPILabel>
                    <KPIValue>{annualSummary.totalErrors}</KPIValue>
                  </KPIBox>
                  <KPIBox bgColor="#f3f4f6">
                    <KPILabel>Errori Gravità 3 {currentMonth.year}</KPILabel>
                    <KPIValue>{annualSummary.totalSeverity3}</KPIValue>
                  </KPIBox>
                </KPIContainer>
              </div>
              <div>
                <SectionTitle>Top 5 Errori (Anno {currentMonth.year})</SectionTitle>
                {annualSummary.errorTypes.map((error, index) => (
                  <ErrorListItem key={`annual-error-${index}`}>
                    <ErrorType>
                      {index + 1}. {error.type}
                    </ErrorType>
                    <ErrorCount>{error.occurrences}</ErrorCount>
                  </ErrorListItem>
                ))}
          </div>
            </TwoColumnGrid>
          </Section>
        )}

        {/* Footer */}
        <Footer>
          <p>Fonte dati: QC report estratti Sferastudios (solo audio). Aggiornato manualmente ogni fine mese.</p>
          <p>Nessun errore video incluso.</p>
          <p>© StudioStats 2025 Marco Augusto Comba | Versione 1.6.1</p>
        </Footer>

      </Content>
    </Container>
  );
};

export default RejectionAnalyzerView; 