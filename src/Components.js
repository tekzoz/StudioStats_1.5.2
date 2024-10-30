// Components.js

import React from 'react';
import styled from 'styled-components';
import { ArrowLeft } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Styled Components
export const Container = styled.div`
  background-color: #F0F9FF;
  min-height: 100vh;
  padding: 16px;
  font-family: 'Helvetica Neue', Arial, sans-serif;

  @media (min-width: 768px) {
    padding: 24px;
  }
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 24px;
  color: #1F2937;

  @media (min-width: 768px) {
    font-size: 32px;
    margin-bottom: 32px;
  }
`;

export const BackButton = styled.button`
  background: #4B5563;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-bottom: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #374151;
  }

  @media (min-width: 768px) {
    padding: 10px 20px;
    font-size: 16px;
    margin-bottom: 24px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    margin-bottom: 32px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Card = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    padding: 20px;
  }
`;

export const CardTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #4B5563;
  margin-bottom: 12px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 20px;
    margin-bottom: 16px;
  }
`;

export const ClassificaList = styled.ol`
  list-style-position: inside;
  padding: 0;
`;

export const ClassificaItem = styled.li`
  font-size: 14px;
  margin-bottom: 6px;
  display: grid;
  grid-template-columns: 24px 1fr 70px;
  align-items: center;

  &:nth-child(1) { font-weight: bold; color: #FFA500; }
  &:nth-child(2) { font-weight: bold; color: #A9A9A9; }
  &:nth-child(3) { font-weight: bold; color: #CD7F32; }

  @media (min-width: 768px) {
    font-size: 16px;
    margin-bottom: 8px;
    grid-template-columns: 30px 1fr 80px;
  }
`;

export const TurniSpan = styled.span`
  text-align: right;
`;

export const HighlightBox = styled.div`
  background-color: rgba(0, 128, 0, 0.1); // Sfondo verde trasparente
  border: 2px solid rgba(0, 128, 0, 0.5); // Verde con trasparenza media
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 16px;
`;

// Componenti Funzionali

export const Classifica = ({ data = [], title, highlightTopN, isAnnual }) => (
  <Card>
    <CardTitle>{title}</CardTitle>
    {data.length > 0 ? (
      <>
        {highlightTopN ? (
          <>
            <HighlightBox>
              <ClassificaList>
                {data.slice(0, highlightTopN).map((item, index) => (
                  <ClassificaItem
                    key={item.nome}
                    rank={index + 1}
                    isAnnual={isAnnual}
                  >
                    <span>{index + 1}.</span>
                    <span>{item.nome}</span>
                    <TurniSpan>{item.turni} turni</TurniSpan>
                  </ClassificaItem>
                ))}
              </ClassificaList>
            </HighlightBox>
            <ClassificaList>
              {data.slice(highlightTopN).map((item, index) => (
                <ClassificaItem
                  key={item.nome}
                  rank={highlightTopN + index + 1}
                  isAnnual={isAnnual}
                >
                  <span>{highlightTopN + index + 1}.</span>
                  <span>{item.nome}</span>
                  <TurniSpan>{item.turni} turni</TurniSpan>
                </ClassificaItem>
              ))}
            </ClassificaList>
          </>
        ) : (
          <ClassificaList>
            {data.map((item, index) => (
              <ClassificaItem
                key={item.nome}
                rank={index + 1}
                isAnnual={isAnnual}
              >
                <span>{index + 1}.</span>
                <span>{item.nome}</span>
                <TurniSpan>{item.turni} turni</TurniSpan>
              </ClassificaItem>
            ))}
          </ClassificaList>
        )}
      </>
    ) : (
      <p>Nessun dato disponibile</p>
    )}
  </Card>
);

export const ChartRecharts = ({ data, title }) => (
  <Card style={{ height: '400px' }}>
    <CardTitle>{title}</CardTitle>
    <ResponsiveContainer width="100%" height="90%">
      <BarChart
        data={data}
        layout="vertical"
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis
          dataKey="nome"
          type="category"
          width={100}
          tick={{ fontSize: 10 }}
        />
        <Tooltip />
        <Bar dataKey="turni" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  </Card>
);

// Mantieni i componenti esistenti con Tailwind CSS

export const StatsCard = ({ title, value, comparison }) => (
  <div className="bg-white p-4 rounded-lg shadow">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-2xl font-bold">{value}</p>
    {comparison !== undefined && (
      <p className={`text-sm ${comparison >= 0 ? 'text-green-500' : 'text-red-500'}`}>
        {comparison >= 0 ? '▲' : '▼'} {Math.abs(comparison).toFixed(2)}%
      </p>
    )}
  </div>
);

export const Chart = ({ data }) => {
  // Il tuo componente Chart con react-chartjs-2
  // ... codice esistente ...
};
