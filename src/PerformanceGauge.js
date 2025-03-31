import React, { useState, useEffect } from 'react';

const PerformanceGauge = ({ value, maxValue = 100 }) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  
  // Se maxValue è 100, assumiamo che value sia già una percentuale
  const isPercentage = maxValue === 100;
  
  // Calcoliamo la percentuale solo se value non è già una percentuale
  const percentage = isPercentage ? value : (value / maxValue) * 100;
  
  // Limitiamo la percentuale a un massimo di 100
  const limitedPercentage = Math.min(100, percentage);
  
  // L'angolo varia da -135 a 135 gradi (270 gradi totali)
  const angle = (limitedPercentage / 100) * 270 - 135; // -135 to 135 degrees

  useEffect(() => {
    const animationDuration = 2000; // 2 secondi
    const steps = 60; // 60 frame al secondo
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        current = value;
        clearInterval(timer);
        setIsAnimationComplete(true);
      }
      setCurrentValue(current);
    }, animationDuration / steps);

    return () => clearInterval(timer);
  }, [value]);

  const getColor = (percent) => {
    if (percent < 33) return '#ff4d4d'; // Rosso per valori bassi
    if (percent < 66) return '#ffa500'; // Arancione per valori medi
    return '#4CAF50'; // Verde per valori alti
  };

  const createTicks = () => {
    const ticks = [];
    const numTicks = 6; // 0%, 20%, 40%, 60%, 80%, 100%
    
    for (let i = 0; i < numTicks; i++) {
      const tickPercentage = (i / (numTicks - 1)) * 100;
      const tickAngle = -135 + (tickPercentage / 100) * 270;
      const x1 = 50 + 38 * Math.cos(tickAngle * Math.PI / 180);
      const y1 = 50 + 38 * Math.sin(tickAngle * Math.PI / 180);
      const x2 = 50 + 45 * Math.cos(tickAngle * Math.PI / 180);
      const y2 = 50 + 45 * Math.sin(tickAngle * Math.PI / 180);
      
      ticks.push(
        <g key={i}>
          <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#ffffff" strokeWidth="1.5" />
          <text 
            x={50 + 32 * Math.cos(tickAngle * Math.PI / 180)} 
            y={50 + 32 * Math.sin(tickAngle * Math.PI / 180)} 
            fontSize="6" 
            textAnchor="middle" 
            alignmentBaseline="middle"
            fill="#ffffff"
          >
            {tickPercentage}%
          </text>
        </g>
      );
    }
    return ticks;
  };

  // Utilizziamo un raggio significativamente più piccolo per l'arco colorato
  // per evitare che sfori dal cerchio esterno
  const outerRadius = 45; // Raggio del cerchio esterno
  const arcRadius = 37;   // Raggio dell'arco colorato (molto più piccolo)
  const strokeWidth = 8;  // Larghezza del bordo

  return (
    <div style={{ width: '200px', height: '200px', margin: '0 auto' }}>
      <svg viewBox="0 0 100 100">
        {/* Cerchio di sfondo */}
        <circle cx="50" cy="50" r="49" fill="#121212" />
        
        {/* Cerchio esterno (bordo) */}
        <circle cx="50" cy="50" r={outerRadius} fill="none" stroke="#555555" strokeWidth={strokeWidth} />
        
        {/* Usiamo un clip-path per assicurarci che l'arco non sfori */}
        <defs>
          <clipPath id="gaugeClip">
            <circle cx="50" cy="50" r={outerRadius - (strokeWidth/2)} />
          </clipPath>
        </defs>
        
        {/* Arco colorato basato sulla percentuale - utilizziamo un raggio più piccolo e clip-path */}
        <path
          d={`M50,50 L${50 + arcRadius * Math.cos(-135 * Math.PI / 180)},${50 + arcRadius * Math.sin(-135 * Math.PI / 180)} A${arcRadius},${arcRadius} 0 ${limitedPercentage > 50 ? 1 : 0},1 ${50 + arcRadius * Math.cos(angle * Math.PI / 180)},${50 + arcRadius * Math.sin(angle * Math.PI / 180)} Z`}
          fill={getColor(limitedPercentage)}
          clipPath="url(#gaugeClip)"
        />
        
        {/* Marcatori e etichette */}
        {createTicks()}
        
        {/* Ago indicatore */}
        <line
          x1="50"
          y1="50"
          x2={50 + 40 * Math.cos(angle * Math.PI / 180)}
          y2={50 + 40 * Math.sin(angle * Math.PI / 180)}
          stroke="#ffffff"
          strokeWidth="1.5"
          className={isAnimationComplete ? 'trembling' : ''}
        />
        
        {/* Cerchio centrale */}
        <circle cx="50" cy="50" r="3" fill="#ffffff" />
      </svg>
      <style jsx>{`
        @keyframes tremble {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(0.5deg); }
          50% { transform: rotate(0deg); }
          75% { transform: rotate(-0.5deg); }
          100% { transform: rotate(0deg); }
        }
        .trembling {
          animation: tremble 0.1s infinite;
          transform-origin: 50% 50%;
        }
      `}</style>
    </div>
  );
};

export default PerformanceGauge;