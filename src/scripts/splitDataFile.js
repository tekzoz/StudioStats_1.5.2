const fs = require('fs');
const path = require('path');

// Percorsi dei file
const dataFilePath = path.resolve(__dirname, '../data.js');
const outputDir = path.resolve(__dirname, '../data');

// Assicurati che la directory di output esista
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Leggi il file data.js
const dataFileContent = fs.readFileSync(dataFilePath, 'utf8');

// Estrai i dati principali (questo è un esempio, dovrai adattarlo al formato specifico del tuo file)
const foniciDataMatch = dataFileContent.match(/export const foniciData = \[([\s\S]*?)\];/);
if (!foniciDataMatch) {
  console.error('Non è stato possibile trovare foniciData nel file');
  process.exit(1);
}

// Funzione per raggruppare i dati per anno
function groupDataByYear(data) {
  const yearData = {};
  
  data.forEach(item => {
    if (!item.data) return;
    
    const year = item.data.substring(0, 4);
    if (!yearData[year]) {
      yearData[year] = [];
    }
    
    yearData[year].push(item);
  });
  
  return yearData;
}

// Funzione per raggruppare i dati per mese all'interno di un anno
function groupDataByMonth(yearData) {
  const monthData = {};
  
  yearData.forEach(item => {
    if (!item.data) return;
    
    const month = item.data.substring(5, 7);
    if (!monthData[month]) {
      monthData[month] = [];
    }
    
    monthData[month].push(item);
  });
  
  return monthData;
}

// Converti la stringa in un array di oggetti (soluzione semplificata)
// Nota: In un caso reale, dovresti utilizzare una soluzione più robusta
let dataString = foniciDataMatch[1];
// Rimuovi commenti e altre parti problematiche
dataString = dataString.replace(/\/\/.*/g, ''); 

// Eval è pericoloso, ma per questo script di utility isolato è accettabile
// In un ambiente di produzione, utilizza JSON.parse() o librerie dedicate
const rawData = eval(`[${dataString}]`);

// Raggruppa i dati per anno
const dataByYear = groupDataByYear(rawData);

// Per ogni anno, crea un file year[YYYY].js
Object.keys(dataByYear).forEach(year => {
  const yearDataArray = dataByYear[year];
  
  // Crea il file per l'anno
  const yearFilePath = path.join(outputDir, `year${year}.js`);
  const yearFileContent = `// Dati per l'anno ${year} - generato automaticamente
const yearData = ${JSON.stringify(yearDataArray, null, 2)};

export default yearData;
`;
  
  fs.writeFileSync(yearFilePath, yearFileContent);
  console.log(`Creato file: ${yearFilePath}`);
  
  // Raggruppa i dati per mese
  const dataByMonth = groupDataByMonth(yearDataArray);
  
  // Per ogni mese, crea un file month[YYYY]-[MM].js
  Object.keys(dataByMonth).forEach(month => {
    const monthDataArray = dataByMonth[month];
    
    const monthFilePath = path.join(outputDir, `month${year}-${month}.js`);
    const monthFileContent = `// Dati per il mese ${month}/${year} - generato automaticamente
const monthData = ${JSON.stringify(monthDataArray, null, 2)};

export default monthData;
`;
    
    fs.writeFileSync(monthFilePath, monthFileContent);
    console.log(`Creato file: ${monthFilePath}`);
  });
});

// Crea file di configurazione con gli anni disponibili
const availableYears = Object.keys(dataByYear).sort((a, b) => b - a).map(year => ({
  value: year,
  label: year
}));

const configFilePath = path.join(outputDir, 'dataConfig.js');
const configFileContent = `// Configurazione dati - generato automaticamente
export const availableYears = ${JSON.stringify(availableYears, null, 2)};

// Altre configurazioni...
export const dataVersion = '1.0.0';
`;

fs.writeFileSync(configFilePath, configFileContent);
console.log(`Creato file di configurazione: ${configFilePath}`);

console.log('Suddivisione dei dati completata con successo!'); 