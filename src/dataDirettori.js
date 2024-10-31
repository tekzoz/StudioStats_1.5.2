
export const direttoriData = [
  
    {
      "nome": "ANCIDONI ROSSELLA",
      "mese": "2024-01",
      "turni": 22
    },
    {
      "nome": "ANCIDONI ROSSELLA",
      "mese": "2024-02",
      "turni": 17
    },
    {
      "nome": "ANCIDONI ROSSELLA",
      "mese": "2024-03",
      "turni": 15
    },
    {
      "nome": "ANCIDONI ROSSELLA",
      "mese": "2024-04",
      "turni": 18
    },
    {
      "nome": "ANCIDONI ROSSELLA",
      "mese": "2024-05",
      "turni": 25
    },
    {
      "nome": "ANCIDONI ROSSELLA",
      "mese": "2024-06",
      "turni": 36
    },
    {
      "nome": "ANCIDONI ROSSELLA",
      "mese": "2024-07",
      "turni": 32
    },
    {
      "nome": "ANCIDONI ROSSELLA",
      "mese": "2024-08",
      "turni": 14
    },
    {
      "nome": "ANCIDONI ROSSELLA",
      "mese": "2024-09",
      "turni": 25
    },
    {
      "nome": "ANGRISANO ALBERTO",
      "mese": "2024-01",
      "turni": 0
    },
    {
      "nome": "ANGRISANO ALBERTO",
      "mese": "2024-02",
      "turni": 0
    },
    {
      "nome": "ANGRISANO ALBERTO",
      "mese": "2024-03",
      "turni": 0
    },
    {
      "nome": "ANGRISANO ALBERTO",
      "mese": "2024-04",
      "turni": 0
    },
    {
      "nome": "ANGRISANO ALBERTO",
      "mese": "2024-05",
      "turni": 1
    },
    {
      "nome": "ANGRISANO ALBERTO",
      "mese": "2024-06",
      "turni": 7
    },
    {
      "nome": "ANGRISANO ALBERTO",
      "mese": "2024-07",
      "turni": 0
    },
    {
      "nome": "ANGRISANO ALBERTO",
      "mese": "2024-08",
      "turni": 0
    },
    {
      "nome": "ANGRISANO ALBERTO",
      "mese": "2024-09",
      "turni": 0
    },
    {
      "nome": "BALDINI ANTONELLA",
      "mese": "2024-01",
      "turni": 0
    },
    {
      "nome": "BALDINI ANTONELLA",
      "mese": "2024-02",
      "turni": 0
    },
    {
      "nome": "BALDINI ANTONELLA",
      "mese": "2024-03",
      "turni": 0
    },
    {
      "nome": "BALDINI ANTONELLA",
      "mese": "2024-04",
      "turni": 2
    },
    {
      "nome": "BALDINI ANTONELLA",
      "mese": "2024-05",
      "turni": 0
    },
    {
      "nome": "BALDINI ANTONELLA",
      "mese": "2024-06",
      "turni": 0
    },
    {
      "nome": "BALDINI ANTONELLA",
      "mese": "2024-07",
      "turni": 0
    },
    {
      "nome": "BALDINI ANTONELLA",
      "mese": "2024-08",
      "turni": 0
    },
    {
      "nome": "BALDINI ANTONELLA",
      "mese": "2024-09",
      "turni": 0
    }
  
];

export const getDirettoriTurnCountsForPeriod = (period) => {
  // Implementazione analoga a quella per gli assistenti
  const today = new Date();

  let startDate;
  let endDate;

  if (period === 'mese') {
    // Ultimo mese completo
    const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
    const firstDayThisMonth = new Date(today.getFullYear(), today.getMonth(), 1);

    startDate = lastMonth;
    endDate = firstDayThisMonth;
  } else if (period === 'quadrimestre') {
    // Ultimi quattro mesi completi precedenti
    startDate = new Date(today.getFullYear(), today.getMonth() - 4, 1);
    endDate = new Date(today.getFullYear(), today.getMonth(), 1);
  } else if (period === 'anno') {
    // Dall'inizio dell'anno fino ad oggi
    startDate = new Date(today.getFullYear(), 0, 1);
    endDate = today;
  }

  // Filtra i dati nel range di date
  const filteredData = direttoriData.filter(({ mese }) => {
    const dataMese = new Date(mese + '-01');
    return dataMese >= startDate && dataMese < endDate;
  });

  // Somma i turni per ogni direttore
  const counts = {};
  filteredData.forEach(({ nome, turni }) => {
    counts[nome] = (counts[nome] || 0) + turni;
  });

  // Converti in array e ordina
  return Object.entries(counts)
    .map(([nome, turni]) => ({ nome, turni }))
    .sort((a, b) => b.turni - a.turni);
};
